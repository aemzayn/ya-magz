import {
  Box,
  Center,
  Grid,
  Heading,
  useBreakpointValue,
} from '@chakra-ui/react'
import Person from '../team/person'
import PrimaryButton from '../article/primary-button'
import { getManagerialDivTeam } from '@/lib/team'

export default function HomeTeam() {
  const titleSize = useBreakpointValue({ base: 'lg' })
  const teams = getManagerialDivTeam()
  return (
    <Box px='8' py='10' mt='5vh' pos='relative'>
      <Heading as='h2' size={titleSize} textAlign='center'>
        Meet the Team
      </Heading>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={{ base: 2 }}
        width={{ base: '100%', md: '65%', lg: '50%' }}
        mx='auto'
        align='center'
        py={{ base: 5 }}
        overflowX='hidden'
      >
        {teams.map((m, i) => (
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
        bgColor='gray.50'
        zIndex='-1'
      />
    </Box>
  )
}
