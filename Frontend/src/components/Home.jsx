import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousels from "./Carousels";
import { FaLayerGroup } from "react-icons/fa";
import SpecialOffer from "./SpecialOffer";
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const [categoryData, setCategoryData] = useState([]);
  const BaseUrl = "https://urbancart-b989.onrender.com"
  const navigate = useNavigate();
  useEffect(() => {
    const getCategory = async () => {
      try {
        const res = await axios.get(`${BaseUrl}/`);
        setCategoryData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);

  const handleSubCategoryClick = (maincategory,subCategory) => {
    navigate(`/products/${maincategory}/${subCategory.name}`);
  };
  const renderSubCategories = (maincategory,subCategories) => {
    if (!subCategories || subCategories.length === 0) {
      console.log("No subcategories to render");
      return null;
    }
    return (
      <>
        {subCategories.map((subCategory, index) => (
          <div
            key={index}
            onClick={() => handleSubCategoryClick(maincategory,subCategory)}
            className="cursor-pointer rounded-md overflow-hidden"
          >
            <div>
              <img
                src={subCategory.image}
                alt={subCategory.name}
                className="w-full h-[7.4rem] object-cover"
              />
            </div>
            <div>
              <p className="text-2xl font-bold text-white bg-purple-500 text-center p-2">
                {subCategory.name}
              </p>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <Carousels />
      <div className="max-w-[95rem] mx-auto mt-10 px-4 md:px-7 lg:px-8">
        <div className="flex items-center gap-x-2">
          <span className="text-purple-800">
            <FaLayerGroup className="md:h-6 md:w-6" />
          </span>
          <h1 className="font-bold sm:text-lg md:text-3xl">
            Shop By Categories
          </h1>
        </div>
        <div className="my-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-4">
          {categoryData.length > 0 &&
            renderSubCategories('main',categoryData[0].main.subCategory)}
        </div>
        <div className="my-8">
          <h1 className="text-xl font-bold lg:text-3xl">{`Shop For ${categoryData[0]?.men?.name}`}</h1>
          <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
            {categoryData.length > 0 &&
              renderSubCategories('male',categoryData[0].men.subCategory)}
          </div>
        </div>
        <div className="my-8">
          <h1 className="text-xl font-bold lg:text-3xl">{`Shop For ${categoryData[0]?.women?.name}`}</h1>
          <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
            {categoryData.length > 0 &&
              renderSubCategories('women',categoryData[0].women.subCategory)}
          </div>
        </div>

        <div className="my-8">
          <h1 className="text-xl font-bold lg:text-3xl">{`Shop For ${categoryData[0]?.kids?.name}`}</h1>
          <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4">
            {categoryData.length > 0 &&
              renderSubCategories('kids',categoryData[0].kids.subCategory)}
          </div>
        </div>
        <SpecialOffer />
      </div>
    </>
  );
};

export default Home;
