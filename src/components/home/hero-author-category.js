import { getAuthor } from "@/lib/authors"
import { getTag } from "@/lib/postTags"
import { Text, useMediaQuery } from "@chakra-ui/react"
import { motion } from "framer-motion"

export default function HeroAuthorCategory({
  author,
  category,
  textSize,
  ...rest
}) {
  const [isMobile] = useMediaQuery("(max-width: 760px)")
  const transition = i => ({
    duration: 1,
    ease: [0.6, 0.02, -0.2, 0.9],
    delay: i * 0.015,
  })

  const TextContainer = motion(Text)
  const MotionText = motion(Text)

  const items = [
    {
      id: "author",
      name: (author && getAuthor(author)?.name) || author,
    },
    {
      id: "separator",
      sep: "·",
    },
    {
      id: "category",
      name: (category && getTag(category)?.name) || category,
    },
  ]

  return (
    <Text mb="1.2" color="gray.500" {...rest}>
      {items.map(it => (
        <TextContainer
          as="span"
          px={{ base: 1 }}
          d="inline-flex"
          overflowY="hidden"
          fontSize={textSize}
          key={it.id}
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
          {it?.name?.split("").map((car, i) => (
            <MotionText
              as="span"
              cursor="pointer"
              transform={{ base: "none", md: "translateY(-200px)" }}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 200,
                },
                visible: i => ({
                  opacity: 1,
                  y: 0,
                  transition: transition(i),
                }),
              }}
              key={i}
              custom={i}
              initial={isMobile ? "visible" : "hidden"}
              animate="visible"
            >
              {car === " " ? "\u00A0" : car}
            </MotionText>
          )) ?? it?.sep}
        </TextContainer>
      ))}
    </Text>
  )
}
