import teams from "@/contents/teams.json"

export function listMembers() {
  const members = teams.teams.flatMap(team => team.members)
  return members
}

export function getManagerialDivTeam() {
  return teams.teams[0].members
}
