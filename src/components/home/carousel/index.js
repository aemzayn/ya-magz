import { VStack } from "@chakra-ui/react"
import PageLayout from "../../layout/page-layout"
import CarouselCard from "./carousel-card"

export default function HomeCarousel({ articles }) {
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
