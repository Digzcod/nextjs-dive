'use client'

import React from 'react'
import LoginNavbar from './loginNavbar'

interface IProps {
    children: React.ReactNode
}

const ProductLayout = ({children} : IProps) => {
  return (
    <>
    <LoginNavbar/>
    <div className="out">
        {children}
    </div>
    </>
  )
}

export default ProductLayout