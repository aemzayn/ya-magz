import { useContext, useEffect, useState } from "react"
import { Flex, Heading, chakra, Center, SimpleGrid } from "@chakra-ui/react"
import ArticleCard from "@/components/article/article-card"
import ArticleCategoryNav from "./article-category-nav"
import PrimaryButton from "../buttons/primary-button"
import Pagination from "../pagination"
import PageLayout from "../layout/page-layout"
import { CategoryContext } from "src/context"

export default function ArticleList({
  articles = [],
  pagination,
  title = "",
  subtitle = "",
  moreBtn = false,
  moreBtnHref = "/",
  nav,
  type,
}) {
  const categories = useContext(CategoryContext)

  const itemProp = () => {
    return itemProp === "author" ? "author" : "article-list"
  }

  return (
    <PageLayout py={{ base: 8, md: 10 }} px={{ base: 4 }}>
      <Flex
        flexDir={{ base: "column", sm: "row" }}
        alignItems={{ base: "center", xl: "flex-end" }}
        textAlign="center"
        mb={{ base: 1 }}
      >
        {title && (
          <Heading
            className="page-title"
            color={!subtitle ? "black" : "gray.400"}
            size="2xl"
            display="block"
            mr={subtitle ? 2 : 0}
          >
            {title}
          </Heading>
        )}
        {subtitle && (
          <Heading
            className="page-title"
            itemProp={itemProp}
            id={type === "author" && subtitle}
            size="2xl"
            display="block"
          >
            {subtitle}
          </Heading>
        )}
      </Flex>

      {nav && <ArticleCategoryNav categories={categories} />}

      <chakra.div as="main" minH="40vh">
        <SimpleGrid
          w="100%"
          columns={{ base: 1, md: 2, lg: 3 }}
          mt={nav ? 0 : 8}
        >
          {articles.length > 0 &&
            articles.map((ar, i) => <ArticleCard key={i} article={ar} />)}
        </SimpleGrid>
      </chakra.div>

      {pagination && (
        <Pagination
          current={pagination.current}
          pages={pagination.pages}
          link={{
            href: page => (page === 1 ? "/read" : "/read/page/[page]"),
            as: page => (page === 1 ? null : "/read/page/" + page),
          }}
        />
      )}

      {moreBtn && (
        <PrimaryButton bgColor="gray.800" color="white" href={moreBtnHref}>
          Show More
        </PrimaryButton>
      )}
    </PageLayout>
  )
}
