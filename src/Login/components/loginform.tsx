import React from "react";
import Googlelogo from "../../assets/search.svg";
import Flash from "../../assets/flash.svg";
import firebase from "firebase/app";
import "firebase/auth";

export default function Loginform() {
  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => console.log(result.user?.displayName));
  }
  return (
    <>
      <div className="flex flex-col gap-4 pt-8 px-10 items-center">
        <img src={Flash} alt="flash" className="w-8 h-8" />
        <h1 className="text-2xl text-black font-bold"> Login</h1>
        <h6 className="text-gray-600 text-sm text-center">
          See your growth and get consulting support!
        </h6>
        <button
          className="flex flex-row rounded-full py-2 justify-center gap-4 items-center
         ring-1 ring-gray-300 w-60 focus:ring-indigo-500 focus:outline-none mt-4"
          onClick={signInWithGoogle}
        >
          <img src={Googlelogo} alt="google logo" className="w-6 h-6" />
          <p className="text-black text-sm"> Sign in with Google</p>
        </button>
        <div className="flex space-x-2 mt-2 mb-1 mx-auto items-center">
          <div className="w-16 h-[1px] bg-gray-300"></div>
          <p className="text-xs text-gray-500 text-opacity-80">
            or Sign in with Email
          </p>
          <div className="w-16 h-[1px] bg-gray-300"></div>
        </div>
        <div>
          <label
            htmlFor="first_name"
            className="block text-sm font-medium text-gray-700"
          >
            Email <sup>*</sup>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="mail@website.com"
            autoComplete="email"
            className=" w-70 mt-1 focus:ring-indigo-500 focus:border-indigo-500 
          shadow-sm sm:text-sm border-gray-300 rounded-full
          placeholder-gray-300"
          />
        </div>
        <div>
          <label
            htmlFor="last_name"
            className="block text-sm font-medium text-gray-700"
          >
            Password <sup>*</sup>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Min. 8 characters"
            id="password"
            autoComplete="password"
            className="w-70 mt-1 focus:ring-indigo-500 focus:border-indigo-500 
           shadow-sm sm:text-sm border-gray-300 rounded-full
           placeholder-gray-300"
          />
        </div>
        <div className="flex gap-2 items-center">
          <input
            className="appearance-none rounded checked:bg-indigo-600 checked:border-transparent focus:ring-0"
            type="checkbox"
          />
          <p className=" text-black text-sm">Remember me</p>
        </div>

        <button
          className="flex flex-row rounded-full px-16 py-2 justify-center gap-4 items-center
         ring-1 ring-gray-300 w-70 focus:ring-purple-500 focus:outline-none mt-2
         bg-indigo-600"
        >
          <p className="text-white text-sm"> Login </p>
        </button>
        <p className=" text-sm text-indigo-900 cursor-pointer text-center">
          Forgot password?
        </p>
        <p className="text-sm mt-1 mb-4">
          Not registered yet?
          <span className="ml-2 text-indigo-900 cursor-pointer">
            Create an Account
          </span>
        </p>
        {/* <p className="text-xs mt-1 mb-1 text-gray-500">
          &#169;2021 Mecar All rights reserved
        </p> */}
      </div>
    </>
  );
}
