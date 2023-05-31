"use client";

import { Divider, Stack } from "@mui/material";
import React from "react";
import { ProductContainer } from "../ProductContainer";

interface IProps {
  children: React.ReactNode;
}

const AddProductLayout = ({ children }: IProps) => {
  return (
    <>
      <Divider
        sx={{
          mt: "5rem",
        }}
      >
        <Stack sx={{ minWidth: "50%", backgroundColor: "#eee", p: "1.5rem" }}>
          <div className="out">{children}</div>
        </Stack>
      </Divider>
    </>
  );
};

export default AddProductLayout;
