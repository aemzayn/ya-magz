import { getDistanceDate } from "src/libs/date"
import {
  Avatar,
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react"
import DeleteComment from "./DeleteComment"

export default function CommentBubble({ user, comment, deleteComment }) {
  const nameTextSize = useBreakpointValue({ base: "sm", md: "md" })
  return (
    <VStack align="flex-start" spacing={2} w="full">
      <HStack w="full" justifyContent="space-between">
        <HStack w="full" fontSize="1rem" spacing={3}>
          <Avatar src={comment?.user?.image} name={comment?.name} size="sm" />
          <Stack
            spacing={{ base: -1, md: 2 }}
            direction={{ base: "column", md: "row" }}
          >
            <Heading
              as="h3"
              size={nameTextSize}
              textOverflow="ellipsis"
              overflow="hidden"
              whiteSpace="nowrap"
            >
              {comment?.user?.name}
            </Heading>
            {comment?.commented_at && (
              <Text
                as="span"
                flexFlow
                flexGrow={1}
                wordBreak="keep-all"
                color="gray.600"
              >
                {getDistanceDate(comment?.commented_at)}
              </Text>
            )}
          </Stack>
        </HStack>
        {user?.email === comment?.user?.email && (
          <DeleteComment deleteComment={() => deleteComment(comment?._id)} />
        )}
      </HStack>
      <VStack align="flex-start">
        <Box>{comment?.comment}</Box>
      </VStack>
    </VStack>
  )
}
