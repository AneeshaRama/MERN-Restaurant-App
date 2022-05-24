import React from "react";

const FoodItem = ({ item }) => {
  return (
    <>
      <div className="mt-5 single flex flex-col mx-auto w-[275px] sm:w-60 rounded-xl hover:scale-110 transition-transform duration-500 ease-in group bg-gray-800 cursor-pointer">
        <div>
          <img
            src={item.image}
            className="h-40 w-full object-fill rounded-t-lg"
            alt=""
          />
        </div>
        <div className="flex justify-center mt-3">
          <h1 className="font-bold text-lg text-green-100">{item.name}</h1>
        </div>
        <div className="flex justify-between items-center p-3">
          <button className="text-green-500 font-semibold text-sm border-2 border-green-500 p-2 rounded-lg  group-hover:bg-green-500 group-hover:text-white transition-transform duration-300 ease-in-out group-hover:border-white">
            AddtoCart
          </button>

          <p className="text-green-100 font-semibold">Rs.{item.cost}</p>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
