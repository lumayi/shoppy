import axios from 'axios';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { getDatabase, ref, set, get } from 'firebase/database';

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
  // window.open(
  //   'https://port-0-moa-spring-3prof2llkqnph83.sel4.cloudtype.app/oauth2/authorize/google'
  // );
  // fetch(
  //   'https://port-0-moa-spring-3prof2llkqnph83.sel4.cloudtype.app/oauth2/authorize/google',
  //   { method: 'GET', credentials: 'include', redirect: 'follow' }
  // ).catch((error) => console.log(error));
  // axios
  //   .post('https://port-0-moa-spring-3prof2llkqnph83.sel4.cloudtype.app', {
  //     withCredentials: true,
  //     headers: {
  //       Authorization:
  //         'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiI0IiwiaWF0IjoxNjkxMzI3OTM0LCJleHAiOjE2OTEzMzUxMzR9.dXRkMJCcaXWDDAPAEVUVCZmEEgiIQV8Zsv7LWKe7zWj4fT3R6cFTzGYkNKJlD-3YG1y-lW4BG5aLkrPvMoiS4g',
  //     },
  //   })
  //   .then((res) => console.log(res))
  //   .catch((error) => console.log(error));
  signInWithPopup(auth, provider).catch(console.error);
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
