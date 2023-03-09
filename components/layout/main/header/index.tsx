import BrandLogo from '@/components/ui/brand';
import { Bars2Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from './mobile-menu';

export const navItems = [
  {
    link: '/#features',
    label: 'Features',
  },
  {
    link: '/#howitworks',
    label: 'How It Works',
  },
  {
    link: '/#faq',
    label: 'FAQs',
  },
  {
    link: '/#getstarted',
    label: 'Get Started',
  },
  {
    link: '/contact',
    label: 'Contact Us',
  },
];

const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <section className={`bg-white shadow-sm`}>
      <div className="container mx-auto px-4 md:px-20 flex items-center justify-between md:space-x-8 py-5 ">
        <BrandLogo />

        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="inline-flex items-center leading-6 font-medium transition ease-in-out duration-75 cursor-pointer text-zinc-500 rounded-md py-1 hover:text-zinc-400"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div
          onClick={() => setMenuIsOpen((prev) => !prev)}
          className="lg:hidden flex items-center justify-between cursor-pointer"
        >
          <Bars2Icon className="w-6" />
        </div>
      </div>

      {menuIsOpen && <MobileMenu setMenuIsOpen={setMenuIsOpen} />}
    </section>
  );
};

export default Header;
