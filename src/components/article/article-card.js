import Image from "next/image"
import { ChevronRightIcon } from "@chakra-ui/icons"
import { Box, Flex, Heading, Skeleton, Text, VStack } from "@chakra-ui/react"
import Link from "next/link"
import RenderInView from "../render-inview"

const Item = ({ children }) => (
  <Text
    as="span"
    fontWeight="normal"
    fontSize={{ base: "sm", lg: "md" }}
    color="brand.gray"
    margin="0"
  >
    {children}
  </Text>
)

const Article = ({ article }) => {
  const { title, slug, excerpt, image_url, author, category } = article
  const excerptSplit = excerpt?.split(" ")
  return (
    <RenderInView>
      {({ ref, inView, loaded, setIsLoaded }) => (
        <Box
          mx={{ base: 4, md: 6, xl: 8 }}
          className="article"
          mb={{ base: 10, md: 8, lg: 20 }}
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
                  src={image_url}
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
            py={4}
            pos="relative"
            alignItems="flex-start"
            px={{ base: 0, md: 4, xl: "1rem" }}
          >
            <Flex as="span" alignItems="center" flexWrap="wrap">
              {category && <Item>{category.name}</Item>}
              <Text w={6} mx={1.5} h={0.4} bgColor="gray.400" />
              {author && <Item>{author.name}</Item>}
            </Flex>
            <Heading
              className="article-title"
              as="h2"
              fontSize="xl"
              fontWeight={600}
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
            {excerpt && (
              <Text
                color="brand.gray"
                fontSize={{ base: "0.8rem", lg: "1rem" }}
                mr="auto"
                d="block"
                w="full"
              >
                {excerptSplit.length <= 20
                  ? excerptSplit.join(" ")
                  : `${excerptSplit.slice(0, 20).join(" ")}...`}
              </Text>
            )}
            <Text
              color="blue.700"
              className="article-link"
              fontSize={{ base: "0.8rem", lg: "1rem" }}
              transitionDuration={"150ms"}
              _hover={{
                color: "blue.700",
              }}
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
