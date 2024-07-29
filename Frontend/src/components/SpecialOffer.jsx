import React from "react";
import { Carousel } from "flowbite-react";
import { BiSolidOffer } from "react-icons/bi";
import offer1 from "../assets/home/Offer1.jpg"
import offer2 from "../assets/home/offer2.webp"
import offer3 from "../assets/home/offer3.png"
const SpecialOffer = () => {
  return (
    <>
      <section className="max-w-[95rem] mx-auto  my-10">
        <div className="flex items-center gap-x-2">
        <span><BiSolidOffer className="h-6 w-6 text-yellow-300"/></span>
          <h1 className="font-bold md:text-3xl my-5 text-lg">Special Offers</h1>
        </div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-[32rem]">
          <Carousel
          >
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <img src={offer1} alt="" className="h-full w-full" />
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <img src={offer2} alt="" className="w-full h-full" />
            </div>
            <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
              <img src={offer3} alt="" className=" h-full w-full" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default SpecialOffer;
