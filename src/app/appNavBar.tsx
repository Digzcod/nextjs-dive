"use client";

import { AppBar, Divider, ListItem, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function AppNavbar() {
  return (
    <>
      <AppBar color="transparent" sx={{ color: "black" }}>
        <Toolbar>
          <Divider>
            <Typography
              variant="h6"
              color="red"
              noWrap
              sx={{ pl: ".5rem", pr: ".5rem", display: "flex" }}
            >
              <Link href="/">
                <ListItem>Home</ListItem>
              </Link>
              <Link href={"/add-product"}>
                <ListItem>Add Product</ListItem>
              </Link>
            </Typography>
          </Divider>
        </Toolbar>
      </AppBar>
    </>
  );
}
