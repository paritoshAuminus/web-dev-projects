import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path='/'/> {/* Connect to home */}
      </Routes>

      <Footer />
    </>
  )
}

export default App