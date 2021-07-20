import React from "react"
import {
  Button,
  Image,
  Stack,
  Text,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react"
import { FiPlay } from "react-icons/fi"
import { useRouter } from "next/router"
import { formatDate } from "@/libs/date"

const Item = ({ podcast, stackWidth }) => {
  const buttonSize = useBreakpointValue({ base: "md", lg: "md" })
  const router = useRouter()

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      spacing={{ base: 4, md: 6, xl: 10 }}
      maxW={stackWidth}
    >
      <Image
        src={podcast.thumbnail}
        boxSize={{ base: "full", md: "150px", lg: "150px" }}
        alt={podcast.title}
      />
      <Stack dir="column" spacing={{ base: 1 }} alignItems="flex-start">
        <Text>{formatDate(new Date(podcast.date))}</Text>
        <Text fontSize="2xl" fontWeight="semibold" overflowWrap="break-word">
          {podcast.title}
        </Text>
        <Text>{podcast.desc}</Text>
        <Tooltip
          aria-label="Play podcast on spotify"
          label="Play on Spotify"
          hasArrow
        >
          <Button
            size={buttonSize}
            borderRadius={0}
            variant="outline"
            leftIcon={<FiPlay />}
            onClick={() => router.push(`/redirect?url=${podcast.link}`)}
          >
            {podcast.duration} minutes
          </Button>
        </Tooltip>
      </Stack>
    </Stack>
  )
}

export default React.memo(Item)
