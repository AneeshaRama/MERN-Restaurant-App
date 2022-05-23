import React, { useEffect } from "react";
import { userLogin } from "../redux/slices/userSlice";
import { useSelector, useDispatch } from "react-redux";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(window.localStorage.getItem("user"));
    dispatch(userLogin(user));
  }, []);
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
