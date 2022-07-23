import React from "react";

export const Footer = () => {
  return (
    <div className="flex text-cyan-300 ml-28 justify-items-right m-auto p-2">
      <div className="w-24 border-r-2 h-6">
        <h1 className="ml-14 cursor-pointer ">Blog</h1>
      </div>
      <div className="w-16 border-r-2  h-6">
        <h1 className="cursor-pointer">Scoring</h1>
      </div>
      <div className="w-24 border-r-2 h-6">
        <h1 className="cursor-pointer">Environment</h1>
      </div>
      <div className="w-12 border-r-2 h-6">
        <h1 className="cursor-pointer">FAQ</h1>
      </div>
      <div className="w-20 border-r-2 h-6">
        <h1 className="cursor-pointer">About Us</h1>
      </div>
      <div className="w-36 border-r-2 h-6">
        <h1 className="cursor-pointer">Support a Feature</h1>
      </div>
      <div className="w-20 border-r-2 h-6">
        <h1 className="cursor-pointer">Careers</h1>
      </div>
      <div className="w-32 border-r-2 h-6">
        <h1 className=" cursor-pointer">Terms Of Service</h1>
      </div>
      <div className="w-28 border-r-2 h-6">
        <h1 className="cursor-pointer">Privacy Policy</h1>{" "}
      </div>
      <div className="w-32 h-6">
        <h1 className=" cursor-pointer">Request a Feature</h1>
      </div>
    </div>
  );
};
