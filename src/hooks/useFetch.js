import useSWR from "swr"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function fetch(endpoint) {
  const { data, error } = useSWR(endpoint, fetcher)
  return {
    data,
    error,
    loading: !data && !error,
  }
}
