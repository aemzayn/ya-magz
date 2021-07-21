import { fetchCategorySlug } from "@/libs/api"
import { createContext, useEffect, useState } from "react"

let categoriesCache = []

export const GlobalContext = createContext({
  categories: [],
  imagePopup: "",
})

export default function ContextProvider({ children }) {
  const [categories, setCategories] = useState([])
  const [imagePopup, setImagePopup] = useState("")

  useEffect(() => {
    if (categoriesCache.length === 0) {
      fetchCategorySlug().then(data => {
        setCategories(data)
        categoriesCache.concat(data)
      })
    }
  }, [])

  return (
    <GlobalContext.Provider value={{ categories, imagePopup, setImagePopup }}>
      {children}
    </GlobalContext.Provider>
  )
}
