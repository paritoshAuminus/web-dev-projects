import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/'/>
      </Routes>
    </>
  )
}

export default App