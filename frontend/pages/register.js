import React from "react";
import Link from "next/link";

const register = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto min-h-[85vh] grid md:grid-cols-2">
        <div className="h-full flex justify-center items-center flex-col">
          <h1 className="text-3xl tracking-wider font-bold text-green-100 mb-5">
            REGISTER
          </h1>
          <form className="flex flex-col space-y-5">
            <input
              className="p-3 font-semibold outline-none rounded-lg bg-transparent w-64 text-center placeholder:text-sm border-2 border-green-400"
              type="text"
              placeholder="Your name"
            />
            <input
              className="p-3 font-semibold outline-none rounded-lg bg-transparent w-64 text-center placeholder:text-sm border-2 border-green-400"
              type="email"
              placeholder="Your Email address"
            />
            <input
              className="p-3 font-semibold outline-none rounded-lg bg-transparent w-64 text-center placeholder:text-sm border-2 border-green-400"
              type="password"
              placeholder="New password"
            />
            <input
              className="p-3 font-semibold outline-none rounded-lg bg-transparent w-64 text-center placeholder:text-sm border-2 border-green-400"
              type="password"
              placeholder="confirm password"
            />
            <input
              className="bg-green-400 text-white hover:bg-green-100 hover:text-green-600 tracking-widest transition duration-300 ease-in-out font-bold p-3 rounded-lg cursor-pointer "
              type="submit"
              value={"Register"}
            />
          </form>
          <p className="mt-3">
            Already have an account?
            <Link href="/login">
              <a className="text-green-500 font-semibold ml-2">Login Now</a>
            </Link>
          </p>
        </div>
        <div className="hidden md:flex h-full  justify-center items-center">
          <img
            src="https://res.cloudinary.com/ascdae373dbcb/image/upload/v1653201598/register-page_koqqzb.png"
            className="h-[400px]"
          />
        </div>
      </div>
    </>
  );
};

export default register;
