import { ProductType } from "../context/ProductsProvider"
import { ReactElement } from "react"

type PropsType = {
  product: ProductType
}
const Product = ({ product }: PropsType): ReactElement => {
  const content = (
    <article className="productArticle">
      <figure>
        <img className="productImage" src={product.image} alt={product.title} />
        <figcaption>
          <h2>{product.category}</h2>
        </figcaption>
      </figure>
      <h3>{product.title}</h3>
    </article>
  )
  return content
}

export default Product
