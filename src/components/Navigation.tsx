import Link from 'next/link';
import { MenuIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline';

const Navigation = () => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b py-4 px-8 w-full">
      <div className="flex justify-between max-w-[1920px] mx-auto">
        <div className="flex-1 flex items-center md:hidden">
          <MenuIcon className="w-4" />
        </div>
        <div className="md:flex-1 flex">
          <Link href="/">
            <h2 className="text-2xl font-bold uppercase">Store Name</h2>
          </Link>
        </div>
        <nav className="hidden md:flex items-center justify-center">
          <ul className="flex justify-center items-center gap-4 text-xs uppercase">
            <li>Products</li>
            <li>Collections</li>
            <li>Trends</li>
            <li>About Us</li>
          </ul>
        </nav>
        <nav className="flex-1 flex justify-end items-center">
          <ul className="flex gap-4 text-xs uppercase">
            <li className="hidden md:block">
              <SearchIcon className="w-4" />
            </li>
            <li>
              <ShoppingBagIcon className="w-4" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
