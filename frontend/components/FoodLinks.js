import React from "react";
import Link from "next/link";

const FoodLinks = () => {
  return (
    <>
      <div className="hidden md:flex items-center justify-center space-x-10  font-bold text-green-400 mt-5">
        <Link href={"/foods/dosa"}>
          <p className="hover:scale-125 transition duration-300 text-lg ease-in cursor-pointer">
            Dosa
          </p>
        </Link>
        <Link href={"/foods/rice"}>
          <p className="hover:scale-125 transition duration-300 text-lg ease-in cursor-pointer">
            Rice
          </p>
        </Link>
        <Link href={"/foods/south-indian"}>
          <p className="hover:scale-125 transition duration-300 text-lg ease-in cursor-pointer">
            South Indian
          </p>
        </Link>
        <Link href={"/foods/north-indian"}>
          <p className="hover:scale-125 transition duration-300 text-lg ease-in cursor-pointer">
            North Indian
          </p>
        </Link>
        <Link href={"/foods/chinese"}>
          <p className="hover:scale-125 transition duration-300 text-lg ease-in cursor-pointer">
            Chinese
          </p>
        </Link>
        <Link href={"/foods/snacks"}>
          <p className="hover:scale-125 transition duration-300 text-lg ease-in cursor-pointer">
            {" "}
            Snacks
          </p>
        </Link>
        <Link href={"/foods/desserts"}>
          <p className="hover:scale-125 transition duration-300 text-lg ease-in cursor-pointer">
            Desserts
          </p>
        </Link>
      </div>
      <div className=" md:hidden flex items-center justify-center space-x-10 font-bold text-lg text-green-600 mt-5">
        <Link href={"/foods"}>All Categories</Link>
      </div>
    </>
  );
};

export default FoodLinks;
