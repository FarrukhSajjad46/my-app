import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
        <p className="text-gray-600">Feel free to get in touch with us using the options below:</p>
      </div>
      <div className="flex flex-wrap justify-center max-w-3xl">
        {/* Square Boxes */}
        <div className="w-1/2 md:w-1/4 p-4">
          <div className="relative w-full h-32 bg-white border border-gray-300 flex justify-center items-center">
            <div className="w-24 h-24 rounded-full bg-blue-500 flex justify-center items-center">
              <span className="text-white text-lg font-semibold">Email</span>
            </div>
            <span className="absolute bottom-0 left-0 right-0 text-gray-600 text-sm font-medium p-4">Email Description</span>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 p-4">
          <div className="relative w-full h-32 bg-white border border-gray-300 flex justify-center items-center">
            <div className="w-24 h-24 rounded-full bg-green-500 flex justify-center items-center">
              <span className="text-white text-lg font-semibold">Phone</span>
            </div>
            <span className="absolute bottom-0 left-0 right-0 text-gray-600 text-sm font-medium p-4">Phone Description</span>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 p-4">
          <div className="relative w-full h-32 bg-white border border-gray-300 flex justify-center items-center">
            <div className="w-24 h-24 rounded-full bg-yellow-500 flex justify-center items-center">
              <span className="text-white text-lg font-semibold">Chat</span>
            </div>
            <span className="absolute bottom-0 left-0 right-0 text-gray-600 text-sm font-medium p-4">Chat Description</span>
          </div>
        </div>
        <div className="w-1/2 md:w-1/4 p-4">
          <div className="relative w-full h-32 bg-white border border-gray-300 flex justify-center items-center">
            <div className="w-24 h-24 rounded-full bg-red-500 flex justify-center items-center">
              <span className="text-white text-lg font-semibold">Website</span>
            </div>
            <span className="absolute bottom-0 left-0 right-0 text-gray-600 text-sm font-medium p-4">Website Description</span>
          </div>
        </div>
      </div>
    </div>
      );
    };

export default page