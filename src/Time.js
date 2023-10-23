import React, { Component } from 'react';

const helloStyle = {
    position: 'fixed',
    bottom: '10px',
    right: '10px',
    fontSize: '24px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: 'white',
    padding: '10px',
    borderRadius: '5px',
  };

class CurrentTime extends Component {
    
  constructor() {
    super();
    this.state = {
      currentTime: new Date().toLocaleTimeString()
    };
  }

  

  componentDidMount() {
    this.updateTime();
  }

  updateTime() {
    this.interval = setInterval(() => {
      this.setState({
        currentTime: new Date().toLocaleTimeString()
      });
    }, 1000); // Update the time every second
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div style={helloStyle}>
        <p>Current Time:</p>
        <p>{this.state.currentTime}</p>
      </div>
    );
  }
}

export default CurrentTime;