import { Box, Heading, SimpleGrid } from "@chakra-ui/react"
import Meta from "@/components/meta"
import Layout from "@/components/layout"
import { listMembers } from "src/libs/team"
import Person from "@/components/team/Person"

export default function MeetTheTeam() {
  const url = "/meet-the-team"
  const title = "Meet the team"
  const description = "Our wonderful team member"
  const keywords = ["teams", "members"]
  const members = listMembers()

  return (
    <>
      <Meta
        url={url}
        title={title}
        description={description}
        keywords={keywords}
      />
      <Layout>
        <Box px={8} pt={10} my={5} pos="relative">
          <Heading as="h2" size="2xl" textAlign="center">
            Meet the Team
          </Heading>
          <SimpleGrid
            marginTop={{ base: 6, md: 10 }}
            columns={{ base: 2, md: 4, lg: 5 }}
            gridColumnGap={{ base: 2, md: 4, lg: 6 }}
            gridRowGap={{ base: 4, md: 6, lg: 8 }}
          >
            {members.map((m, i) => (
              <Person person={m} key={i} showSocmed={true} />
            ))}
          </SimpleGrid>
        </Box>
      </Layout>
    </>
  )
}
