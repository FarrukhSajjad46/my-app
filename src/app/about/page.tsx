import React from 'react';
import Image from 'next/image';
import welcome from '/Users/Farrukh Sajjad/Desktop/portfolio/my-app/public/pics/welcome.jpg';

const About: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center md:px-10 py-10 font-calibri">
      {/* Left side image */}
      <div className="lg:w-1/2 md:w-1/2 w-full mb-10 md:mb-0 md:rounded-3xl overflow-hidden flex justify-center">
        <div className="max-w-sm">
          <Image
            alt="Mountains"
            src={welcome}
            className="w-full h-auto rounded-3xl"
          />
        </div>
      </div>

      {/* Right side details */}
      <div className="md:w-1/2 md:pl-5">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg mb-4">
          I have been working as a web developer for quite some time now. I believe I am a very ambitious person who loves to work on making the website work well. Working on the web is my passion as I love to work on exciting projects. This is the field I get to express my creativity.
        </p>

        {/* Additional Details */}
        <div className="pt-4">
          <p><strong>Name:</strong> Farrukh Sajjad</p>
          <p><strong>Date of Birth:</strong> November 28, 1998</p>
          <p><strong>Address:</strong> Rojhan dist. RajanPur Pakistan</p>
          <p><strong>Postal Code:</strong> 33700</p>
          <p><strong>Email:</strong> farrukhsajjad46@gmail.com</p>
          <p><strong>Phone:</strong> +92-307-064000-5</p>
        </div>

        <p className="text-lg mb-4 pt-4">
          <strong>120</strong> Project Complete
        </p>
        
        {/* Button with color and hover effect */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Cv
        </button>
      </div>
    </div>
  );
};


export default About;
