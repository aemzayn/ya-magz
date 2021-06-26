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
import PageLayout from "../page-layout"
import config from "@/cms/site-settings.json"
import SpotifyBadge from "@/assets/icons/spotify-badge"

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
    <PageLayout my={5} id="home-podcast">
      <Flex
        flexDir={{ base: "column", md: "row-reverse" }}
        justify="center"
        w="100%"
      >
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
            <Badge h="fit-content" fontWeight="normal" colorScheme="pink">
              Mood
            </Badge>
            <Heading mt={{ base: 0, md: 2 }} as="h1" size={titleSize}>
              Vol .04: Gifted
            </Heading>
          </Flex>
          <Text color="gray.600" fontSize={{ base: "0.8rem", lg: "1rem" }}>
            Saat musisi Indonesia mampu membuktikan kepada dunia bahwa musik
            Indonesia juga bisa ikut bertanding dikancah internasional
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
                  "/redirect?url=https://open.spotify.com/playlist/3avCRGTIVyw3AL5rSnbWwW?si=fD5vhCYvS4CdA83z0t3Cnw"
                )
              }
            />
          </Flex>
        </VStack>
      </Flex>
    </PageLayout>
  )
}
