import Product from "./Product"
import useProducts from "../hooks/useProducts"
import { ReactElement } from "react"

const ProductList = () => {
  const { products } = useProducts()
  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

  if (products?.length) {
    pageContent = products.map((product) => {
      return <Product key={product.id} product={product} />
    })
  }
  const content = <main className="productList">{pageContent}</main>
  return content
}

export default ProductList
