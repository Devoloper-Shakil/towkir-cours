import React, { useState } from 'react'
import '../assest/Card.css'
// images
// import wordpress from '../img/wp.png'
// import js from '../img/js.png'
// data import
import courses from "../JasonData/CourseData"

const CourseCared = () => {
    const [course, setCourse] = useState(courses)

    return (
        <>
            
            {
                course.map((cours, index) =>

                    <div index={cours.id} class="col-md-4 p-1 col-lg-3 col-sm-6 col-12">
                        <div class="card w-100 h-100  " style={{justifyContent: "space-between"}}>
                            
                            <div class="cardhover">
                                <img alt="img" class="course-card-img" src={cours.img}/>
                                    <div class="mx-3 mb-3">
                                        <h5 class="course-card-title  text-blue text-center">{cours.title}</h5>
                                        <h5 class="course-card-sub-title text-dark-gray" style={{textAlign: "justify"}}>{cours.description}</h5>
                                    </div>
                                    </div>
                                    <div className="mx-3 mb-3">
                                        
                                        <table class="table table-bordered">
                                            <tbody>
                                                <tr>
                                                    <td class="text-center text-red p-0 ">
                                                        Free
                                                    </td>
                                                    <td class="text-center text-red p-0 ">
                                                        Paid
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <h6 class="course-card-count"> ক্লাস: <span class="text-red"> {cours.freeCoures.class}
                                                        </span><br /><br />
                                                            শিখছেন: <span class="text-red"> {cours.freeCoures.learn}</span></h6>
                                                    </td>
                                                    <td>
                                                        <h6 class="course-card-count"> ক্লাস: <span class="text-red"> {cours.pridCoures.class}
                                                        </span><br /><br />
                                                            শিখছেন:<span class="text-red"> {cours.pridCoures.learn}</span></h6>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <hr class="bg-secondary" />
                                        <h4 class=" text-center">কোর্স ফি: {cours.courseFee}</h4>
                                        <div class="d-flex justify-content-between">
                                            <a href="https://www.youtube.com/watch?v=7NxpK77HWwk&list=PL5HMcoGXmfGKAK_RX5iTaSAJBkC1ak8XY"
                                                target="_blank" class="btn btn-youtube w-50 me-1 ">Free Class</a>
                                            <a href="https://towkir.com/course/courses/wordpress-theme-customization/" target="_blank"
                                                class="btn btn-enroll w-50 ms-1">Join Now</a>
                                        </div>
                                    </div>
                            </div>
                        </div>
                       


                        )
            }

                    </>





                )
            }

            export default CourseCared