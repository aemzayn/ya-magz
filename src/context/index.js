import { fetchCategorySlug } from "@/libs/api"
import { createContext, useContext, useEffect, useState } from "react"

let categoriesCache = []

const initialCategories = [
  {
    name: "Art",
    slug: "art",
  },
  {
    name: "Knowledge Center",
    slug: "knowledge-center",
  },
  {
    name: "Lifehacks",
    slug: "lifehacks",
  },
  {
    name: "Lifestyle",
    slug: "lifestyle",
  },
  {
    name: "Opini",
    slug: "opini",
  },
  {
    name: "News",
    slug: "news",
  },
  {
    name: "Plesiran",
    slug: "plesiran",
  },
  {
    name: "Religion",
    slug: "religion",
  },
  {
    name: "Tokoh",
    slug: "tokoh",
  },
]

export const GlobalContext = createContext({
  categories: [...initialCategories],
  imagePopup: "",
})

export default function ContextProvider({ children }) {
  const [categories, setCategories] = useState([...initialCategories])
  const [imagePopup, setImagePopup] = useState("")

  useEffect(() => {
    if (categoriesCache.length === 0) {
      fetchCategorySlug().then(data => {
        if (data) {
          setCategories(data)
          categoriesCache.concat(data)
        }
      })
    }
  }, [])

  return (
    <GlobalContext.Provider value={{ categories, imagePopup, setImagePopup }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)
