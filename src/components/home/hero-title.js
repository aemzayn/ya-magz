import {
  Box,
  Heading,
  HStack,
  useBreakpointValue,
  useMediaQuery,
} from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function HeroTitle({ title, container, stack, heading }) {
  const [isMobile] = useMediaQuery("(max-width: 760px)")
  const titleSize = useBreakpointValue({ base: "xl", md: "2xl" })

  const Container = motion(Box)

  const TitleChar = motion(Heading)

  return (
    <HStack
      d="flex"
      flexWrap="wrap"
      maxW={{ base: "90%", md: "80%", xl: "55%" }}
      mt={{ base: 3, md: 0 }}
      justify="center"
      {...stack}
    >
      {!isMobile ? (
        title.split(" ").map((word, wordId) => (
          <Container
            key={wordId}
            d="flex"
            flexWrap="wrap"
            textAlign="center"
            align="center"
            justifyContent="center"
            userSelect="none"
            d="flex"
            overflowY="hidden"
            variants={{
              hidden: {
                y: 0,
              },
              visible: {
                y: 0,
                transition: {
                  delayChildren: 0.6,
                  staggerChildren: 0.04,
                  staggerDirection: 1,
                },
              },
            }}
            initial={isMobile ? "visible" : "hidden"}
            animate="visible"
          >
            {word.split("").map((char, charId) => (
              <TitleChar
                key={charId}
                size={titleSize}
                transform={{ base: "none", md: "translateY(-200px)" }}
                fontWeight="bold"
                color="primary.800"
                textAlign="center"
                className="hero-title"
                lineHeight="1.2"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 200,
                  },
                  visible: charId => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      ease: [0.6, 0.05, -0.01, 0.9],
                      delay: charId * wordId * 0.01,
                    },
                  }),
                }}
                custom={charId}
              >
                {char === " " ? "\u00A0" : char}
              </TitleChar>
            ))}
          </Container>
        ))
      ) : (
        <TitleChar>{title}</TitleChar>
      )}
    </HStack>
  )
}
