import React from 'react'

export default class Curtain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      position: "closed"
    };
  }

  clickHandle(e) {
    e.preventDefault();
    e.stopPropagation();

    let bodyRect = document.body.getBoundingClientRect(),
      curtain = document.getElementById('box1'),
      elemRect = curtain.getBoundingClientRect(),
      offset = elemRect.right - bodyRect.right,
      tip = document.getElementById('page_tips').style,
      info = document.getElementById('page_info'),
      begin,
      end;

    tip.opacity = 1;
    (function fade() {
      (tip.opacity -= .1) < 0
        ? tip.display = "none"
        : setTimeout(fade, 40)
    })();

    info.className += " fadeIn";

    console.log('Element is ' + offset + ' vertical pixels from <body>');
    console.log(this)

    if (this.state.position === "closed") {
      begin = 0;
      end = -(bodyRect.right - 70);
      this.setState({position: "opened"});
    } else {
      begin = -(bodyRect.right - 70);
      end = 0;
      this.setState({position: "closed"});
    }

    console.log(begin, end)

    curtain.animate([
      // keyframes
      {
        transform: `translateX(${begin}px)`
      }, {
        transform: `translateX(${end}px)`
      }
    ], {
      // timing options
      duration: 1500,
      easing: "cubic-bezier(0.380, 0.890, 0.410, 0.955)",
      fill: "forwards"

    });
  }

  render() {
    return (
      <div>
        <div id="box1" className="curtain">

          <div className="curtain_handle handle" onClick={this.clickHandle.bind(this)}></div>
        </div>
      </div>
    )
  }

}
