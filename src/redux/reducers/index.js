import { combineReducers } from 'redux'
import { employees, roster } from './functions'

export default combineReducers({
    employees,
    roster,
})