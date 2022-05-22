import React from "react";
import AdminDrawer from "../../components/admin/AdminDrawer";
import AdminSidebar from "../../components/admin/AdminSidebar";

const orders = () => {
  return (
    <>
      <div className="hidden md:flex justify-center max-w-6xl mx-auto min-h-[83vh] p-3 ">
        <AdminSidebar />
        <div className="flex-grow min-w-fit ml-5">
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-semibold text-green-400">ORDERS</h1>
          </div>
        </div>
      </div>
      <div className="min-h-[83vh] p-3 md:hidden">
        <div className="flex flex-col">
          <AdminDrawer />
          <div className="flex justify-center items-center mt-3">
            <h1 className="text-lg font-semibold text-green-400">ORDERS</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default orders;
