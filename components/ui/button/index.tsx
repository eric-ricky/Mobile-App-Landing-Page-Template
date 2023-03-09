import { ArrowUpRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface IButton {
  children: ReactNode;
  link?: string;
}

const Button: React.FC<IButton> = ({ children, link }) => {
  return (
    <>
      {link ? (
        <Link
          href={link}
          className="py-2 px-6 rounded-full bg-black text-white hover:bg-white hover:text-black cursorpointer flex items-center space-x-2 w-fit"
        >
          <span>{children}</span>
          <ArrowUpRightIcon className="w-5" />
        </Link>
      ) : (
        <button className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-zinc-50 rounded-md p-1 bg-blue-500 hover:bg-blue-400  py-2 px-5">
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
