import { Stack } from "@chakra-ui/react"

export default function HeroLayout({ children }) {
  return (
    <Stack
      direction={{
        base: "column-reverse",
        md: "row",
      }}
      bgColor="gray.50"
      gap={0}
    >
      {children}
    </Stack>
  )
}
