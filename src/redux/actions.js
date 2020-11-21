import { EMPLOYEES } from './actionTypes'

export const employees = employees => {
    return {
      type: EMPLOYEES,
      employees
    }
}