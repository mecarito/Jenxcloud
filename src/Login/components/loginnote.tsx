import React from "react";

export default function Loginnote() {
  return (
    <>
      <div className="flex flex-col items-center space-y-8 px-20">
        <h1 className="text-white text-3xl font-bold text-center ">
          Turn your ideas into reality.
        </h1>
        <p className="text-sm text-gray-50 text-center px-2">
          consistent quality and experience across all platforms and devices
        </p>
        <div className="flex flex-row items-center space-x-2">
          <div className="w-6 h-2 bg-white rounded-lg"></div>
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          <div className="w-2 h-2 rounded-full bg-gray-500"></div>
        </div>
      </div>
    </>
  );
}
