import { useState } from "react"
import {
  Box,
  Flex,
  Heading,
  IconButton,
  Link,
  Stack,
  StackDivider,
  Text,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react"
import { HiOutlineSwitchVertical } from "react-icons/hi"
import { SiSpotify, SiApplepodcasts, SiGooglepodcasts } from "react-icons/si"

import PodcastLink from "../shared/podcast-link"
import IGTag from "../shared/IGTag"
import Layout from "@/components/layout"
import Meta from "@/components/meta"
import PodcastData from "./data"
import Item from "./Item"

export default function EntertainmentPage() {
  const [podcasts, setPodcasts] = useState(PodcastData)
  const [sorted, setSorted] = useState(true)
  const stackWidth = useBreakpointValue({ base: "full", md: "80%", xl: "50%" })
  const titleSize = useBreakpointValue({ base: "4xl" })

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
    <Layout>
      <Meta
        title="Entertainment"
        url="/entertaiment"
        keywords="Ya! Podcast, Mood, Ya! Magazine Podcast"
      />
      <Box p={{ base: 8 }} pb={{ base: 10 }}>
        <Stack
          alignItems="center"
          spacing={3}
          pt={13}
          pb={{ base: 10, xl: 12 }}
          textAlign="center"
        >
          <Heading fontSize={titleSize} fontFamily="sans-serif">
            Ya!Pod
          </Heading>
          <Text maxW={{ base: "full", md: "70%", xl: "50%" }}>
            Ya! Magazine <IGTag username="ya.magz" /> mempersembahkan
            <IGTag username="sahrul.tdg" />, <IGTag username="mdavine05_" />,
            dan <IGTag username="khalismrsyd" /> untuk menemani hari senin
            kalian dengan topik pembicaraan jenius tapi jarang serius.
          </Text>

          <Stack direction="row" spacing={3}>
            <PodcastLink
              link="https://open.spotify.com/show/7mpdCpFNVp9U4BvUXYEoPz"
              icon={SiSpotify}
            />
            <PodcastLink
              link="https://podcasts.apple.com/tr/podcast/ya-pod/id1499375022"
              icon={SiApplepodcasts}
            />
            <PodcastLink
              link="https://podcasts.google.com/?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy8xM2RjZGIwYy9wb2RjYXN0L3Jzcw%3D%3D"
              icon={SiGooglepodcasts}
            />
          </Stack>
        </Stack>
        <Flex
          w={stackWidth}
          mb={6}
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
      </Box>
    </Layout>
  )
}
