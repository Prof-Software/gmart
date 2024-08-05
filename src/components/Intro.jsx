import React from "react";
import { RiSecurePaymentFill, RiCustomerService2Fill } from "react-icons/ri";
import { BiSolidOffer } from "react-icons/bi";
import acgame from "../assets/action.png";
const Intro = () => {
  return (
    <div className="px-[100px] mt-12 flex">
      <div className="w-[40%]">
        <h2 className="text-3xl bebas-neue  font-bold">
          Sell your games and software accounts for money
        </h2>
        <p className="mt-4">
          In Games Mart you will be made avaliable to sell/buy or trade In-game
          accounts, Items or currency. The procedure is simple and trusted and
          user friendly for faster trades.{" "}
        </p>
        <div className="flex items-center text-6xl gap-7 mt-7 justify-between">
          <div className="flex items-center w-[33%] flex-col text-sm text-justify">
            <RiSecurePaymentFill className="text-6xl mb-4" />
            <h4 className="font-bold">Secured Payments</h4>
            <p>
              Rest assured with every transaction you make with us. GamesMart
              offers SSL protection and a variety of payment processors within a
              secure and reliable platform
            </p>
          </div>
          <div className="flex items-center w-[33%] flex-col text-sm text-justify">
            <RiCustomerService2Fill className="text-6xl mb-4" />
            <h4 className="font-bold">Customer Service</h4>
            <p>
              Our dedicated Customer Service team is here to assist with any
              questions about your orders and to provide outstanding after-sales
              support
            </p>
          </div>
          <div className="flex items-center w-[33%] flex-col text-sm text-justify">
            <BiSolidOffer className="text-6xl mb-4" />
            <h4 className="font-bold">Best Deals</h4>
            <p>GamesMart offers competitive pricing for buyers driven by a free market economy, while also working to keep costs low for our sellers.</p>
          </div>
        </div>
      </div>
      <div className="w-[60%] flex items-center justify-end">
        <img src={acgame} alt="" />
      </div>
    </div>
  );
};

export default Intro;
