import Meta from "@/components/meta/meta"
import PageLayout from "@/components/page-layout"
import Layout from "@/components/sections/layout"
import { Box, Flex, Heading, VStack, Text } from "@chakra-ui/layout"
import { useBreakpointValue } from "@chakra-ui/media-query"
import { isValidMotionProp, motion, useAnimation } from "framer-motion"
import { forwardRef, useEffect } from "react"
import { useInView } from "react-intersection-observer"

const content = [
  "It was all started 3 years ago, when the spring on March 2017 is coming. Where all the flowers are started to bloom, especially lale. Lale is famous with Tulip as its name. Though, lale is the sign of the beauty in the wild, it also the symbol of the life which run by all human that facing hardness and challenges but still standing tall on their ground. This flower brings the founders of YA! like Muafi bey who was experiencing journalism in a new manner when he studied in Egypt, and turned to Turkey to establish YA!. He taught us and he made it all the way here and now. With you standing together in Bursa, Turkey.",
  "YA! is inspired by lale and will always be. To be honest, YA! is also derived from the words yaşayalım anlatalım which mean living and explaining. More than that, YA! truly is like everyone here always said, evet or kind of the same meaning as YA!. One more thing, the ‘!’ is not meant to be commanding anyone, but would rather be convincing anyone that we are trust worthy. We hold our promises and we do not play fun, even with the things that we can play for.",
  "Yet, we are serious in the same way as we enjoy this life. Saying YA! is gaining the braveness to take the responsibility or sorumluluk sahibi. Keeping YA! in our mind is believing that we can make impossible is nothing or imkansız mümkündür. Making YA! real through the attitude and action are our goal to explain how to live this life to the fullest. Ne istersen, olursan.",
  "To make it true, YA! was starting as a bulletin where every single one man can write down anything on the paper. Especially, Indonesian resident in Bursa. Now it’s transforming to magazine, where the place is expanded as it needed by all means. Because, we have a dream. Like yours.",
  "The dream that we keep on realizing is like breathing the oxygen. Runs through vein. Pumps the heart. Storms the brain. And here we live our lives.",
  "YA! towards the future with its format Education, Entertainment and Electronics Magazine. We want everyone know that educating can be so entertaining while catching up with the industry revolution 4.0 that soon come. There we come, YA! Emagazine. We are ready to be born again and strive in the world. Be with us. Living and explaining.",
]

function AboutParagraph({ text, reverse }) {
  const fontSize = useBreakpointValue({ base: "lg", md: "xl" })
  const opacity = useBreakpointValue({ base: 1, md: 0 })
  const animation = useAnimation()
  const MotionParagraph = motion(Flex)

  const [featured, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-350px",
  })

  useEffect(() => {
    if (inView) {
      animation.start("visible")
    }
  }, [animation, inView])

  return (
    <MotionParagraph
      flexDir={!reverse ? "row" : "row-reverse"}
      lineHeight="tall"
      fontSize={fontSize}
      pb={{ base: 4, md: 6 }}
      ref={featured}
      animate={animation}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            ease: [0.6, 0.05, -0.01, 0.9],
          },
        },
        hidden: { opacity: 0, y: 20 },
      }}
      opacity={opacity}
    >
      <Text>{text}</Text>
      <Box />
    </MotionParagraph>
  )
}

export default function About() {
  return (
    <Layout>
      <Meta
        title="About Us"
        description="About Ya! Magazine"
        url="/about-us"
        keywords={["About Us", "About Ya! Magazine"]}
      />
      <PageLayout>
        <main>
          <Heading
            mb={{ base: 4, md: 6 }}
            textTransform="uppercase"
            fontWeight="black"
          >
            About Us
          </Heading>
          <VStack spacing={4} maxW="1000px">
            {content.map((text, id) => (
              <AboutParagraph
                key={id}
                reverse={(id + 1) % 2 === 0}
                text={text}
              />
            ))}
          </VStack>
        </main>
      </PageLayout>
    </Layout>
  )
}
