import React, { Fragment } from 'react'
import Circles from './circles'
import "../css/home.css"
import NavBar from './NavBar'
import SignInUp from "./SignInUp"

export default function Home() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <div className="home-top-box">
        <div className='home-img'>
          <h1 data-aos="fade-up" data-aos-duration="1000" >Project: Krishi</h1>
          <div className="overlay"></div>
        </div>
      </div>
      <SignInUp></SignInUp>
      <Circles></Circles>
    </Fragment>
  )
}
