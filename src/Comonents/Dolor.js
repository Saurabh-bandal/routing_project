import React from 'react'
import img1 from "../image/about-1.png"

const Dolor = () => {
  return (
    <section class="faq-section my-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-xl-6">
          <h2 class="faq-title">Why did you choose Our Email Services?</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nemo impedit, sapiente quis illo quia nulla atque maxime fuga minima ipsa quae cum consequatur, sit, delectus exercitationem odit officiis maiores!</p>
          <p>Neque, quidem corrupti modi architecto eos saepe incidunt dignissimos rerum.</p>

          <div class="accordion" id="faqAccordion">
            <div class="faq-card">
              <div class="faq-header" id="headingOne">
                <h2 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Are there any hidden charges?
                  </button>
                </h2>
              </div>
              <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                <div class="faq-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta distinctio hic fuga odio excepturi ducimus sequi at.
                </div>
              </div>
            </div>
            <div class="faq-card">
              <div class="faq-header" id="headingTwo">
                <h2 class="mb-0">
                  <button class="btn btn-link collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    What are the key challenges of email marketing?
                  </button>
                </h2>
              </div>
              <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                <div class="faq-body">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, non aspernatur.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-xl-6 text-center">
          <img src={img1} alt="image not found" class="img-fluid"/>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Dolor;
