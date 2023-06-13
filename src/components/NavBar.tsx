import useCategories from "../hooks/useCategories"
import { ReactElement } from "react"

const NavBar = () => {
  const { categories } = useCategories()
  console.log(categories)

  let pageContent: ReactElement | ReactElement[] = <ul>list</ul>

  if (categories?.length) {
    pageContent = categories.map((category) => {
      return (
        <li key={category.id}>
          <button value={category.category}>{category.category}</button>
        </li>
      )
    })
  }
  const content = <ul>{pageContent}</ul>
  return <>{content}</>
}

export default NavBar
