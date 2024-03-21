import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const page = () => {
  return (
    <section className="body-font relative">
      <div className="absolute inset-0 bg-blue-200">
      <iframe
  width="100%"
  height="100%"
  title="map"
  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2910.787259295589!2d69.955342435143!3d28.687154734217195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1711011864893!5m2!1sen!2sus"
  style={{ border: "none", filter: "grayscale(1) contrast(1.2) opacity(0.3)" }}
></iframe>
      </div>
      <div className=" body-font relative font-serif cursor-default ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900 font-serif">Let&apos;s Connect</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-900 font-serif">In the journey of success, every message counts. Don&apos;t wait, drop us a line and let&apos;s achieve greatness!</p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-900">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-600 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-900">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-600 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-900">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-100 bg-opacity-600 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg font-serif">Connect Now</button>
              </div></div>
              <div className="p-2 w-full pt-10 mt-12 text-center">
                <a href="mailto:farrukhsajjad46@gmail.com" className="flex justify-center items-center"><Image src="/email1.png" alt="logo" width={46} height={46} /></a>
                <p className="leading-normal my-5 font-mono text-gray-900">28.686222, 69.950857<br />Rojhan, Rajanpur, Punjab, Pakistan</p>
                <span className="inline-flex">
                  <Link href="facebook.com" className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 transition-transform duration-300 ease-in-out transform-gpu hover:scale-110" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </Link>
                  <Link href="twitter.com" className="ml-4 text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 transition-transform duration-300 ease-in-out transform-gpu hover:scale-110" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </Link>
                  <Link href="Instagram.com" className="ml-4 text-gray-500">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 transition-transform duration-300 ease-in-out transform-gpu hover:scale-110" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </Link>
                  </span>
                  </div>
                  </div>
   </div>
   </div>
</section>
      );
    };

export default page