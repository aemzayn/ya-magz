import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Heading,
} from "@chakra-ui/react"

import Meta from "@/components/meta"
import Layout from "@/components/layout"
import MagazineGrid from "@/components/magazine/MagazineGrid"
import MagazinePageLayout from "@/components/magazine/MagazinePageLayout"

import magazines from "@/cms/magazines.json"
import bulletins from "@/cms/bulletins.json"

export default function Magazine() {
  return (
    <Layout>
      <Meta
        title="Magazines"
        url="/magazine"
        keywords={[
          "Ya! Magazine",
          "Magazines",
          "Bulletins",
          "Magazine from Ya! Magazine",
          "Edutainment Magazine",
        ]}
        description="Magazines and Bulletins published by Ya! Magazine."
      />
      <MagazinePageLayout>
        <Tabs variant="enclosed" colorScheme="blue" isLazy isFitted>
          <TabList
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            borderBottomColor="gray.200"
            flexDir={{ base: "column", md: "row" }}
          >
            <Box display="flex" alignItems="center" mb={{ base: 4, md: 0 }}>
              <Heading
                fontFamily="serif"
                pos="relative"
                top={-1}
                className="page-title"
                as="h1"
                size="xl"
              >
                Magazines and Bulletins
              </Heading>
            </Box>
            <Box display="flex" w={{ base: "full", md: "unset" }}>
              <Tab _hover={{ bgColor: "blue.50" }} pb={3} borderRadius={0}>
                Magazines
              </Tab>
              <Tab _hover={{ bgColor: "blue.50" }} pb={3} borderRadius={0}>
                Bulletins
              </Tab>
            </Box>
          </TabList>

          <TabPanels>
            <TabPanel p={0}>
              <MagazineGrid items={magazines.magazines} />
            </TabPanel>
            <TabPanel>
              <MagazineGrid items={bulletins.bulletins} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </MagazinePageLayout>
    </Layout>
  )
}
