import React from "react";
import headimg from "../assets/headimg.webp";
import Headline from "./Headline";
import Search from "./Search";
const Header = () => {
  return (
    <div className="bg-black h-[69vh] text-white ">
      <div className="flex justify-between px-[100px]">
        <div className="mt-[150px]">
          <h1 className="text-5xl font-bold bebas-neue">
            Buy, Sell, and Trade: Elevate Your Gaming Experience
          </h1>
          <Search/>
        </div>
        <img src={headimg} draggable={false} alt="headerimg" className="h-[60vh]" />
      </div>
      <Headline/>
    </div>
  );
};

export default Header;
