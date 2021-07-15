import { getDistanceDate } from "src/libs/date"
import { Avatar, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import DeleteComment from "./delete-comment"

export default function CommentBubble({ user, comment, deleteComment }) {
  return (
    <VStack align="flex-start" spacing={2} w="full">
      <HStack w="full" justifyContent="space-between">
        <HStack w="full" fontSize="1rem">
          <Avatar src={comment?.user?.image} name={comment?.name} size="sm" />
          <Heading
            as="h3"
            fontSize="inherit"
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
