import {
  AspectRatio,
  Badge,
  Flex,
  Heading,
  Image,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import config from "@/cms/site-settings.json"
import SpotifyBadge from "@/assets/icons/spotify-badge"
import RenderInView from "../render-inview"

export default function HomeMood() {
  const router = useRouter()
  const titleSize = useBreakpointValue({ base: "lg", md: "lg" })

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
      {({ ref, inView }) => (
        <Flex
          ref={ref}
          flexDir={{ base: "column", md: "row-reverse" }}
          justify="center"
          w="100%"
          id="home-mood"
        >
          {inView && (
            <AspectRatio
              ratio={2 / 2}
              w="100%"
              maxW={{ base: null, md: "14rem", lg: "18rem" }}
              mb={{ base: 4, md: 0 }}
              ml={{ base: 0, md: 5, lg: 6, xl: 8 }}
            >
              <Image
                h="100%"
                w="100%"
                objectFit="cover"
                src={config.mood_cover_url}
                loading="lazy"
                boxShadow="xl"
                alt="Mood cover"
              />
            </AspectRatio>
          )}
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
              <Badge h="fit-content" fontWeight="normal" colorScheme="blue">
                Mood
              </Badge>
              <Heading mt={{ base: 0, md: 2 }} as="h1" size={titleSize}>
                Vol .05: SUMMER
              </Heading>
            </Flex>
            <Text color="brand.gray" fontSize={{ base: "0.8rem", lg: "1rem" }}>
              Menikmati liburan musim panas dengan lagu-lagu yang bakal ngebuat
              kamu betah berlama-lama untuk menikmatinya.
            </Text>
            <Flex
              flexDir={{ base: "column", md: "row" }}
              textAlign="center"
              w={{ base: "100%", md: "unset" }}
              align={{ base: "center", md: "flex-start" }}
            >
              <SpotifyBadge
                {...badgeStyle}
                onClick={() =>
                  router.push(
                    "/redirect?url=https://open.spotify.com/playlist/2K19a0sPgjI1rG097PsOaP"
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
