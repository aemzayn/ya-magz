import { Flex, HStack, Tooltip } from '@chakra-ui/react'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

const ArticleShare = ({ url }) => {
  console.log(url)
  return (
    <Flex flexDir='column' mt='10' alignItems='center'>
      <HStack d='flex' ml='2' mt='1'>
        <Tooltip hasArrow label='Share to FB'>
          <FacebookShareButton url={url}>
            <FacebookIcon
              borderRadius='50px'
              style={{ height: 40, width: 40 }}
            />
          </FacebookShareButton>
        </Tooltip>
        <Tooltip hasArrow label='Share to Twitter'>
          <TwitterShareButton url={url}>
            <TwitterIcon
              borderRadius='50px'
              style={{ height: 40, width: 40 }}
            />
          </TwitterShareButton>
        </Tooltip>
        <Tooltip hasArrow label='Share to WhatsApp'>
          <WhatsappShareButton url={url}>
            <WhatsappIcon
              borderRadius='50px'
              style={{ height: 40, width: 40 }}
            />
          </WhatsappShareButton>
        </Tooltip>
      </HStack>
    </Flex>
  )
}

export default ArticleShare
