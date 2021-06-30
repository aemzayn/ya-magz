import { formatDistanceToNow } from "date-fns"

export function getDistanceDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true })
}
