import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Button, Center, Image } from "@chakra-ui/react"
import { useState } from "react"

const MagazineItem = ({ item, redirect }) => {
  const [hover, setHover] = useState(false)
  return (
    <Box
      boxShadow={item.cover ? "xl" : "none"}
      pos="relative"
      className="grid-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={item.cover}
        w="100%"
        objectFit="cover"
        objectPosition="center"
        _hover={{ zoom: "110%" }}
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
          onClick={() => redirect(item.link)}
        >
          Read <ExternalLinkIcon ml="2" />
        </Button>
      </Center>
    </Box>
  )
}

export default MagazineItem
