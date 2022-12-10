import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="py-2 w-full">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
