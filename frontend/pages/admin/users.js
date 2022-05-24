import React, { useEffect, useState } from "react";
import AdminDrawer from "../../components/admin/AdminDrawer";
import AdminSidebar from "../../components/admin/AdminSidebar";
import { useSelector } from "react-redux";
import Router from "next/router";
import axios from "axios";
import AdminUsersList from "../../components/admin/AdminUsersList";

const users = () => {
  const [allUsers, setAllUsers] = useState([]);
  const {
    user: { user },
  } = useSelector((state) => state);

  useEffect(() => {
    const fetchUsers = async () => {
      await axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/users`)
        .then((data) => {
          setAllUsers(data.data.users);
        });
    };
    fetchUsers();
  }, [allUsers]);

  useEffect(() => {
    if (user === null) {
      Router.push("/");
    }
  }, [user]);

  return (
    <>
      <div className="hidden md:flex justify-center max-w-6xl mx-auto min-h-[83vh] p-3 ">
        <AdminSidebar />
        <div className="flex-grow min-w-fit ml-5">
          <div className="flex flex-col items-center">
            <h1 className="text-lg font-semibold text-green-400 mb-4">USERS</h1>
            {allUsers.map((item) => {
              return <AdminUsersList key={item._id} item={item} />;
            })}
          </div>
        </div>
      </div>
      <div className="min-h-[83vh] p-3 md:hidden">
        <div className="flex flex-col">
          <AdminDrawer />
          <div className="flex flex-col justify-center items-center mt-3">
            <h1 className="text-lg font-semibold text-green-400 mb-3">USERS</h1>
            {allUsers.map((item) => {
              return <AdminUsersList key={item._id} item={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default users;
