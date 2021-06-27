import { Text } from "@chakra-ui/react"
import { motion } from "framer-motion"

const HeroExcerpt = ({ excerpt, textSize, ...rest }) => {
  const MotionText = motion(Text)

  return (
    <MotionText
      maxW={{ base: "80%", lg: "75%", xl: "52%" }}
      fontSize={textSize}
      textAlign="center"
      my="4"
      pb={6}
      color="brand.gray"
      overflowY="hidden"
      {...rest}
    >
      {excerpt}
    </MotionText>
  )
}

export default HeroExcerpt
