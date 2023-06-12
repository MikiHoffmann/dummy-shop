import { ReactElement, createContext } from "react"
import { InitialProductState } from "./InitialProductState"

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

// const initialState: ProductType[] = []
const initialContextState: UseProductsContextType = { products: [] }
const ProductsContext =
  createContext<UseProductsContextType>(initialContextState)

export const ProductsProvider = ({ children }: ChildrenType): ReactElement => {
  // const [products, setProducts] = useState<ProductType[]>([])
const products = InitialProductState

  // useEffect(() => {
  //   const fetchProducts = async (): Promise<ProductType[]> => {
  //     const data = await fetch("https://dummyjson.com/products")
  //       .then((response) => {
  //         return response.json()
  //       })
  //       .catch((err) => {
  //         if (err instanceof Error) console.log(err.message)
  //       })
  //     // console.log(data)
  //     return data
  //   }
  //   fetchProducts().then((products) => setProducts(products))
  // }, [])
  // console.log(products)

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  )
}

export default ProductsContext
