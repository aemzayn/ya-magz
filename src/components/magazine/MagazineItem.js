import { useState } from "react"
import { useRouter } from "next/router"
import Image from "next/image"
import { Box, Center, Link } from "@chakra-ui/react"
import { ExternalLinkIcon } from "@chakra-ui/icons"

export default function MagazineItem({ item }) {
  const [hover, setHover] = useState(false)

  return (
    <Box
      boxShadow={item.cover ? "xl" : "none"}
      pos="relative"
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
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgColor="rgb(0, 0, 0, 0.2)"
      >
        <Box px={4} py={2} bgColor="white" textDecoration="none">
          <Link
            display="flex"
            alignItems="center"
            href={`/redirect?url=${item.link}`}
            textDecor="none"
          >
            Read <ExternalLinkIcon ml="2" />
          </Link>
        </Box>
      </Center>
    </Box>
  )
}
