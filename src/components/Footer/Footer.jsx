import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-8 absolute">
      <FooterLeft />
      <FooterRight />
    </footer>
  );
};

export default Footer;
