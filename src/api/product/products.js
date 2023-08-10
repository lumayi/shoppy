import axios from 'axios';
import {
  getDatabase,
  ref,
  set,
  get,
  child,
  update,
  remove,
} from 'firebase/database';
import { v4 as uuidv4 } from 'uuid';
const db = getDatabase();

export const uploadImage = (file) => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET);
  data.append('cloud_name', process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
  data.append('folder', 'Cloudinary-React');
  return axios
    .post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      data
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
};

export const registerProduct = (product) => {
  const productId = uuidv4();
  set(ref(db, 'products/' + productId), {
    ...product,
  });
};

const dbRef = ref(db);
export const getProducts = (home) => {
  return get(child(dbRef, `products/`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const items = Object.keys(data).map((value) => ({
          id: value,
          ...data[value],
        }));
        if (home) return items.splice(items.length - 12);
        return items;
      } else {
        console.log('No data available');
      }
    })
    .catch((error) => {
      console.error(error);
    });
};

export function getCartProducts(uid) {
  return get(child(dbRef, `cart/${uid}`))
    .then((snapshot) => snapshot.val() || {})
    .catch((error) => {
      console.error(error);
    });
}

export function updateCartProduct({ uid, product }) {
  const updates = {};
  updates[`/cart/${uid}/${product.id}`] = product;
  return update(ref(db), updates);
}

export function deleteCartProduct({ uid, productId }) {
  remove(ref(db, `cart/${uid}/${productId}`));
}
