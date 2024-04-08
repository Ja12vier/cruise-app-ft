

import 'bootswatch/dist/cosmo/bootstrap.min.css'; // Added this :boom:
import './index.css'

import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'


const root=ReactDom.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)

