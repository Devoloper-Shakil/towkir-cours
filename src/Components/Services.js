import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import '../assest/Services.css'
import courseImg from '../img/knowledge.svg'
import CourseAdd from './CourseAdd'



const Services = () => {
    const [updatebtn,setUpdatebtn]= useState(true)
    const hendelUpdate= () => {
        setUpdatebtn(!updatebtn)
    }
    return (
        <div>
           
            <div class="container">
                
                  <CourseAdd update={updatebtn}></CourseAdd> 
                
           
                <div class="row">
                    <div class="col-md-12 p-5">
                        <table id="" class="table table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th class="th-sm p-4">Image</th>
                                    <th class="th-sm p-4">Name</th>
                                    <th class="th-sm p-4">Description</th>
                                    <th class="th-sm p-4">Edit</th>
                                    <th class="th-sm p-4">Delete</th>
                                </tr>
                            </thead>
                            <tbody>

                                <tr>
                                    <th class="th-sm"><img class="table-img" src={courseImg} /></th>
                                    <th class="th-sm">আইটি কোর্স</th>
                                    <th class="th-sm">মোবাইল এবং ওয়েব এপ্লিকেশন ডেভেলপমেন্ট</th>
                                    <th class="th-sm"><Link ><i class="fas fa-edit" onClick={hendelUpdate}></i></Link></th>
                                    <th class="th-sm"><Link ><i class="fas fa-trash-alt"  ></i></Link></th>
                                </tr>
                                <tr>
                                    <th class="th-sm"><img class="table-img" src={courseImg} /></th>
                                    <th class="th-sm">আইটি কোর্স</th>
                                    <th class="th-sm">মোবাইল এবং ওয়েব এপ্লিকেশন ডেভেলপমেন্ট</th>
                                    <th class="th-sm"><a href="" ><i class="fas fa-edit"></i></a></th>
                                    <th class="th-sm"><a href="" ><i class="fas fa-trash-alt"></i></a></th>
                                </tr>
                                <tr>
                                    <th class="th-sm"><img class="table-img" src={courseImg} /></th>
                                    <th class="th-sm">আইটি কোর্স</th>
                                    <th class="th-sm">মোবাইল এবং ওয়েব এপ্লিকেশন ডেভেলপমেন্ট</th>
                                    <th class="th-sm"><a href="" ><i class="fas fa-edit"></i></a></th>
                                    <th class="th-sm"><a href="" ><i class="fas fa-trash-alt"></i></a></th>
                                </tr>



                            </tbody>
                        </table>

                    </div>
                </div>
            </div>





        </div>



    )
}

export default Services