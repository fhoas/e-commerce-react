import React from "react";
import { useNavigate } from "react-router-dom";

const NavbarLeft = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }

  return (
    <div
      onClick={handleClick}
      className="flex justify-center items-center gap-1"
    >
      <img
        className="w-[50px] h-[50px]"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Android_O_Preview_Logo.png/480px-Android_O_Preview_Logo.png"
        alt=""
      />
      <h3>OnlineCartel</h3>
    </div>
  );
};

export default NavbarLeft;
