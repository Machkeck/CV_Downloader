import React from 'react'
import ReactTooltip from 'react-tooltip'

let pdf = require('../files/CV_maciej_wlazlo.pdf')
let img = require('../images/download-arrow.svg')

export default class DownloadBtn extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="">
        <div className="circle" data-tip="download cv">
          <a href={pdf} download="cv_maciej_wlazlo_pdf"><img src={img} height="20" width="20"/></a>
        </div>
        <ReactTooltip/>
      </div>
    )
  }
}
