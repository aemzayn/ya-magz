import teams from "@/contents/teams.json"
import { fetchAPI } from "./api"

export function listMembers() {
  const members = teams.teams.flatMap(team => team.members)
  return members
}

export function getManagerialDivTeam() {
  return teams.teams[0].members
}

export async function getManagerial() {
  return await fetchAPI("/teams?_sort=order:ASC")
}
