import React from 'react'

import CourseCard from "../Components/CourseCared"
import "../assest/Course.css"



const Course = () => {
  return (
    <div class="container-fluid  between-two-section">
        <h1 class="section-title mb-4 mt-4 text-center">- All Course -</h1>
        <div class="row  d-flex justify-content-center" id="PremiumCourseListPlaceholder">


           <CourseCard></CourseCard>


    </div>
    <div class="container">
        <button class="btn showmore w-5 mt-4  d-block mx-auto">Show More</button>
    </div>
    </div>
  )
}

export default Course