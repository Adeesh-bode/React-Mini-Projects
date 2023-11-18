import React from 'react';
import { links } from './data.jsx';

export const NavLinks = function () {
  return (
    <div className='flex flex-col justify-between gap-4 items-start md:flex-row'>
      {links.map(({ id, url, text }) => (
        <a
          key={id}
          href={url}
          
          className='hover:bg-blue-300 hover:text-white active:text-gray-600 text-xl capitalize px-2 py-4'
        >
          {text}
        </a>
      ))}
    </div>
  );
};
