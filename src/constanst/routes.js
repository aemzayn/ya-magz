import {
  AiFillHome,
  AiFillPicture,
  AiFillRead,
  AiOutlineHome,
  AiOutlinePicture,
  AiOutlineRead,
} from "react-icons/ai"
import {
  RiBook2Fill,
  RiBook2Line,
  RiSpotifyFill,
  RiSpotifyLine,
} from "react-icons/ri"

export const HOME_ROUTE = "/"
export const READ_ROUTE = "/read"
export const MAGAZINE_ROUTE = "/magazine"
export const GALLERY_ROUTE = "/gallery"
export const ENTERTAINMENT_ROUTE = "/entertainment"
export const AUTHORS_ROUTE = "/authors"
export const ABOUT_US_ROUTE = "/about-us"
export const MEET_THE_TEAM_ROUTE = "/meet-the-team"
export const CATEGORIES_ROUTE = "/category"

export const READ_ID_ROUTE = id => `${READ_ROUTE}/${id}`
export const CATEGORY_ID_ROUTE = id => `${CATEGORIES_ROUTE}/${id}`
export const AUTHOR_ID_ROUTE = id => `${AUTHORS_ROUTE}/${id}`
export const READ_PAGE_ROUTE = page => `${READ_ROUTE}/page/${page}`

export const navigationLinks = [
  {
    name: "Home",
    to: HOME_ROUTE,
    icon: AiOutlineHome,
    activeIcon: AiFillHome,
  },
  {
    name: "Read",
    to: READ_ROUTE,
    icon: AiOutlineRead,
    activeIcon: AiFillRead,
  },
  {
    name: "Magazine",
    to: MAGAZINE_ROUTE,
    icon: RiBook2Line,
    activeIcon: RiBook2Fill,
  },
  {
    name: "Gallery",
    to: GALLERY_ROUTE,
    icon: AiOutlinePicture,
    activeIcon: AiFillPicture,
  },
  {
    name: "Entertainment",
    to: ENTERTAINMENT_ROUTE,
    icon: RiSpotifyLine,
    activeIcon: RiSpotifyFill,
  },
]

export const footerLinks = [
  { name: "Home", path: HOME_ROUTE },
  { name: "Articles", path: READ_ROUTE },
  { name: "Magazines", path: MAGAZINE_ROUTE },
  { name: "Authors", path: AUTHORS_ROUTE },
  { name: "About Us", path: ABOUT_US_ROUTE },
  { name: "Meet the Team", path: MEET_THE_TEAM_ROUTE },
  { name: "Gallery", path: GALLERY_ROUTE },
]
