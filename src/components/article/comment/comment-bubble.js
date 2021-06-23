import {
  Avatar,
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react"
import { useState } from "react"
import { RiThumbUpFill, RiThumbUpLine } from "react-icons/ri"
import DeleteComment from "./delete-comment"

const CommentBubble = ({ user, comment, isAuthenticated, deleteComment }) => {
  const [upVote, setUpVote] = useState(0)
  const [voted, setVoted] = useState(false)
  return (
    <VStack align="flex-start" spacing={1} w="full">
      <HStack w="full" justifyContent="space-between">
        <HStack w="full">
          <Avatar
            src={comment.avatar ?? null}
            name={!comment?.avatar && comment.name}
            size="sm"
          />
          <Heading
            as="h3"
            textOverflow="ellipsis"
            overflow="hidden"
            whiteSpace="nowrap"
            fontSize={"0.9rem"}
          >
            {comment.name}
          </Heading>
          <Text
            as="span"
            fontSize={"0.9rem"}
            flexGrow={1}
            wordBreak="keep-all"
            color="gray.400"
          >
            {comment.commented_at}
          </Text>
        </HStack>
        {user?.email === comment.email && (
          <DeleteComment deleteComment={() => deleteComment(comment.id)} />
        )}
      </HStack>
      <VStack align="flex-start">
        <Box>{comment.comment}</Box>
      </VStack>
      <HStack>
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
      </HStack>
    </VStack>
  )
}

export default CommentBubble
