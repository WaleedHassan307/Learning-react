import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Route, Routes, useParams} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import CourseDetail from './pages/CourseDetail'
import Navbar2 from './components/Navbar2'


const App = () => {

  const params = useParams()
  console.log(params.courseId)
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/courses' element={<Courses />} />
                <Route path='/courses/:courseId' element={<CourseDetail />} />

                        <Route path='/product' element={<Product />} >
                        <Route path='men' element={<Men />} />
                        <Route path='women' element={<Women />} />
                        <Route path='kids' element={<Kids />} />
                        </Route>
                                                


         <Route path='*' element={<NotFound />} />
       
      </Routes>
   
      <Footer />
      
    </div>
  )
}

export default App
