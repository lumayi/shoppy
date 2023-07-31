import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { app } from '../firebase.config';
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const login = () => {
  signInWithPopup(auth, provider).catch(console.error);
};

export const logout = () => {
  signOut(auth).catch(console.error);
};

//callback으로 쉽게 관리하기
export function onUserStateChange(callback) {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
