import React from "react";
import FooterLeft from "./FooterLeft";
import FooterRight from "./FooterRight";

const Footer = () => {
  return (
    <footer className="flex items-center justify-between py-8 relative bottom-0 left-0">
      <FooterLeft />
      <FooterRight />
    </footer>
  );
};

export default Footer;
