import React, { useRef, useState } from 'react';
import { registerProduct, uploadImage } from '../api/product/products';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [loadingText, setLoadingText] = useState('');
  const { title, price, desc, gender, options, file, company } = inputs;
  const fileRef = useRef(null);
  const handleChange = (e) => {
    const { name, files, value } = e.target;
    if (name === 'file') {
      setInputs((prev) => ({ ...prev, file: files && files[0] }));
      return;
    }
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const queryClient = new useQueryClient();
  const addProduct = useMutation(
    ({ secure_url, product }) =>
      registerProduct({ ...product, imageUrl: secure_url }),
    { onSuccess: () => queryClient.invalidateQueries(['products']) }
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoadingText('등록중입니다😊');
    try {
      const { secure_url } = await uploadImage(file);
      await addProduct.mutate({
        secure_url,
        product: { title, price, desc, gender, options, company },
      });
    } catch (error) {
      console.log(error);
      setLoadingText('등록이 실패했습니다😿');
    } finally {
      setLoadingText('등록이 완료되었습니다🐯');
      setTimeout(() => setLoadingText(''), 4000);
    }
  };
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div>
          {file && (
            <img
              id="preview"
              src={URL.createObjectURL(file)}
              alt="preview"
              className="w-44 h-44 object-cover mx-auto border-4 border-gray-400"
            />
          )}
          <label htmlFor="file">사진등록</label>
          <input
            name="file"
            type="file"
            accept="image/*"
            placeholder="사진등록"
            onChange={handleChange}
            ref={fileRef}
            required
          />
        </div>
        <div>
          <label htmlFor="title">회사명</label>
          <input
            name="company"
            placeholder="회사명"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="title">제품명</label>
          <input
            name="title"
            placeholder="제품명"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">제품 가격</label>
          <input
            name="price"
            placeholder="제품 가격"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="gender">성별</label>
          <input
            name="gender"
            placeholder="성별"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="desc">설명</label>
          <input
            name="desc"
            placeholder="설명"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="options">옵션</label>
          <input
            name="options"
            placeholder="사이즈 옵션(, 콤마로구분)"
            onChange={(e) =>
              setInputs((prev) => ({
                ...prev,
                options: e.target.value.split(','),
              }))
            }
            required
          />
        </div>
        <p className="mb-2 text-center">{loadingText}</p>
        <button
          type="submit"
          className="bg-cyan-700 text-white w-full h-16 font-bold text-lg rounded"
        >
          등록하기
        </button>
      </form>
    </section>
  );
}
