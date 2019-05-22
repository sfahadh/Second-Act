import React, { Component } from 'react'
import './MoreInfo.css'
import sva from './images/sva.png'

export default function SvaInfo() {
  return (
    <div className="more-info">
      <div className="info-header">
        <div className="info-logo">
          <img src={sva} alt="Logo" width="228px" height="141px"/>
        </div>
        <div>
          <p>
              ILLUSTRATION AND VISUAL STORYTELLING: <br/>
            ART AND INDUSTRY
          </p>
          <p>
            Session 1: May 28-June 28, 2019<br/>
            Session 2: July 8-August 9, 2019<br/>
            Tuition: $3,000 per session<br/>
            4 undergraduate studio credits per session 
          </p>
        </div>
      </div>
      <p>
        This studio residency offers artists the opportunity to explore the wealth of resources available to professional illustrators in New York City while developing a portfolio of work that embodies personal vision.
      </p>
      <p>
          With guidance from award-winning illustrators, participants will complete a body of work comprised of images created for assignments, as well as personal projects, aiming to showcase their individual style and aesthetic direction. The goals are to advance to the next level of artistic practice and to attain an enhanced position in the illustration marketplace.

      </p>
      <p>
          A rigorous instructional program, built around courses in editorial illustration & portfolio development, sequential illustration, independent project, and visits to professional studios as well as exhibitions relevant to the illustration industry, will complement independent work. Together these initiatives form an intense program that fosters professional growth and the expansion of personal voice. Special lectures by guest artists, art directors, publishers, gallery directors and agents are designed to provide additional insight regarding the realities of a career in illustration.

      </p>
      <p>
          About the schedule: This residency program is structured around three full days of in-studio classes (Monday-Wednesday, morning to late afternoon) and one day (typically Thursday) of visits to exhibitions for curated tours or lectures and portfolio reviews with award winning artists, art directors and illustration agents. Additional sessions of individual meetings, critiques and supplemental learning opportunities will augment the schedule.
      </p>
    </div>
  )
}
