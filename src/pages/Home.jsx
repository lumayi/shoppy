import React from 'react';

export default function Home() {
  return (
    <section className="flex flex-col min-w-full desktop:max-w-[1240px] desktop:min-w-[1240px] gap-4">
      <div className="flex flex-col justify-center items-center p-10 h-56 bg-gradient-to-r from-purple-300 to-pink-500">
        <span className="text-3xl font-bold text-white">SHOP WITH US</span>
        <span className="text-white opacity-60">
          expand your styling experience
        </span>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-2 desktop:grid-cols-4 gap-4">
          <div>
            <img src="/image/1.webp" alt="productImage" />
            <div className="flex justify-between">
              <h1>Pink Hoody</h1>
              <p>59,000원</p>
            </div>
            <p>여성</p>
          </div>
          <div>
            <img src="/image/1.webp" alt="productImage" />
            <div className="flex justify-between">
              <h1>Pink Hoody</h1>
              <p>59,000원</p>
            </div>
            <p>여성</p>
          </div>
          <div>
            <img src="/image/1.webp" alt="productImage" />
            <div className="flex justify-between">
              <h1>Pink Hoody</h1>
              <p>59,000원</p>
            </div>
            <p>여성</p>
          </div>
          <div>
            <img src="/image/1.webp" alt="productImage" />
            <div className="flex justify-between">
              <h1>Pink Hoody</h1>
              <p>59,000원</p>
            </div>
            <p>여성</p>
          </div>
          <div>
            <img src="/image/1.webp" alt="productImage" />
            <div className="flex justify-between">
              <h1>Pink Hoody</h1>
              <p>59,000원</p>
            </div>
            <p>여성</p>
          </div>
        </div>
      </div>
    </section>
  );
}
