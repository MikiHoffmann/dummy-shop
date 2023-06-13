import { useEffect, useState } from "react"

export type CategoryType = {
  category: string
}
const ProductCategories = () => {

  const [categories, setCategories] = useState<CategoryType[]>([])
  useEffect(() => {

      const fetchCategories = async (): Promise => {
        const data = await fetch("https://dummyjson.com/products/categories")
          .then((response) => {
            return response.json()
          })
          .catch((err) => {
            if (err instanceof Error) console.log(err.message)
          })
        console.log(data)
        return data
      }
      fetchCategories().then((categories) => setCategories(categories))
    }, [])
  console.log(categories)
  return (
    <div>ProductCategories</div>
  )
}

export default ProductCategories