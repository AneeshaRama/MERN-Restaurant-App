import React from "react";
import AdminDrawer from "../../components/admin/AdminDrawer";
import AdminSidebar from "../../components/admin/AdminSidebar";

const foods = () => {
  return (
    <>
      <div className="hidden md:flex justify-center max-w-6xl mx-auto min-h-[83vh] p-3 ">
        <AdminSidebar />
        <div className="flex-grow min-w-fit ml-5">Foods</div>
      </div>
      <div className="min-h-[83vh] p-3 md:hidden">
        <div className="flex flex-col">
          <AdminDrawer />
        </div>
      </div>
    </>
  );
};

export default foods;
