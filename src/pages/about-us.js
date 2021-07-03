import ArticleLayout from "@/components/article/article-layout"
import Layout from "@/components/layout"
import Meta from "@/components/meta"
import { Heading, Text, VStack } from "@chakra-ui/layout"

export default function About() {
  return (
    <Layout>
      <ArticleLayout>
        <Meta
          title="About Us"
          description="About Ya! Magazine"
          url="/about-us"
          keywords={["About Us", "About Ya! Magazine"]}
        />
        <Heading mb={{ base: 4, md: 6 }} as="h1">
          About Us
        </Heading>
        <VStack spacing={4}>
          <Text>
            It was all started 3 years ago, when the spring on March 2017 is
            coming. Where all the flowers are started to bloom, especially lale.
            Lale is famous with Tulip as its name. Though, lale is the sign of
            the beauty in the wild, it also the symbol of the life which run by
            all human that facing hardness and challenges but still standing
            tall on their ground. This flower brings the founders of YA! like
            Muafi bey who was experiencing journalism in a new manner when he
            studied in Egypt, and turned to Turkey to establish YA!. He taught
            us and he made it all the way here and now. With you standing
            together in Bursa, Turkey.
          </Text>

          <Text>
            YA! is inspired by lale and will always be. To be honest, YA! is
            also derived from the words yaşayalım anlatalım which mean living
            and explaining. More than that, YA! truly is like everyone here
            always said, evet or kind of the same meaning as YA!. One more
            thing, the ‘!’ is not meant to be commanding anyone, but would
            rather be convincing anyone that we are trust worthy. We hold our
            promises and we do not play fun, even with the things that we can
            play for.
          </Text>

          <Text>
            Yet, we are serious in the same way as we enjoy this life. Saying
            YA! is gaining the braveness to take the responsibility or
            sorumluluk sahibi. Keeping YA! in our mind is believing that we can
            make impossible is nothing or imkansız mümkündür. Making YA! real
            through the attitude and action are our goal to explain how to live
            this life to the fullest. Ne istersen, olursun.",
          </Text>

          <Text>
            "To make it true, YA! was starting as a bulletin where every single
            one man can write down anything on the paper. Especially, Indonesian
            resident in Bursa. Now it’s transforming to magazine, where the
            place is expanded as it needed by all means. Because, we have a
            dream. Like yours.
          </Text>

          <Text>
            The dream that we keep on realizing is like breathing the oxygen.
            Runs through vein. Pumps the heart. Storms the brain. And here we
            live our lives.
          </Text>

          <Text>
            The dream that we keep on realizing is like breathing the oxygen.
            Runs through vein. Pumps the heart. Storms the brain. And here we
            live our lives.
          </Text>

          <Text>
            YA! towards the future with its format Education, Entertainment and
            Electronics Magazine. We want everyone know that educating can be so
            entertaining while catching up with the industry revolution 4.0 that
            soon come. There we come, YA! Emagazine. We are ready to be born
            again and strive in the world. Be with us. Living and explaining.
          </Text>
        </VStack>
      </ArticleLayout>
    </Layout>
  )
}
