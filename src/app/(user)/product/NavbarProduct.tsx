import { AppBar, Divider, Toolbar, Typography } from '@mui/material'
import React from 'react'

const NavbarProduct = () => {
  return (
    <>
      <AppBar color='primary'>
        <Toolbar>
            <Divider>
                <Typography>Product Navbar</Typography>
            </Divider>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default NavbarProduct;
