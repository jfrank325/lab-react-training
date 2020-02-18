import React from 'react';

class Carousel extends React.Component {
  state = {
    imgs: [
      {
        1: 'https://randomuser.me/api/portraits/women/1.jpg',
        2: 'https://randomuser.me/api/portraits/men/1.jpg',
        3: 'https://randomuser.me/api/portraits/women/2.jpg',
        4: 'https://randomuser.me/api/portraits/men/2.jpg',
      },
    ],
  };
  goRight = () => {
    this.setState({
      imgs: this.state.imgs + 1,
    });
  };

  goLeft = () => {
    this.setState({
      imgs: this.state.imgs - 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.goLeft}>Go Left</button>
        <img className="img-container" src={this.state.imgs[1]} alt="" />
        <button onClick={this.goRight}>Go Right</button>
      </div>
    );
  }
}

export default Carousel;
