import {
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Image,
} from "@chakra-ui/react"

export default function ImagePopup({ image, setSelected, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      preserveScrollBarGap={true}
      onClose={() => {
        setSelected("")
        onClose()
      }}
      isCentered
    >
      <ModalOverlay bgColor="blackAlpha.700" />
      <ModalContent>
        <ModalBody p={0} bg="none">
          <Image alt="Indorsagraphy" src={image} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
