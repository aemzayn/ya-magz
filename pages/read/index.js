import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Meta from '@/components/article/meta/meta'
import Layout from '@/components/sections/layout'
import Nav from '@/components/read/nav'
import Grid from '@/components/read/grid'
import { magazines } from '@/cms/magazines.json'
import { bulletins } from '@/cms/bulletins.json'
import GridContainer from '@/components/read/grid-container'

export default function Read() {
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
      <Meta title='Read' url='/read' />
      <GridContainer>
        <Nav
          bulletins={bulletins}
          magazines={magazines}
          show={show}
          setShow={setShow}
        />
        <Grid items={show} />
      </GridContainer>
    </Layout>
  )
}
