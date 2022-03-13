import { doc, getDoc, setDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";

export const getUserData = async (id) => {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);

  return docSnap.data();
}

export const addUserData = async (id, userData) => {
  await setDoc(doc(db, "users", id), userData);
  return true;
}

export const updateUserData = async (id, userData) => {
  const docRef = doc(db, "users", id);
  await docRef.update(userData);
}