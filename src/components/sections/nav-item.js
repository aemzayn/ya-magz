import Link from "next/link"
import { useRouter } from "next/router"
import { ListItem, Text } from "@chakra-ui/react"

export default function NavItem({ children, isLast, to = "/", ...rest }) {
  const router = useRouter()
  return (
    <ListItem listStyleType="none">
      <Link href={to}>
        <Text
          as="a"
          display="block"
          color={router.pathname === to ? "black" : "brand.gray"}
          cursor="pointer"
          fontWeight={router.pathname === to ? 600 : 400}
          _hover={{
            color: "black",
          }}
          fontFamily="body"
          mb={{ base: isLast ? 4 : 8, md: 0 }}
          mr={{ base: 0, md: isLast ? 0 : 8 }}
          {...rest}
        >
          {children}
        </Text>
      </Link>
    </ListItem>
  )
}
