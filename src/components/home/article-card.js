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

const Item = ({ children }) => (
  <Text
    as="span"
    fontWeight="normal"
    textTransform="uppercase"
    fontSize={{ base: "0.6rem", lg: "0.75rem" }}
    color="gray.600"
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

  const titleSize = "xl"
  const image = featuredimage || featuredimageurl

  return (
    <Box
      px={{ base: 0, md: "0.5rem", xl: "1rem" }}
      className="article"
      mb={{ base: excerpt ? 10 : -5, md: 8, lg: 20 }}
      pos="relative"
    >
      <Box
        w="100%"
        h={{ base: "15rem", lg: "22rem" }}
        maxH={{ base: "30rem", lg: "35rem" }}
      >
        {image ? (
          <Skeleton
            height="100%"
            width="100%"
            isLoaded={featuredimage || featuredimageurl ? true : false}
          >
            <Image
              height="100%"
              width="100%"
              objectFit="cover"
              src={featuredimage || featuredimageurl}
              loading="lazy"
            />
          </Skeleton>
        ) : (
          <Box
            height="100%"
            pos="relative"
            width="100%"
            bgColor="gray.50"
            overflow="hidden"
            _before={{
              content: '"abc"',
              fontWeight: "bold",
              color: "gray.100",
              pos: "absolute",
              fontFamily: "serif",
              bottom: 0,
              left: 0,
              fontSize: "10rem",
            }}
          >
            <Box
              w="full"
              h="full"
              bgColor="gray.100"
              zIndex="2"
              sx={{
                clipPath: "polygon(0 0, 100% 0, 50% 35%)",
              }}
              pos="relative"
            />
          </Box>
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
          as="h5"
          fontSize={titleSize}
          fontWeight="medium"
          maxW="90%"
          mr="auto"
          _hover={{
            color: "gray.500",
          }}
        >
          <Link href={`/read/${slug}`}>
            <a>{title}</a>
          </Link>
        </Heading>
        {excerpt ? (
          <Text
            color="gray.500"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque vel
            blablac
          </chakra.div>
        )}
        <Text
          color="blue.400"
          className="article-link"
          fontSize={{ base: "0.8rem", lg: "1rem" }}
        >
          <Link href={`/read/${slug}`}>
            <a>
              read more
              <ChevronRightIcon />
            </a>
          </Link>
        </Text>
      </VStack>
    </Box>
  )
}

export default Article
