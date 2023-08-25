import React from 'react'
import {
 AiFillLinkedin,
  AiFillTwitterCircle,
    AiFillInstagram,
  } from "react-icons/ai";

function Footer() {
  return (
  <footer>
    <div className='reserve'>
        <p>@All Rights Reserved</p>
    </div>
  <div>
   
    <div className='link'>
    <p>Follow Us On: </p>
        <a href='https://www.instagram.com/whoranjanmishra/?next=%2F' target='blank'><AiFillInstagram/></a>
        <a href='https://www.linkedin.com/in/ranjan-mishra-18106425b' target='blank'><AiFillLinkedin/></a>
        <a href='https://twitter.com/mishraranjan__' target='blank'><AiFillTwitterCircle/></a>
    </div>
  </div>
  </footer>
  )
}

export default Footer
