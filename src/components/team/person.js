import {
  AspectRatio,
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Text,
  Tooltip,
  useBreakpointValue,
  VStack,
  Icon,
} from "@chakra-ui/react"
import { useRouter } from "next/router"
import BoringAvatar from "boring-avatars"
import { FiFacebook, FiInstagram, FiMail, FiTwitter } from "react-icons/fi"

export const Person = ({ person, showSocmed }) => {
  const nameSize = useBreakpointValue({ base: "sm", md: "sm" })
  const roleTitleSize = useBreakpointValue({ base: "0.8rem" })
  const router = useRouter()

  const handleClick = (platform, identifier) => {
    if (!platform || !identifier) return
    try {
      const url = convertToUrl(platform, identifier)
      router.push(`/redirect?url=${url}`)
    } catch (error) {
      return
    }
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
    <VStack py={{ base: 2 }} pb={{ base: 4 }} spacing={{ base: 0 }}>
      <AspectRatio w="80%" ratio={2 / 2}>
        {person && person.photo ? (
          <Image
            loading="lazy"
            m="auto"
            boxShadow="xs"
            borderRadius="full"
            w={{ base: "80%" }}
            h={{ base: "80%" }}
            objectFit="cover"
            src={person?.photo}
            alt={`${person?.name} from ${person?.role}`}
            userSelect="none"
          ></Image>
        ) : (
          <Center margin="auto" w={{ base: "80%" }} h={{ base: "80%" }}>
            <BoringAvatar
              size="100%"
              name={person.name}
              variant="beam"
              colors={["#AFC7B9", "#FFE1C9", "#FAC7B4", "#FCA89D", "#998B82"]}
            />
          </Center>
        )}
      </AspectRatio>
      <Box pt={{ base: 1 }} pb={{ base: 2 }} textAlign="center">
        <Heading
          fontWeight="normal"
          as="h3"
          size={nameSize}
          maxW={{ base: "100%", lg: "90%" }}
          mx="auto"
        >
          {person?.name}
        </Heading>
        <Text fontSize={roleTitleSize} color="brand.gray">
          {person?.role}
        </Text>
      </Box>
      {showSocmed && (
        <HStack spacing={{ base: 2, md: 4 }} justify="center" h="20px" w="full">
          {person?.social_media.map(({ platform, identifier }) => (
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
              <Text as="span" onClick={() => handleClick(platform, identifier)}>
                <SocmedIcon w="1.125rem" h="1.125rem" platform={platform} />
              </Text>
            </Tooltip>
          ))}
        </HStack>
      )}
    </VStack>
  )
}

export default Person

const SocmedIcon = ({ platform, ...rest }) => {
  switch (platform.trim().toLowerCase()) {
    case "instagram":
      return <Icon as={FiInstagram} {...rest} />
    case "twitter":
      return <Icon as={FiTwitter} {...rest} />
    case "facebook":
      return <Icon as={FiFacebook} {...rest} />
    case "mail":
      return <Icon as={FiMail} {...rest} />
    default:
      throw new Error(`${platform} is a false argument`)
  }
}
