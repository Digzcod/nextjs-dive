'use client'

import { useProductContext } from "@/context/ProductContext";
import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

export const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const { addProduct } = useProductContext();

  console.log(addProduct)

  const handleSubmitAdd = () => {
    addProduct({ name, price });
    setName("");
    setPrice(0);
  };

  return (
    <>
      <div>AddProduct</div>
      <Box
        component="form"
        sx={{
          p: "1rem",
          pb: "2rem",
        }}
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          sx={{ width: "20rem", height: "1rem", mr: "1rem" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          sx={{ width: "20rem", height: "1rem" }}
          value={price}
          onChange={(e) => setPrice(parseInt(e.target.value))}
        />
        <Button
          variant="contained"
          sx={{ width: "10rem", p: "1rem", ml: ".5rem" }}
          onClick={handleSubmitAdd}
        >
          Add
        </Button>
      </Box>
    </>
  );
};
