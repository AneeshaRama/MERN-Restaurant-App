import React from "react";

const FoodItemContainer = ({ children }) => {
  return (
    <>
      <div className="container grid sm:grid-cols-2 md:grid-cols-3 p-3 gap-5 mx-auto mt-10">
        {children}
      </div>
    </>
  );
};

export default FoodItemContainer;
