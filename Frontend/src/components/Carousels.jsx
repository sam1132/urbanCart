import React from "react";
import img1 from "../assets/carousel/img1.jpg"
import img2 from "../assets/carousel/img2.avif"
import img3 from "../assets/carousel/img3.avif"
import img4 from "../assets/carousel/accs.avif"
import shirt from "../assets/carousel/shirt.webp"
import { Carousel } from "flowbite-react";
const Carousels = () => {
  return (
    <>
      <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-[32rem] max-w-[95rem] mx-auto px-4 md:px-6 lg:px-8 mt-5" >
      <Carousel>
        <img src={img1} alt="shoes" className=" h-full w-full object-cover" />
        <img src={img2} alt="cloths" className="h-full w-full object-cover" />
        <img src={img3} alt="tshirts" className="h-full w-full object-cover" />
        <img src={img4} alt="..." />
        <img src={shirt} alt="..." />
      </Carousel>
    </div>
    </>
  );
};

export default Carousels;
