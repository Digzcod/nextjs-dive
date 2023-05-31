import { Product } from '@/app/interface/interface'
import React, { useState } from 'react'
import { ProductContext } from './ProductContext'

interface IProps {
    children: React.ReactNode
}

const ProductContextProvider = ({children}: IProps) => {
    const [products, setProducts] = useState<Product[]>([])

    const addProduct = (product: Product) => {
        product.id = products.length;
        setProducts([...products, product])
    }

  return (
    <ProductContext.Provider value={{ products, addProduct}}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContextProvider
