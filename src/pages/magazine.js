import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Meta from '@/components/article/meta/meta'
import Layout from '@/components/sections/layout'
import GridNav from '@/components/read/grid-nav'
import Grid from '@/components/read/grid'
import { magazines } from '@/cms/magazines.json'
import { bulletins } from '@/cms/bulletins.json'
import GridLayout from '@/components/read/grid-layout'

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
        title='Read'
        url='/read'
        description='Magazines and Bulletins published by Ya! Magazine.'
      />
      <GridLayout>
        <GridNav
          bulletins={bulletins}
          magazines={magazines}
          show={show}
          setShow={setShow}
        />
        <Grid items={show} />
      </GridLayout>
    </Layout>
  )
}
