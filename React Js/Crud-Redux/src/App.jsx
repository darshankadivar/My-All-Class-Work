import React from 'react'
import { Provider } from 'react-redux'
import { store } from './App/Store'
import Todoredux from './Components/Todoredux'

const App = () => {
  return (
    <div>
      
      <Provider store = {store}>
       <Todoredux />
      </Provider>
    </div>
  )
}

export default App
