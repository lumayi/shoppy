import React from 'react';

export default function Button({ onClick, text }) {
  return (
    <button
      className="bg-red-500 text-white text-sm py-1 px-2 rounded font-bold hover:brightness-150"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
