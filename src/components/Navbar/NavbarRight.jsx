import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavbarRight = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/basket");
  }
  return (
    <div className="flex gap-4">
      <FaShoppingCart size={25} onClick={handleClick} />
      <AiOutlineSearch size={25} />
    </div>
  );
};

export default NavbarRight;
