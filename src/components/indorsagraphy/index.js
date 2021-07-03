import Layout from "../layout"
import Meta from "../meta"
import GalleryContainer from "./gallery-container"
import gallery from "@/cms/gallery.json"

export default function Indorsagraphy() {
  const images = gallery.gallery
  return (
    <Layout>
      <Meta
        title="Gallery"
        description="Galeri kolaborasi dengan Indorsagraphy"
        url={"/gallery"}
        keywords={[
          "indorsagraphy",
          "photography",
          "bursa photograph",
          "bursa",
          "ppi bursa",
        ]}
      />
      <GalleryContainer images={images} />
    </Layout>
  )
}
