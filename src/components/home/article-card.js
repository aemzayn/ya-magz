import { getAuthor } from "@/lib/authors"
import { getTag } from "@/lib/postTags"
import { ChevronRightIcon } from "@chakra-ui/icons"
import {
  Box,
  chakra,
  Flex,
  Heading,
  Image,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
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
      {({ ref, inView }) => (
        <Box
          px={{ base: 0, md: "0.5rem", xl: "1rem" }}
          className="article"
          mb={{ base: excerpt ? 10 : -5, md: 8, lg: 20 }}
          pos="relative"
          ref={ref}
        >
          <Box
            w="100%"
            h={{ base: "15rem", lg: "22rem" }}
            maxH={{ base: "30rem", lg: "35rem" }}
          >
            {inView && (
              <Skeleton height="100%" width="100%" isLoaded={!!inView}>
                <Image
                  height="100%"
                  width="100%"
                  objectFit="cover"
                  src={featuredimage || featuredimageurl}
                  loading="lazy"
                  alt={title}
                />
              </Skeleton>
            )}
          </Box>
          <VStack
            spacing={{ base: 2, lg: excerpt ? 3 : 2 }}
            w="100%"
            mt="4"
            pos="relative"
            alignItems="flex-start"
          >
            <Flex as="span" flexWrap="wrap">
              {tags && <Item>{getTag(tags)?.name}</Item>}
              <Item>·</Item>
              {author && <Item>{getAuthor(author)?.name}</Item>}
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
