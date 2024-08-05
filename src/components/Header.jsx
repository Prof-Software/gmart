import React from "react";
import headimg from "../assets/headimg.webp";
import Headline from "./Headline";
const Header = () => {
  return (
    <div className="bg-black h-[69vh] text-white ">
      <div className="flex justify-between px-[100px]">
        <div className="mt-[150px]">
          <h1 className="text-5xl font-bold bebas-neue">
            Buy, Sell, and Trade: Elevate Your Gaming Experience
          </h1>
          <input
            type="text"
            className="p-4 rounded-lg mt-7 bg-gray-900 outline-none border border-blue-900 focus:border-blue-500"
            placeholder="Browse Now"
          />
        </div>
        <img src={headimg} draggable={false} alt="headerimg" className="h-[60vh]" />
      </div>
      <Headline/>
    </div>
  );
};

export default Header;
