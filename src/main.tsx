import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./main.css"
import { ProductsProvider } from "./context/ProductsProvider.tsx"
import { CategoriesProvider } from "./context/CategoriesProvider.tsx"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CategoriesProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </CategoriesProvider>
  </React.StrictMode>
)
