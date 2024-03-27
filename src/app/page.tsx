import React from 'react';
import Link from 'next/link';

const Page: React.FC = () => {
  return (
    <div className="bg-cover bg-center h-screen flex justify-center items-center font-calibri">
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-4">Explore and enjoy my work!</p>
        {/* Use Link component to navigate to the next page */}
        <Link href="/about" legacyBehavior>
          <a className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
            Start
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Page;
