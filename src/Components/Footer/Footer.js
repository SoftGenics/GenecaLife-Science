import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
<div className="mt-5 pt-5 pb-5 footer ">
<div className="container">
  <div className="row">
    <div className="col-lg-5 col-xs-12 about-company">
      <h2>About Geneca Life Science</h2>
      <p className="pr-5 text-white-100">Established in 2011 , Geneca Life Science has made a name for itself in the list of top suppliers of in India.  </p>
      <p><a href="#about">Read More</a></p>
      <img src='images/logo.png' alt='logo-footer' style={{width:'300px', height:'100px'}}></img>
    </div>
    <div className="col-lg-3 col-xs-12 links">
      <h4 className="mt-lg-0 mt-sm-3">Our Company</h4>
        <ul className="m-0 p-0">
          <li>- <a href="#company-profile">company Profile</a></li>
          <li>- <a href="#product">Products</a></li>

          <li>- <a href="#contact-us">Contaact Us</a></li>
          <li>- <Link to="/faq">Faq</Link></li>
        </ul>
    </div>
    <div className="col-lg-4 col-xs-12 location">
      <h4 className="mt-lg-0 mt-sm-4">Contact Details</h4>
      <p><i class="fas fa-map-marker-alt"></i>&nbsp;12/3, Old Palasia, Prahlad Nagar, Indore-452010, Madhya Pradesh, India</p>
      <p className="mb-0"><i className="fa fa-phone mr-3"></i>&nbsp;(541) 754-3010</p>
      <br></br>
      <p><i className="fas fa-envelope mr-3"></i>&nbsp;genecalifescience@gmail.com</p>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col copyright">
      <p className=""><small className="text-white-100">Designed and Seo By© <a href='https://softgenics.in'>SoftGenics</a></small></p>
    </div>
  </div>
</div>
</div>
  )
}

export default Footer