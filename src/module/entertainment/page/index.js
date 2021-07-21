import { Box, useBreakpointValue } from "@chakra-ui/react"
import Layout from "@/components/layout"
import Meta from "@/components/meta"
import Mood from "./mood"
import YaPod from "./ya-pod"

export default function EntertainmentPage() {
  const stackWidth = useBreakpointValue({ base: "full", md: "80%", xl: "50%" })
  const titleSize = useBreakpointValue({ base: "4xl", xl: "5xl" })
  return (
    <Layout>
      <Meta
        title="Entertainment"
        url="/entertaiment"
        keywords="Ya! Podcast, Mood, Ya! Magazine Podcast"
      />
      <Box p={8} pb={10}>
        <Mood width={stackWidth} titleSize={titleSize} />
        <YaPod stackWidth={stackWidth} titleSize={titleSize} />
      </Box>
    </Layout>
  )
}
