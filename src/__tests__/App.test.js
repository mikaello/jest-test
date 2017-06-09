import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

import usitTasks from '../usitReducer'
import App from '../App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App store={createStore(usitTasks)} />, div)
})
