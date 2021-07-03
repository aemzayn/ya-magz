import { ExternalLinkIcon } from "@chakra-ui/icons"
import { Box, Button, Center } from "@chakra-ui/react"
import Image from "next/image"
import { useRouter } from "next/router"
import { useState } from "react"

export default function MagazineItem({ item }) {
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
      width="full"
      height="full"
    >
      <Image src={item.cover} alt={item.title} width={400} height={550} />

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
