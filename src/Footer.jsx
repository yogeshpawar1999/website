import React from 'react'

function Footer () {
  return (
    <>
      <footer
        className='w-100 bg-light'
        style={{ position: 'fixed', bottom: '-16px',textAlign:'center'}}
      >
        <p style={{ backgroundColor: '#c6d9ec'}} className='py-2'>
          @2021 Yogesh Technical. All Rights Reserved | Terms & Condition
        </p>
      </footer>
    </>
  )
}

export default Footer
