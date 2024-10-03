import React from 'react'
import img2 from "../image/about-1.png"

const Hero1 = () => {
    return (

        <div className='container-fluid'>
            <div class="container">
                <div class="row content align-items-center">
                    <div class="col-12 col-xl-6 illustration">
                        <img src={img2} alt="image not found" className='img-fluid' />
                    </div>

                    <div class="col-12 col-xl-6">
                        <h5>About Us</h5>
                        <h1>Get Started Easily With a Personalized Product Tour</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, suscipit itaque quaerat dicta porro illum, autem, molestias ut animi ab aspernatur dolorum officia nam dolore. Voluptatibus aliquam earum labore atque.</p>
                        <button class="get-started-btn mb-5">About More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero1;
