import ApplePodcastBadge from "@/assets/icons/apple-podcast-badge"
import GooglePodcastBadge from "@/assets/icons/google-podcast-badge"
import SpotifyBadge from "@/assets/icons/spotify-badge"
import config from "@/cms/site-settings.json"
import {
  AspectRatio,
  Badge,
  Flex,
  Heading,
  Skeleton,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import Image from "next/image"
import { useRouter } from "next/router"
import RenderInView from "../../render-inview"

export default function YaPodcast() {
  const router = useRouter()

  const badgeStyle = {
    cursor: "pointer",
    height: useBreakpointValue({ base: "full" }),
    maxWidth: useBreakpointValue({ base: "unset", md: "100px", xxl: "150px" }),
    _notLast: {
      mr: useBreakpointValue({ base: 0, md: 2 }),
      mb: useBreakpointValue({ base: 2, md: 0 }),
    },
  }

  return (
    <RenderInView>
      {({ ref, inView, loaded, setIsLoaded }) => (
        <Flex
          ref={ref}
          flexDir={{ base: "column", md: "row" }}
          justify="center"
          w="100%"
          my={{ base: 6, md: 10 }}
          id="ya-podcast"
          sx={{
            scrollMarginTop: "2rem",
          }}
        >
          <AspectRatio
            ratio={2 / 2}
            w="100%"
            maxW={{ base: null, md: "14rem", lg: "18rem" }}
            mb={{ base: 4, md: 0 }}
            mr={{ base: 0, md: 5, lg: 6, xl: 8 }}
          >
            <Skeleton height="100%" width="100%" isLoaded={loaded}>
              {inView && (
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={config.podcast_cover_url}
                  alt="Mood cover"
                  quality={50}
                  onLoad={setIsLoaded}
                />
              )}
            </Skeleton>
          </AspectRatio>
          <VStack
            align="flex-start"
            justify={{ base: "flex-start", md: "center" }}
            spacing={{ base: 4, md: 3 }}
            maxW={{ base: "100%", md: "40%" }}
          >
            <Flex
              w="100%"
              flexDir={{ base: "row-reverse", md: "column" }}
              justifyContent={{ base: "space-between", md: "unset" }}
              align={{ base: "center", md: "flex-start" }}
            >
              <Badge h="fit-content" fontWeight="normal" colorScheme="purple">
                Podcast
              </Badge>
              <Heading mt={{ base: 0, md: 2 }} as="h2" size="lg">
                Ya! Podcast
              </Heading>
            </Flex>
            <Text color="brand.gray" fontSize={{ base: "0.8rem", lg: "1rem" }}>
              Ya!Pod is here! Masih belum dengerin episode Ya!Pod bareng
              @sahrultdg, @mdavine05_, dan @khalismrsyd? Yuk langsung aja klik
              link di bio kita buat streaming episode-episode Ya!Pod. Don’t
              forget, we are new every Monday!
            </Text>
            <Flex
              flexDir={{ base: "column", md: "row" }}
              w={{ base: "100%", md: "unset" }}
              align={{ base: "center", md: "center" }}
            >
              <SpotifyBadge
                {...badgeStyle}
                onClick={() =>
                  router.push(
                    "/redirect?url=https://open.spotify.com/show/7mpdCpFNVp9U4BvUXYEoPz"
                  )
                }
              />
              <ApplePodcastBadge
                {...badgeStyle}
                onClick={() =>
                  router.push(
                    "/redirect?url=https://podcasts.apple.com/tr/podcast/ya-pod/id1499375022"
                  )
                }
              />
              <GooglePodcastBadge
                {...badgeStyle}
                onClick={() =>
                  router.push(
                    "/redirect?url=https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xM2RjZGIwYy9wb2RjYXN0L3Jzcw%3D%3D"
                  )
                }
              />
            </Flex>
          </VStack>
        </Flex>
      )}
    </RenderInView>
  )
}
