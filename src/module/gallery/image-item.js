import { useState } from "react"
import Image from "next/image"
import { AspectRatio, Box, Skeleton, Text, VStack } from "@chakra-ui/react"
import RenderInView from "@/components/render-inview"

export default function ImageItem({ image, setSelected, onOpen }) {
  const [hover, setHover] = useState(false)
  return (
    <RenderInView>
      {({ ref, inView, loaded, setIsLoaded }) => (
        <>
          <AspectRatio
            ratio={1 / 1}
            ref={ref}
            onClick={() => {
              setSelected(image.link)
              onOpen()
            }}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            display="inline-block"
            cursor="zoom-in"
            w="full"
            transition="all 150ms ease-in-out"
            pos="relative"
            _hover={{
              boxShadow: "lg",
              _after: {
                bg: "blackAlpha.500",
              },
            }}
            _after={{
              content: "''",
              pos: "absolute",
              transition: "all 150ms ease-in-out",
              inset: 0,
              bg: "transparent",
            }}
          >
            <>
              {hover && loaded && (
                <Box
                  d={{ base: "none", md: "flex" }}
                  flexDir="column"
                  textAlign="left"
                  position="absolute"
                  left={0}
                  bottom={0}
                  zIndex={0}
                  zIndex={2}
                >
                  <Text color="white" fontWeight="semibold">
                    {image?.photographer?.name}
                  </Text>
                  <Text fontSize="sm" mt={-1} color="whiteAlpha.800">
                    @{image?.photographer?.instagram}
                  </Text>
                </Box>
              )}
              <Skeleton isLoaded={loaded} w="full" h="full">
                {inView && (
                  <Image
                    onLoad={() => setIsLoaded()}
                    src={image?.link}
                    alt={image?.photographer?.name || ""}
                    layout="fill"
                    objectFit="cover"
                    quality={50}
                  />
                )}
              </Skeleton>
            </>
          </AspectRatio>
          <VStack
            display={{ base: "flex", md: "none" }}
            spacing={0}
            alignItems="flex-start"
            pb={2}
          >
            <Text fontWeight="semibold">{image?.photographer?.name}</Text>
            <Text fontSize="sm" mt={-1}>
              @{image?.photographer?.instagram}
            </Text>
          </VStack>
        </>
      )}
    </RenderInView>
  )
}
