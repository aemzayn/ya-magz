import Link from "next/link"
import {
  Text,
  Box,
  Flex,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react"
import PageLayout from "../page-layout"
import { getTag } from "@/lib/postTags"
import { getAuthor } from "@/lib/authors"

const Item = ({ children }) => (
  <Text
    as="span"
    fontWeight="normal"
    textTransform="uppercase"
    fontSize={{ base: "0.8rem", lg: "0.75rem" }}
    color="gray.600"
    margin="0"
    _notLast={{
      marginRight: 1,
    }}
  >
    {children}
  </Text>
)

const CarouselCard = ({ article, color }) => {
  const titleSize = useBreakpointValue({ base: "2xl", xl: "4xl" })
  return (
    <VStack
      w="full"
      spacing={{ base: 4 }}
      align="flex-start"
      pl={{ base: 4, xl: 8 }}
      py={{ base: 4, md: 6, xl: 16 }}
      pos="relative"
      zIndex="5"
    >
      <Heading d="block" fontSize={titleSize}>
        <Link href={`/read/${article.slug}`}>
          <a>{article.title}</a>
        </Link>
      </Heading>
      <Flex as="span" flexWrap="wrap" alignSelf={{ base: "flex-end" }}>
        {article?.tags && <Item>{getTag(article.tags).name}</Item>}
        <Item>/</Item>
        {article?.author && <Item>{getAuthor(article.author).name}</Item>}
      </Flex>
      <Box
        d="block"
        pos="absolute"
        left={{ base: -4 }}
        top={{ base: -4 }}
        height={{ base: 10 }}
        width={{ base: 10 }}
        bgColor={color}
        zIndex="-1"
      />
      <Box
        d="block"
        pos="absolute"
        top={{ base: "40%", xxl: "50%" }}
        left={{ base: "50%", xxl: "50%" }}
        transform="translate(-50%, -50%)"
        height={{ base: "80%", xxl: "60%" }}
        width={{ base: "full", xxl: "90%" }}
        border="1px solid"
        borderColor={color}
        zIndex="-2"
      />
    </VStack>
  )
}

export default function HomeCarouselCard({ articles }) {
  const colors = [
    "yellow.100",
    "blue.100",
    "red.100",
    "purple.100",
    "green.100",
    "teal.100",
  ]
  return (
    <PageLayout py={{ base: 8, md: 10 }} px={{ base: 4 }} bgColor="white">
      <VStack
        w={{ base: "90%", lg: "80%", xl: "65%", xxl: "50%" }}
        spacing={{ base: 10, md: 6 }}
      >
        {Array.isArray(articles) &&
          articles.map((ar, i) => (
            <CarouselCard key={ar.slug} article={ar} color={colors[i]} />
          ))}
      </VStack>
    </PageLayout>
  )
}
