import Image from 'next/image';
import Link from 'next/link';

export interface INavbarLayout {}

const NavbarLayout: React.FC<INavbarLayout> = () => {
  return (
    <nav className='fixed w-full flex space-x-96  p-4 items-center z-10'>
      <Link href="/" className='flex flex-col justify-center items-center'>
      <Image src='/logo.png' alt = "logo" width={100} height={60}/>
      <h1 className='text-md uppercase font-bold -mt-8'>Distro</h1>
      </Link>
      <ul className='hidden md:flex gap-8 text-base tracking-wide '>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/#contact'>Contact</Link></li>
      </ul>
      <div className='flex flex-col justify-center items-center'>
        <Link href='/signup'>
          <button className='bg-primary text-white px-4 py-2 rounded-full font-bold tracking-wide'>
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarLayout;
