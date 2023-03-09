import { XMarkIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Dispatch, SetStateAction } from 'react';
import { navItems } from '..';

interface IMobileMenu {
  setMenuIsOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileMenu: React.FC<IMobileMenu> = ({ setMenuIsOpen }) => {
  const router = useRouter();
  return (
    <nav className={`fixed top-0 left-0 z-50 h-screen w-full  bg-slate-50`}>
      <div className="flex justify-end p-4 border-b-slate-300 border-b">
        <XMarkIcon
          onClick={() => setMenuIsOpen(false)}
          className="w-8 cursor-pointer"
        />
      </div>

      <div className="flex flex-col items-center justify-center space-y-10 pt-10">
        {navItems.map((item, index) => (
          <li
            onClick={() => setMenuIsOpen(false)}
            key={index}
            className="list-none py-2"
          >
            <Link
              href={item.link}
              className={`${
                router.asPath === item.link ? 'text-primary' : 'text-black'
              } leading-6 text-lg font-medium transition ease-in-out duration-75 cursor-pointer hover:text-teal-700`}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default MobileMenu;
