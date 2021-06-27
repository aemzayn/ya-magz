import { Image as ChakraImage } from "@chakra-ui/image"
import { Box, Flex, VStack } from "@chakra-ui/layout"
import { useBreakpointValue } from "@chakra-ui/media-query"
import { Skeleton } from "@chakra-ui/skeleton"
import PrimaryButton from "../article/primary-button"
import PageLayout from "../layout/page-layout"
import HeroAuthorCategory from "./hero-author-category"
import HeroExcerpt from "./hero-excerpt"
import HeroTitle from "./hero-title"

export default function FeaturedArticle({
  article,
  reverse,
  imgPos = "center",
  colorScheme,
  btnColor,
}) {
  const image = article?.featuredimage || article?.featuredimageurl
  const titleSize = useBreakpointValue({ base: "lg", md: "xl" })
  const titleContainerWidth = useBreakpointValue({ base: "90%", md: "85%" })
  const textSize = useBreakpointValue({ base: "sm", lg: "md" })
  return (
    <PageLayout as="article" my={10} px={{ base: 4, md: 10, xl: 20 }}>
      <Flex
        h="full"
        w="full"
        bgColor="gray.50"
        flexDir={{ base: "column", lg: reverse ? "row-reverse" : "row" }}
        border="1px solid"
        borderColor="gray.100"
        pos="relative"
      >
        {/* Image */}
        <Box
          pos={{ base: "relative", lg: "relative" }}
          w={{ base: "full", lg: "50%" }}
          h={{ base: "25vh", md: "31rem", lg: "full" }}
          maxH={{ base: "unset", md: "30vh", lg: "unset" }}
          overflowY="hidden"
          h="full"
        >
          <Skeleton w="full" h="full" isLoaded={image ? true : false}>
            <ChakraImage
              draggable="false"
              src={image}
              w={{ base: "full" }}
              h={{ base: "full" }}
              objectFit="cover"
              objectPosition={imgPos}
              loading="lazy"
              alt={article?.title}
            />
          </Skeleton>
        </Box>
        <VStack
          spacing={{ base: 4, md: 2, lg: 4 }}
          my="auto"
          w={{ base: "full", lg: "50%" }}
          h={{ base: "50%", md: "unset", lg: "full" }}
          py={{ base: 8, md: 10 }}
        >
          <HeroAuthorCategory
            author={article?.author}
            category={article?.tags}
            fontSize={textSize}
          />
          <HeroTitle
            title={article?.title}
            heading={{ size: titleSize }}
            stack={{ maxW: titleContainerWidth }}
          />
          <HeroExcerpt
            excerpt={article?.excerpt}
            maxW={{ base: "80%", lg: "78%" }}
            color={{ base: "brand.gray" }}
            fontSize={textSize}
            marginBottom={{ base: 2, md: 4 }}
          />
          <PrimaryButton
            href={`/read/${article?.slug}`}
            colorScheme="blue"
            fontSize={textSize}
            // btnColor="blue.200"
            bgColor={btnColor}
            color="white"
            // bgColor="white"
          >
            Read Now
          </PrimaryButton>
        </VStack>
      </Flex>
    </PageLayout>
  )
}
