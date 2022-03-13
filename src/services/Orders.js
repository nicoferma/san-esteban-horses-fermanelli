import { collection, getDocs, doc, getDoc, query, where, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

export const getAllOrders = async () => {
    const querySnapshot = await getDocs(collection(db, "orders"));

    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({
            id: doc.id, ...doc.data()
        });
    });
    return data;
}

export const getOrdersByUserID = async (userID) => {
    const ref = doc(db, "orders");
    const q = query(collection(db, ref), where("uid", "==", {uid: userID}));

    db.collection("orders")

    const querySnapshot = await getDocs(q);
    console.log(querySnapshot)
}

export const addOrder = async (user, products, total) => {
    const minProducts = products.map(p => {
        return {
            id: p.id,
            title: p.title,
            price: p.price,
            quantity: p.quantity,
            category: p.category
        }
    });
    const order = {
        buyer: user,
        products: minProducts,
        date: serverTimestamp(),
        total
    }
    const docRef = await addDoc(collection(db, "orders"), order);
    return docRef.id;
}

