import { BanknotesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const BrandLogo = () => {
  return (
    <Link
      href="/"
      className="text-teal-900 text-xl font-bold flex items-center space-x-2 outline-none active:outline-none"
      aria-label="Logo"
    >
      <BanknotesIcon className="w-5" />
      <span className="font-bold">PesaMate</span>
    </Link>
  );
};

export default BrandLogo;
