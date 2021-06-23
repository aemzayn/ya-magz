import { Text, useMediaQuery } from "@chakra-ui/react"
import { motion } from "framer-motion"

const HeroExcerpt = ({ excerpt, textSize, ...rest }) => {
  const [isMobile] = useMediaQuery("(max-width: 760px)")
  const MotionText = motion(Text)

  return (
    <MotionText
      maxW={{ base: "80%", lg: "75%", xl: "52%" }}
      fontSize={textSize}
      textAlign="center"
      my="4"
      pb={6}
      color="gray.500"
      overflowY="hidden"
      variants={{
        hidden: {
          y: 30,
          opacity: 0,
        },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 1.5,
            ease: [0.6, 0.05, -0.01, 0.9],
            delay: isMobile ? 0 : 0.1,
          },
        },
      }}
      initial={isMobile ? "visible" : "hidden"}
      animate="visible"
      {...rest}
    >
      {excerpt}
    </MotionText>
  )
}

export default HeroExcerpt
