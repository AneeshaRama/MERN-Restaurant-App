import React, { useEffect } from "react";
import AdminDrawer from "../../../components/admin/AdminDrawer";
import AdminSidebar from "../../../components/admin/AdminSidebar";
import { useSelector } from "react-redux";
import Router from "next/router";

const dashboard = () => {
  const {
    user: { user },
  } = useSelector((state) => state);

  useEffect(() => {
    if (user === null) {
      Router.push("/");
    }
  }, [user]);
  return (
    <>
      <div className="hidden md:flex justify-center max-w-6xl mx-auto min-h-[83vh] p-3 ">
        <AdminSidebar />
        <div className="flex-grow min-w-fit ml-5">Dashboard</div>
      </div>
      <div className="min-h-[83vh] p-3 md:hidden">
        <div className="flex flex-col">
          <AdminDrawer />
        </div>
      </div>
    </>
  );
};

export default dashboard;
