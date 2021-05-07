import { FacebookIcon, TwitterIcon, WhatsappIcon } from '@/assets/icons'
import {
  Center,
  Flex,
  HStack,
  Tooltip,
  useBreakpointValue,
} from '@chakra-ui/react'
import {
  // FacebookIcon,
  FacebookShareButton,
  // TwitterIcon,
  TwitterShareButton,
  // WhatsappIcon,
  WhatsappShareButton,
} from 'react-share'

const ArticleShare = ({ url }) => {
  const iconStyle = {
    borderRadius: '10px',
    w: useBreakpointValue({ base: '25px' }),
    h: useBreakpointValue({ base: '25px' }),
  }

  return (
    <Flex flexDir='column' mt='10' alignItems='center'>
      <HStack d='flex' ml='2' mt='1' spacing={{ base: 4, md: 4 }}>
        <Tooltip hasArrow label='Share to Twitter'>
          <TwitterShareButton url={url}>
            <Center {...iconStyle}>
              <TwitterIcon />
            </Center>
          </TwitterShareButton>
        </Tooltip>
        <Tooltip hasArrow label='Share to FB'>
          <FacebookShareButton url={url}>
            <Center {...iconStyle}>
              <FacebookIcon />
            </Center>
          </FacebookShareButton>
        </Tooltip>
        <Tooltip hasArrow label='Share to WhatsApp'>
          <WhatsappShareButton url={url}>
            <Center {...iconStyle}>
              <Center w={iconStyle.w} h={iconStyle.h}>
                <WhatsappIcon />
              </Center>
            </Center>
          </WhatsappShareButton>
        </Tooltip>
      </HStack>
    </Flex>
  )
}

export default ArticleShare
