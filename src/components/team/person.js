import Image from "next/image"
import {
  AspectRatio,
  Box,
  Heading,
  HStack,
  Text,
  Tooltip,
  useBreakpointValue,
  VStack,
  Skeleton,
  Flex,
  Link,
} from "@chakra-ui/react"
import BoringAvatar from "boring-avatars"
import RenderInView from "../RenderInView"

function Social({ platform }) {
  switch (platform.trim().toLowerCase()) {
    case "instagram":
      return "IG"
    case "twitter":
      return "TW"
    case "facebook":
      return "FB"
    case "mail":
      return "EM"
    default:
      throw new Error(`${platform} is a false argument`)
  }
}

export default function Person({ person, showSocmed }) {
  const nameSize = useBreakpointValue({ base: "sm", md: "md", xl: "lg" })
  const roleTitleSize = useBreakpointValue({ base: "sm", lg: "md" })

  const socialHref = (platform, identifier) => {
    if (!platform || !identifier) return "#"
    const url = convertToUrl(platform, identifier) || false
    return `/redirect?url=${url}`
  }

  const convertToUrl = (platform, identifier) => {
    switch (platform.trim()) {
      case "instagram":
        return `https://instagram.com/${identifier}`
      case "facebook":
        return `https://www.facebook.com/search/top?q=${identifier
          .split(" ")
          .join("%20")}`
      case "twitter":
        return `https://twitter.com/${identifier}`
      case "mail":
        return `mailto:${identifier}`
      default:
        throw new Error(
          `Error @ redirectSocmed, platform: ${platform}, identifier: ${identifier}`
        )
    }
  }

  return (
    <RenderInView>
      {({ ref, inView, loaded, setIsLoaded }) => (
        <VStack
          alignItems="flex-start"
          ref={ref}
          py={2}
          spacing={4}
          borderBottom="1px solid"
          borderColor="gray.400"
          height="full"
        >
          {person && person.photo && inView && (
            <AspectRatio
              w="full"
              filter="grayscale(50%)"
              ratio={2 / 2}
              boxShadow="xs"
              overflow="hidden"
            >
              <Skeleton width="full" height="full" isLoaded={loaded}>
                <Image
                  layout="fill"
                  objectFit="cover"
                  src={person?.photo}
                  alt={`${person?.name} from ${person?.role}`}
                  quality={30}
                  onLoad={setIsLoaded}
                />
              </Skeleton>
            </AspectRatio>
          )}
          {!person.photo && (
            <Box borderRadius={false}>
              <BoringAvatar
                size="100%"
                name={person.name}
                variant="marble"
                square={true}
                colors={["#CCCCCC", "#999999", "#666666", "#333333", "#000000"]}
              />
            </Box>
          )}
          <Flex
            flexDir="column"
            w="full"
            pt={2}
            borderTop="1px solid"
            borderColor="gray.400"
            textAlign="center"
            spacing={1}
            flexGrow={1}
          >
            <Heading fontWeight="bold" as="h3" size={nameSize} mx="auto">
              {person?.name}
            </Heading>

            <Text
              fontSize={roleTitleSize}
              textAlign="center"
              color="brand.gray"
              mt={1}
            >
              {person?.role}
            </Text>

            {showSocmed && person.social_media.length > 0 && (
              <HStack justify="center" w="full" mt="auto">
                {person?.social_media.map(({ platform, identifier }) => {
                  let url = convertToUrl(platform, identifier) || "#"
                  let href = `/redirect?url=${url}`
                  return (
                    <Tooltip
                      label={
                        platform.trim().toLowerCase() === "instagram" ||
                        platform.trim().toLowerCase() === "twitter"
                          ? `@${identifier}`
                          : identifier
                      }
                      aria-label={`${platform} Icon`}
                      key={identifier}
                      hasArrow
                    >
                      <Link
                        href={href}
                        cursor="pointer"
                        textDecor="none"
                        px={1}
                        _hover={{
                          bgColor: "gray.200",
                        }}
                      >
                        <Social w="1.125rem" h="1.125rem" platform={platform} />
                      </Link>
                    </Tooltip>
                  )
                })}
              </HStack>
            )}
          </Flex>
        </VStack>
      )}
    </RenderInView>
  )
}
