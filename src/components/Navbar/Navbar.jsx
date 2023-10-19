import React from "react";
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <NavbarLeft />
      <NavbarRight />
    </div>
  );
};

export default Navbar;
