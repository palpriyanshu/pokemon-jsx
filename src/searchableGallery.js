import React from 'react';
import PokemonGallery from './PokemonGallery';

class searchableGallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const searchTerm = event.target.value;
    this.setState(() => ({ searchTerm }));
  }

  filteredGallery(pokemonList) {
    return pokemonList.filter(({ name }) =>
      name.includes(this.state.searchTerm)
    );
  }

  render() {
    const filteredList = this.filteredGallery(this.props.pokemonList);
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.searchTerm} />
        <PokemonGallery
          className={this.props.className}
          pokemonList={filteredList}
        />
      </div>
    );
  }
}

export default searchableGallery;
