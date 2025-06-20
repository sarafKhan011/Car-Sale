import React from 'react';
import Data from '@/Shared/Data';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

function Category() {
  const navigate = useNavigate();

  // Define the function to handle category click
  const handleCategoryClick = (category) => {
    navigate(`/search/${category}`);
  };

  return (
    <div className='mt-80'>
      <h2 className='font-bold text-2xl text-center mb-6'>Browse By Type</h2>

      <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-6 px-20'>
        {Data.Category.map((category, index) => (
          <div
            key={index}  // unique key prop needed here
            className='border rounded-xl p-3 items-center flex flex-col hover:shadow-md cursor-pointer font-medium text-black hover:text-emerald-600 hover:scale-105 transition-all'
            onClick={() => handleCategoryClick(category.name)}
          >
            <img src={category.icon} width={40} height={40} alt={category.name} />
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
