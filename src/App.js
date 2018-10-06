import React from 'react'


class StopWatch extends React.Component {
  initialState = {
    lapse: 0,
    running: false
  }
  state = this.initialState;

handleRunClick = () => {
  if(this.state.running) {
    clearInterval(this.intervalID);
  } else {
    const startTime = Date.now() - this.state.lapse;
    this.intervalID = setInterval(() => {
      this.setState({
      lapse: Date.now() - startTime
      })
    })
  }
  this.setState({
    running: !this.state.running
  });
}

handleClearClick = () => {
clearInterval(this.intervalID);
  this.setState({
    lapse: 0
  });
}
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  render() {
    return (

    <div>
      <label>{this.state.lapse} ms</label>
      <button onClick={this.handleRunClick}>{this.state.running ? 'Stop' : 'Start'}</button>
      <button onClick={this.handleClearClick}>Clear</button>
    </div>
    )
  }
}

export default StopWatch
