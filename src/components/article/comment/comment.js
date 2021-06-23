import { useState } from "react"
import { useSession } from "next-auth/client"
import { Heading, VStack, Text, Divider, Button } from "@chakra-ui/react"
import CommentForm from "./comment-form"
import CommentBubble from "./comment-bubble"
import { IS_DEV } from "src/constanst/development"
import { formatDistance, subDays } from "date-fns"

const Comment = () => {
  const [session] = useSession()
  const IS_AUTH = IS_DEV || !!session
  const [showForm, setShowForm] = useState(false)
  const TODAY = new Date()

  function getDistanceDate(date = new Date(), range = 0) {
    return formatDistance(subDays(date, range), new Date(), {
      addSuffix: true,
    })
  }

  const [comments, setComments] = useState([])

  function toggleForm() {
    setShowForm(show => !show)
  }

  function addComment(comment) {
    let newComment = {
      id: comment.length + 1,
      name: session?.user?.name ?? "Bob",
      email: session?.user?.email ?? "bob@bob.com",
      avatar: session?.user?.avatar,
      commented_at: getDistanceDate(TODAY),
      comment,
    }
    setComments(coms => [...coms, newComment])
    setShowForm(false)
  }

  function deleteComment(id) {
    setComments(comment => comment.filter(c => c.id !== id))
  }

  return (
    <VStack
      alignItems="flex-start"
      spacing={{ base: 6 }}
      mt={6}
      py={{ base: 6 }}
    >
      <Divider variant="dashed" color="gray.400" />
      <Heading size="md">
        Recent comments (<span>{comments.length}</span>)
      </Heading>
      {session ? (
        showForm ? (
          <CommentForm
            toggleForm={toggleForm}
            user={session.user}
            addComment={addComment}
          />
        ) : (
          <Button onClick={toggleForm} variant="link">
            Add comment
          </Button>
        )
      ) : (
        <Text>Login to leave a comment</Text>
      )}
      <VStack spacing={6}>
        {comments.map((c, idx) => (
          <CommentBubble
            deleteComment={deleteComment}
            isAuthenticated={IS_AUTH}
            key={idx}
            comment={c}
            user={session?.user}
          />
        ))}
      </VStack>
    </VStack>
  )
}

export default Comment
