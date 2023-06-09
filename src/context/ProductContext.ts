
import { Product } from "@/app/interface/interface";
import { createContext, useContext } from "react";



interface IProductContext {
    products: Product[];
    addProduct: (product: Product) => void;
}

export const ProductContext = createContext<IProductContext>({
    products: [],
    addProduct() {},
})

export const useProductContext = () => useContext(ProductContext)