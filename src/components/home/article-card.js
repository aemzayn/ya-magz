import Image from "next/image"

import { getAuthor } from "src/libs/authors"
import { getTag } from "src/libs/postTags"
import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  Box,
  chakra,
  Flex,
  Heading,
  Image as ChakraImage,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react"
import Link from "next/link"
import RenderInView from "../render-inview"

const Item = ({ children }) => (
  <Text
    as="span"
    fontWeight="normal"
    fontSize={{ base: "0.7rem", lg: "0.85rem" }}
    color="brand.gray"
    margin="0"
    _notLast={{
      marginRight: 1,
    }}
  >
    {children}
  </Text>
)

const Article = ({ article }) => {
  const {
    title,
    slug,
    excerpt,
    featuredimage,
    featuredimageurl,
    author,
    tags,
  } = article

  return (
    <RenderInView>
      {({ ref, inView, loaded, setIsLoaded }) => (
        <Box
          px={{ base: 0, md: "0.5rem", xl: "1rem" }}
          className="article"
          mb={{ base: excerpt ? 10 : -5, md: 8, lg: 20 }}
          pos="relative"
          ref={ref}
        >
          <Box w="100%" maxH={{ base: "30rem", lg: "35rem" }}>
            <Skeleton height="100%" width="100%" isLoaded={loaded}>
              {inView && (
                <Image
                  width={500}
                  height={350}
                  objectFit="cover"
                  src={featuredimage || featuredimageurl}
                  alt={title}
                  quality={50}
                  onLoad={setIsLoaded}
                />
              )}
            </Skeleton>
          </Box>
          <VStack
            spacing={{ base: 2, lg: excerpt ? 3 : 2 }}
            w="100%"
            mt="4"
            pos="relative"
            alignItems="flex-start"
          >
            <Flex as="span" flexWrap="wrap">
              {tags && <Item>{tags.name}</Item>}
              <Item>·</Item>
              {author && <Item>{author.name}</Item>}
            </Flex>
            <Heading
              className="article-title"
              as="h2"
              fontSize="xl"
              fontWeight="medium"
              maxW="90%"
              mr="auto"
              _hover={{
                color: "brand.gray",
              }}
            >
              <Link href={`/read/${slug}`}>
                <a>{title}</a>
              </Link>
            </Heading>
            {excerpt ? (
              <Text
                color="brand.gray"
                fontSize={{ base: "0.8rem", lg: "1rem" }}
                mr="auto"
                d="block"
                w="full"
              >
                {excerpt}
              </Text>
            ) : (
              <chakra.div
                bgColor="white"
                pos="relative"
                zIndex="-1"
                opacity={0}
                order="1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                vel blablac
              </chakra.div>
            )}
            <Text
              color="blue.700"
              className="article-link"
              fontSize={{ base: "0.8rem", lg: "1rem" }}
              textDecor="underline"
            >
              <Link href={`/read/${slug}`}>
                <a>
                  continue reading
                  <ChevronRightIcon />
                </a>
              </Link>
            </Text>
          </VStack>
        </Box>
      )}
    </RenderInView>
  )
}

export default Article
