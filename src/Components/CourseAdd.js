import React, { useState } from 'react'
import '../assest/CourseAdd.css'

const CourseAdd = ({ update }) => {


    const [coursePost, setCoursePost] = useState({
        title: "",
        description: "",
        img: "",
        amount: "",
        totalEnroll: "",
        totalClass: ""

    })
  
    const { title, description, img, amount, totalEnroll, totalClass } = coursePost
    const courses = (e) => {
        const cours = { ...coursePost, [e.target.name]: e.target.value }
        setCoursePost(cours)

    }

    // http Request post

    const createpost = async (e) => {
        e.preventDefault()
        

        fetch(`http://localhost:5000/allcoures`, {
            method: 'POST',
            body: JSON.stringify(coursePost),
            headers: {
              'Content-type': 'application/json charset=UTF-8',
              'Accept': 'application/json'
           
            },
          })
            .then((res) =>res.json())
            .then((data) => console.log(data));
          
    } 

 

    return (
        <div className="mt-5 ms-5">
            {
                update ? <h2>Add Course</h2> :
                    <h2> Update Course</h2>
            }

            <form class="d-flex"  action="">
                <div className="me-3">
                    <div class="mb-3">
                        <input class="form-control input-fild  "
                            type="text"
                            name="title"
                            value={title}
                            onChange={courses}
                            placeholder="Enter Courses name"
                            aria-label="default input example"
                            required />
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control "
                            name="description"
                            value={description}
                            onChange={courses}
                            id="exampleFormControlTextarea1"
                            placeholder="Enter Courses description"
                            rows="3" required></textarea>
                    </div>
                    <div class="mb-3">
                        <input class="form-control"
                            name="img"
                            type="file"
                            value={img}
                            onChange={courses}
                            id="img"  />
                    </div>


                </div>
                <div className="me-3">
                    <div class="mb-3">
                        <input class="form-control" required type="number" name="amount" value={amount} onChange={courses} placeholder="Enter Courses amount" aria-label="default input example" />
                    </div>
                    <div class="mb-3">
                        <input class="form-control" required type="text" name="totalEnroll" value={totalEnroll} onChange={courses} placeholder="Enter Courses totalClass" aria-label="default input example" />
                    </div>

                    <div class="mb-3">
                        <input class="form-control" required type="text" name="totalClass" value={totalClass} onChange={courses} placeholder="Enter Courses totalClass" aria-label="default input example" />
                    </div>

                    <div class="mb-3">
                        {
                            update ? <button type="submit" class="btn  add" onClick={createpost}>+ Set Course</button> :
                                <button type="button" class="btn  add"> > Update Course</button>
                        }

                    </div> 

                </div>


            </form>

        </div>
    )
}

export default CourseAdd