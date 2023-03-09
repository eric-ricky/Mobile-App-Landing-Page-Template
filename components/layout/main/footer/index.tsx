import Link from 'next/link';
import { navItems } from '../header';
import NewsLetter from './newsletter';

const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container mx-auto px-4 md:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-4 pb-8">
          {navItems.map(({ label, link }) => (
            <Link
              key={label}
              href={link}
              className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-zinc-600 rounded-md py-1 hover:text-zinc-400"
            >
              {label}
            </Link>
          ))}
        </div>

        <hr className="my-2" />

        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between space-y-4 md:space-y-0 my-8">
          <div className="text-zinc-500 mt-10 md:mt-0">
            &copy; {new Date().getFullYear()} PesaMate | All rights reserved.
          </div>

          <NewsLetter />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
