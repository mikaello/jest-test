import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import usitTasks from './usitReducer'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
  <Provider store={createStore(usitTasks)}><App /></Provider>,
  document.getElementById('root')
)
registerServiceWorker()
