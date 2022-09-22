import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  VStack,
  Text,
} from "@chakra-ui/react"
import { useEffect, useState } from "react"

export default function ProfileForm({ isOpen, onClose }) {
  const [profile, setProfile] = useState({ name: "", image: "" })
  const [loading, setLoading] = useState("")
  const [msg, setMsg] = useState("")
  useEffect(() => {
    fetch("/api/user/me")
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setProfile({
          name: data.name,
          image: data.image,
        })
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const handleChange = e => {
    setProfile(input => ({ ...input, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    setLoading(true)
    if (!profile.name || !profile.image) {
      setLoading(false)
      return
    }

    const res = await fetch("/api/user/me", {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(profile),
    })
    const { data, error } = await res.json()
    if (error) {
      setMsg("Failed to edit profile.")
    }
    if (data) {
      setMsg("Edit profile success, reload to take effect.")
    }
    setLoading(false)
    setTimeout(() => {
      setMsg("")
    }, 4000)
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius={0}>
        <ModalHeader>Edit profile</ModalHeader>
        <ModalBody marginBottom={4}>
          <VStack
            spacing={4}
            as="form"
            onSubmit={e => {
              e.preventDefault()
              handleSubmit()
            }}
          >
            <FormControl id="name">
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                borderRadius={0}
                borderColor="gray.500"
                _hover={{
                  borderColor: "gray.900",
                }}
              />
            </FormControl>
            <FormControl id="image">
              <FormLabel>Image url</FormLabel>
              <Input
                type="url"
                name="image"
                value={profile.image}
                onChange={handleChange}
                borderRadius={0}
                borderColor="gray.500"
                _hover={{
                  borderColor: "gray.900",
                }}
              />
              <FormHelperText>Your avatar url</FormHelperText>
            </FormControl>

            <Flex alignSelf="flex-end" alignItems="center" gap={2}>
              {msg && (
                <Text fontSize="sm" as="span" marginRight={2}>
                  {msg}
                </Text>
              )}
              <Button
                borderRadius={0}
                type="button"
                colorScheme="red"
                fontWeight="normal"
                px={8}
                variant="ghost"
                onClick={onClose}
              >
                Cancel
              </Button>

              <Button
                borderRadius={0}
                disabled={!profile.name || !profile.image}
                type="submit"
                colorScheme="blue"
                fontWeight="normal"
                px={8}
                isLoading={loading}
              >
                Edit
              </Button>
            </Flex>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}
