import { getManagerialDivTeam } from "src/libs/team"
import { Box, Grid, Heading, VStack } from "@chakra-ui/react"
import PrimaryButton from "../buttons/primary-button"
import RenderInView from "../render-inview"
import Person from "./person"

export default function HomeTeam() {
  const teams = getManagerialDivTeam()
  return (
    <RenderInView>
      {({ ref, inView }) => (
        <VStack ref={ref} px="8" py="10" mt="5vh" pos="relative">
          <Heading as="h2" size="lg" textAlign="center">
            Meet the Team
          </Heading>
          {inView && (
            <Grid
              templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(3, 1fr)" }}
              gap={{ base: 2, xl: 8 }}
              width={{ base: "100%", md: "65%", lg: "50%" }}
              py={5}
              overflowX="hidden"
            >
              {teams.map((m, i) => (
                <Person person={m} key={i} />
              ))}
            </Grid>
          )}
          <PrimaryButton
            bgColor="black"
            colorScheme="black"
            href="/meet-the-team"
          >
            Full Team
          </PrimaryButton>
          <Box
            pos="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            bgColor="gray.50"
            zIndex="-10"
          />
        </VStack>
      )}
    </RenderInView>
  )
}
