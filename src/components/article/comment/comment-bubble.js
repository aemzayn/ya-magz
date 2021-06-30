import { getDistanceDate } from "@/lib/date"
import { Avatar, Box, Heading, HStack, Text, VStack } from "@chakra-ui/react"
import DeleteComment from "./delete-comment"

const CommentBubble = ({ user, comment, isAuthenticated, deleteComment }) => {
  return (
    <VStack align="flex-start" spacing={1} w="full">
      <HStack w="full" justifyContent="space-between">
        <HStack w="full" fontSize="1rem">
          <Avatar src={comment?.user?.avatar} name={comment?.name} size="sm" />
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
      {/* TODO: Add upvote features */}
      {/* <HStack>
        <Button
          px={0}
          disabled={!isAuthenticated}
          variant="ghost"
          onClick={() => {
            setUpVote(v => (voted ? v - 1 : v + 1))
            setVoted(v => !v)
          }}
          leftIcon={<Icon as={voted ? RiThumbUpFill : RiThumbUpLine} />}
        >
          {upVote}
        </Button>
      </HStack> */}
    </VStack>
  )
}

export default CommentBubble
