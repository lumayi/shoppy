import React from 'react';
import { wonPrice } from '../../util';
import cls from 'classnames';

export default function Price({ text, price, isTotal }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <p className="text-lg font-semibold">{text}</p>
      <div className={cls('flex px-10 py-5 rounded items-center gap-1')}>
        <p className="text-xl font-bold">{wonPrice(price)}</p>
        <p>원</p>
      </div>
    </div>
  );
}
