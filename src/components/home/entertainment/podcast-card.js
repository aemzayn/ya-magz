import ApplePodcastBadge from "@/assets/icons/apple-podcast-badge"
import GooglePodcastBadge from "@/assets/icons/google-podcast-badge"
import SpotifyBadge from "@/assets/icons/spotify-badge"
import { Badge, Flex, Heading, Text, VStack } from "@chakra-ui/react"
import { useRouter } from "next/router"
import RenderInView from "../../render-inview"
import PosterCover from "./poster-cover"
import useBadgeStyle from "@/hooks/useBadgeStyle"

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
  const router = useRouter()
  const badgeStyle = useBadgeStyle()
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
                <Heading mt={{ base: 0, md: 2 }} as="h2" size="lg">
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
              <Flex
                flexDir={{ base: "column", md: "row" }}
                w={{ base: "100%", md: "unset" }}
                align={{ base: "center", md: "center" }}
              >
                {spotifyUrl && (
                  <SpotifyBadge
                    {...badgeStyle}
                    onClick={() => router.push(`/redirect?url=${spotifyUrl}`)}
                  />
                )}
                {appleUrl && (
                  <ApplePodcastBadge
                    {...badgeStyle}
                    onClick={() => router.push(`/redirect?url=${appleUrl}`)}
                  />
                )}
                {googleUrl && (
                  <GooglePodcastBadge
                    {...badgeStyle}
                    onClick={() => router.push(`/redirect?url=${googleUrl}`)}
                  />
                )}
              </Flex>
            )}
          </VStack>
        </Flex>
      )}
    </RenderInView>
  )
}
