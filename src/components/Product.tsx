import { ProductType } from "../context/ProductsProvider"
import { ReactElement } from "react"

type PropsType = {
  product: ProductType
}
const Product = ({ product }: PropsType): ReactElement => {
  const content = (
    <article>
        <h2>{product.category}</h2>
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} />
    </article>
  )
  return content
}

export default Product
