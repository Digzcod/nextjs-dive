'use client'

import { Box, Typography } from "@mui/material";
import React from "react";
import { Product } from "./interface/interface";

interface IProps {
  product: Product
}

export const ProductCard = ({product}: IProps) => {
  return (
    <>
      <div>
        <h1>Add Product</h1>
      </div>
      <Box sx={{color: 'red'}}>
        <Typography variant="overline">{product.name}</Typography>
        <Typography variant="overline">{product.price}</Typography>
      </Box>
    </>
  );
};
