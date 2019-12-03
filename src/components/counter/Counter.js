import React from 'react';
import './Counter.css';

class Counter extends React.Component {
  
  render() {
    return (
      <span id="counter">{this.props.value}</span>
    );
  }
}

export default Counter;
