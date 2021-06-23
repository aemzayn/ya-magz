import { Image } from "@chakra-ui/react"
import { motion } from "framer-motion"

const MotionImage = ({ ...props }) => {
  const ChakraMotionImage = motion(Image)
  return <ChakraMotionImage {...props} />
}

export default MotionImage
