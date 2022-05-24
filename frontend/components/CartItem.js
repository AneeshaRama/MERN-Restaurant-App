import React from "react";
import { useDispatch } from "react-redux";
import { remove } from "../redux/slices/cartSlice";
import { useSnackbar } from "notistack";
import { Delete } from "@mui/icons-material";

const CartItem = ({ item }) => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(remove(item._id));
    enqueueSnackbar(`Removed ${item.name} from the cart`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };
  return (
    <>
      <div className="flex items-center p-5 justify-between bg-gray-800 mt-2 mb-2 rounded-xl">
        <div className="flex p-3">
          <img src={item.image} className="h-28 rounded-lg" alt="" />
          <div className="ml-10 self-start space-y-5">
            <h1 className="text-xl text-green-500 font-bold">{item.name}</h1>
            <p className="font-semibold">Rs.{item.cost}</p>
          </div>
        </div>
        <div className="bg-gray-700 hover:bg-gray-900 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3">
          <Delete onClick={handleRemoveFromCart} className="text-green-500" />
        </div>
      </div>
    </>
  );
};

export default CartItem;
