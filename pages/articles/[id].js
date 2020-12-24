import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import articlesData from '../../data/articlesData'
import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import Link from 'next/link'

const ArticlePage = () => {
  const router = useRouter()
  const { id } = router.query
  const [article, setArticle] = useState({})
  useEffect(() => {
    setArticle(articlesData[id - 1])
  }, [id])

  return article ? (
    <Flex w='100%' direction='column'>
      <Flex
        direction='column'
        maxW='800px'
        mx='auto'
        py={{ base: 10, lg: 20 }}
        px={{ base: 8, lg: 0 }}
      >
        <Flex mb='4' color='gray.400'>
          <Text d='flex'>
            Written by
            <Text ml='3px' color='gray.500' _hover={{ color: 'gray.600' }}>
              <Link href={`/articles/${article.id}`}>
                <a>Ahmad Muslih Zain</a>
              </Link>
            </Text>
          </Text>
        </Flex>
        <Heading
          mb='14'
          as='h1'
          size='2xl'
          fontFamily='Product Sans'
          lineHeight='1.2'
        >
          {article.title}
        </Heading>
        <Text
          fontWeight='normal'
          mb='14'
          fontStyle='italic'
          fontSize='xl'
          color='gray.500'
          pl='4'
          borderLeftWidth='5px'
          borderLeftStyle='solid'
          borderLeftColor='teal.200'
          letterSpacing='0.8px'
        >
          {article.body}
        </Text>
        <Box w='100%' my='10'>
          <Image
            w='100%'
            h='100%'
            objectFit='cover'
            objectPosition='bottom'
            src={article.img}
          />
        </Box>
        <Text lineHeight='30px' fontWeight='normal' fontFamily='Lato'>
          Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus.
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel,
          ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget
          consectetur sed, convallis at tellus. Cras ultricies ligula sed magna
          dictum porta. Sed porttitor lectus nibh. Vivamus suscipit tortor eget
          felis porttitor volutpat. Vivamus magna justo, lacinia eget
          consectetur sed, convallis at tellus. Sed porttitor lectus nibh.
          Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
          <br />
          <br />
          Pellentesque in ipsum id orci porta dapibus. Mauris blandit aliquet
          elit, eget tincidunt nibh pulvinar a. Quisque velit nisi, pretium ut
          lacinia in, elementum id enim. Cras ultricies ligula sed magna dictum
          porta. Vestibulum ac diam sit amet quam vehicula elementum sed sit
          amet dui. Nulla porttitor accumsan tincidunt. Praesent sapien massa,
          convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum
          primis in faucibus orci luctus et ultrices posuere cubilia Curae;
          Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet
          ligula. Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta
          dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas
          non nisi. Curabitur arcu erat, accumsan id imperdiet et, porttitor at
          sem. Donec rutrum congue leo eget malesuada. Praesent sapien massa,
          convallis a pellentesque nec, egestas non nisi. Proin eget tortor
          risus.
          <br />
          <br />
          Curabitur aliquet quam id dui posuere blandit. Vestibulum ac diam sit
          amet quam vehicula elementum sed sit amet dui. Quisque velit nisi,
          pretium ut lacinia in, elementum id enim. Sed porttitor lectus nibh.
          Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula
          elementum sed sit amet dui. Cras ultricies ligula sed magna dictum
          porta. Praesent sapien massa, convallis a pellentesque nec, egestas
          non nisi. Vestibulum ac diam sit amet quam vehicula elementum sed sit
          amet dui. Pellentesque in ipsum id orci porta dapibus. Vivamus
          suscipit tortor eget felis porttitor volutpat. Quisque velit nisi,
          pretium ut lacinia in, elementum id enim. Proin eget tortor risus.
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          <br />
          <br />
          Curabitur aliquet quam id dui posuere blandit. Curabitur arcu erat,
          accumsan id imperdiet et, porttitor at sem. Curabitur aliquet quam id
          dui posuere blandit. Donec sollicitudin molestie malesuada. Mauris
          blandit aliquet elit, eget tincidunt nibh pulvinar a. Pellentesque in
          ipsum id orci porta dapibus. Donec sollicitudin molestie malesuada.
          Proin eget tortor risus. Donec rutrum congue leo eget malesuada. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Quisque velit nisi,
          pretium ut lacinia in, elementum id enim. Curabitur arcu erat,
          accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo
          eget malesuada. Sed porttitor lectus nibh. Praesent sapien massa,
          convallis a pellentesque nec, egestas non nisi. Nulla porttitor
          accumsan tincidunt. Sed porttitor lectus nibh. Nulla porttitor
          accumsan tincidunt. Donec sollicitudin molestie malesuada.
          <br />
          <br />
          Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo
          eget malesuada. Proin eget tortor risus. Proin eget tortor risus.
          Nulla porttitor accumsan tincidunt. Quisque velit nisi, pretium ut
          lacinia in, elementum id enim. Vivamus suscipit tortor eget felis
          porttitor volutpat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
          Proin eget tortor risus. Cras ultricies ligula sed magna dictum porta.
          Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla
          quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero
          malesuada feugiat. Quisque velit nisi, pretium ut lacinia in,
          elementum id enim. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor
          sit amet aliquam vel, ullamcorper sit amet ligula.
          <br />
          <br />
          Sed porttitor nibh. Donec rutrum congue leo eget malesuada. Nulla quis
          lorem ut libero malesuada feugiat. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
          neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Vivamus magna justo, lacinia eget consectetur sed, convallis at
          tellus. Vestibulum ante ipsum primis in faucibus orci luctus et
          ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet
          aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed
          magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis
          quis ac lectus. Nulla porttitor accumsan tincidunt. Vivamus suscipit
          tortor eget felis porttitor volutpat. Nulla porttitor accumsan
          tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit
          amet dui. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
          <br />
          <br />
          Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
          Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
          Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget
          consectetur sed, convallis at tellus. Curabitur aliquet quam id dui
          posuere blandit. Vestibulum ac diam sit amet quam vehicula elementum
          sed sit amet dui. Curabitur aliquet quam id dui posuere blandit. Nulla
          quis lorem ut libero malesuada feugiat. Nulla quis lorem ut libero
          malesuada feugiat. Curabitur aliquet quam id dui posuere blandit.
        </Text>
      </Flex>
    </Flex>
  ) : (
    <Box>
      <Heading size='xl'>Article Not Found</Heading>
    </Box>
  )
}

export default ArticlePage
