import Image from 'next/image';
import Link from 'next/link';

export interface INavbarLayout {}

const NavbarLayout: React.FC<INavbarLayout> = () => {
  return (
    <nav className='fixed bg-white w-full flex space-x-96  p-4 items-center z-10'>
      <Link href="/" className='flex flex-col justify-center items-center -mt-2'>
      <Image src='/logo.png' alt = "logo" width={80} height={80}/>
      <h1 className='text-md uppercase font-bold -mt-4'>Distro</h1>
      </Link>
      <ul className='hidden md:flex gap-8 text-base tracking-wide '>
        <li><Link href='/about'>About</Link></li>
        <li><Link href='/contact'>Contact</Link></li>
      </ul>
      <div className='flexjustify-center items-center'>
        <Link href='/signup'>
          <button className='bg-primary text-gray-100 px-4 py-2 rounded-full font-bold tracking-wide hover:bg-transparent hover:text-primary hover:border hover:border-primary'>
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavbarLayout;
