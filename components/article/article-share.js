import { Box, Flex, HStack, Text } from '@chakra-ui/react'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

const ArticleShare = ({ url }) => {
  return (
    <Flex mt='10' alignItems='center'>
      <Text>Share this article:</Text>
      <HStack d='flex' ml='2' mt='1'>
        <FacebookShareButton url={url}>
          <FacebookIcon borderRadius='50px' style={{ height: 40, width: 40 }} />
        </FacebookShareButton>
        <TwitterShareButton url={url}>
          <TwitterIcon borderRadius='50px' style={{ height: 40, width: 40 }} />
        </TwitterShareButton>
        <WhatsappShareButton url={url}>
          <WhatsappIcon borderRadius='50px' style={{ height: 40, width: 40 }} />
        </WhatsappShareButton>
      </HStack>
    </Flex>
  )
}

export default ArticleShare
