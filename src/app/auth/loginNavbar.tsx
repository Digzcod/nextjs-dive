import { AppBar, Divider, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const AdminNavbar = () => {
  return (
    <>
      <AppBar color='primary'>
        <Toolbar sx={{display: 'flex', justifyContent: 'center'}}>

            <Divider>
            
              <Link href='/auth'>
                <Typography>Home</Typography>
              </Link>
            </Divider>
            <Divider>
              <Link href='auth/admin'>
                <Typography>Admin</Typography>
              </Link>
            </Divider>
            <Divider>
              <Link href='auth/login'>
                <Typography>Login</Typography>
              </Link>
            </Divider>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default AdminNavbar
