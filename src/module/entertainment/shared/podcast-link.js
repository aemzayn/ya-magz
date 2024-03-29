import { Icon, Link } from "@chakra-ui/react"

export default function PodcastButton({ link, icon }) {
  if (!link) {
    throw new Error("PodcastButton: Link is undefined")
  }
  return (
    <Link href={`/redirect?url=${link}`}>
      <Icon boxSize="1.4em" as={icon} />
    </Link>
  )
}
