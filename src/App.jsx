import React from 'react'
import { UseState } from './UseState'
import { ClassState } from './ClassState'
import './App.css'
import { UseReducer } from './UseReducer'

function App() {

  return (
    <>
      <div className='App'>
        <UseState name="Use State" />
        <UseReducer name="Class Reducer" />

      </div>
    </>
  )
}

export default App
