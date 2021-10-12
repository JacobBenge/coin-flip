import React, { Component } from 'react';
import './Coin.css';

// stateless component
class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img src={this.props.info.imgSrc} alt={`${this.props.info.side} side of coin`} />
      </div>
    );
  }
}

export default Coin;