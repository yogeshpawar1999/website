import React from 'react'
import Cards from './Cards'
import Sdata from './Sdata'
import moduleName from './Home.css'
function Service () {
  return (
    <>
      <div className='my-5'>
        <h1 className='text-center contact_us'>Our Services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>
            {
              Sdata.map((val,index)=>{
                return <Cards
                imgsrc={val.imgsrc}
                title={val.title} />
              })
            }
              {/* <Cards imgsrc={Image1} />
              <Cards imgsrc={Image2}/>
              <Cards imgsrc={Image3}/>
              <Cards /> */}
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Service
