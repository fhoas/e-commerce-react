import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const NavbarRight = () => {
  return (
    <div className="flex gap-4">
      <FaShoppingCart size={25} />
      <AiOutlineSearch size={25} />
    </div>
  );
};

export default NavbarRight;
