import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

export const getUserData = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}

export const addUserData = async (id, userData) => {
  return await setDoc(doc(db, "users", id), userData);
}

export const updateUserData = async (id, userData) => {
  const docRef = doc(db, "users", id);
  return await updateDoc(docRef, userData);
}