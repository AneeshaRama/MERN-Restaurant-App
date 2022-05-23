import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Router from "next/router";

const profile = () => {
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
      <div className="max-w-6xl mx-auto">
        <h1>Profile page</h1>
      </div>
    </>
  );
};

export default profile;
