import { team_members as members } from '@/cms/team_members.json'
import { teams } from '@/cms/teams.json'

export function generateTeam() {
  let result = {}
  teams.forEach(d => {
    result[d.id] = members.filter(m => {
      if (d.name === 'Manager' && !teams.map(d => d.name).includes(m.team)) {
        return m
      }

      return d === m.team
    })
  })
  return result
}

export function listMembers() {
  return members
}
