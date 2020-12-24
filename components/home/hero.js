import React, { useState } from 'react'
import Link from 'next/link'
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
} from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function Hero() {
  const [meta, setMeta] = useState({
    title: 'Predicting Aesthetics of the Future',
    body:
      'Take a look at a few modern design tendencies and imagine what kind of environment we may live in tomorrow.',
    category: 'architecture',
  })

  return (
    <Flex
      className='hero'
      direction='column'
      align='center'
      w='100%'
      m='0 auto'
      // minH='90vh'
    >
      <Flex
        align='center'
        justify={{ base: 'flex-end', xl: 'space-between' }}
        direction={{ base: 'column-reverse', xl: 'row' }}
        wrap='no-wrap'
        minH='70vh'
        bg='#F9F9F9'
        mb={16}
      >
        <Stack
          spacing={{ base: 5, md: 7, xl: 10 }}
          w={{ base: '100%', md: '66%' }}
          align='center'
          pl={{ base: '0', xl: '8' }}
          py={{ base: '2rem', lg: '10rem', xl: 0 }}
        >
          <Text textTransform='lowercase' color='gray.500'>
            {meta.category}
          </Text>
          <Heading
            as='h1'
            size={'2xl'}
            fontWeight='bold'
            color='primary.800'
            textAlign='center'
            className='hero-title'
            maxW='80%'
          >
            {meta.title}
          </Heading>
          <Link href='/'>
            <Button
              py={{ base: '5', md: '7' }}
              px={{ base: '10', md: '12' }}
              lineHeight='1'
              size='lg'
              bg='teal.400'
              color='white'
              borderRadius='50px'
              fontWeight='normal'
              borderRadius='false'
              _hover={{
                bg: 'teal.500',
              }}
            >
              Read Now
              <ArrowForwardIcon ml='2' />
            </Button>
          </Link>
        </Stack>
        <Box
          w={{ base: '100%', xl: '33%' }}
          h={{ base: '15rem', md: '20rem', lg: '25rem', xl: '100%' }}
          mt='0'
        >
          <Image
            src={
              'https://images.pexels.com/photos/3634855/pexels-photo-3634855.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
            }
            height='100%'
            width='100%'
            size={{ base: '100%' }}
            objectFit='cover'
            objectPosition={{ base: 'bottom', xl: 'center' }}
          />
        </Box>
      </Flex>
    </Flex>
  )
}
