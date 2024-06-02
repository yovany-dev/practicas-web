import { firebaseApp } from "./config.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

auth.lenguageCode = "es";

export async function login() {
  try {
    const response = await signInWithPopup(auth, provider);
    return response.user;
  } catch(error) {
    throw new Error(error);
  }
}

export function logout() {
  auth.signOut();
}
