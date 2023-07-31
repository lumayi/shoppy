import React, { useContext, useEffect, useRef, useState } from 'react';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { registerProduct, uploadImage } from '../api/product/products';

export default function Register() {
  const { userState } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (userState.user?.uid !== process.env.REACT_APP_MASTER_UID) {
      navigate('/');
    }
  }, [userState.user?.uid, navigate]);
  const [inputs, setInputs] = useState({});
  const { title, price, desc, gender, options, imageFile } = inputs;
  const fileRef = useRef(null);
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () =>
      setInputs((prev) => ({ ...prev, imageFile: reader.result }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      data.append('file', fileRef.current.files[0]);
      data.append(
        'upload_preset',
        process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET
      );
      data.append('cloud_name', process.env.REACT_APP_CLOUDINARY_CLOUD_NAME);
      data.append('folder', 'Cloudinary-React');
      const { secure_url } = await uploadImage(data);

      await registerProduct({
        title,
        price,
        desc,
        gender,
        options,
        imageUrl: secure_url,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className="flex flex-col items-center desktop:min-w-[1240px] desktop:max-w-[1240px] mt-10">
      <form className="flex flex-col gap-2 w-1/2" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="photo">사진등록</label>
          {imageFile && (
            <img
              id="preview"
              src={imageFile}
              alt="preview"
              className="w-44 mx-auto"
            />
          )}
          <input
            name="photo"
            type="file"
            placeholder="사진등록"
            className="border py-5 w-full indent-4 border-pink-300 rounded outline-none"
            onChange={(e) => handleImageUpload(e)}
            ref={fileRef}
          />
        </div>
        <div>
          <label htmlFor="title">제품명</label>
          <input
            name="title"
            placeholder="제품명"
            className="border py-5 w-full border-pink-300 rounded outline-none indent-4"
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, title: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="price">제품 가격</label>
          <input
            name="price"
            placeholder="제품 가격"
            className="border py-5 w-full border-pink-300 rounded outline-none indent-4"
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, price: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="gender">성별</label>
          <input
            name="gender"
            placeholder="성별"
            className="border py-5 w-full border-pink-300 rounded outline-none indent-4"
            onChange={(e) =>
              setInputs((prev) => ({ ...prev, gender: e.target.value }))
            }
          />
        </div>
        <div>
          <label htmlFor="desc">설명</label>
          <input
            name="desc"
            placeholder="설명"
            className="border py-5 w-full border-pink-300 rounded outline-none indent-4"
            onChange={(e) => {
              e.preventDefault();
              setInputs((prev) => ({ ...prev, desc: e.target.value }));
            }}
          />
        </div>
        <div>
          <label htmlFor="options">옵션</label>
          <input
            name="options"
            placeholder="사이즈 옵션(, 콤마로구분)"
            className="border py-5 w-full border-pink-300 rounded outline-none indent-4"
            onChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                options: e.target.value.split(','),
              }))
            }
          />
        </div>
        <button
          type="submit"
          className="bg-pink-500 text-white w-full h-16 font-bold text-lg rounded"
        >
          등록하기
        </button>
      </form>
    </section>
  );
}
