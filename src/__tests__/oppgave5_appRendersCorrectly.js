import React from 'react'
import renderer from 'react-test-renderer'
import { createStore } from 'redux'

import usitTasks from '../usitReducer'
import App from '../App'

test('app renders correctly', () => {
  const tree = renderer.create(<App store={createStore(usitTasks)} />)
  expect(tree).toMatchSnapshot()
})
