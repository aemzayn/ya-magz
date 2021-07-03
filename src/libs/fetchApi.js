export default async function fetchApi(endpoint) {
  const res = await fetch(`${process.env.SERVER_URL}${endpoint}`)
  const data = await res.json()
  return data
}
