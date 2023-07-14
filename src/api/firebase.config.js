// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyD_VIqlBxDK4_-o4dh-L10zDv5sDrEC9hI',
  authDomain: 'shoppy-df0fb.firebaseapp.com',
  databaseURL:
    'https://shoppy-df0fb-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'shoppy-df0fb',
  storageBucket: 'shoppy-df0fb.appspot.com',
  messagingSenderId: '981640092704',
  appId: '1:981640092704:web:c8ae9fa0b3d69bebd43045',
  measurementId: 'G-9QYC97X4FZ',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
