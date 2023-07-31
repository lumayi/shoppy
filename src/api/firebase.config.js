// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyD_VIqlBxDK4_-o4dh-L10zDv5sDrEC9hI',
  authDomain: 'shoppy-df0fb.firebaseapp.com',
  databaseURL:
    'https://shoppy-df0fb-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'shoppy-df0fb',
};

export const app = initializeApp(firebaseConfig);
