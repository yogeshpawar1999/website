import React from 'react'
import Common from './Common'
import webimg from './Images/images1.jpeg'

function About () {
  return (
    <>
     <Common name="Welcome to About page"
     imgsrc={webimg}
     visit='/contact' 
     btname='Contact Now'/>
    </>
  )
}

export default About
