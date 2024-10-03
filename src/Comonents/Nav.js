import React from 'react'
import { Link } from 'react-router-dom'


function Nav() {
  return (
    <div>

      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand fw-bold" href="#">Mailler</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
              <Link to="./Home1" className='nav-link fw-bold'  >Home</Link>
              </li>
              <li class="nav-item">
                <Link to="./About" className='nav-link fw-bold'  >About</Link>
              </li>

              <li class="nav-item">
                <Link to="./Product" className='nav-link fw-bold'  >Services</Link>
              </li>
              <li class="nav-item">
                <Link to="./Services" className='nav-link fw-bold' >Contact Us</Link>
              </li>
            </ul>
            <button class="get-started-btn">Log in</button>

          </div>
        </div>
      </nav>
    </div>

  )
}

export default Nav
