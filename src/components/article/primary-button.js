import { Button } from '@chakra-ui/react'
import Link from 'next/link'

export default function PrimaryButton({
  children,
  href = '/',
  rightIcon,
  ...rest
}) {
  return (
    <Link href={href}>
      <Button
        as='a'
        py={{ base: '5', md: '7' }}
        px={{ base: '10', md: '12' }}
        lineHeight='1'
        size='lg'
        bg='teal.400'
        color='white'
        borderRadius='50px'
        fontWeight='normal'
        borderRadius='false'
        _hover={{
          opacity: 0.8,
        }}
        rightIcon={rightIcon && rightIcon}
        cursor='pointer'
        {...rest}
      >
        {children.trim()}
      </Button>
    </Link>
  )
}
