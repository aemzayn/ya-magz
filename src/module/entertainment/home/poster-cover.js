import { AspectRatio, Skeleton } from "@chakra-ui/react"
import Image from "next/image"

export default function PosterCover({
  src,
  alt,
  isRight = false,
  inView = true,
}) {
  return (
    <AspectRatio
      ratio={2 / 2}
      w="100%"
      maxW={{ base: null, md: "14rem", lg: "18rem" }}
      mb={{ base: 4, md: 0 }}
      ml={{
        base: 0,
        md: isRight ? 5 : 0,
        lg: isRight ? 6 : 0,
        xl: isRight ? 8 : 0,
      }}
      mr={{
        base: 0,
        md: !isRight ? 5 : 0,
        lg: !isRight ? 6 : 0,
        xl: !isRight ? 8 : 0,
      }}
      boxShadow="lg"
    >
      <Skeleton height="100%" width="100%" isLoaded={!!inView}>
        {inView && (
          <Image
            layout="fill"
            objectFit="cover"
            src={src}
            alt={alt}
            quality={50}
          />
        )}
      </Skeleton>
    </AspectRatio>
  )
}
