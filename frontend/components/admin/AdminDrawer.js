import React, { useState } from "react";
import { Bookmark, Fastfood, Group, MoreVert } from "@mui/icons-material";
import { Drawer } from "@mui/material";
import Link from "next/link";

const AdminDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <div className="flex justify-between items-center z-40 fixed top-20 p-2 bg-gray-900 w-[95vw] mx-auto">
        <h1 className="text-lg font-semibold text-green-100">DASHBOARD</h1>
        <MoreVert
          onClick={() => setOpenDrawer(!openDrawer)}
          className="text-green-500"
        />
      </div>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="right"
      >
        <div className="w-[50vw] bg-gray-900 h-full">
          <div className="flex flex-col item-start justify-center space-y-5 p-2 mt-5">
            <Link href={"/admin/foods"}>
              <div className="flex justify-start items-center cursor-pointer space-x-4">
                <Fastfood
                  onClick={() => setOpenDrawer(false)}
                  className="text-green-400"
                />
                <h1 className="text-green-100 font-semibold">Food Items</h1>
              </div>
            </Link>
            <Link href={"/admin/users"}>
              <div className="flex justify-start items-center cursor-pointer space-x-4">
                <Group
                  onClick={() => setOpenDrawer(false)}
                  className="text-green-400"
                />
                <h1 className="text-green-100 font-semibold">Users</h1>
              </div>
            </Link>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default AdminDrawer;
