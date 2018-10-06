import React from 'react'
import './App.css';
import Header from './Header';

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
      <div className="center">
          <Header title={"Digital Stopwatch"}/>
    <div className="App">
      <label className="time-digits">{this.state.lapse}</label><span style={{color: 'white'}}> ms</span>
    <br />
      <button onClick={this.handleRunClick} className='start'>{this.state.running ? 'Stop' : 'Start'}</button>
      <button onClick={this.handleClearClick}>Clear</button>
    </div>
      </div>
    )
  }
}

export default StopWatch
