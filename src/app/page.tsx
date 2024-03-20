import React from 'react';


const page: React.FC = () => {

  return (
    <div
      className="bg-cover bg-center h-screen flex justify-center items-center "
      style={{
        backgroundImage: `url('pics/home2.jpg')`,
      }}
    >
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg mb-4">Explore and enjoy my work!</p>
        <button className="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">Start</button>
      </div>
    </div>
  );
};

export default page;
