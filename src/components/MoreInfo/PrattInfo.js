import React, { Component } from 'react'
import './MoreInfo.css'
import pratt from './images/pratt.png'

export default function PrattInfo () {
  return (
    <div className="more-info">
      <div className="info-header">
        <div className="info-logo">
          <img src={pratt} alt="Logo" width="164px" height="82px" />
        </div>
        <div>
          <p>MASTER OF SCIENCE IN PACKAGE DESIGN</p>

          <p>Application deadline for spring: October 1, 2019.</p>
          <p>24 Credits: $44,328</p>
        </div>
      </div>

      <p>
          The M.S. in Package Design, a degree first offered in 1966, educates students from diverse cultural, professional, and educational backgrounds in design thinking, technical skills, collaborative abilities, academic knowledge, and managerial competence. While focusing on creative problem-solving, the curriculum is industry-oriented. Graduates enter the professional world with an outstanding body of work, prepared to become innovative leaders in the field of package design.
      </p>

      <p>
          The M.S. in Package Design is an initial master’s degree that offers students structured courses on the decision-making process for new product and package development, featuring direction in package design, typography, brand development, marketing, structural packaging, packaging technology, fragrance packaging, and the business aspects of the package industry. 
      </p>

      <p>
        The M.S. in Package Design is a full-time program, with classes offered during the day, as well as some evenings for the convenience of students. A minimum of 48 credits, completed within two years of study, is required for the M.S. Package Design degree. Students accepted typically hold undergraduate degrees in graphic design or related design fields, such as industrial and interior design, architecture, fine arts, and media arts. And, we also welcome applicants from non-design fields as well, such as communications and journalism, business, liberal arts, and the sciences. Up to six credits of qualifying courses may be required for applicants who do not meet all entrance standards but whose applications indicate a strong aptitude for graduate study. A portfolio review is required for admission. 
      </p>
    </div>
  )
}
