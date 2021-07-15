import {
  HStack,
  Icon,
  IconButton,
  Tooltip,
  useClipboard,
  useToast,
  VStack,
} from "@chakra-ui/react"
import { useRef } from "react"
import {
  RiFacebookBoxFill,
  RiTelegramFill,
  RiTwitterFill,
  RiWhatsappFill,
  RiLineFill,
  RiFileCopy2Fill,
} from "react-icons/ri"
import {
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  LineShareButton,
} from "react-share"
import { AiFillCheckCircle } from "react-icons/ai"
import CustomToast from "../toast"

export default function ArticleShare({ url }) {
  const { hasCopied, onCopy } = useClipboard(url)
  const toastRef = useRef()
  const toast = useToast()
  const handleCopy = () => {
    onCopy()
    toastRef.current = toast({
      duration: 6000,
      isClosable: true,
      render: () => (
        <CustomToast
          title="Success"
          body="URL copied"
          toast={toast}
          leftIcon={AiFillCheckCircle}
        />
      ),
    })
  }
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
        <Tooltip hasArrow label={hasCopied ? "URL Copied" : "Copy URL"}>
          <IconButton
            size="xs"
            variant="unstyled"
            aria-label="Copy article url"
            icon={<Icon boxSize={{ base: 6 }} as={RiFileCopy2Fill} />}
            onClick={handleCopy}
          />
        </Tooltip>
      </HStack>
    </VStack>
  )
}
