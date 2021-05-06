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
  const iconStyle = {
    borderRadius: '10px',
    style: { height: 40, width: 40 },
  }
  return (
    <Flex flexDir='column' mt='10' alignItems='center'>
      <HStack d='flex' ml='2' mt='1'>
        <Tooltip hasArrow label='Share to FB'>
          <FacebookShareButton url={url}>
            <FacebookIcon {...iconStyle} />
          </FacebookShareButton>
        </Tooltip>
        <Tooltip hasArrow label='Share to Twitter'>
          <TwitterShareButton url={url}>
            <TwitterIcon {...iconStyle} />
          </TwitterShareButton>
        </Tooltip>
        <Tooltip hasArrow label='Share to WhatsApp'>
          <WhatsappShareButton url={url}>
            <WhatsappIcon {...iconStyle} />
          </WhatsappShareButton>
        </Tooltip>
      </HStack>
    </Flex>
  )
}

export default ArticleShare
