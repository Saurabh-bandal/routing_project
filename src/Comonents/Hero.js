import React from 'react'
import "./Hero.css"
import img1 from "../image/hero-img-1.png"
const Hero = () => {
    return (

        <div className='container-fluid'>
            <div class="container">
                <div class="row content">
                    <div class="col-12 col-xl-6">
                        <h1>Turn Emails into Revenue</h1>
                        <p>Win new customers with the #1 email marketing and automations brand that recommends ways to get more opens, clicks, and sales.</p>
                        <button class="get-started-btn mb-5">Get Started</button>
                    </div>

                    <div class="col-12 col-xl-6 illustration">
                        <img src={img1} alt="image not found" className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
