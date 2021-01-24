import { generatePagination } from '@/lib/pagination'
import { ListItem, Text, UnorderedList } from '@chakra-ui/react'
import Link from 'next/link'

export default function Pagination({ current, pages, link }) {
  const pagination = generatePagination(current, pages)
  return (
    <UnorderedList listStyleType='none'>
      {pagination.map((it, i) => (
        <ListItem display='inline-block' mr='2' fontSize='1.25rem' key={i}>
          {it.excerpt ? (
            '...'
          ) : (
            <Text color={it.page === current ? 'black' : 'gray.500'}>
              <Link href={link.href(it.page)} as={link.as(it.page)}>
                <a>{it.page}</a>
              </Link>
            </Text>
          )}
        </ListItem>
      ))}
    </UnorderedList>
  )
}
