import React, { useState } from 'react'


//fake data loading
import coutData from '../JasonData/QuantiteData'
// do api loead

const QuntiteCard = () => {
    const [count, setCount] = useState(coutData)

    return (
        <div class="container-fluid">
            <div class="row">

                {
                    count.map((coun, index) =>

                        <div index={coun.id} class="col-3 p-1">
                            <div class="card animated fadeIn w-100 h-100 text-center">
                                <div class="p-2">
                                    <img class="banner-card-img" src={coun.icon} alt="youtube" />
                                    <h6 class="top-count-number mt-1 text-red">{coun.count}</h6>
                                    <h6 class="top-count-title text-blue">{coun.title}</h6>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    )
}

export default QuntiteCard