import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, get } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
const auth = getAuth();
const database = getDatabase(app);

export const login = () => {
  window.open(
    'https://port-0-moa-spring-3prof2llkqnph83.sel4.cloudtype.app/oauth2/authorize/google'
  );

  // signInWithPopup(auth, provider).catch(console.error);
};

export const logout = () => {
  signOut(auth).catch(console.error);
};

export async function verifyAdmin(user) {
  return get(ref(database, `admins/`))
    .then((snapshot) => {
      const admins = snapshot.val();
      const isAdmin = admins.includes(user.uid);
      return { ...user, isAdmin };
    })
    .catch(console.error);
}

//callback으로 쉽게 관리하기
export function onUserStateChange(callback) {
  return onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await verifyAdmin(user) : null;
    callback(updatedUser);
  });
}
