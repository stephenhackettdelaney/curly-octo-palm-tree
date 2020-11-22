import { EMPLOYEES, ROSTER } from './actionTypes'

export const employees = employees => {
    return {
      type: EMPLOYEES,
      employees
    }
}

export const roster = roster => {
  return {
    type: ROSTER,
    roster
  }
}