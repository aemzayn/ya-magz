import {
  IconButton,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react"
import { HiDotsVertical, HiOutlineTrash } from "react-icons/hi"

export default function DeleteComment({ deleteComment }) {
  return (
    <Menu placement="bottom-end">
      <MenuButton>
        <Icon
          color="brand.gray"
          _hover={{ color: "black" }}
          as={HiDotsVertical}
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
