import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

const Header = ({ siteTitle }) => (
  <div className="Header">
    <div className="HeaderGroup">
     < Link to="/"> <img src={require('../images/logo-wit.png')} width="140px" /></Link>
     < Link to="/overons">Over ons</Link>
     < Link to="/portfolio">Portfolio</Link>
     < Link to="/jobs">Jobs</Link>
     < Link to="/afspraak"><button>Afspraak maken</button></Link>
    </div>
  </div>
)

export default Header
