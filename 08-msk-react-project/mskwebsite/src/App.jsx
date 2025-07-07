import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Nopage from './pages/NoPage'
import Courses from './pages/Courses'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import CourseDetails from './pages/CourseDetails'

function App() {
  return (
    <>
    <Header />

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/courses/coursedetails/:courseId' element={<CourseDetails />} />
      <Route path='*' element={<Nopage />} />
    </Routes>

    <Footer />
    </>
  )
}

export default App