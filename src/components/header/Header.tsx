export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className="h-screen flex justify-center items-center bg-gray-800 text-white">
      <h1 className="text-4xl capitalize font-black">Welcome to trio</h1>
    </header>
  );
};

export default Header;


