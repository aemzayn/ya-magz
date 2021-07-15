import { formatDistanceToNow } from "date-fns"

export function getDistanceDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}

export function formatDate(date) {
  if (!(date instanceof Date)) {
    throw new Error(`${date} is invalid date`)
  }
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "long",
  }).format(date)
}
