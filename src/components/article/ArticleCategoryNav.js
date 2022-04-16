import { Button, Flex } from "@chakra-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"

const NavButton = ({ children, href, asPath }) => {
  return (
    <Link passHref href={href}>
      <Button
        variant="ghost"
        as="a"
        borderRadius={false}
        cursor="pointer"
        fontWeight="normal"
        position="relative"
        color={asPath === href ? "black" : "gray.400"}
        bg={asPath === href ? "gray.200" : "none"}
        outline="none"
      >
        {children}
      </Button>
    </Link>
  )
}

export default function ArticleCategoryNav({ categories }) {
  const router = useRouter()
  const { asPath } = router

  return (
    <Flex
      w="100%"
      d="flex"
      mt="4"
      mb="8"
      justifyContent="center"
      flexWrap="wrap"
      pos="relative"
      _after={{
        content: '""',
        display: "block",
        pos: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        height: "1px",
        backgroundColor: "gray.200",
      }}
    >
      <NavButton href="/read" asPath={asPath}>
        All
      </NavButton>
      {categories &&
        categories.map((tag, i) => (
          <NavButton key={i} href={`/category/${tag.slug}`} asPath={asPath}>
            {tag.name}
          </NavButton>
        ))}
    </Flex>
  )
}
