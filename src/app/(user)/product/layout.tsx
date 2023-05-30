'use client'

import React from "react";
import NavbarProduct from "./NavbarProduct";

interface IProps {
  children: React.ReactNode;
}

const ProductLayout = ({ children }: IProps) => {
  return (
    <>
      <NavbarProduct />
      {/* <h1>ProductLayout</h1> */}
      <div className="out">{children}</div>
    </>
  );
};

export default ProductLayout;
