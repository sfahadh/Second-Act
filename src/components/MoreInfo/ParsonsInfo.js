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
						RHINO 1
          </p>
          <p>
            Jun 04 - Jul 04, 2019 <br/>
            Monday & Wednesday <br />
            7:00 - 9:50PM <br />
            Tuition: $766 per course <br />
            Fashion Design Certificate
          </p>
        </div>
      </div>
      <div>
        <p>
          Learn 3Ddd modeling techniques using Rhino 3D—a powerful, versatile modeling software program applicable to design fields including architecture, sculpture, and interior, furniture product, and jewelry design. Rhino is fast, intuitive, easy to learn, and compatible with many other software packages. A wide array of plug-ins enable you to perform an impressive and ever-evolving range of functions with Rhino. Projects help you learn the fundamentals of digital design along with skills such as turning digital models into physical objects using laser cutting, 3D printing, and CNC milling. You develop a sense of freedom and independence using Rhino 3D that provides a foundation for further mastery of this important industry software. Basic familiarity with a PC operating system is helpful but not required.
         </p>
		   </div>
    </div>
  )
}
