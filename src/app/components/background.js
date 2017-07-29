import React from 'react'
import Tilt from 'react-tilt'

let pdf = require('../files/CV_maciej_wlazlo.pdf')

export default class Background extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: "closed"
    };
  }

  render() {
    return (
      <div className="">
        <Tilt className="Tilt" options={{
          max: 25
        }} style={{
          height: 250,
          width: 250
        }}>
          <div className="Tilt-inner cv_card">
            <a href={pdf} download="cv_maciej_wlazlo_pdf" className="pdf_link">
            </a>
          </div>
        </Tilt>
      </div>
    )
  }
}
