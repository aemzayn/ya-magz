import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  IconButton,
  Icon,
  Button,
} from "@chakra-ui/react"
import { HiDotsVertical, HiOutlineTrash } from "react-icons/hi"

const DeleteComment = ({ deleteComment }) => {
  return (
    <Popover placement="bottom-end" matchWidth>
      <PopoverTrigger>
        <IconButton
          aria-label="Delete comment"
          size="sm"
          variant="ghost"
          icon={<Icon as={HiDotsVertical} />}
          color="gray.500"
          _hover={{ color: "black" }}
        />
      </PopoverTrigger>
      <PopoverContent
        borderRadius={false}
        borderColor="gray.400"
        w="min-content"
      >
        <PopoverArrow />
        <PopoverBody px={0}>
          <Button
            onClick={deleteComment}
            borderRadius={false}
            leftIcon={<Icon as={HiOutlineTrash} />}
          >
            Delete
          </Button>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  )
}

export default DeleteComment
