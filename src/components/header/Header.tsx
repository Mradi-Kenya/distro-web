import Image from "next/image";

export interface IHeader {}

const Header: React.FC<IHeader> = () => {
  return (
    <header className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="col-span-1 p-6 sm:mt-16 mt-96 sm:ml-4">
          <h1 className="sm:text-4xl text-2xl font-bold text-black tracking-wide sm:leading-[3rem] capitalize">
          the ultimate solution for food distribution &amp; medical camps!
          </h1>
          <p className="text-md leading-7 text-gray-800 mt-4">
          Distro is designed to streamline the process of managing and organizing food distribution and medical camps, making it easier for organizers to navigate.
          </p>
          <p className="text-md leading-7 text-gray-800 mt-4">
          With Distro , you can create a personalized profile that includes information about your organization, upcoming events, and volunteer opportunities. Our user-friendly interface allows you to easily manage your events and keep track of your volunteer base, so you can ensure that your efforts are always well-organized and efficient.
          </p>
          <div className="flex sm:gap-16 gap-4 mt-8">
            <button className="bg-secondary text-gray-100 px-4 py-2 rounded sm:w-5/12  w-1/2 hover:bg-primary"> 
              Get Started
            </button>
            <button className="border border-secondary hover:border-primary text-secondary hover:text-primary px-4 py-2 rounded sm:w-5/12 w-1/2">
              View demo &rarr;
            </button>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center items-center">
          <Image src="/ill2.jpg" alt="logo" width={1080} height={320} />
        </div>
      </div> 
    </header>
  );
};

export default Header;


