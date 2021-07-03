import { HStack, Icon, Tooltip, VStack } from "@chakra-ui/react"
import {
  RiFacebookBoxFill,
  RiTelegramFill,
  RiTwitterFill,
  RiWhatsappFill,
  RiLineFill,
} from "react-icons/ri"
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LineShareButton,
} from "react-share"

export default function ArticleShare({ url }) {
  return (
    <VStack flexDir="column" mt="10" alignItems="center">
      <HStack d="flex" ml="2" mt="1" spacing={{ base: 4, md: 6 }}>
        <Tooltip hasArrow label="Share to Twitter">
          <TwitterShareButton url={url}>
            <Icon boxSize={{ base: 6 }} as={RiTwitterFill} />
          </TwitterShareButton>
        </Tooltip>
        <Tooltip hasArrow label="Share to FB">
          <FacebookShareButton url={url}>
            <Icon boxSize={{ base: 6 }} as={RiFacebookBoxFill} />
          </FacebookShareButton>
        </Tooltip>
        <Tooltip hasArrow label="Share to WhatsApp">
          <WhatsappShareButton url={url}>
            <Icon boxSize={{ base: 6 }} as={RiWhatsappFill} />
          </WhatsappShareButton>
        </Tooltip>
        <Tooltip hasArrow label="Share to Telegram">
          <TelegramShareButton url={url}>
            <Icon boxSize={{ base: 6 }} as={RiTelegramFill} />
          </TelegramShareButton>
        </Tooltip>
        <Tooltip hasArrow label="Share to Line">
          <LineShareButton url={url}>
            <Icon boxSize={{ base: 6 }} as={RiLineFill} />
          </LineShareButton>
        </Tooltip>
      </HStack>
    </VStack>
  )
}
