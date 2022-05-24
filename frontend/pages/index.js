import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto p-3 min-h-[83vh] grid md:grid-cols-2 gap-y-10">
        <div className="flex justify-center items-start flex-col h-full">
          <h1 className="text-3xl md:text-4xl bg-gradient-to-r from-emerald-600 to-green-300 bg-clip-text text-transparent font-bold tracking-wider mb-2">
            Say good bye to your hunger!
          </h1>
          <p className="text-green-100 opacity-70 mt-3 text-xl font-semibold mb-2">
            Order healthy and tasty food online wherever and whenever from{" "}
            <span className="text-green-400 font-bold text-3xl ml-1 logo">
              Swirly
            </span>
          </p>
          <Link href={"/foods"}>
            <button className="hover:bg-green-400 hover:text-white bg-green-100 text-green-600 tracking-widest transition duration-300 ease-in-out font-bold p-3 rounded-lg cursor-pointer mt-4">
              Order Now
            </button>
          </Link>
        </div>
        <div className="h-full flex justify-center items-center">
          <img
            src="https://res.cloudinary.com/jamesmarycloud/image/upload/v1653207144/home-page_ldrxp1.png"
            alt=""
            className="md:h-[400px] sm:h-[300px] h-60 object-fill"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
