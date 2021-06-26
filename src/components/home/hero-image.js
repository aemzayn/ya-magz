import { Box } from "@chakra-ui/react"

export default function HeroImage({ url }) {
  return (
    <Box
      w={{ base: "unset", lg: "40%", xl: "33%" }}
      h={{ base: "30vh", md: "30vh", lg: "78vh" }}
      bgColor="black"
    >
      <Box
        bgImage={`url(${url})`}
        bgColor="black"
        width="full"
        height="full"
        bgPos="center"
        bgSize="contain"
        bgRepeat="repeat-x"
      />
    </Box>
  )
}
