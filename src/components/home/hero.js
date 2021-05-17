import { Flex, useMediaQuery } from '@chakra-ui/react'
import HeroTitle from './hero-title'
import HeroImage from './hero-image'
import HeroLayout from './hero-layout'
import HeroExcerpt from './hero-excerpt'
import HeroAuthorCategory from './hero-author-category'
import PrimaryButton from '../article/primary-button'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export default function Hero({ article }) {
  const url = article?.featuredimage || article?.featuredimageurl
  const [isMobile] = useMediaQuery('(max-width: 760px)')

  return (
    <HeroLayout>
      <Flex
        as='main'
        w={{ base: '100vw', xl: url ? '66vw' : '100vw' }}
        d='flex'
        flexDir='column'
        alignItems='center'
        justifyContent='center'
        pl={{ base: '0', xl: '8' }}
        py={{ base: '4rem', lg: '5rem', xl: 0 }}
      >
        <HeroAuthorCategory
          author={article?.author}
          category={article?.tags}
          isMobile={isMobile}
        />
        <HeroTitle title={article?.title} isMobile={isMobile} />
        <HeroExcerpt excerpt={article?.excerpt} isMobile={isMobile} />
        <PrimaryButton
          href={`/read/${article?.slug}`}
          rightIcon={<ArrowForwardIcon />}
          bgColor='orange.400'
        >
          Read Now
        </PrimaryButton>
      </Flex>
      {url && (
        <HeroImage url={article?.featuredimage || article?.featuredimageurl} />
      )}
    </HeroLayout>
  )
}
