import { useState } from "react"
import { useRouter } from "next/router"
import { Box, Button, Center, Image } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

const MagazineItem = ({ item }) => {
  const router = useRouter()
  const [hover, setHover] = useState(false)
  return (
    <Box
      boxShadow={item.cover ? "xl" : "none"}
      pos="relative"
      className="grid-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      overflow="hidden"
    >
      <Image
        src={item.cover}
        w="100%"
        objectFit="cover"
        objectPosition="center"
      />

      <Center
        display={hover ? "flex" : "none"}
        pos="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgColor="rgb(0, 0, 0, 0.2)"
      >
        <Button
          borderRadius="false"
          fontWeight="normal"
          onClick={() => router.push(`/redirect?url=${item.link}`)}
        >
          Read <ExternalLinkIcon ml="2" />
        </Button>
      </Center>
    </Box>
  )
}

export default MagazineItem
