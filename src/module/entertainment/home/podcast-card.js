import { Badge, Flex, Heading, Text, VStack, HStack } from "@chakra-ui/react"
import PosterCover from "./poster-cover"
import RenderInView from "@/components/render-inview"
import PodcastLink from "../shared/podcast-link"
import { SiApplepodcasts, SiGooglepodcasts, SiSpotify } from "react-icons/si"

export default function PodcastCard({
  title,
  desc,
  tag,
  tagColor = "blue",
  coverUrl,
  reverse,
  spotifyUrl,
  appleUrl,
  googleUrl,
}) {
  return (
    <RenderInView>
      {({ ref, inView }) => (
        <Flex
          ref={ref}
          flexDir={{ base: "column", md: !reverse ? "row" : "row-reverse" }}
          justify="center"
          w="100%"
          my={{ base: 6, md: 10 }}
          id="ya-podcast"
          sx={{
            scrollMarginTop: "2rem",
          }}
        >
          {coverUrl && (
            <PosterCover src={coverUrl} alt="Ya! Podcast" inView={inView} />
          )}
          <VStack
            align="flex-start"
            justify={{ base: "flex-start", md: "center" }}
            spacing={{ base: 4, md: 3, xl: 4 }}
            maxW={{ base: "100%", md: "40%" }}
          >
            <Flex
              w="100%"
              flexDir={{ base: "row-reverse", md: "column" }}
              justifyContent={{ base: "space-between", md: "unset" }}
              align={{ base: "center", md: "flex-start" }}
            >
              {tag && (
                <Badge
                  fontWeight="normal"
                  variant="subtle"
                  colorScheme={tagColor}
                >
                  {tag}
                </Badge>
              )}
              {title && (
                <Heading
                  fontFamily="sans-serif"
                  mt={{ base: 0, md: 2 }}
                  as="h2"
                  size="lg"
                >
                  {title}
                </Heading>
              )}
            </Flex>
            {desc && (
              <Text
                color="brand.gray"
                fontSize={{ base: "0.8rem", lg: "1rem" }}
                maxW={{ base: "full", xl: "80%" }}
              >
                {desc}
              </Text>
            )}
            {(spotifyUrl || googleUrl || appleUrl) && (
              <HStack w={{ base: "100%", md: "unset" }} spacing={3}>
                {spotifyUrl && (
                  <PodcastLink link={spotifyUrl} icon={SiSpotify} />
                )}
                {appleUrl && (
                  <PodcastLink link={appleUrl} icon={SiApplepodcasts} />
                )}
                {googleUrl && (
                  <PodcastLink link={googleUrl} icon={SiGooglepodcasts} />
                )}
              </HStack>
            )}
          </VStack>
        </Flex>
      )}
    </RenderInView>
  )
}
