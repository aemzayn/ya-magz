import { useEffect, useState } from "react"
import Meta from "@/components/meta"
import PageLayout from "@/components/layout/page-layout"
import Layout from "@/components/layout"
import {
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react"
import Link from "next/link"
import { FiSearch } from "react-icons/fi"
import fetchApi from "@/libs/fetchApi"

export default function Author({ authors }) {
  const [showAuthors, setShowAuthors] = useState(authors)
  const [search, setSearch] = useState("")

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

  const url = "/author"
  const title = "Authors"

  return (
    <Layout>
      <Meta
        url={url}
        title={title}
        keywords={[
          "author",
          "writer",
          "ya magazine author",
          "ya magazine writer",
        ]}
        description="List of Ya! Magazine content writers"
      />

      <PageLayout
        w={{ base: "full", md: "80vw" }}
        justifyContent="flex-start"
        minH="72vh"
        mx="auto"
      >
        <Flex
          mb={{ base: 2, md: 4, xl: 8 }}
          w="full"
          flexDir={{ base: "column", md: "row" }}
          alignItems="center"
          justifyContent={{ base: "space-between" }}
          pos="relative"
        >
          <Box
            pos={{ base: "relative", xl: "absolute" }}
            left={{ base: "unset", xl: "50%" }}
            transform={{ base: "unset", xl: "translateX(-50%)" }}
          >
            <Heading>{search.length > 0 ? search : "Authors"}</Heading>
          </Box>
          <Box ml={{ base: "unset", xl: "auto" }} mt={{ base: 2, md: "unset" }}>
            <InputGroup>
              <InputLeftElement
                children={<Icon as={FiSearch} />}
                pointerEvents="none"
                color="gray.300"
              />
              <Input
                type="text"
                maxLength={15}
                value={search}
                onChange={e => setSearch(e.target.value)}
                borderRadius="0"
                borderColor="gray.300"
                px={{ base: 2 }}
                focusBorderColor="brand.main"
                placeholder="Search author"
                _placeholder={{
                  color: "gray.300",
                }}
                _focus={{
                  pr: 2,
                }}
              />
            </InputGroup>
          </Box>
        </Flex>
        <VStack mt={{ base: 4 }} w="full" spacing={{ base: 4 }}>
          {Array.isArray(showAuthors) &&
            showAuthors.map((author, id) => (
              <Link href={`/author/${author.slug}`}>
                <Text
                  cursor="pointer"
                  as="a"
                  key={id}
                  _hover={{ color: "brand.gray" }}
                >
                  {author.name}
                </Text>
              </Link>
            ))}
        </VStack>
      </PageLayout>
    </Layout>
  )
}

export async function getStaticProps() {
  const authors = await fetchApi("/authors")
  return {
    props: {
      authors,
    },
  }
}
