import React, { useState } from 'react'
import './Home.css'
function Contact () {
  const [info, setinfo] = useState({
    fullname: '',
    mob_no: '',
    email: '',
    msg: ''
  })

  const inputEvent = event => {
    const { name, value } = event.target
    //  console.log(name,value)
    setinfo(preval => {
      return {
        ...preval,
        [name]: value,
        
      }
    })
  }

  const formSubmit=(e)=>{
      e.preventDefault();
    //   console.log(info.fullname)
    alert(`my fullname is: ${info.fullname} mobole no: ${info.mob_no} 
    email: ${info.email} msg: ${info.msg}`)
  }
  return (
    <>
      <div className='my-3'>
        <h1 className='text-center contact_us'>Contact US</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-10 mx-auto'>
            <form onSubmit={formSubmit}>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  FullName
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='fullname'
                  value={info.fullname}
                  onChange={inputEvent}
                  placeholder='enter your fullname'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Phone
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='mob_no'
                  value={info.mob_no}
                  onChange={inputEvent}
                  placeholder='enter your mobile no. '
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlInput1' className='form-label'>
                  Email address
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='exampleFormControlInput1'
                  name='email'
                  value={info.email}
                  onChange={inputEvent}
                  placeholder='name@example.com'
                />
              </div>
              <div className='mb-3'>
                <label for='exampleFormControlTextarea1' className='form-label'>
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='exampleFormControlTextarea1'
                  rows='3'
                  name='msg'
                  value={info.msg}
                  onChange={inputEvent}
                ></textarea>
              </div>
              <div className='col-12'>
                <button className='btn btn-outline-primary' type='submit'>
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
