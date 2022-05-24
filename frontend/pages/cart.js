import React, { useState, useEffect } from "react";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";
import Link from "next/link";

const cart = () => {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + parseInt(curr.cost), 0));
  }, [cart]);
  return (
    <>
      {cart.length > 0 ? (
        <>
          <div className="min-h-[80vh] grid md:grid-cols-2 max-w-6xl mx-auto">
            <div className="flex flex-col justify-center items-between p-2">
              {cart.map((item) => {
                return <CartItem key={item._id} item={item} />;
              })}
            </div>
            <div>
              <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                <h1 className="font-semibold text-lg text-green-500">
                  YOUR CART SUMMARY
                </h1>
                <p className="font-bold text-green-400">
                  <span className="text-green-100 font-semibold">
                    Total Items
                  </span>{" "}
                  : {cart.length}
                </p>
                <p className="font-bold text-green-400">
                  {" "}
                  <span className="text-green-100 font-semibold">
                    Total Amount
                  </span>{" "}
                  : Rs.{totalAmount}
                </p>
                <Link href={"/order"}>
                  <button className="bg-green-500 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-500 p-3">
                    Order Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-[80vh] flex flex-col items-center justify-center">
            <h1 className="text-green-100 font-bold text-xl mb-2">
              Your cart is empty!
            </h1>
            <Link href={"/foods"}>
              <button className="bg-green-500 hover:bg-green-100 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-500 font-bold hover:text-green-500 p-3">
                ORDER NOW
              </button>
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default cart;
