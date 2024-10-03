import React from 'react'

const Form = () => {
  return (
    <div class="decorative-background">

  <div class="container contact-container my-5">
    <div class="row">
      <div class="col-12 col-xl-6 mb-5">
        <h1 class="contact-title">Our Contact Form</h1>
        <p>The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="#" class="text-danger">Download Now.</a></p>
        
        <form>
          <div class="row mb-3">
            <div class="col-6">
              <input type="text" class="form-control" placeholder="Your Name"/>
            </div>
            <div class="col-6">
              <input type="email" class="form-control" placeholder="Your Email"/>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-6">
              <input type="text" class="form-control" placeholder="Your Phone"/>
            </div>
            <div class="col-6">
              <input type="text" class="form-control" placeholder="Your Project"/>
            </div>
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Subject"/>
          </div>
          <div class="mb-3">
            <textarea class="form-control" rows="5" placeholder="Message"></textarea>
          </div>
          <button type="submit" class="btn btn-pink w-100">Send Message</button>
        </form>
      </div>

      <div class="col-12 col-xl-6 contact-details text-center">
        <div class="mb-4">
          <img src="https://img.icons8.com/ios-filled/50/ff3f91/home.png" class="icon"/>
          <strong>Addresses</strong>
          <p>123 ranking Street, New York, USA</p>
        </div>
        <div class="mb-4">
          <img src="https://img.icons8.com/ios-filled/50/ff3f91/marker.png" class="icon"/>
          <strong>Addresses</strong>
          <p>123 ranking Street, New York, USA</p>
        </div>
        <div class="mb-4">
          <img src="https://img.icons8.com/ios-filled/50/ff3f91/phone.png" class="icon"/>
          <strong>Mobile</strong>
          <p>+012 345 67890<br/>+012 345 67890</p>
        </div>
        <div class="mb-4">
          <img src="https://img.icons8.com/ios-filled/50/ff3f91/new-post.png" class="icon"/>
          <strong>Email</strong>
          <p>info@example.com<br/>info@example.com</p>
        </div>
        <div class="social-icons">
          <a href="#"><img src="https://img.icons8.com/ios-filled/50/ff3f91/facebook-new.png" class="icon"/></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/50/ff3f91/twitter.png" class="icon"/></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/50/ff3f91/instagram-new.png" class="icon"/></a>
          <a href="#"><img src="https://img.icons8.com/ios-filled/50/ff3f91/linkedin.png" class="icon"/></a>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Form
