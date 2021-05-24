import React from "react";
import Loginform from "../components/loginform";
import Loginnote from "../components/loginnote";

export default function Loginpage() {
  return (
    <>
      <div className="px-20 py-10 bg-gray-300">
        <div className="grid grid-cols-2 bg-white">
          <div className="px-10">
            <Loginform />
          </div>
          <div className="bg-indigo-600">
            <Loginnote />
          </div>
        </div>
      </div>
    </>
  );
}