async function fetchAPI(query, { variables } = {}) {
  const res = await fetch(`${process.env.API_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
    throw new Error('Failed to fetch API')
  }

  return json.data
}

export async function getAllPostsForHome() {
  const data = await fetchAPI(
    `query {
      articles (sort: "publish_date:asc", limit: 10) {
        id
        title
        slug
        featured_article
        publish_date
        body
        author {
          name
        }
        category {
          name
        }
        cover_img {
          url
        }
      }
    }`
  )
  return data?.articles
}

export async function getHeroPost() {
  const data = await fetchAPI(
    `
      query Articles($where: JSON) {
        articles(where: $where, sort: "publish_date:desc", limit: 1) {
          id
          title
          slug
          cover_img {
            url
          }
          category {
            name
          }
        }
      }
    `,
    {
      variables: {
        where: {
          featured_article: true,
        },
      },
    }
  )

  return data?.articles[0]
}

export async function getArticleBySlug(slug) {
  const data = await fetchAPI(
    `query ArticleBySlug ($where: JSON) {
      articles (where: $where) {
        publish_date
        title
        slug
        author {
          name
          slug
        }
        category {
          name
          slug
        }
        cover_img {
          url
        }
        body
      }
    }`,
    {
      variables: {
        where: {
          slug,
        },
      },
    }
  )

  return data?.articles[0]
}

export async function getAllArticles() {
  const data = await fetchAPI(
    `
      query AllArticles {
        articles {
          publish_date
          title
          author {
            name
            slug
          }
          category {
            name
            slug
          }
          cover_img {
            url
          }
          body
        }
      }
    `
  )

  return data?.articles
}

export async function getAllArticlesSlug() {
  const data = await fetchAPI(
    `
      query AllArticlesSlug {
        articles {
          slug
        }
      }
    `
  )

  return data?.articles
}

export async function getAllCategories() {
  const data = await fetchAPI(`
    query AllCategories {
      categories {
        name
        slug
      }
    }`)

  return data?.categories
}

export async function getCategoryArticles(categorySlug) {
  const data = await fetchAPI(
    `
      query CategoryArticles($where: JSON) {
        categories (where: $where) {
          name
          slug
          articles {
            slug
            title
            cover_img {
              url
            }
            category {
              name
            }
            body
          }
        }
      }
    `,
    {
      variables: {
        where: {
          slug: categorySlug,
        },
      },
    }
  )

  return data
}

export async function getAllAuthors() {
  const data = await fetchAPI(`
    query AllAuthors {
      authors {
        name
        slug
      }
    }`)

  return data
}

export async function getAuthorArticles(authorSlug) {
  const data = await fetchAPI(
    `
      query AuthorArticles($where: JSON) {
        authors (where: $where) {
          name
          slug
          articles {
            slug
            title
            cover_img {
              url
            }
            category {
              name
            }
            body
          }
        }
      }
    `,
    {
      variables: {
        where: {
          slug: authorSlug,
        },
      },
    }
  )

  return data
}
