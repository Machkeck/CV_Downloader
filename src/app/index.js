/*import React from 'react'
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
*/
var React = require('react')
  var ReactDOM = require('react-dom')
    import Draggable, {DraggableCore} from 'react-draggable';
    var counter = 0;


    require('./css/index.css')

    var App = React.createClass({
      getInitialState() {
        return {
          activeDrags: 0,
          deltaPosition: {
            x: 0,
            y: 0
          },
          controlledPosition: {
            x: -1000,
            y: 200
          }
        };
      },

      handleDrag(e, ui) {
        const {x, y} = this.state.deltaPosition;

        let curtain = document.getElementById('box1')
          var bodyRect = document.body.getBoundingClientRect(),
            elemRect = curtain.getBoundingClientRect(),
            offset = elemRect.right - bodyRect.right;
          console.log('Element is ' + offset + ' vertical pixels from <body>');

          if (offset <= -400 && offset >= -500) {
            console.log("leser", ui)

            counter = 1;
            curtain.animate([
              // keyframes
              {
                transform: `translateX(0px)`
              }, {
                transform: `translateX(-500px)`
              }
            ], {
              // timing options
              duration: 1000,
              easing: "ease-in-out",
              fill: "forwards"

            });
            console.log("Fini")
          }
          this.setState({
            deltaPosition: {
              x: x + ui.deltaX,
              y: y + ui.deltaY
            }
          });
        },

        onStart() {
          this.setState({
            activeDrags: ++this.state.activeDrags
          });
        },

        onStop() {
          this.setState({
            activeDrags: --this.state.activeDrags
          });
        },

        // For controlled component
        adjustXPos(e) {
          e.preventDefault();
          e.stopPropagation();
          const {x, y} = this.state.controlledPosition;
          this.setState({
            controlledPosition: {
              x: x - 10,
              y
            }
          });
        },

        adjustYPos(e) {
          e.preventDefault();
          e.stopPropagation();
          const {controlledPosition} = this.state;
          const {x, y} = controlledPosition;
          this.setState({
            controlledPosition: {
              x,
              y: y - 10
            }
          });
        },

        onControlledDrag(e, position) {
          const {x, y} = position;
          this.setState({
            controlledPosition: {
              x,
              y
            }
          });
        },

        onControlledDragStop(e, position) {
          this.onControlledDrag(e, position);
          this.onStop();
        },

        render() {
          const dragHandlers = {
            onStart: this.onStart,
            onStop: this.onStop
          };
          const {deltaPosition, controlledPosition} = this.state;
          return (
            <div>
              <header className="page_header">
                <h2>Hello {this.props.name}</h2>
              </header>
              <div className="page_content">
                <div className="page_background">
                  <h2>BACKGROUND</h2>
                  <div>x: {deltaPosition.x.toFixed(0)}, y: {deltaPosition.y.toFixed(0)}</div>
                </div>
                <div className="draggable_wrapper">
                  <Draggable axis="x" onDrag={this.handleDrag} {...dragHandlers}>
                    <div>
                      <div id="box1" className="curtain">

                        <div className="curtain_handle handle"></div>
                      </div>
                    </div>

                  </Draggable>
                </div>
              </div>
              <footer className="page_footer">
                <p>Github Link</p>
              </footer>

            </div>
          );
        }
      });

      ReactDOM.render(
        <App/>, document.getElementById('app'));
