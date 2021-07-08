import { useSession, signIn, signOut } from "next-auth/client"
import { FiLogOut, FiUser } from "react-icons/fi"
import {
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Avatar,
  MenuGroup,
  MenuDivider,
  useDisclosure,
} from "@chakra-ui/react"
import ProfileForm from "./profile-form"

const AuthButton = () => {
  const [session] = useSession()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Menu>
        <MenuButton>
          <Avatar
            size="sm"
            bg="gray.200"
            icon={<FiUser fontSize="1.1rem" />}
            src={session ? session?.user?.image : ""}
          />
        </MenuButton>
        <MenuList borderRadius={false} borderColor="gray.200">
          {session && (
            <>
              <MenuGroup title="Profile">
                <MenuItem
                  onClick={onOpen}
                  icon={<Icon as={FiUser} />}
                  minH="48px"
                >
                  <span>My Account</span>
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuItem
                icon={<Icon as={FiLogOut} />}
                minH="48px"
                onClick={() => signOut()}
              >
                <span>Log out</span>
              </MenuItem>
            </>
          )}
          {!session && (
            <MenuItem minH="48px" onClick={() => signIn()}>
              <span>Login</span>
            </MenuItem>
          )}
        </MenuList>
      </Menu>
      {session && (
        <ProfileForm isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      )}
    </>
  )
}

export default AuthButton
