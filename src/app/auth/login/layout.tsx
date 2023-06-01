'use client'

import { Typography } from '@mui/material'
import React from 'react'


interface IProps {
    children: React.ReactNode
}

const ProductLayout = ({children} : IProps) => {
  return (
    <>
    <Typography>Hello Admin</Typography>
    <div className="out">
        {children}
    </div>
    </>
  )
}

export default ProductLayout