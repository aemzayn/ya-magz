import Filter from "bad-words"
import wash from "washyourmouthoutwithsoap"

const IS_DEV = process.env.NODE_ENV !== "production"

export function cleanComment(comment) {
  const filter = new Filter({ placeHolder: "wk" })
  const indoBadWords = wash.words("id")
  filter.addWords(...indoBadWords)
  return filter.clean(comment)
}

export async function addComment(comment, slug, user, cb) {
  if (!user) return
  const newComment = {
    user: {
      name: user?.name,
      email: user?.email,
      avatar: user?.image,
    },
    post_slug: slug,
    comment: cleanComment(comment),
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
      cb(data)
    }
  } catch (error) {
    if (IS_DEV) console.error(error)
  }
}
