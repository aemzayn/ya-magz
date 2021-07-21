import { useState } from "react"
import {
  Flex,
  Heading,
  IconButton,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react"
import { HiOutlineSwitchVertical } from "react-icons/hi"
import { SiApplepodcasts, SiGooglepodcasts, SiSpotify } from "react-icons/si"

import IGTag from "../shared/IGTag"
import PodcastButton from "../shared/podcast-link"
import Item from "./Item"
import PodcastData from "./data"

export default function YaPod({ stackWidth, titleSize }) {
  const [podcasts, setPodcasts] = useState(PodcastData)
  const [sorted, setSorted] = useState(true)

  function sortReversePodcast() {
    if (sorted) {
      const reversed = podcasts.sort(
        (p1, p2) => new Date(p2.date) - new Date(p1.date)
      )
      setPodcasts(reversed)
      setSorted(false)
    } else {
      const newSorted = podcasts.sort(
        (p1, p2) => new Date(p1.date) - new Date(p2.date)
      )
      setPodcasts(newSorted)
      setSorted(true)
    }
  }

  return (
    <>
      <Stack
        alignItems="center"
        spacing={3}
        pt={{ base: 10, md: 20 }}
        textAlign="center"
      >
        <Heading
          d="inline-flex"
          alignItems="center"
          as="h1"
          fontFamily="sans-serif"
          fontSize={titleSize}
        >
          Ya!Pod
        </Heading>
        <Text maxW={{ base: "full", md: "70%", xl: "50%" }}>
          Ya! Magazine <IGTag username="ya.magz" /> mempersembahkan
          <IGTag username="sahrul.tdg" />, <IGTag username="mdavine05_" />, dan{" "}
          <IGTag username="khalismrsyd" /> untuk menemani hari senin kalian
          dengan topik pembicaraan jenius tapi jarang serius.
        </Text>

        <Stack direction="row" spacing={3}>
          <PodcastButton
            link="https://open.spotify.com/show/7mpdCpFNVp9U4BvUXYEoPz"
            icon={SiSpotify}
          />
          <PodcastButton
            link="https://podcasts.apple.com/tr/podcast/ya-pod/id1499375022"
            icon={SiApplepodcasts}
          />
          <PodcastButton
            link="https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xM2RjZGIwYy9wb2RjYXN0L3Jzcw%3D%3D"
            icon={SiGooglepodcasts}
          />
        </Stack>
      </Stack>
      <Flex
        w={stackWidth}
        my={6}
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
      >
        <Text>Full Episode</Text>
        <IconButton
          aria-label="Sort episode"
          variant="ghost"
          icon={<HiOutlineSwitchVertical />}
          onClick={sortReversePodcast}
        />
      </Flex>
      <Stack
        dir="column"
        spacing={{ base: 8, md: 12, xl: 12 }}
        alignItems="center"
        align="center"
        divider={<StackDivider alignSelf="center" w={stackWidth} />}
      >
        {podcasts.map((podcast, idx) => (
          <Item key={idx} podcast={podcast} stackWidth={stackWidth} />
        ))}
      </Stack>
    </>
  )
}
