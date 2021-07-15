import { fetchCategorySlug } from "@/libs/api"
import { createContext, useEffect, useState } from "react"

export const CategoryContext = createContext([])

export default function ContextProvider({ children }) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    if (categories.length === 0) {
      fetchCategorySlug().then(data => {
        setCategories(data)
      })
    }
  }, [])

  return (
    <CategoryContext.Provider value={categories}>
      {children}
    </CategoryContext.Provider>
  )
}
