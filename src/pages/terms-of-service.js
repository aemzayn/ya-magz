import ArticleLayout from "@/components/article/ArticleLayout"
import Layout from "@/components/layout"
import Meta from "@/components/meta"
import { Box, Heading, ListItem, OrderedList, Text } from "@chakra-ui/react"
import Link from "next/link"

export default function TermsOfServicePage() {
  const Container = ({ children }) => (
    <Box mb={6} sx={{ "*": { mb: 3 } }}>
      {children}
    </Box>
  )

  return (
    <Layout>
      <ArticleLayout>
        <Meta
          title="Terms of Service"
          description="Terms of Service of Ya! Magazine"
        />

        <Container>
          <Heading size="xl" as="h1">
            Terms of Service of Ya! Magazine
          </Heading>
          <OrderedList>
            <ListItem>
              <Text>Terms</Text>
              <Text>
                By accessing this Website, accessible from
                https://ya-magazine.com, you are agreeing to be bound by these
                Website Terms and Conditions of Use and agree that you are
                responsible for the agreement with any applicable local laws. If
                you disagree with any of these terms, you are prohibited from
                accessing this site. The materials contained in this Website are
                protected by copyright and trade mark law.
              </Text>
            </ListItem>
            <ListItem>
              <Text>Use</Text>
              <Text>
                License Permission is granted to temporarily download one copy
                of the materials on Ya! Magazine's Website for personal,
                non-commercial transitory viewing only. This is the grant of a
                license, not a transfer of title, and under this license you may
                not: modify or copy the materials; use the materials for any
                commercial purpose or for any public display; attempt to reverse
                engineer any software contained on Ya! Magazine's Website;
                remove any copyright or other proprietary notations from the
                materials; or transferring the materials to another person or
                "mirror" the materials on any other server. This will let Ya!
                Magazine to terminate upon violations of any of these
                restrictions. Upon termination, your viewing right will also be
                terminated and you should destroy any downloaded materials in
                your possession whether it is printed or electronic format.
              </Text>
            </ListItem>
            <ListItem>
              <Text>Disclaimer</Text>
              <Text>
                All the materials on Ya! Magazine’s Website are provided "as
                is". Ya! Magazine makes no warranties, may it be expressed or
                implied, therefore negates all other warranties. Furthermore,
                Ya! Magazine does not make any representations concerning the
                accuracy or reliability of the use of the materials on its
                Website or otherwise relating to such materials or any sites
                linked to this Website.
              </Text>
            </ListItem>
            <ListItem>
              <Text>Limitations</Text>
              <Text>
                Ya! Magazine or its suppliers will not be hold accountable for
                any damages that will arise with the use or inability to use the
                materials on Ya! Magazine’s Website, even if Ya! Magazine or an
                authorize representative of this Website has been notified,
                orally or written, of the possibility of such damage. Some
                jurisdiction does not allow limitations on implied warranties or
                limitations of liability for incidental damages, these
                limitations may not apply to you.
              </Text>
            </ListItem>
            <ListItem>
              <Text>Revisions and Errata</Text>
              <Text>
                The materials appearing on Ya! Magazine’s Website may include
                technical, typographical, or photographic errors. Ya! Magazine
                will not promise that any of the materials in this Website are
                accurate, complete, or current. Ya! Magazine may change the
                materials contained on its Website at any time without notice.
                Ya! Magazine does not make any commitment to update the
                materials.
              </Text>
            </ListItem>
            <ListItem>
              <Text>Links</Text>
              <Text>
                Ya! Magazine has not reviewed all of the sites linked to its
                Website and is not responsible for the contents of any such
                linked site. The presence of any link does not imply endorsement
                by Ya! Magazine of the site. The use of any linked website is at
                the user’s own risk.
              </Text>
            </ListItem>
            <ListItem>
              <Text>Site Terms of Use Modifications</Text>
              <Text>
                Ya! Magazine may revise these Terms of Use for its Website at
                any time without prior notice. By using this Website, you are
                agreeing to be bound by the current version of these Terms and
                Conditions of Use.
              </Text>
            </ListItem>
            <ListItem>
              <Text>Your Privacy</Text>
              <Text>
                Please read our{" "}
                <Link passHref href="/privacy-policy">
                  <Text
                    display="inline"
                    textDecor="underline"
                    cursor={"pointer"}
                  >
                    Privacy Policy.
                  </Text>
                </Link>
              </Text>
            </ListItem>
            <ListItem>
              <Text>Governing Law</Text>
              <Text>
                Any claim related to Ya! Magazine's Website shall be governed by
                the laws of tr without regards to its conflict of law
                provisions.
              </Text>
            </ListItem>
          </OrderedList>
        </Container>
      </ArticleLayout>
    </Layout>
  )
}
