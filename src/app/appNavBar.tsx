'use client'

import { AppBar, ListItem, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

export default function AppNavbar() {
  return (
    <>
    <AppBar color='transparent' sx={{color: 'black'}}>
        <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
                <ListItem>
                  App Navbar
                </ListItem>
            </Typography>
        </Toolbar>
    </AppBar>
    </>
  )
}
