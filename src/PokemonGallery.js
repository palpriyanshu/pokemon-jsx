import React from 'react';

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, frontImage: true };
    this.toggleImage = this.toggleImage.bind(this);
  }

  componentDidMount() {
    fetch(`http://pokeapi.co/api/v2/pokemon/${this.props.id}`)
      .then((details) => details.json())
      .then(({ name, sprites }) => {
        const { front_default: frontImg, back_default: backImg } = sprites;
        const pokemon = { name, frontImg, backImg };
        this.setState(() => ({ pokemon, loaded: true }));
      });
  }

  toggleImage() {
    this.setState((state) => ({ frontImage: !state.frontImage }));
  }

  render() {
    if (!this.state.loaded) {
      return <p>'loading...</p>;
    }

    const { name, frontImg, backImg } = this.state.pokemon;
    const src = this.state.frontImage ? frontImg : backImg;
    return (
      <div className="cardStyle">
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

const PokemonGallery = function (props) {
  const pokemonIds = [...Array(props.count).keys()].slice(1);
  return (
    <div className={props.className}>
      {pokemonIds.map((id) => (
        <Pokemon id={id} key={id} />
      ))}
    </div>
  );
};

export default PokemonGallery;
