import React from 'react'
import { Flex } from '@chakra-ui/react'
import Article from './article'

const articles = [
  {
    id: 1,
    title: 'Lessons Learned While Skipping School',
    body:
      'Did you know Robert Mapplethorpe thought that ‘magic’ disappears from a photograph when you start talking about it? Sometimes I tend to agree with that.',
    img:
      'https://narrator.mauer.co/wp-content/uploads/2018/05/SZ48UB-1200x900.jpg',
  },
  {
    id: 2,
    title: 'Why It’s a Good Idea to Get Lost in Chicago',
    body:
      'Feel the air of the “windy city” pressing against your face. USA’s third largest city is a perfect place to wander the streets.',
    img:
      'https://narrator.mauer.co/wp-content/uploads/2018/09/GK82SD-1200x900.jpg',
  },
  {
    id: 3,
    title: 'Why I Decided to Stay in Brooklyn',
    body:
      'One day the landlord came to my Brooklyn home to do some small repairs. He was a senior black man with really nice manners, very calm and polite.',
    img:
      'https://narrator.mauer.co/wp-content/uploads/2018/09/KX60QS-1200x900.jpg',
  },
  {
    id: 4,
    title: 'A Meditative Look at Manhattan',
    body:
      'Once my yoga teacher told me that the true mastery of yoga includes being able to relax in any pose — no matter how intense it is.',
    img:
      'https://narrator.mauer.co/wp-content/uploads/2018/09/FW37UH-1200x900.jpg',
  },
  {
    id: 5,
    title: 'People of New York',
    body:
      'Observations on which of the notorious New Yorker myths are true, and which are not.',
    img:
      'https://narrator.mauer.co/wp-content/uploads/2018/09/PM67FW-1200x900.jpg',
  },
  {
    id: 6,
    title: 'How We Went to Las Vegas and Won $8',
    body:
      'Knowing when to stop has never been a trait of mine. However, this time I got so carried away by the city itself that I became indifferent to gambling.',
    img:
      'https://narrator.mauer.co/wp-content/uploads/2018/09/YR43EW-1200x900.jpg',
  },
]

const Articles = () => {
  return (
    <Flex
      direction={{ base: 'column', lg: 'row' }}
      w='100%'
      p='8'
      flexWrap='wrap'
    >
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </Flex>
  )
}

export default Articles
