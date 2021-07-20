import Filter from "bad-words"
import wash from "washyourmouthoutwithsoap"

export function cleanComment(comment) {
  const filter = new Filter({ placeHolder: "wk" })
  const indoBadWords = wash.words("id")
  filter.addWords(...indoBadWords)
  return filter.clean(comment)
}
