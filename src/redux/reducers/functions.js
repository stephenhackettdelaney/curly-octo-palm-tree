import { EMPLOYEES, ROSTER } from '../actionTypes'

const initState = []

export const employees = (state = initState, action) => {
    const { employees } = action

    switch(action.type){
        case EMPLOYEES : {
            return [ ...state, ...employees ]
        }
        default: {
            return state
        }
    }
}

export const roster = (state = initState, action) => {
    const { roster } = action 
    switch(action.type){
        case ROSTER : {
            return [ ...state, ...roster]
        }
        default: {
            return state
        }
    }
}