import { useState } from "react"
import { useSession } from "next-auth/react"
import { Heading, VStack, Text, Divider, Button } from "@chakra-ui/react"
import CommentForm from "./CommentForm"
import CommentBubble from "./CommentBuble"
import { isDevelopment } from "src/constanst/development"
import RenderInView from "@/components/RenderInView"
import { cleanComment } from "src/libs/comments"

export default function Comment({ slug, comments, setComments }) {
  const { data: session } = useSession()
  const [showForm, setShowForm] = useState(false)
  const [loading, setLoading] = useState(false)

  function toggleForm() {
    setShowForm(show => !show)
  }

  async function addComment(comment) {
    if (!session) return
    const newComment = {
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
        setComments(prev => [...prev, data])
      }
    } catch (error) {
      if (isDevelopment) console.error(error)
    } finally {
      setShowForm(false)
    }
  }

  async function deleteComment(commentId) {
    if (!session) return
    setLoading(true)

    try {
      const res = await fetch(`/api/post/${slug}/${commentId}`, {
        method: "DELETE",
      })
      const { data } = await res.json()
      if (data) {
        setComments(allComments =>
          allComments.filter(comment => comment._id.toString() !== commentId)
        )
      }
    } catch (error) {
      if (isDevelopment) console.error(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <RenderInView>
      {({ ref, inView }) => (
        <VStack
          alignItems="flex-start"
          spacing={6}
          mt={6}
          py={6}
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
