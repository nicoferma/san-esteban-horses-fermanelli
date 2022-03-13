import { collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import products from "../assets/Products.json"

export const getAllProducts = async () => {
  const querySnapshot = await getDocs(collection(db, "products"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id, ...doc.data()
    });

  });
  return data;
}

export const getProductsByCategory = async (category) => {
  const q = query(collection(db, "products"), where("category", "==", category));

  const querySnapshot = await getDocs(q);

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id, ...doc.data()
    });

  });
  return data;
}

export const getProductById = async (id) => {
  const docRef = doc(db, "products", id);
  const docSnap = await getDoc(docRef);

  return { id: docSnap.id, ...docSnap.data() };
}

export const getAllCategories = async () => {
  const querySnapshot = await getDocs(collection(db, "categories"));

  const data = [];
  querySnapshot.forEach((doc) => {
    data.push({
      id: doc.id, ...doc.data()
    });

  });
  return data;
}

export const importFirestoreProducts = () => {
  products.map(product => addDoc(collection(db, "products"), product).then(docRef => console.log(docRef.id)));

}