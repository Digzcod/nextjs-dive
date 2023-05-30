import { AppBar, Divider, Toolbar, Typography } from '@mui/material'
import React from 'react'

const AdminNavbar = () => {
  return (
    <>
      <AppBar color='secondary'>
        <Toolbar>
            <Divider>
                <Typography>Admin Navbar</Typography>
            </Divider>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default AdminNavbar
