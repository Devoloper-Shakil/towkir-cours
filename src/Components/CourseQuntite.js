import React from 'react'

import QuntiteCard from './QuntiteCard'
import "../assest/typo.css"

const CourseQuntite = () => {
    return (
        <div class="container-fluid top-banner ">
            <div class="row">
                <div class="col-md-12  col-lg-12 col-sm-12 col-12">
                    <div class="top-banner-dialog animated slideInDown">
                        <h1 class="top-banner-title text-blue text-center">- নতুন কিছু শিখুন - </h1>
                        <p class="top-banner-sub-title text-dark-gray text-center">ঘরে বসে স্কিল ডেভেলপ করুন নিজের সময় মত ।
                            সঠিক
                            দিকনির্দেশনা সহ থাকছে প্রোগ্রামিং এবং সফটওয়্যার ডেভেলপমেন্ট এর উপরে প্রফেশনাল কোর্স। </p>
                    </div>

                    <QuntiteCard></QuntiteCard>

                </div>
            </div>
        </div>
    )
}

export default CourseQuntite