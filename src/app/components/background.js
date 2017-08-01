import React from 'react'
import Tilt from 'react-tilt'

let pdf = require('../files/CV_maciej_wlazlo.pdf')

export default class Background extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      highlighted: "false",
      className: "Tilt-inner cv_card"
    };
  }

  clickGlow() {
    this.setState({highlighted: "true"});
    this.setState({className: "Tilt-inner cv_card highlighted"});
    setTimeout(() => {
      this.setState({highlighted: "false"})
      this.setState({className: "Tilt-inner cv_card"});
    }, 1000)
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
          <div className={this.state.className} onClick={this.clickGlow.bind(this)}>
            <a href={pdf} download="cv_maciej_wlazlo_pdf" className="pdf_link"></a>
          </div>
        </Tilt>
      </div>
    )
  }
}
