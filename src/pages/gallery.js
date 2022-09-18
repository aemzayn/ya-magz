import { fetchAPI } from "@/libs/api"
import GalleryPage from "@/module/gallery"

export default function gallery({ photos }) {
  return <GalleryPage photos={photos} />
}

export async function getServerSideProps() {
  const photos = await fetchAPI("/photos?_sort=photographer.name")
  return {
    props: { photos },
  }
}
