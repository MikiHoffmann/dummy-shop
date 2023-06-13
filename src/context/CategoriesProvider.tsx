import { categoryData } from "./ProductData"
import { ReactElement, useState, createContext, useEffect } from "react"

export interface CategoryType {
  category: string
  id: number
}
export type UseCategoryContextType = { categories: CategoryType[] }
export type ChildrenType = { children?: ReactElement | ReactElement[] }

// const initialState: ProductType[] = []
const initialContextState: UseCategoryContextType = { categories: [] }
const CategoryContext =
  createContext<UseCategoryContextType>(initialContextState)

export const CategoriesProvider = ({ children }: ChildrenType): ReactElement => {
  const [categories, setCategories] = useState<CategoryType[]>([])
    useEffect(() => {
      setCategories(categoryData)
    }, [categoryData])
    
  return (
    <CategoryContext.Provider value={{ categories }}>
      {children}
    </CategoryContext.Provider>
  )
}

export default CategoryContext