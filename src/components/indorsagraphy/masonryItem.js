const {
  Box,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Skeleton,
} = require('@chakra-ui/react')

const MasonryItem = ({ image }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box d='inline-block' width='100%'>
        <Skeleton isLoaded={image?.photo ? true : false} w='100%'>
          <Image
            objectFit='cover'
            objectPosition='center'
            onClick={onOpen}
            d='block'
            w='100%'
            src={image?.photo}
            cursor='zoom-in'
            transition='filter 100ms ease-out'
            _hover={{
              filter: 'invert(0.1)',
            }}
          />
        </Skeleton>
      </Box>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        motionPreset='slideInBottom'
        isCentered
        borderRadius='false'
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Photo by: {image?.owner}</Text>
            <Text>{image?.description}</Text>
          </ModalBody>

          <ModalFooter>
            <Button
              variant='outline'
              fontWeight='normal'
              borderRadius='false'
              colorScheme='black'
              onClick={onClose}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default MasonryItem
