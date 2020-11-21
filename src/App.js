import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { employees } from './redux/actions'

import { employees as available } from './dummyData'

import { Roster } from './components'
import './App.css';



function App({ dispatch, employees }) {

  useEffect(() => {
    dispatch(employees(available))
  })
  
  return (
      <Roster />
    )
}

const mapDispatchToState = dispatch => ({
  employees,
  dispatch,
})

export default connect(null, mapDispatchToState)(App);
