import { useState } from 'react'
import Link from 'next/link'

import PageLayout from '@/components/page-layout'
import Layout from '@/components/sections/layout'
import { listAuthor } from '@/lib/authors.js'
import { AspectRatio, Flex, Heading, SimpleGrid } from '@chakra-ui/layout'
import { chakra } from '@chakra-ui/system'
import { Input } from '@chakra-ui/input'

export default function Author({ authors }) {
  const [showAuthors, setShowAuthors] = useState(authors)
  const [search, setSearch] = useState('')

  return (
    <Layout>
      <PageLayout>
        <Flex w='full' flexDir={{ base: 'column', md: 'row' }}>
          <Heading mb={{ base: 2, md: 4 }}>Authors</Heading>
          <Input
            aria-autocomplete='list'
            autoComplete='off'
            autoCorrect='off'
            spellCheck='false'
            maxLength={64}
            name='author'
            value={search}
            onChange={e => setSearch(() => e.target.value)}
            placeholder='Search author'
          />
        </Flex>
        <SimpleGrid
          columns={{ base: 3, md: 5 }}
          w={{ base: 'full', md: '80vw' }}
        >
          {Array.isArray(authors) &&
            authors.map((author, id) => (
              <AspectRatio
                ratio={1 / 1}
                key={id}
                flex={1}
                bgColor='white'
                borderRadius='sm'
                cursor='pointer'
                _hover={{
                  bgColor: 'orange.100',
                }}
              >
                <Link href={`/author/${author.slug}`}>
                  <chakra.a>{author.name}</chakra.a>
                </Link>
              </AspectRatio>
            ))}
        </SimpleGrid>
      </PageLayout>
    </Layout>
  )
}

export function getStaticProps() {
  const authors = listAuthor()
  return {
    props: {
      authors,
    },
  }
}
