import { Link } from "react-router-dom";
import React from 'react'
import './footer.css'
import DiscoverButton from '../heroSection/DiscoverButton'

const FooterTop = () => {
  return (
    <div className='footer-top'>
        <h1>HIRE US TO WORK ON A PROJECT?</h1>
        <Link to='/contactus'><DiscoverButton button="Contact Us Now "  /> </Link>
    </div>
  )
}

export default FooterTop
