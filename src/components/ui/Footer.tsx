import Image from 'next/image';
import React from 'react';

const Footer: React.FC = () => {
  return (
   <footer className="flex justify-center mt-12 px-4 text-gray-800 bg-white dark:text-white dark:bg-black">
  <div className="container px-6 py-6">
    <h1 className="text-lg font-bold text-center lg:text-2xl">
      Join 31,000+ other and never miss <br /> out on new tips, tutorials, and more.
    </h1>
    <div className="flex flex-col justify-center mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
      <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Email Address" />
      <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider dark:text-black transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none dark:bg-white bg-black text-white  rounded-lg hover:bg-purple-700">
        Subscribe
      </button>
    </div>
    <hr className="h-px bg-gray-200 border-none my-7 dark:bg-purple-700" />
    <div className="flex flex-col items-center justify-between md:flex-row">
      
      <div className="flex mt-4 md:m-0">
        <div className="-mx-4">
          <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-purple-400 hover:underline">About</a>
          <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-purple-400 hover:underline">Blog</a>
          <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-purple-400 hover:underline">News</a>
          <a href="#" className="px-4 text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-purple-400 hover:underline">Contact</a>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
}

export default Footer;
