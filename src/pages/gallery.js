import { fetchAPI } from "@/libs/api"
import GalleryPage from "@/module/gallery"

export default function gallery({ photos }) {
  return <GalleryPage photos={photos} />
}

export async function getStaticProps() {
  const photos = await fetchAPI("/photos")
  return {
    props: { photos },
    revalidate: 60,
  }
}
