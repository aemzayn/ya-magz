import { useBreakpointValue } from "@chakra-ui/react"

export default function useBadgeStyle() {
  const badgeStyle = {
    cursor: "pointer",
    height: useBreakpointValue({ base: "full" }),
    maxWidth: useBreakpointValue({ base: "unset", md: "100px", xl: "150px" }),
    _notLast: {
      mr: useBreakpointValue({ base: 0, md: 2 }),
      mb: useBreakpointValue({ base: 2, md: 0 }),
    },
  }

  return badgeStyle
}
