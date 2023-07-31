import React from 'react';

export default function User({ user: { photoURL, displayName } }) {
  return (
    <div className="flex gap-1 items-center">
      <img
        src={photoURL || '/image/default-image.png'}
        alt={displayName}
        className="w-7 rounded-full"
      />
      <p className="text-sm hidden md:block">{displayName}</p>
    </div>
  );
}
