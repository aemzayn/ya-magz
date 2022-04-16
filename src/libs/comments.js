import Filter from "bad-words"
import wash from "washyourmouthoutwithsoap"

export function cleanComment(comment) {
  const filter = new Filter({ placeHolder: "*" })
  filter.addWords(...wash.words("id"), ...wash.words("en"))
  return filter.clean(comment)
}
