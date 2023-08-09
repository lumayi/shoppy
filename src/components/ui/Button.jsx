import React from 'react';

export default function Button({ onClick, text, type }) {
  return (
    <button
      className="bg-cyan-600 text-white text-sm py-2 px-4 rounded font-bold hover:brightness-110 shrink-0"
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
