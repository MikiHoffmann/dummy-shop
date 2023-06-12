import Header from "./components/Header"
import ProductList from "./components/ProductList"
import Footer from "./components/Footer"
import { useState } from "react"

function App() {
  const [category, setCategory] = useState<boolean>(false)
  return (
    <>
      <Header category={category} setCategory={setCategory} />
      <ProductList />
      <Footer />
    </>
  )
}

export default App
