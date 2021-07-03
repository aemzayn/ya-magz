import Image from "next/image"
import { Box, Flex, VStack } from "@chakra-ui/layout"
import { useBreakpointValue } from "@chakra-ui/media-query"
import { Skeleton } from "@chakra-ui/skeleton"
import PrimaryButton from "../../buttons/primary-button"
import PageLayout from "../../layout/page-layout"
import RenderInView from "../../render-inview"
import HeroAuthorCategory from "../hero/hero-author-category"
import HeroExcerpt from "../hero/hero-excerpt"
import HeroTitle from "../hero/hero-title"

export default function FeaturedArticle({ article, reverse, btnColor }) {
  const image = article?.featuredimage || article?.featuredimageurl
  const titleSize = useBreakpointValue({ base: "lg", md: "xl" })
  const titleContainerWidth = useBreakpointValue({ base: "90%", md: "85%" })
  const textSize = useBreakpointValue({ base: "sm", lg: "md" })

  return (
    <RenderInView>
      {({ ref, inView, loaded, setIsLoaded }) => (
        <PageLayout as="article" px={{ base: 4, md: 10, xl: 20 }}>
          <Flex
            ref={ref}
            height="full"
            width="full"
            backgroundColor="gray.50"
            flexDirection={{
              base: "column",
              lg: reverse ? "row-reverse" : "row",
            }}
            border="1px solid"
            borderColor="gray.100"
            position="relative"
            marginY={{ md: 10 }}
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
              <Skeleton height="100%" width="100%" isLoaded={loaded}>
                {inView && (
                  <Image
                    src={image}
                    alt={article?.title}
                    width={360}
                    height={360}
                    layout="responsive"
                    objectFit="cover"
                    quality={60}
                    onLoad={setIsLoaded}
                  />
                )}
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
                bgColor={btnColor}
                color="white"
              >
                Read Now
              </PrimaryButton>
            </VStack>
          </Flex>
        </PageLayout>
      )}
    </RenderInView>
  )
}
