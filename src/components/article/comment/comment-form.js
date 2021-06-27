import { Button, HStack, Box, Avatar, VStack, Textarea } from "@chakra-ui/react"
import { useState } from "react"

const CommentForm = ({ user, addComment, toggleForm }) => {
  const [input, setInput] = useState("")
  return (
    <HStack w="full" alignItems="flex-start" spacing={3}>
      <Box>
        <Avatar size="sm" src={user.image} />
      </Box>
      <VStack
        w="full"
        align="flex-end"
        as="form"
        onSubmit={e => {
          e.preventDefault()
          addComment(input)
          setInput("")
        }}
      >
        <Textarea
          placeholder={`Commenting as ${user.name}`}
          size="md"
          type="text"
          name="comment"
          maxLength={200}
          borderRadius={false}
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <HStack justifyContent="flex-end">
          <Button borderRadius={false} onClick={toggleForm} colorScheme="red">
            Cancel
          </Button>
          <Button borderRadius={false} colorScheme="blue" type="submit">
            Submit
          </Button>
        </HStack>
      </VStack>
    </HStack>
  )
}

export default CommentForm
