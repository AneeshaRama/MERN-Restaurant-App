import { Cancel } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React, { useState, useEffect } from "react";
import { add, remove } from "../redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { useSnackbar } from "notistack";

const FoodItem = ({ item }) => {
  const [openModal, setOpenModal] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(add(item));
    enqueueSnackbar(`Added ${item.name} to the cart`, {
      variant: "success",
      autoHideDuration: 3000,
    });
  };
  const handleRemoveFromCart = () => {
    dispatch(remove(item._id));
    enqueueSnackbar(`Removed ${item.name} from the cart`, {
      variant: "warning",
      autoHideDuration: 3000,
    });
  };
  return (
    <>
      <div className="mt-5 single flex flex-col mx-auto w-[275px] sm:w-60 rounded-xl hover:scale-110 transition-transform duration-500 ease-in group bg-gray-800 cursor-pointer">
        <div onClick={() => setOpenModal(true)}>
          <img
            src={item.image}
            className="h-40 w-full object-fill rounded-t-lg"
            alt=""
          />
        </div>
        <div className="flex justify-center mt-3">
          <h1
            className="font-bold text-lg text-green-100"
            onClick={() => setOpenModal(true)}
          >
            {item.name}
          </h1>
        </div>
        <div className="flex justify-between items-center p-3">
          {cart.some((p) => p._id === item._id) ? (
            <button
              className="text-red-500 font-semibold text-sm border-2 border-red-500 p-2 rounded-lg  group-hover:bg-red-500 group-hover:text-white transition-transform duration-300 ease-in-out group-hover:border-red-500"
              onClick={handleRemoveFromCart}
            >
              Remove item
            </button>
          ) : (
            <button
              className="text-green-500 font-semibold text-sm border-2 border-green-500 p-2 rounded-lg  group-hover:bg-green-500 group-hover:text-white transition-transform duration-300 ease-in-out group-hover:border-white"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}

          <p
            className="text-green-100 font-semibold"
            onClick={() => setOpenModal(true)}
          >
            Rs.{item.cost}
          </p>
        </div>
      </div>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="h-full w-full md:h-[600px] md:w-[450px] border-none rounded-lg outline-none bg-gray-700 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center relative justify-center h-full">
            <div className="flex flex-col items-center justify-center space-y-5">
              <div>
                <img src={item.image} className="h-60" alt="" />
              </div>
              <h1 className="text-xl text-green-500 font-bold">{item.name}</h1>
              <p className="p-3 text-green-100 font-semibold">
                {item.description}
              </p>
              <div className="flex items-center justify-between p-5 w-full">
                <button className="bg-green-500 px-3 text-green-100 font-bold text-lg hover:bg-green-100 hover:text-green-500 transition duration-300 ease-in p-3 rounded-xl">
                  Order now
                </button>
                <p className="text-lg text-green-100 font-bold">
                  Rs.{item.cost}
                </p>
              </div>
            </div>

            <div className="absolute top-2 left-2 flex justify-center items-center bg-gray-700 h-10 w-10 rounded-full cursor-pointer">
              <Cancel
                className="text-3xl"
                onClick={() => setOpenModal(false)}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default FoodItem;
