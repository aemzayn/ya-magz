import Meta from '@/components/article/meta/meta'
import Layout from '@/components/sections/layout'
import Person from '@/components/team/person'
import { Box, Grid, Heading } from '@chakra-ui/react'
import teams from '../data/team'

export default function MeetTheTeam() {
  const url = '/meet-the-team'
  const title = 'Meet the team'
  const description = 'Our wonderful team member'
  const keywords = ['teams', 'members']

  return (
    <>
      <Meta
        url={url}
        title={title}
        description={description}
        keywords={keywords}
      />
      <Layout>
        <Box px='8' pt='2' my='5vh' pos='relative'>
          <Heading as='h2' size='2xl' textAlign='center'>
            Meet the Team
          </Heading>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(4, 1fr)' }}
            gap={{ base: 2 }}
          >
            {teams.map((m, i) => (
              <Person person={m} key={i} showSocmed={true} />
            ))}
          </Grid>
        </Box>
        )
      </Layout>
    </>
  )
}
