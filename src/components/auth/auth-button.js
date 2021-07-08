import { useSession, signIn, signOut } from "next-auth/client"
import { AiOutlineUser } from "react-icons/ai"
import { FiLogOut } from "react-icons/fi"
import {
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Avatar,
  MenuGroup,
  MenuDivider,
} from "@chakra-ui/react"

const AuthButton = () => {
  const [session] = useSession()
  return (
    <Menu>
      <MenuButton>
        <Avatar
          size="sm"
          bg="gray.200"
          icon={<AiOutlineUser fontSize="1.1rem" />}
          src={session ? session?.user?.image : ""}
        />
      </MenuButton>
      <MenuList borderRadius={false} borderColor="gray.200">
        {session ? (
          <>
            <MenuGroup title="Profile">
              <MenuItem minH="48px">
                <span>My Account (soon)</span>
              </MenuItem>
            </MenuGroup>
            <MenuDivider />
            <MenuItem minH="48px" onClick={() => signOut()}>
              <span>
                Log out <Icon ml={1} as={FiLogOut} />
              </span>
            </MenuItem>
          </>
        ) : (
          <MenuItem minH="48px" onClick={() => signIn()}>
            <span>Login</span>
          </MenuItem>
        )}
      </MenuList>
    </Menu>
  )
}

export default AuthButton
