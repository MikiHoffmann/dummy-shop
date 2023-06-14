import Product from "./Product"
import useProducts from "../hooks/useProducts"
import { ReactElement } from "react"

type PropsType = {
  viewCategory: boolean
  isCategory: string
}
const ProductList = ({ viewCategory, isCategory }: PropsType) => {
  const { products } = useProducts()

  let pageContent: ReactElement<any, string | React.JSXElementConstructor<any>> | ReactElement<any, string | React.JSXElementConstructor<any>>[] = <p>Loading...</p>

  // console.log(products)
  console.log(viewCategory)
  console.log(isCategory)
  if (products?.length) {
    if (viewCategory === false) {
      pageContent = products.map((product) => {
        return <Product key={product.id} product={product} />
      })
    }
    else {
      pageContent = products.map((product) => {
        if (isCategory === product.category) return <Product key={product.id} product={product} />
      
    })
  }
  }
  const content = <main className="productList">{pageContent}</main>
  return content
}

export default ProductList
