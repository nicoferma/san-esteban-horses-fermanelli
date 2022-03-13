import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { addUserData, getUserData } from "../services/UsersData";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signup = async (authData, userData) => {
    const res = await createUserWithEmailAndPassword(auth, authData.email, authData.password);
    await addUserData(res.user.uid, { email: authData.email, ...userData });
    return res
  };

  const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => signOut(auth);

  const resetPassword = async (email) => sendPasswordResetEmail(auth, email);

  const refreshUserData = async () => {
    const userData = await getUserData(user.uid);
    setUser({ uid: user.uid, email: user.email, ...userData });
  }

  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        const userData = await getUserData(currentUser.uid);
        setUser({ uid: currentUser.uid, email: currentUser.email, ...userData });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        logout,
        loading,
        resetPassword,
        refreshUserData
      }}
    >
      {children}
    </authContext.Provider>
  );
}
