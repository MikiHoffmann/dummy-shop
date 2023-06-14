import useCategories from "../hooks/useCategories"
import { ReactElement } from "react"

type PropsType = {
  setViewCategory: React.Dispatch<React.SetStateAction<boolean>>
  isCategory: string
  setIsCategory: React.Dispatch<React.SetStateAction<string>>
}
const NavBar = ({ setViewCategory, isCategory, setIsCategory }: PropsType) => {
  const { categories } = useCategories()
  // console.log(categories)

  let pageContent: ReactElement | ReactElement[] = <ul>list</ul>
  console.log(isCategory)
  if (categories?.length) {
    pageContent = categories.map((category) => {
      return (
        <li key={category.id}>
          <button
            className="navButton"
            onClick={(e: any) => {
              setViewCategory(true), setIsCategory(e.target.innerText)
            }}
            value={category.category}
          >
            {category.category}
          </button>
        </li>
      )
    })
  }
  const content = (
    <ul className="navBarList">
      {pageContent}
      <li>
        <button className="navButton" onClick={() => setViewCategory(false)}>
          all categories
        </button>
      </li>
    </ul>
  )
  return <>{content}</>
}

export default NavBar
