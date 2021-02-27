import { teams } from '@/cms/teams.json'

export function listMembers() {
  const members = teams.flatMap(team => team.members)
  return members
}

export function getManagerialDivTeam() {
  return teams?.[0].members
}
