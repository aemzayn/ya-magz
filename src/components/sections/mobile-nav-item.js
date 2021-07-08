import { ListItem, Text, Icon } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

export default function MobileNavItem({
  children,
  isLast,
  to = "/",
  icon,
  activeIcon,
}) {
  const router = useRouter()

  return (
    <ListItem
      listStyleType="none"
      w="full"
      bgColor={router.pathname === to ? "gray.200" : "white"}
    >
      <Link href={to}>
        <Text
          as="a"
          display="block"
          color={router.pathname === to ? "black" : "brand.gray"}
          cursor="pointer"
          _hover={{
            color: "black",
            bgColor: "gray.100",
          }}
          w="full"
          px={6}
          py={4}
          fontFamily="body"
        >
          {icon && (
            <Icon
              marginRight={4}
              boxSize="1.2em"
              as={
                router.pathname === to ? (activeIcon ? activeIcon : icon) : icon
              }
            />
          )}
          {children}
        </Text>
      </Link>
    </ListItem>
  )
}
