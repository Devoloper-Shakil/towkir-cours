import React from 'react'
import '../assest/Footer.css'

const Footer = () => {
    return (
        <>

            <div class="container-fluid shadow-lg footer-section bg-white mt-5 ">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 p-1 col-lg-3 col-sm-6 col-6">
                            <h5 class="footer-title">Follow Me</h5>
                            <a className="linked" target="_blank" href="https://www.facebook.com/t0wk1r" className="footer-link">
                                <i class="bi bi-facebook mx-1"></i> Facebook</a>
                            <a className="linked" target="_blank" href="https://www.facebook.com/t0wk1r" class="footer-link">
                                <i class="bi bi-linkedin mx-1"></i> Linkedin</a>
                            <a className="linked" target="_blank" href="https://www.facebook.com/t0wk1r" class="footer-link">
                            <i class="bi bi-twitter mx-1"></i> Twitter</a>
                            <a className="linked " target="_blank" href="https://www.youtube.com/c/TechTowkir" class="footer-link">
                            <i class="bi bi-youtube mx-1"></i> Youtube</a>
                        </div>
                        <div class="col-md-3  p-1 col-lg-3 col-sm-6 col-6">
                            <h5 class="footer-title">Address</h5>
                            <p class="footer-text "><i class="bi bi-geo-alt-fill"></i> Nowdapara , Rajshahi
                            </p>
                            <p class="footer-text"><i class="bi bi-telephone-fill"></i> 01969663344 (Help Line)</p>
                            <p class="footer-text"><i class="bi bi-envelope-fill"></i> <a className="linked" href="mailto:support@towkir.com">support@towkir.com</a> </p>

                        </div>
                        <div class="col-md-3 p-1 col-lg-3 col-sm-6 col-6">
                            <h5 class="footer-title">Information</h5>
                            <a className="linked" href="http://towkir.com/"><span class="footer-link"> About Me </span></a>
                            <a className="linked" href="http://wa.me/01969663344" target="_blank"><span class="footer-link"> 01969663344 (Whatsapp)
                            </span></a>
                        </div>
                        <div class="col-md-3 p-1 col-lg-3 col-sm-6 col-6">
                            <h5 class="footer-title">Legal</h5>
                            <a className="linked" href="http://towkir.com/refund"><span class="footer-link"> Refund Policy</span></a>
                            <a className="linked" href="http://towkir.com/terms"><span class="footer-link">Terms & Condition</span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container-fluid text-center footer-bottom-section shadow-sm">
                <p class="mt-3">All Rights Reserved By Abu Sayed : 2022-2023 </p>
            </div>

        </>
    )
}

export default Footer