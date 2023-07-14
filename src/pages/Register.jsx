import React from 'react';

export default function Register() {
  return (
    <section className="flex flex-col items-center desktop:min-w-[1240px] desktop:max-w-[1240px] mt-10">
      <form className="flex flex-col gap-4 items-center w-1/2">
        <input
          type="file"
          placeholder="사진등록"
          className="border py-5 w-full indent-4 border-pink-300 rounded outline-none"
        />
        <input
          placeholder="제품명"
          className="border py-5 w-full border-pink-300 rounded outline-none indent-4"
        />
        <input
          placeholder="제품 가격"
          className="border py-5 w-full border-pink-300 rounded outline-none indent-4"
        />
        <input
          placeholder="성별"
          className="border py-5 w-full border-pink-300 rounded outline-none indent-4"
        />
        <input
          placeholder="설명"
          className="border py-5 w-full border-pink-300 rounded outline-none indent-4"
        />
        <input
          placeholder="사이즈 옵션(, 콤마로구분)"
          className="border py-5 w-full border-pink-300 rounded outline-none indent-4"
        />
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
