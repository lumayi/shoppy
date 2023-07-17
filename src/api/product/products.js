import { Cloudinary } from '@cloudinary/url-gen';
import axios from 'axios';

export const uploadImage = (data, options) => {
  return axios
    .post(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
      data
    )
    .then((res) => res.data)
    .catch((error) => console.log(error));
};
