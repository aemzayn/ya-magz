import { getAuthor } from '@/lib/authors'
import { getTag } from '@/lib/postTags'
import { chakra, Text } from '@chakra-ui/react'
import { isValidMotionProp, motion } from 'framer-motion'
import Link from 'next/link'
import { forwardRef } from 'react'

export default function HeroAuthorCategory({ author, category }) {
  const Container = motion.custom(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      )
      return (
        <chakra.a
          _hover={{ color: 'black' }}
          d='inline-flex'
          overflowY='hidden'
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
          initial='hidden'
          animate='visible'
          ref={ref}
          {...chakraProps}
        />
      )
    })
  )

  const MotionText = motion.custom(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        Object.entries(props).filter(([key]) => !isValidMotionProp(key))
      )
      return (
        <chakra.span
          cursor='pointer'
          transform='translateY(-200px)'
          ref={ref}
          {...chakraProps}
        />
      )
    })
  )

  return (
    <Text mb='1.2' color='gray.500'>
      <Link href='/category/[slug]' as={`/category/${getTag(category).slug}`}>
        <Container>
          {getTag(category)
            .name.split('')
            .map((car, i) => (
              <MotionText
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 200,
                  },
                  visible: i => ({
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: 1,
                      ease: [0.6, 0.05, -0.01, 0.9],
                      delay: i * 0.05,
                    },
                  }),
                }}
                key={i}
                custom={i}
                initial='hidden'
                animate='visible'
              >
                {car === ' ' ? '\u00A0' : car}
              </MotionText>
            ))}
        </Container>
      </Link>

      <chakra.span overflow='hidden'>
        <motion.span
          style={{ margin: '0 0.5rem' }}
          variants={{
            hidden: {
              opacity: 0,
              x: 100,
            },
            visible: {
              opacity: 1,
              x: 0,
              transition: {},
            },
          }}
          initial='hidden'
          animate='visible'
        >
          -
        </motion.span>
      </chakra.span>

      <Container>
        {getAuthor(author)
          .name.split('')
          .map((car, i) => (
            <MotionText
              variants={{
                hidden: {
                  opacity: 0,
                  y: 200,
                },
                visible: i => ({
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 1,
                    ease: [0.6, 0.05, -0.01, 0.9],
                    delay: i * 0.04,
                  },
                }),
              }}
              key={i}
              custom={i}
              initial='hidden'
              animate='visible'
            >
              {car === ' ' ? '\u00A0' : car}
            </MotionText>
          ))}
      </Container>
    </Text>
  )
}
