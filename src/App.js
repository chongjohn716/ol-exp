import React, { Component } from 'react';
import Map from './Map'

class App extends Component {
  constructor() {
    super()
    this.state = {
      history: [{
        squares: Array(9).fill(null),
      }],
      stepNumber: 0,
      xIsNext: true
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="left wraper">left</div>
        <div className="right wraper">
          <Map />
        </div>
      </React.Fragment>
    )
  }
}

export default App