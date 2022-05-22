import React, { useState } from "react";
import Link from "next/link";
import { useMediaQuery, useTheme, Drawer } from "@mui/material";
import {
  Person,
  ShoppingBasket,
  Menu,
  Home,
  PersonAdd,
  AdminPanelSettingsOutlined,
} from "@mui/icons-material";

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      <nav className="max-w-6xl mx-auto flex items-center justify-between h-20 p-3">
        <div>
          <Link href={"/"}>
            <a>
              <h1 className="logo text-4xl md:text-5xl font-bold tracking-wider bg-gradient-to-br from-lime-300 to-green-400 cursor-pointer bg-clip-text text-transparent ">
                Swirly
              </h1>
            </a>
          </Link>
        </div>
        <div className="text-green-100 md:text-lg flex items-center font-semibold space-x-5">
          {isMatch ? (
            <>
              <Drawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                anchor="top"
              >
                <div className="bg-gray-900 min-h-[30vh] p-3">
                  <Link href={"/"}>
                    <a>
                      <div
                        className="flex mt-3 space-x-5 justify-start ml-10 items-center"
                        onClick={() => setOpenDrawer(false)}
                      >
                        <Home className="text-green-500" />
                        <h1 className="text-green-100 font-semibold">Home</h1>
                      </div>
                    </a>
                  </Link>
                  <Link href={"/profile"}>
                    <a>
                      <div
                        className="flex mt-5 space-x-5 justify-start ml-10 items-center"
                        onClick={() => setOpenDrawer(false)}
                      >
                        <Person className="text-green-500" />
                        <h1 className="text-green-100 font-semibold">
                          Profile
                        </h1>
                      </div>
                    </a>
                  </Link>
                  <Link href={"/admin/dashboard"}>
                    <a>
                      <div
                        className="flex mt-5 space-x-5 justify-start ml-10 items-center"
                        onClick={() => setOpenDrawer(false)}
                      >
                        <AdminPanelSettingsOutlined className="text-green-500" />
                        <h1 className="text-green-100 font-semibold">
                          Dashboard
                        </h1>
                      </div>
                    </a>
                  </Link>
                  <Link href={"/login"}>
                    <a>
                      <div
                        className="flex mt-5 space-x-5 justify-start ml-10 items-center"
                        onClick={() => setOpenDrawer(false)}
                      >
                        <PersonAdd className="text-green-500" />
                        <h1 className="text-green-100 font-semibold">Login</h1>
                      </div>
                    </a>
                  </Link>
                </div>
              </Drawer>
            </>
          ) : (
            <>
              <Link href={"/"}>
                <a className="cursor-pointer hover:text-green-500 transition duration-300 ease-in">
                  Home
                </a>
              </Link>
              <Link href={"/admin/dashboard"}>
                <a className="cursor-pointer hover:text-green-500 transition duration-300 ease-in">
                  Dashbord
                </a>
              </Link>
              <Link href={"/login"}>
                <a className="cursor-pointer hover:text-green-500 transition duration-300 ease-in">
                  Login
                </a>
              </Link>
              <Link href={"/profile"}>
                <a className="cursor-pointer hover:text-green-500 transition duration-300 ease-in">
                  <Person />
                </a>
              </Link>
            </>
          )}

          <Link href={"/cart"}>
            <a className="cursor-pointer hover:text-green-500 transition duration-300 relative ease-in">
              <ShoppingBasket />
              <p className="absolute -top-1 -right-2 text-sm bg-red-500 text-white justify-center flex animate-bounce items-center rounded-full h-5 w-5">
                1
              </p>
            </a>
          </Link>
          {isMatch && (
            <Menu
              className="text-green-100"
              onClick={() => setOpenDrawer(!openDrawer)}
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
