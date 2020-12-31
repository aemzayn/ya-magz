import { Flex, Text } from '@chakra-ui/react'
import HeroTitle from './hero-title'
import HeroCTA from './hero-cta'
import HeroImage from './hero-image'
import HeroLayout from './hero-layout'

export default function Hero({ article }) {
  return (
    <HeroLayout>
      <Flex
        as='main'
        w={{ base: '100%', xl: '66%' }}
        d='flex'
        flexDir='column'
        alignItems='center'
        justifyContent='center'
        pl={{ base: '0', xl: '8' }}
        py={{ base: '2rem', lg: '10rem', xl: 0 }}
      >
        <Text textTransform='lowercase' mb='1.2' color='gray.500'>
          {article.category.name}
        </Text>
        <HeroTitle title={article.title} />
        <HeroCTA url={article.slug} />
      </Flex>
      <HeroImage url={article.cover_img.url} />
    </HeroLayout>
  )
}
