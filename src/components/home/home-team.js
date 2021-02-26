import {
  Box,
  Center,
  Grid,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react'
import Person from '../team/person'
import { team_members } from '@/cms/team_members.json'
import PrimaryButton from '../article/primary-button'

const MAIN_TEAM = [
  team_members[14],
  team_members[1],
  team_members[26],
  team_members[11],
]

export default function HomeTeam() {
  const titleSize = useBreakpointValue({ base: 'lg' })
  return (
    <Box px='8' py='10' my='5vh' pos='relative'>
      <Heading as='h2' size={titleSize} textAlign='center'>
        Meet the Team
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={{ base: 2 }}
        width={{ base: '100%', md: '85%', lg: '80%' }}
        mx='auto'
        py={{ base: 5 }}
      >
        {MAIN_TEAM.map((m, i) => (
          <Person person={m} key={i} />
        ))}
      </Grid>
      <Center py='2' w='100%'>
        <PrimaryButton href='/meet-the-team'>Full Team</PrimaryButton>
      </Center>
      <Box
        pos='absolute'
        top='0'
        left='0'
        right='0'
        bottom='0'
        bgColor='teal.50'
        zIndex='-1'
      />
    </Box>
  )
}
