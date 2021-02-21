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

const dummyImages = [
  {
    author: 'aemzayn',
    image:
      'https://images.unsplash.com/photo-1611815837977-4a2f88579493?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    author: 'aemzayn',
    image:
      'https://images.unsplash.com/photo-1586375738288-859e9f8e62a7?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    author: 'aemzayn',
    image:
      'https://images.unsplash.com/photo-1611720027898-d834e9edc131?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1055&q=80',
  },
  {
    author: 'aemzayn',
    image:
      'https://images.unsplash.com/photo-1611783569248-a82ec2e72c67?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    author: 'aemzayn',
    image:
      'https://images.unsplash.com/photo-1611781566548-13aa46d04ec6?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    author: 'aemzayn',
    image:
      'https://images.unsplash.com/photo-1611779455192-039f8e4bd996?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    author: 'aemzayn',
    image:
      'https://images.unsplash.com/photo-1611776701003-efd48f7a1d57?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
  {
    author: 'aemzayn',
    image:
      'https://images.unsplash.com/photo-1611776701631-8b57e06f1948?ixid=MXwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2Mnx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
  },
]
