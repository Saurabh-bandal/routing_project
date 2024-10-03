import React from 'react'
import img1 from "../image/hero-img-1.png"

const Push = () => {
  return (

    <section class="feature-section my-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-xl-6 text-center">
          <img src={img1} alt="image not found" className="img-fluid"/>
        </div>

        <div class="col-12 col-xl-6">
            <h5>Fearutes</h5>
          <h1 class="feature-title ">Push Your Visitors Into Happy Customers</h1>
          <p class="feature-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, suscipit itaque
            quaerat dicta porro illum, autem, molestias ut animi ab aspernatur dolorum officia nam dolore.
          </p>
          <div class="d-flex mb-4">
            <div class="me-4">
              <span class="stat">285</span>
              <p class="stat-description">Created Projects</p>
            </div>
            <div>
              <span class="stat">6560</span>
              <p class="stat-description">Happy Clients</p>
            </div>
          </div>
          <button class="read-more-btn">Read More</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Push;
