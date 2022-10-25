import React from 'react'
import "../assest/Nav.css"

const Navbar = () => {
    return (
        <>
             {/* nav area start  */}
            <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white">
                <div class="container-fluid">
                    <a class="navbar-brand nav-link m-auto" href="/">
                         {/* <img alt="nav-logo" class="nav-logo"
                            src="http://towkir.com/images/nav-logo.svg"> */}
                            <h1 class="text-red">COURSE.TOWKIR.COM</h1>

                    </a>

                </div>
            </nav>
            {/* nav area end  */}

        </>
    )
}

export default Navbar