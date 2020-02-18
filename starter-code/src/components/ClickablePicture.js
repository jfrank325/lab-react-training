import React from 'react';

class ClickablePicture extends React.Component {
  state = {
    img: '/img/persons/maxence.png',
  };

  imgClicked = () => {
    if (this.state.img === '/img/persons/maxence.png') {
      this.setState({
        img: '/img/persons/maxence-glasses.png',
      });
    } else if (this.state.img === '/img/persons/maxence-glasses.png') {
      this.setState({
        img: '/img/persons/maxence.png',
      });
    }
  };
  render() {
    return (
      <div className="img-container">
        <img onClick={this.imgClicked} src={this.state.img} alt="" />
      </div>
    );
  }
}

export default ClickablePicture;
