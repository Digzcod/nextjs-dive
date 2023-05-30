'use client'

import React from 'react'
import AdminNavbar from './AdminNavbar'

interface IProps {
    children: React.ReactNode
}

const ProductLayout = ({children} : IProps) => {
  return (
    <>
    <AdminNavbar/>
    <div className="out">
        {children}
    </div>
    </>
  )
}

export default ProductLayout