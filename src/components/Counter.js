import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {
  static defaultProps = {
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined'),
  };

  static propTypes = {
    number: PropTypes.number,
    color: PropTypes.string,
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
    onSetColor: PropTypes.func,
  };

  render() {
    const { number, color, onIncrement, onDecrement, onSetColor } = this.props;

    return (
      <div
        className="Counter"
        onClick={onIncrement}
        onContextMenu={(e) => {
          e.preventDefault();
          onDecrement();
        }}
        onDoubleClick={onSetColor}
        style={{ backgroundColor: color }}
      >
        {number}
      </div>
    );
  }
}

export default Counter;
