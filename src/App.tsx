import Header from "./components/Header"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
  const [viewCategory, setViewCategory] = useState<boolean>(false)
  const [ isCategory, setIsCategory] = useState<string>("")
  return (
    <>
      <Header  setViewCategory={setViewCategory} isCategory={isCategory} setIsCategory={setIsCategory} />
      <ProductList viewCategory={viewCategory} isCategory={isCategory}/>
      <Footer />
    </>
  )
}

export default App
