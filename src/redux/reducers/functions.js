import { EMPLOYEES } from '../actionTypes'

const initState = []

export const employees = (state = initState, action) => {
    console.log('action : ', action)
    switch(action.type){
        case EMPLOYEES : {
            return [ ...state, ...action.employees ]
        }
        default: {
            return state
        }
    }
}