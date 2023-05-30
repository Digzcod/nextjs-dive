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
            <Typography variant="h6" color="red" noWrap>
              <ListItem>App Navbar Home Page or the main page</ListItem>
            </Typography>
          </Divider>
        </Toolbar>
      </AppBar>
    </>
  );
}
