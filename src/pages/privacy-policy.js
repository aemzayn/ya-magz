import Layout from "@/components/layout"
import ArticleLayout from "@/components/article/ArticleLayout"
import Meta from "@/components/meta"

const {
  Heading,
  Text,
  UnorderedList,
  ListItem,
  Link,
  Box,
} = require("@chakra-ui/react")

const Privacy = () => {
  const Container = ({ children }) => (
    <Box mb={6} sx={{ "*": { mb: 3 } }}>
      {children}
    </Box>
  )
  return (
    <Layout>
      <ArticleLayout>
        <Meta
          title="Privacy Policy"
          description="Privacy and policy of Ya! Magazine"
        />
        <Container>
          <Heading size="xl" as="h1">
            Privacy Policy of Ya! Magazine
          </Heading>
          <Text>
            At Ya! Magazine, accessible from https://ya-magazine.com, one of our
            main priorities is the privacy of our visitors. This Privacy Policy
            document contains types of information that is collected and
            recorded by Ya! Magazine and how we use it.
          </Text>
          <Text>
            If you have additional questions or require more information about
            our Privacy Policy, do not hesitate to contact us.
          </Text>

          <Text>
            This Privacy Policy applies only to our online activities and is
            valid for visitors to our website with regards to the information
            that they shared and/or collect in Ya! Magazine. This policy is not
            applicable to any information collected offline or via channels
            other than this website. Our Privacy Policy was created with the
            help of the
            <Link
              ml={1}
              isExternal
              rel="noreferrer"
              href="https://www.privacypolicygenerator.info/"
            >
              Privacy Policy Generator.
            </Link>
          </Text>
        </Container>

        <Container>
          <Heading size="lg">Consent</Heading>
          <Text>
            By using our website, you hereby consent to our Privacy Policy and
            agree to its terms.
          </Text>
        </Container>

        <Container>
          <Heading size="lg">Information we collect</Heading>

          <Text>
            The personal information that you are asked to provide, and the
            reasons why you are asked to provide it, will be made clear to you
            at the point we ask you to provide your personal information.
          </Text>
          <Text>
            If you contact us directly, we may receive additional information
            about you such as your name, email address, phone number, the
            contents of the message and/or attachments you may send us, and any
            other information you may choose to provide.
          </Text>
          <Text>
            When you register for an Account, we may ask for your contact
            information, including items such as name, company name, address,
            email address, and telephone number.
          </Text>
        </Container>

        <Container>
          <Heading size="lg">How we use your information</Heading>

          <Text>
            We use the information we collect in various ways, including to:
          </Text>

          <UnorderedList>
            <ListItem>Provide, operate, and maintain our website</ListItem>
            <ListItem>
              Improve, personaListItemze, and expand our website
            </ListItem>
            <ListItem>Understand and analyze how you use our website</ListItem>
            <ListItem>
              Develop new products, services, features, and functionaListItemty
            </ListItem>
            <ListItem>
              Communicate with you, either directly or through one of our
              partners, including for customer service, to provide you with
              updates and other information relating to the website, and for
              marketing and promotional purposes
            </ListItem>
            <ListItem>Send you emails</ListItem>
            <ListItem>Find and prevent fraud</ListItem>
          </UnorderedList>
        </Container>

        <Container>
          <Heading size="lg">Log Files</Heading>

          <Text>
            Ya! Magazine follows a standard procedure of using log files. These
            files log visitors when they visit websites. All hosting companies
            do this and a part of hosting services' analytics. The information
            collected by log files include internet protocol (IP) addresses,
            browser type, Internet Service Provider (ISP), date and time stamp,
            referring/exit pages, and possibly the number of clicks. These are
            not linked to any information that is personally identifiable. The
            purpose of the information is for analyzing trends, administering
            the site, tracking users' movement on the website, and gathering
            demographic information.
          </Text>
        </Container>

        <Container>
          <Heading size="lg">Advertising Partners Privacy Policies</Heading>

          <Text>
            You may consult this list to find the Privacy Policy for each of the
            advertising partners of Ya! Magazine.
          </Text>

          <Text>
            Third-party ad servers or ad networks uses technologies like
            cookies, JavaScript, or Web Beacons that are used in their
            respective advertisements and links that appear on Ya! Magazine,
            which are sent directly to users' browser. They automatically
            receive your IP address when this occurs. These technologies are
            used to measure the effectiveness of their advertising campaigns
            and/or to personalize the advertising content that you see on
            websites that you visit.
          </Text>

          <Text>
            Note that Ya! Magazine has no access to or control over these
            cookies that are used by third-party advertisers.
          </Text>
        </Container>

        <Container>
          <Heading size="lg">Third Party Privacy Policies</Heading>
          <Text>
            Ya! Magazine's Privacy Policy does not apply to other advertisers or
            websites. Thus, we are advising you to consult the respective
            Privacy Policies of these third-party ad servers for more detailed
            information. It may include their practices and instructions about
            how to opt-out of certain options.{" "}
          </Text>
          <Text>
            You can choose to disable cookies through your individual browser
            options. To know more detailed information about cookie management
            with specific web, it can be found at the browsers' respective
            websites.
          </Text>{" "}
        </Container>
        <Container>
          <Heading size="lg">
            CCPA Privacy Rights (Do Not Sell My Personal Information)
          </Heading>

          <Text>
            Under the CCPA, among other rights, California consumers have the
            right to:
          </Text>
          <Text>
            Request that a business that collects a consumer's personal data
            disclose the categories and specific pieces of personal data that a
            business has collected about consumers.
          </Text>
          <Text>
            Request that a business delete any personal data about the consumer
            that a business has collected.
          </Text>
          <Text>
            Request that a business that sells a consumer's personal data, not
            sell the consumer's personal data.
          </Text>
          <Text>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.
          </Text>
        </Container>
        <Container>
          <Heading size="lg">GDPR Data Protection Rights</Heading>
          <Text>
            We would like to make sure you are fully aware of all of your data
            protection rights. Every user is entitled to the following:
          </Text>
          <Text>
            The right to access – You have the right to request copies of your
            personal data. We may charge you a small fee for this service.
          </Text>
          <Text>
            The right to rectification – You have the right to request that we
            correct any information you believe is inaccurate. You also have the
            right to request that we complete the information you believe is
            incomplete.
          </Text>{" "}
          <Text>
            The right to erasure – You have the right to request that we erase
            your personal data, under certain conditions.
          </Text>
          <Text>
            The right to restrict processing – You have the right to request
            that we restrict the processing of your personal data, under certain
            conditions.
          </Text>
          <Text>
            The right to object to processing – You have the right to object to
            our processing of your personal data, under certain conditions.
          </Text>
          <Text>
            The right to data portability – You have the right to request that
            we transfer the data that we have collected to another organization,
            or directly to you, under certain conditions.
          </Text>
          <Text>
            If you make a request, we have one month to respond to you. If you
            would like to exercise any of these rights, please contact us.{" "}
          </Text>
        </Container>
        <Container>
          <Heading size="lg">Children's Information</Heading>

          <Text>
            Another part of our priority is adding protection for children while
            using the internet. We encourage parents and guardians to observe,
            participate in, and/or monitor and guide their online activity.
          </Text>

          <Text>
            Ya! Magazine does not knowingly collect any Personal Identifiable
            Information from children under the age of 13. If you think that
            your child provided this kind of information on our website, we
            strongly encourage you to contact us immediately and we will do our
            best efforts to promptly remove such information from our records.
          </Text>
        </Container>
      </ArticleLayout>
    </Layout>
  )
}
export default Privacy
