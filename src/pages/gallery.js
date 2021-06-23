import Meta from "@/components/meta/meta"
import GalleryContainer from "@/components/indorsagraphy/gallery-container"
import Layout from "@/components/sections/layout"
import gallery from "@/cms/gallery.json"

export default function Gallery() {
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
