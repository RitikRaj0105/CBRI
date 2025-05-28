// src/auth/signup.js
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const signupWithEmail = async (email, password, name) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Optional: set display name
  await updateProfile(user, { displayName: name });

  // Check if user exists already (avoid overwriting manually promoted admin)
  const userDoc = await getDoc(doc(db, "users", user.uid));

  if (!userDoc.exists()) {
    // First-time login, save as "user" role
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      role: "user", // default role
    });
  }

  return user;
};
