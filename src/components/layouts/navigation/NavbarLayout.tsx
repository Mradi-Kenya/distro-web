import Link from 'next/link';

export interface INavbarLayout {}

const NavbarLayout: React.FC<INavbarLayout> = () => {
  return (
    <nav className="bg-gray-800 text-white flex justify-center items-center gap-12 py-4 fixed">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default NavbarLayout;
