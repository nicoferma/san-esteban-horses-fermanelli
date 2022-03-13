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
    const q = query(collection(db, "orders"), where("buyer.uid", "==", userID));

    const querySnapshot = await getDocs(q);
    const data = [];
    querySnapshot.forEach((doc) => {
        data.push({
            id: doc.id, ...doc.data()
        });
    });
    return data;
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

