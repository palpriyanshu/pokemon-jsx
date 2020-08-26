import React from 'react';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { frontImage: true };
    this.toggleImage = this.toggleImage.bind(this);
  }

  toggleImage() {
    this.setState((state) => ({ frontImage: !state.frontImage }));
  }

  render() {
    const {
      name,
      front_default: frontImg,
      back_default: backImg,
      id,
    } = this.props;
    const src = this.state.frontImage ? frontImg : backImg;
    return (
      <div className="cardStyle" value={name} id={id}>
        <p>{name.toUpperCase()}</p>
        <img
          src={src}
          alt={name}
          style={{ cursor: 'pointer' }}
          onClick={this.toggleImage}
        />
      </div>
    );
  }
}

export default Pokemon;
