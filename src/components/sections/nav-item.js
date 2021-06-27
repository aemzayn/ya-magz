import Link from "next/link"
import { useRouter } from "next/router"
import { ListItem, Text } from "@chakra-ui/react"

const NavItem = ({ children, isLast, to = "/", ...rest }) => {
  const router = useRouter()
  return (
    <ListItem listStyleType="none">
      <Link href={to}>
        <Text
          as="a"
          display="block"
          color={router.pathname === to ? "black" : "brand.gray"}
          cursor="pointer"
          _hover={{
            color: "black",
          }}
          fontFamily="body"
          {...rest}
          mb={{ base: isLast ? 0 : 8, md: 0 }}
          mr={{ base: 0, md: isLast ? 0 : 8 }}
        >
          {children}
        </Text>
      </Link>
    </ListItem>
  )
}

export default NavItem
