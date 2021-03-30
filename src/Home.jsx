import React from 'react'
import './Home.css'
import webimg from './Images/images3.jpg'
import { NavLink } from 'react-router-dom'
import Common from './Common'
function Home () {
  return (
    <>
      {/* <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='row '>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
                  <h1>
                    Grow your carreir with <strong className='brand_name'>Yogesh Technical</strong>
                  </h1>
                  <h2 className='my-3'>
                    We are the team of talented Developers
                  </h2>

                  <div className='mt-3'>
                    <NavLink to='/service' className='btn_get_started'>
                      Get Started
                    </NavLink>
                  </div>
                </div>

                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                  <img src={webimg} style={{height:"300px"}}className='img-fluid animated' alt='...' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <Common name='Grow your carreir with ' 
      imgsrc={webimg}
      visit='/service'
      btname='Get Started'
      />
    </>
  )
}

export default Home
