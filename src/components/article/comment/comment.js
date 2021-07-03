import { useEffect, useState } from "react"
import { useSession } from "next-auth/client"
import { Heading, VStack, Text, Divider, Button } from "@chakra-ui/react"
import CommentForm from "./comment-form"
import CommentBubble from "./comment-bubble"
import { IS_DEV } from "src/constanst/development"
import useFetch from "src/hooks/useFetch"
import RenderInView from "@/components/render-inview"
import { cleanComment } from "src/libs/comments"

const Comment = ({ slug }) => {
  const [session] = useSession()
  const [showForm, setShowForm] = useState(false)
  const { data } = useFetch(`/api/post/${slug}`)
  const [comments, setComments] = useState([])

  useEffect(() => {
    if (data) {
      setComments(data.data.comments)
    }
  }, [data])

  function toggleForm() {
    setShowForm(show => !show)
  }

  async function addComment(comment) {
    if (!session) return
    const newComment = {
      user: {
        name: session.user.name,
        email: session.user.email,
        avatar: session.user.image,
      },
      post_slug: slug,
      comment: cleanComment(comment),
      commented_at: Date.now(),
    }

    try {
      const res = await fetch(`/api/post/${slug}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newComment),
      })
      const { data } = await res.json()
      if (data) {
        setComments(coms => [...coms, newComment])
      }
    } catch (error) {
      if (IS_DEV) console.error(error)
    } finally {
      setShowForm(false)
    }
  }

  async function deleteComment(commentId) {
    if (!session) return

    try {
      const res = await fetch(`/api/post/${slug}/${commentId}`, {
        method: "DELETE",
      })
      const { data } = await res.json()
      if (data) {
        setComments(prevComments =>
          prevComments.filter(comment => comment._id.toString() !== commentId)
        )
      }
    } catch (error) {
      if (IS_DEV) console.error(error)
    }
  }

  return (
    <RenderInView>
      {({ ref, inView }) => (
        <VStack
          alignItems="flex-start"
          spacing={{ base: 6 }}
          mt={6}
          py={{ base: 6 }}
          w="full"
          ref={ref}
        >
          <Divider color="gray.300" />
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
              <Button onClick={toggleForm} variant="link" fontWeight="normal">
                Add comment
              </Button>
            )
          ) : (
            <Text>Login to leave a comment</Text>
          )}
          {inView && (
            <VStack spacing={6} w="full">
              {comments.map((c, idx) => (
                <CommentBubble
                  deleteComment={deleteComment}
                  isAuthenticated={!!session}
                  key={idx}
                  comment={c}
                  user={session?.user}
                />
              ))}
            </VStack>
          )}
        </VStack>
      )}
    </RenderInView>
  )
}

export default Comment
