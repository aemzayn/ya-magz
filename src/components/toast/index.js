import { Box, Flex, Heading, Icon, IconButton, Text } from "@chakra-ui/react"
import { HiX as CloseIcon } from "react-icons/hi"

export default function CustomToast({
  title,
  body,
  leftIcon,
  toast,
  variant = "success",
}) {
  const color = variant === "error" ? "red.500" : "black"
  return (
    <Flex
      p={3}
      alignItems="flex-start"
      justifyContent="space-between"
      bg="white"
      border="1px solid"
      borderColor={color}
      pos="relative"
      _before={{
        content: "''",
        pos: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: 1,
        bgColor: color,
      }}
    >
      <div style={{ display: "flex" }}>
        {leftIcon && (
          <Box
            bgColor={variant === "error" ? "red.100" : "white"}
            p={3}
            borderRadius="full"
            w={5}
            h={5}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Icon boxSize="1em" as={leftIcon} />
          </Box>
        )}
        <Box marginLeft={2}>
          <Heading fontSize="xl">{title}</Heading>
          <Text>{body}</Text>
        </Box>
      </div>
      <IconButton
        ml={2}
        size="sm"
        borderRadius="full"
        aria-label="Close icon"
        variant="ghost"
        icon={<Icon boxSize="1.2em" as={CloseIcon} />}
        onClick={() => {
          toast.closeAll()
        }}
      />
    </Flex>
  )
}
