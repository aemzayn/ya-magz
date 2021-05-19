import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Meta from '@/components/article/meta/meta'
import Layout from '@/components/sections/layout'
import MagazineNav from '@/components/read/grid-nav'
import MagazineGrid from '@/components/read/grid'
import { magazines } from '@/cms/magazines.json'
import { bulletins } from '@/cms/bulletins.json'
import MagazinePageLayout from '@/components/read/grid-layout'

export default function Magazine() {
  const router = useRouter()
  const [show, setShow] = useState(magazines)

  useEffect(() => {
    if (router.query.s === 'bulletins') {
      setShow(bulletins)
    } else {
      setShow(magazines)
    }
  }, [router.query.s])

  return (
    <Layout>
      <Meta
        title='Magazines'
        url='/magazine'
        keywords={[
          'Ya! Magazine',
          'Magazines',
          'Bulletins',
          'Magazine from Ya! Magazine',
          'Edutainment Magazine',
        ]}
        description='Magazines and Bulletins published by Ya! Magazine.'
      />
      <MagazinePageLayout>
        <MagazineNav
          bulletins={bulletins}
          magazines={magazines}
          show={show}
          setShow={setShow}
        />
        <MagazineGrid items={show} />
      </MagazinePageLayout>
    </Layout>
  )
}
