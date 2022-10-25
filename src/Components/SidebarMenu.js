import React, { useState } from 'react'

import '../assest/SidebarMenu.css'
import Ripple from "react-waves-effect";
import Services from './Services';



export const SidebarMenu = () => {
    const [togoll, setTogol] = useState(true);

    const Toggole = () => {
        setTogol(!togoll);


    }
    return (

        <div className="fix-header fix-sidebar top-nav">
            <div id="main-wrapper">
                <header class="topbar">
                    <nav class="navbar top-navbar navbar-expand-md navbar-light">
                        <div class="navbar-collapse">
                            <ul class="navbar-nav mr-auto mt-md-0">
                                <li className="nav-item ">

                                    <Ripple
                                        color="black"
                                        animationDuration={1200}

                                        animationEasing="ease-out"
                                        onClick={Toggole}
                                    >

                                        <a class="nav-link nav-toggler  sidebartoggler hidden-md-up  waves-effect waves-dark card" style={{ width: "62px", textAlign: "center", fontSize: "20px" }} >
                                            <i class="fas  fa-bars"></i>
                                        </a>

                                    </Ripple>



                                </li>
                                <li className="nav-item m-l-10">

                                    <Ripple
                                        color="black"
                                        animationDuration={2000}

                                        animationEasing="ease-out"
                                        onClick={Toggole}
                                    >

                                        <a class="nav-link sidebartoggler hidden-sm-down text-muted waves-effect waves-dark " style={{ width: "62px", textAlign: "center", fontSize: "20px" }} href="#">
                                            <i class="fas  fa-bars"></i>
                                        </a>

                                    </Ripple>
                                </li>

                                <li className="nav-item admin-name"  >ADMIN</li>
                            </ul>

                            <ul class="navbar-nav my-lg-0 " style={{ marginLeft: "67rem" }}>
                                <li class="nav-item ms-5">

                                    <a href="" class="btn btn-sm logout waves-light " style={{
                                        width: "95px",
                                        fontSize: "10px",
                                        padding: "8px"

                                    }}>Logout</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>


                {
                    togoll ?

                        <aside class="left-sidebar">
                            <div class="scroll-sidebar">
                                <nav class="sidebar-nav">
                                    <ul id="sidebarnav">

                                        <li> <a href="index.html" ><span><i class="fas fa-home"></i>  </span><span class="hide-menu">Home</span></a></li>
                                        <li> <a href="VisitorTable.html" ><span> <i class="fas fa-users"></i> </span><span class="hide-menu">Visitor</span></a></li>
                                        <li> <a href="service.html" ><span> <i class="fas fa-globe"></i> </span><span class="hide-menu">Services</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </aside>
                        :
                        <aside class="left-sidebar-icon">
                            <div class="scroll-sidebar">
                                <nav class="sidebar-nav-icon sidebar-nav">
                                    <ul id="sidebarnav">

                                        <li> <a href="index.html" ><span><i class="fas fa-home"></i>  </span><span class="hide-menu"></span></a></li>
                                        <li> <a href="VisitorTable.html" ><span> <i class="fas fa-users"></i> </span><span class="hide-menu"></span></a></li>
                                        <li> <a href="service.html" ><span> <i class="fas fa-globe"></i> </span><span class="hide-menu"></span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </aside>
                }
                {
                    togoll ?
                        <div class="page-wrapper">
                            <Services></Services>
                        </div >
                        :
                        <div>
                            <Services></Services>
                        </div >
                }


            </div>

        </div >

    )
}
