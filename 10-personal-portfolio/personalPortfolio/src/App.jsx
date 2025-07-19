import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path={'/'} element={<Home />} /> 
        <Route path={'/about'} element={<About />} /> 
        <Route path={'/projects'} element={<Projects />} /> 
        <Route path={'/services'} element={<Services />} /> 
        <Route path={'/contact'} element={<Contact />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App