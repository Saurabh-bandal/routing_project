import React from 'react'
import img1 from "../image/testimonial-img-1.jpg"
import img2 from "../image/testimonial-img-2.jpg"
import img3 from "../image/testimonial-img-3.jpg"

const Review = () => {
  return (
    <div className='container  anil'>
        <div className='text-center my-5'>
            <h5>Testimonial</h5>
            <h1>What Our Client Say About Us</h1>
            <p>Dolor sit amet consectetur, adipisicing elit. Ipsam, beatae maxime. Vel animi eveniet doloremque reiciendis soluta iste provident non rerum illum perferendis earum est architecto dolores vitae quia vero quod incidunt culpa corporis, porro doloribus. Voluptates nemo doloremque cum.</p>
        </div>
      <div className='row text-center'>
        <div className='col-12 col-xl-4'>
            <img src={img1} alt='image not found' className='img-fluid'/>
            <h3 className='fw-bold'>John Abraham</h3>
            <span>New York, USA</span>
            <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.</p>
        </div>
        <div className='col-12 col-xl-4'>
            <img src={img2} alt='image not found' className='img-fluid'/>
            <h3 className='fw-bold'>John Abraham</h3>
            <span>New York, USA</span>
            <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.</p>
        </div>
        <div className='col-12 col-xl-4'>
            <img src={img3} alt='image not found' className='img-fluid'/>
            <h3 className='fw-bold'>John Abraham</h3>
            <span>New York, USA</span>
            <p>Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.Lorem ipsum dolor sit amet consectur adip sed eiusmod amet consectur adip.</p>
        </div>

      </div>
    </div>
  )
}

export default Review
