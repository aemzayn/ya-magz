import { Button, useBreakpointValue } from "@chakra-ui/react"
import { useSession, signIn, signOut } from "next-auth/client"

const AuthHeaderButton = () => {
  const [session] = useSession()
  const authButtonSize = useBreakpointValue({ base: "md", md: "sm" })
  return (
    <Button
      size={authButtonSize}
      colorScheme="gray"
      borderRadius={false}
      mt={{ base: 6, md: 0 }}
      onClick={() => {
        session ? signOut() : signIn()
      }}
    >
      {session ? "Logout" : "Login"}
    </Button>
  )
}

export default AuthHeaderButton
