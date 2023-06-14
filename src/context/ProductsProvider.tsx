import { ReactElement, createContext, useState, useEffect } from "react"
import { productData } from "./ProductData"

export interface ProductType {
  brand: string
  category: string
  description: string
  discountPercentage: number
  id: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
  title: string
}

export type UseProductsContextType = { products: ProductType[] }
export type ChildrenType = { children?: ReactElement | ReactElement[] }

// const products = productData
const initialContextState: UseProductsContextType = { products: [] }
const ProductsContext =
  createContext<UseProductsContextType>(initialContextState)

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>([])
  
  useEffect(() => {
    setProducts(productData)
  }, [])

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
