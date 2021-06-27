import {
  IconButton,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react"
import { HiDotsVertical, HiOutlineTrash } from "react-icons/hi"

const DeleteComment = ({ deleteComment }) => {
  return (
    <Menu placement="bottom-end">
      <MenuButton>
        <IconButton
          aria-label="Delete comment"
          size="sm"
          variant="ghost"
          icon={<Icon as={HiDotsVertical} />}
          color="brand.gray"
          _hover={{ color: "black" }}
        />
      </MenuButton>
      <MenuList borderRadius={false} borderColor="gray.200">
        <MenuItem
          minH="48px"
          _hover={{ color: "red.500", bgColor: "red.50" }}
          onClick={deleteComment}
        >
          <span>
            Delete <Icon ml={1} as={HiOutlineTrash} />
          </span>
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default DeleteComment
