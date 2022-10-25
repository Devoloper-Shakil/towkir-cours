import React from 'react'
import CourseQuntite from '../../Components/CourseQuntite'
import Course from '../../Components/Course'
import "../../assest/Responsive.css"
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'

const Home = () => {
  return (
    <>
  <Navbar></Navbar>
    <CourseQuntite></CourseQuntite>
    <Course></Course>
    <Footer ></Footer>
    
    
    </>
  )
}

export default Home