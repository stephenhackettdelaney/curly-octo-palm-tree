import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { employees, roster } from './redux/actions'

import { daysPerWeek, employees as available } from './dummyData'
import { createRoster } from './functions'

import { Roster } from './components'
import './App.css';





function App({ dispatch, employees, ros, people }) {

  useEffect(() => {
    const currentRos = createRoster(daysPerWeek, available)
    dispatch(employees(available))
    dispatch(roster(currentRos))
  }, [ dispatch, employees ])
  
  return (
      <Roster
        ros={ros} 
        people={people}
      />
    )
}

const mapDispatchToState = dispatch => ({
  employees,
  roster,
  dispatch,
})

const mapStateToProps = state => {
  return {
    ros: state.roster,
    people: state.employees,
  }
}

export default connect(mapStateToProps, mapDispatchToState)(App);
