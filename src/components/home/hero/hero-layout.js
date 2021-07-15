import { Grid, useBreakpointValue } from "@chakra-ui/react"

export default function HeroLayout({ children }) {
  const gridTemplateAreas = useBreakpointValue({
    base: "'image' 'main'",
    md: "'main image'",
  })
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "7fr 3fr", lg: "6fr 4fr" }}
      gap={0}
      maxH={{ base: "78vh", md: "80vh", lg: "78vh" }}
      pos="relative"
      sx={{
        gridTemplateAreas: gridTemplateAreas,
      }}
      marginBottom={4}
    >
      {children}
    </Grid>
  )
}
