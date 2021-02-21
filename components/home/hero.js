import { Flex } from '@chakra-ui/react'
import HeroTitle from './hero-title'
import HeroImage from './hero-image'
import HeroLayout from './hero-layout'
import HeroExcerpt from './hero-excerpt'
import HeroAuthorCategory from './hero-author-category'
import PrimaryButton from '../article/primary-button'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function Hero({ article }) {
  return (
    <HeroLayout>
      <Flex
        as='main'
        w={{ base: '100vw', xl: '66vw' }}
        d='flex'
        flexDir='column'
        alignItems='center'
        justifyContent='center'
        pl={{ base: '0', xl: '8' }}
        py={{ base: '2rem', lg: '10rem', xl: 0 }}
      >
        <HeroAuthorCategory
          author={article?.author}
          category={article?.tags[0]}
        />
        <HeroTitle title={article?.title} />
        <HeroExcerpt excerpt={article?.excerpt} />
        <PrimaryButton
          href={`/read/${article?.slug}`}
          rightIcon={<ArrowForwardIcon />}
        >
          Read Now
        </PrimaryButton>
      </Flex>
      <HeroImage url={article?.featuredimage || article?.featuredimageurl} />
    </HeroLayout>
  )
}
