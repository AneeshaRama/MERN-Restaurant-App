import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import FoodItem from "../../components/FoodItem";
import FoodItemContainer from "../../components/FoodItemContainer";
import { fetchFoods } from "../../redux/slices/foodSlice";
import FoodLinks from "../../components/FoodLinks";

const chinese = () => {
  const {
    food: { data },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const chineseItems = data.filter((item) => item.category === "chinese");

  useEffect(() => {
    dispatch(fetchFoods());
  }, []);
  return (
    <>
      <div className="max-w-6xl mx-auto min-h-[83vh] p-3">
        <FoodLinks />
        <FoodItemContainer>
          {chineseItems.map((item) => {
            return <FoodItem key={item._id} item={item} />;
          })}
        </FoodItemContainer>
      </div>
    </>
  );
};

export default chinese;
