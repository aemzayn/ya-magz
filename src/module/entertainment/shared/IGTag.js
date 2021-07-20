import { Link, Tooltip } from "@chakra-ui/react"

export default function IGTag({ username }) {
  return (
    <Tooltip aria-label="Visit instagram accoung" label="See on Insta" hasArrow>
      <Link
        fontWeight="bold"
        href={`/redirect?url=https://www.instagram.com/${username}`}
      >
        @{username}
      </Link>
    </Tooltip>
  )
}
