import Image from "next/image"
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
import { useRouter } from "next/router"
import SpotifyBadge from "@/assets/icons/spotify-badge"
import RenderInView from "../../render-inview"

export default function HomeMood() {
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
      {({ ref, inView }) => (
        <Flex
          ref={ref}
          flexDir={{ base: "column", md: "row-reverse" }}
          justify="center"
          w="100%"
          id="home-mood"
          my={{ base: 6, md: 10 }}
        >
          <AspectRatio
            ratio={2 / 2}
            w="100%"
            maxW={{ base: null, md: "14rem", lg: "18rem" }}
            mb={{ base: 4, md: 0 }}
            ml={{ base: 0, md: 5, lg: 6, xl: 8 }}
            boxShadow="lg"
          >
            <Skeleton height="100%" width="100%" isLoaded={!!inView}>
              {inView && (
                <Image
                  layout="fill"
                  objectFit="cover"
                  src="/images/mood/v5/mood-v5-cover.jpg"
                  alt="Mood cover"
                  quality={50}
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
              <Badge h="fit-content" fontWeight="normal" colorScheme="blue">
                Mood
              </Badge>
              <Heading mt={{ base: 0, md: 2 }} as="h1" size="lg">
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
