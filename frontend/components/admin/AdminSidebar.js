import React from "react";
import { Bookmark, Fastfood, Group } from "@mui/icons-material";
import Link from "next/link";

const AdminSidebar = () => {
  return (
    <>
      <div className="w-52 border-2 border-green-300 h-[101px] fixed left-24">
        <div className="flex flex-col items-center justify-center">
          <Link href={"/admin/foods"}>
            <div className="flex cursor-pointer hover:bg-white group justify-start items-center space-x-4 border-b-2 border-gray-500 w-full p-3">
              <Fastfood className="text-green-500 ml-2" />
              <h1 className="font-semibold group-hover:text-green-600">
                Food Items
              </h1>
            </div>
          </Link>
          <Link href={"/admin/users"}>
            <div className="flex cursor-pointer hover:bg-white group justify-start items-center space-x-4 border-b-2 border-gray-500 w-full p-3">
              <Group className="text-green-500 ml-2" />
              <h1 className="font-semibold group-hover:text-green-600">
                Users
              </h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
