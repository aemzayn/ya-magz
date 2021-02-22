import Meta from '@/components/article/meta/meta'
import MasonryContainer from '@/components/indorsagraphy/masonryContainer'
import Layout from '@/components/sections/layout'
import { gallery as images } from '@/cms/meta/gallery.json'

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
      <MasonryContainer images={images} />
    </Layout>
  )
}
