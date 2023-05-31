'use client'

import React from 'react'
import AppNavbar from './appNavBar'
import { ProductContainer } from './ProductContainer'
import { Box, Card, Divider } from '@mui/material'

export default function HomePage() {
  return (
    <Divider sx={{maxWidth: "85%"}}>

    <Box sx={{mt: '6rem', color: '#332'}}>
      <ProductContainer/>
    </Box>
    </Divider>
  )
}
