import Meta from '@/components/article/meta/meta'
import GalleryContainer from '@/components/indorsagraphy/gallery-container'
import Layout from '@/components/sections/layout'
import { gallery as images } from '@/cms/gallery.json'

export default function Gallery() {
  return (
    <Layout>
      <Meta
        title='Gallery'
        description='Galeri kolaborasi dengan Indorsagraphy'
        url={'/gallery'}
        keywords={[
          'indorsagraphy',
          'photography',
          'bursa photograph',
          'bursa',
          'ppi bursa',
        ]}
      />
      <GalleryContainer images={images} />
    </Layout>
  )
}
