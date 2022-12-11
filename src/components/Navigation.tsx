import Link from 'next/link';

const Navigation = () => {
  return (
    <header className="sticky top-0 z-10 bg-gray-800 text-white py-4 px-8 w-full">
      <div className="flex justify-center md:justify-between items-center max-w-[1920px] mx-auto">
        <nav className="hidden md:block">
          <ul className="flex gap-4 text-xs uppercase">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Collections</li>
          </ul>
        </nav>
        <Link href="/">
          <h2 className="text-xl text-center font-bold uppercase">Store Name</h2>
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-4 text-xs uppercase">
            <li>Search</li>
            <li>Cart</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
