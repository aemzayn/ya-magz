import Link from "next/link"
import {
  useBreakpointValue,
  VStack,
  Heading,
  Flex,
  Box,
} from "@chakra-ui/react"

export default function CarouselCard({ article, color }) {
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
        {article?.tags && <Item>{article.tags.name}</Item>}
        <Item>/</Item>
        {article?.author && <Item>{article.author.name}</Item>}
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
