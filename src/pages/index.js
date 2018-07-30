import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <div className="Hero">
     <div className="HeroGroup">
        <h1>Innomedio learning React</h1>
         <p>Innomedio is een full-service webbureau. 
      Wij bieden kmo's duurzame weboplossingen aan met meetbaar  rendement.
         </p>
         <Link to="/page-2/">Contact us</Link>
      </div>
     </div>
    </div>
  
)

export default IndexPage
