import { useProductContext } from '@/context/ProductContext'
import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import { ProductCard } from './ProductCard'



export const ProductContainer = () => {
    const {products} = useProductContext()
    console.log(products)

    if(products.length === 0) return <Typography variant='h3' color='red'>No Product added yet!</Typography>

  return (
    <Card sx={{mt: '6rem'}}>
     <h1>Product Container</h1>
     <Box>
        {products.map((product) => (
            <ProductCard product={product} key={product.id}/>
        ))}
     </Box>
    </Card>
  )
}
