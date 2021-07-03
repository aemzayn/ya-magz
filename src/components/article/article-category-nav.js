import { listTags } from "src/libs/postTags"
import { Button, Flex } from "@chakra-ui/react"
import { m } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"

const ArticleCategoryNav = () => {
  const router = useRouter()
  const {
    pathname,
    query: { slug },
  } = router
  const tags = listTags()
  const buttonStyle = {
    as: "a",
    borderRadius: false,
    outline: false,
    colorScheme: "black",
    cursor: "pointer",
    fontWeight: "normal",
    position: "relative",
    _after: {
      content: '""',
      pos: "absolute",
      display: "block",
      bottom: 0,
      left: 0,
      right: 0,
      height: 0,
      bgColor: "gray.100",
      zIndex: -1,
      transition: "all 100ms ease-in-out",
    },
    _hover: {
      _after: {
        height: "full",
      },
    },
  }

  return (
    <Flex
      w="100%"
      d="flex"
      mt="4"
      mb="8"
      justifyContent="center"
      overflowX="auto"
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
      <Link href={`/read`}>
        <Button
          color={pathname.indexOf("/read") !== -1 ? "black" : "gray.400"}
          bg={pathname.indexOf("/read") !== -1 ? "gray.200" : "none"}
          {...buttonStyle}
        >
          All
        </Button>
      </Link>
      {tags.map((tag, i) => (
        <Link key={i} href={`/category/${tag.slug}`}>
          <Button
            color={tag.slug === slug ? "black" : "gray.400"}
            bg={tag.slug === slug ? "gray.200" : "none"}
            {...buttonStyle}
          >
            {tag.name}
          </Button>
        </Link>
      ))}
    </Flex>
  )
}

export default ArticleCategoryNav
