import React from 'react';

export default function Home() {
  return (
    <section className="flex flex-col min-w-full desktop:min-w-[1240px]">
      <div className="flex flex-col justify-center items-center p-10 h-56 bg-gradient-to-r from-purple-300 to-pink-500">
        <span className="text-3xl font-bold text-white">SHOP WITH US</span>
        <span className="text-white opacity-60">
          expand your styling experience
        </span>
      </div>
    </section>
  );
}
