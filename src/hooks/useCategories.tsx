import { useContext } from "react"
import CategoryContext from "../context/CategoriesProvider"
import { UseCategoryContextType } from "../context/CategoriesProvider"

const useCategories = (): UseCategoryContextType => {
    return useContext(CategoryContext)
}

export default useCategories