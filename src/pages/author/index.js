import Meta from '@/components/article/meta/meta'
import PageLayout from '@/components/page-layout'
import Layout from '@/components/sections/layout'
import { listAuthor } from '@/lib/authors.js'
import Icon from '@chakra-ui/icon'
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input'
import { AspectRatio, Box, Flex, Heading, SimpleGrid } from '@chakra-ui/layout'
import { useBreakpointValue } from '@chakra-ui/media-query'
import { chakra } from '@chakra-ui/system'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

export default function Author({ authors }) {
  const [showAuthors, setShowAuthors] = useState(authors)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (search.length > 0) {
      const newAuthors = searchAuthor(search)
      setShowAuthors(() => newAuthors)
    } else {
      setShowAuthors(authors)
    }
  }, [search, setShowAuthors])

  const searchAuthor = text => {
    return authors.filter(
      author => author.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
    )
  }

  const nameTextAlign = useBreakpointValue({ base: 'center', md: 'center' })

  const url = '/author'
  const title = 'Authors'

  return (
    <Layout>
      <Meta
        url={url}
        title={title}
        keywords={[
          'author',
          'writer',
          'ya magazine author',
          'ya magazine writer',
        ]}
        description='List of Ya! Magazine content writers'
      />

      <PageLayout
        w={{ base: 'full', md: '80vw' }}
        justifyContent='flex-start'
        minH='72vh'
        mx='auto'
      >
        <Flex
          mb={{ base: 2, md: 4, xl: 8 }}
          w='full'
          flexDir={{ base: 'column', md: 'row' }}
          aligItems='center'
          justifyContent={{ base: 'space-between' }}
          pos='relative'
        >
          <Box
            pos={{ base: 'relative', xl: 'absolute' }}
            left={{ base: 'unset', xl: '50%' }}
            transform={{ base: 'unset', xl: 'translateX(-50%)' }}
          >
            <Heading>{search.length > 0 ? search : 'Authors'}</Heading>
          </Box>
          <Box ml={{ base: 'unset', xl: 'auto' }} mt={{ base: 2, md: 'unset' }}>
            <InputGroup>
              <InputLeftElement
                children={<Icon as={FiSearch} />}
                pointerEvents='none'
                color='gray.300'
              />
              <Input
                type='text'
                maxLength={15}
                value={search}
                onChange={e => setSearch(e.target.value)}
                variant='flushed'
                borderRadius='none'
                borderColor='gray.300'
                px={{ base: 2 }}
                focusBorderColor='brand.main'
                placeholder='Search author'
                _placeholder={{
                  color: 'gray.400',
                }}
                _focus={{
                  pr: 2,
                }}
              />
            </InputGroup>
          </Box>
        </Flex>
        <SimpleGrid
          w={{ base: 'full', md: '80vw' }}
          columns={{ base: 2, md: 4, lg: 5 }}
        >
          {Array.isArray(showAuthors) &&
            showAuthors.map((author, id) => (
              <AspectRatio
                ratio={{ base: 2 / 1, md: 1 / 1 }}
                key={id}
                flex={1}
                bgColor='white'
                borderRadius='sm'
                cursor='pointer'
                _hover={{
                  bgColor: 'brand.light',
                }}
              >
                <Link href={`/author/${author.slug}`}>
                  <chakra.a
                    fontSize={{ base: 'sm', md: 'md' }}
                    w='full'
                    textAlign={nameTextAlign}
                  >
                    {author.name}
                  </chakra.a>
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
