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
      <ModalOverlay />
      <ModalContent>
        <ModalBody p={0} bg="none">
          <Image src={image} />
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
