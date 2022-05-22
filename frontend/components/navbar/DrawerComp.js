import React, { useState } from "react";
import { Drawer, Menu } from "@mui/material";

const DrawerComp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        anchor="top"
      >
        <div className="bg-gray-900">
          <div>hello</div>
        </div>
      </Drawer>
      <Menu
        className="text-green-100"
        onClick={() => setOpenDrawer(!openDrawer)}
      />
    </>
  );
};

export default DrawerComp;
