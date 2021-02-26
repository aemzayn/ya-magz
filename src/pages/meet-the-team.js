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
  console.table(teams)

  return (
    <>
      <Meta
        url={url}
        title={title}
        description={description}
        keywords={keywords}
      />
      <Layout>
        <Box px='8' pt='2' my={{ base: 5 }} pos='relative'>
          <Heading
            as='h2'
            fontWeight='normal'
            textTransform='uppercase'
            size='2xl'
            textAlign='center'
          >
            Meet the Team
          </Heading>
          <Grid
            templateColumns={{
              base: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
              lg: 'repeat(6, 1fr)',
            }}
            gap={{ base: 2 }}
          >
            {teams.map((m, i) => (
              <Person person={m} key={i} showSocmed={true} />
            ))}
          </Grid>
        </Box>
      </Layout>
    </>
  )
}
