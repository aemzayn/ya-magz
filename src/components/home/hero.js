import { GridItem, useBreakpointValue, VStack } from "@chakra-ui/react"
import HeroTitle from "./hero-title"
import HeroImage from "./hero-image"
import HeroLayout from "./hero-layout"
import HeroExcerpt from "./hero-excerpt"
import HeroAuthorCategory from "./hero-author-category"
import PrimaryButton from "../article/primary-button"
import { ArrowForwardIcon } from "@chakra-ui/icons"

export default function Hero({ article }) {
  const url = article?.featuredimage || article?.featuredimageurl
  const textSize = useBreakpointValue({ base: "sm", lg: "md" })

  return (
    <HeroLayout>
      <VStack
        as={GridItem}
        gridArea="main"
        spacing={{ base: 2, md: 4 }}
        as="main"
        // w={{ base: "full", lg: "60%", xl: "66%" }}
        flex={{ base: 1, lg: "unset" }}
        pl={{ base: "0", xl: "8" }}
        py={{ base: "8", md: 0, lg: "5rem", xl: 20 }}
        bgColor="gray.50"
        justifyContent="center"
      >
        <HeroAuthorCategory
          author={article?.author}
          category={article?.tags}
          textSize={textSize}
        />
        <HeroTitle title={article?.title} />
        <HeroExcerpt excerpt={article?.excerpt} textSize={textSize} />
        <PrimaryButton
          href={`/read/${article?.slug}`}
          rightIcon={<ArrowForwardIcon />}
          bgColor="brand.main"
          color="white"
          fontSize={textSize}
        >
          Read Now
        </PrimaryButton>
      </VStack>
      <HeroImage alt={article?.title} url={url} />
    </HeroLayout>
  )
}
