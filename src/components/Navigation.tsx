import Link from 'next/link';
import { MenuIcon, SearchIcon, ShoppingBagIcon } from '@heroicons/react/outline';

const Navigation = () => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b py-4 px-8 w-full">
      <div className="flex justify-between items-center max-w-[1920px] mx-auto">
        <MenuIcon className="w-4 md:hidden" />
        <Link href="/">
          <h2 className="text-2xl text-center font-bold uppercase">Store Name</h2>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-4 text-xs uppercase">
            <li>
              <Link href="/">Products</Link>
            </li>
            <li>Collections</li>
            <li>Trends</li>
            <li>About Us</li>
          </ul>
        </nav>
        <nav>
          <ul className="flex gap-4 text-xs uppercase">
            <li>
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
