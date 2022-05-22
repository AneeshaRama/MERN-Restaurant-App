import React, { useState } from "react";
import AdminDrawer from "../../components/admin/AdminDrawer";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { Add, Cancel, Image } from "@mui/icons-material";
import { Modal, Tooltip } from "@mui/material";

const foods = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <div className="hidden md:flex justify-center max-w-6xl mx-auto min-h-[83vh] p-3 ">
        <AdminSidebar />
        <div className="flex-grow min-w-fit ml-5">
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-semibold text-green-400">FOOD ITEMS</h1>
          </div>
        </div>
      </div>
      <div className="min-h-[83vh] p-3 md:hidden">
        {/* Mobile virsion */}
        <div className="flex flex-col">
          <AdminDrawer />
          <div className="flex justify-center items-center mt-3">
            <h1 className="text-lg font-semibold text-green-400">FOOD ITEMS</h1>
          </div>
        </div>
      </div>
      <Tooltip title="Add new food">
        <div
          className="absolute h-14 w-14 cursor-pointer hover:scale-110 transition duration-300 ease-in bottom-32 right-4 md:right-28 rounded-full bg-green-600 flex justify-center items-center"
          onClick={() => setOpenModal(true)}
        >
          <Add className="text-white font-bold text-3xl" />
        </div>
      </Tooltip>
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <div className="h-full w-full md:h-[600px] md:w-[450px] border-none rounded-lg outline-none bg-gray-700 absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
          <div className="flex flex-col items-center relative justify-center h-full">
            <form className="flex flex-col items-center justify-center">
              <input
                className="p-3 border-2 border-green-400 mt-3 bg-transparent rounded-lg outline-none font-semibold placeholder:text-sm"
                type="text"
                placeholder="Food name"
              />
              <input
                className="p-3 border-2 border-green-400 mt-3 bg-transparent rounded-lg outline-none font-semibold placeholder:text-sm"
                type="text"
                placeholder="Category"
              />
              <input
                className="p-3 border-2 border-green-400 mt-3 bg-transparent rounded-lg outline-none font-semibold placeholder:text-sm"
                type="text"
                placeholder="Price"
              />
              <textarea
                className="p-3 border-2 border-green-400 mt-3 bg-transparent rounded-lg outline-none font-semibold placeholder:text-sm w-full"
                type="text"
                placeholder="Description"
              />
              <div className="flex items-center justify-between mt-3">
                <label htmlFor="image">
                  <Image className="text-green-500 text-3xl cursor-pointer" />{" "}
                </label>
                <input type="file" className="opacity-0 w-48" id="image" />
              </div>
              <input
                type="submit"
                value={"Add New Food"}
                className="bg-white text-green-500 font-bold p-3 outline-none rounded-lg w-full cursor-pointer mt-3 hover:bg-green-400 hover:text-white transition duration-300 ease-in"
              />
            </form>
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

export default foods;
