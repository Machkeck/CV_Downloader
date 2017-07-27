import React from 'react'
import ReactDOM from 'react-dom'

import Draggable, {DraggableCore} from 'react-draggable';

require('./css/index.css')

//component
class AppComponent extends React.Component {

  render() {
    return (
      <div>
        <header className="page_header"><h2>Hello {this.props.name}</h2></header>
        <div className="page_content">
        <Draggable axis="x" handle=".handle" defaultPosition={{
          x: 0,
          y: 0
        }} position={null} grid={[25, 25]} onStart={this.handleStart} onDrag={this.handleDrag} onStop={this.handleStop}>
          <div>
            <div id="box1" className="curtain"><div className="curtain_handle handle"></div></div>
          </div>
        </Draggable>
        </div>
        <footer className="page_footer"><p>Github Link</p></footer>

      </div>
    )
  }
}

ReactDOM.render(
  <AppComponent name="Maciek"/>, app)
