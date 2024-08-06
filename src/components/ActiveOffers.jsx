import React from "react";
import gta from "../assets/mm.webp";
import coc from "../assets/cc.jpg";
import vl from "../assets/vl.jpg";
import netflix from "../assets/netflix.png";

const ActiveOffers = () => {
  const offers = [
    { name: "GTA", image: gta },
    { name: "Clash of Clans", image: coc },
    { name: "Valorant", image: vl },
    { name: "Netflix", image: netflix },
  ];

  return (
    <div className="px-[100px] mt-7 mb-7">
      <div className="w-full flex items-center justify-center mb-5">
        <h3 className="text-2xl font-bold bebas-neue">Active Offers</h3>
      </div>
      <div className="flex w-full items-center justify-center gap-4">
        {offers.map((offer, index) => (
          <div
            key={index}
            className="h-[300px] w-[200px] cursor-pointer text-white shadow-xl rounded-md bg-cover bg-center relative group"
            style={{ backgroundImage: `url(${offer.image})` }}
          >
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-300 rounded-md"></div>
            <span className="absolute text-3xl font-bold text-center inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {offer.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveOffers;
