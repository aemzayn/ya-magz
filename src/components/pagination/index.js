import { generatePagination } from "src/libs/pagination"
import { Button, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import Link from "next/link"

export default function Pagination({ current, pages, link }) {
  const pagination = generatePagination(current, pages)
  return (
    <UnorderedList listStyleType="none">
      {pagination.map((it, i) => (
        <ListItem
          display="inline-block"
          mr="2"
          fontSize="1.25rem"
          key={i}
          cursor="pointer"
        >
          {it.excerpt ? (
            "..."
          ) : (
            <Text
              color={it.page === current ? "black" : "gray.300"}
              _hover={{
                color: it.page === current ? "black" : "gray.700",
              }}
            >
              <Link href={link.href(it.page)} passHref as={link.as(it.page)}>
                <Button
                  bgColor={it.page === current ? "gray.100" : "white"}
                  as="a"
                  _hover={{
                    bgColor: it.page === current ? "gray.200" : "gray.200",
                  }}
                  borderRadius="none"
                >
                  {it.page}
                </Button>
              </Link>
            </Text>
          )}
        </ListItem>
      ))}
    </UnorderedList>
  )
}
