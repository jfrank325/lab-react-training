import React from 'react';

class Dice extends React.Component {
  state = {
    img: '/img/dice-empty.png',
  };
  random = () => {
    return Math.floor(Math.random() * 6) + 1;
  };
  imgClicked = () => {
    this.setState({
      img: `/img/dice${this.random()}.png`,
    });
  };
  render() {
    return (
      <div className="dice-container">
        <img onClick={this.imgClicked} src={this.state.img} alt="" />
      </div>
    );
  }
}

export default Dice;
