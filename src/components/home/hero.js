import { Flex } from "@chakra-ui/react"
import HeroTitle from "./hero-title"
import HeroImage from "./hero-image"
import HeroLayout from "./hero-layout"
import HeroExcerpt from "./hero-excerpt"
import HeroAuthorCategory from "./hero-author-category"
import PrimaryButton from "../article/primary-button"
import { ArrowForwardIcon } from "@chakra-ui/icons"

export default function Hero({ article }) {
  const url = article?.featuredimage || article?.featuredimageurl

  return (
    <HeroLayout>
      <Flex
        as="main"
        minW={{ base: "full", xl: "66%" }}
        d="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        pl={{ base: "0", xl: "8" }}
        py={{ base: "2.5rem", lg: "5rem", xl: 0 }}
      >
        <HeroAuthorCategory author={article?.author} category={article?.tags} />
        <HeroTitle title={article?.title} />
        <HeroExcerpt excerpt={article?.excerpt} />
        <PrimaryButton
          href={`/read/${article?.slug}`}
          rightIcon={<ArrowForwardIcon />}
          bgColor="brand.main"
        >
          Read Now
        </PrimaryButton>
      </Flex>
      <HeroImage url={url} />
    </HeroLayout>
  )
}
