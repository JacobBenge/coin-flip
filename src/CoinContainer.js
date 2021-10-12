import React, { Component } from 'react';
import Coin from './Coin';
import './CoinContainer.css';
import { choice } from './Helpers';

class CoinContainer extends Component {
  static defaultProps = {
    coins: [
      { side: "heads", imgSrc: "./heads.jpg" },
      { side: "tails", imgSrc: "./tails.jpg" }
    ]
  };
  constructor(props) {
    super(props);
    this.state = {
      currCoin: null,
      nFlips: 0,
      nHeads: 0,
      nTails: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }

  flipCoin() {
    // pick random side
    const newCoin = choice(this.props.coins);
    this.setState(st => {
      return {
        currCoin: newCoin,
        nFlips: st.nFlips + 1, // increment count
        nHeads: st.nHeads + (newCoin.side === "heads" ? 1 : 0),
        nTails: st.nTails + (newCoin.side === "tails" ? 1 : 0)
      }
    })
  }

  handleClick(evt) {
    this.flipCoin();
  }

  render() {
    return (
      <div className="CoinContainer">
        <h2>Let's Flip a Coin</h2>
        <button onClick={this.handleClick}>Flip Coin</button>
        <p>Out of {this.state.nFlips} flips, there have been {this.state.nHeads} Heads and {this.state.nTails} Tails</p>
        {this.state.currCoin && <Coin info={this.state.currCoin} />}
      </div>
    );
  }
}

export default CoinContainer;