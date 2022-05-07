import React from 'react'
import './Footer.css'
// import { a } from 'react-router-dom'
export default function Footer() {
    return (
        <>
        <div className='main_container'>
        <hr />  
            <div className='footer_container'>
                <div className='left_footer_main'>
                    <p style={{marginLeft:"35px", fontWeight:"500"}}>Help and Information</p>
                    <div className='left_footer'>
                        <div>
                            <ul>
                                <li><a to="/aboutus">About Us</a></li>
                                <li><a to="">Affiliates</a></li>
                                <li><a to="">Careers</a></li>
                                <li><a to="">Contact Us</a></li>
                                <li><a to="">Help</a></li>
                                <li><a to="">Clothing Care Guide</a></li>
                                <li><a to="">Fit Analytics</a></li>
                                <li><a to="">Privacy Policy</a></li>
                                <li><a to="">Terms and Conditions</a></li>
                                <li><a to="">Our Considered Pledge</a></li>
                            </ul>
                        </div>
                        <div>
                        <ul>
                                <li><a to="">Payment</a></li>
                                <li><a to="">Delivery</a></li>
                                <li><a to="">Returns</a></li>
                                <li><a to="">Track your Order</a></li>
                                <li><a to="">Create a Return</a></li>
                                <li><a to="">Track your Return</a></li>
                                <li><a to="">Cookie Policy</a></li>
                                <li><a to="">Cookie Center</a></li>
                                <li><a to="">Our Resale Service</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='payment_logo'>

                    </div>
                </div>
                <div className='right_footer'>
                    <p>Want to stay stylishly in the know?</p>
                    <span className='span1'>Sign up today for email exclusives including early access to Sale, the latest</span><br /><span className='span1'>trends and arrivals from your favorite designers and can’t miss</span><br /><span className='span1'>promotions.</span>
                    
                    <div className='input_subscribe'>
                        <input placeholder='Enter your Email Address' type="text" />
                        <button className='subscribe'>Subscribe</button>
                    </div>
                    <p style={{marginTop:"30px"}}>24/7 Customer Care</p>
                    <div className='mob_no'>
                        <p>+44 330 022 4250</p>
                    </div>
                    <div className='email_id'>
                        <p>customercare@theoutnet.com</p>
                    </div>
                    <div className='stay_social'>
                        <p>Stay Social</p>
                        <div className='svg_logo'>

                        </div>
                    </div>
                </div>

            </div>
            <hr />  
            <div className='bottom_footer'>
                <button className='btn_footer'>NET-A-PORTER</button>
                <button  className='btn_footer'>MR PORTER</button>
                <div>
                    <span className='span2'>© 2009 - 2022 THE OUTNET , part of YOOX NET-A-PORTER GROUP.</span><br />
                    <span className='span2'>The individuals featured on this site do not endorse THE OUTNET or the products shown.</span>
                </div>
            </div>
            </div>
        </>
    )
}