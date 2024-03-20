import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer>
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span className="flex items-center justify-center rounded-full overflow-hidden h-16 w-16 hover:rotate-360 transition-transform">
          <Image
            className='img'
            src="/inshot.jpg" 
            alt="Logo" 
            width={80}
            height={80}
          />
        </span>

        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 cursor-default sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2024 Development—
          <span className="ml-1">Farrukh Sajjad</span>
        </p>

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <Link href="#" passHref className="text-gray-500">
            <Image
              src="/facebok.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" passHref className="ml-3 text-gray-500 hover:shadow-smoky focus:shadow-smoky">
            <Image
              src="/tweet.png"
              alt="Twitter"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" passHref className="ml-3 text-gray-500">
            <Image
              src="/insta.png"
              alt="Instagram"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" passHref className="ml-3 text-gray-500">
            <Image
              src="/email.png"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </Link>
          <Link href="#" passHref className="ml-3 text-gray-500">
            <Image
              src="/linkin.png"
              alt="LinkedIn"
              width={24}
              height={24}
            />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
