import React from 'react';
import './App.css';
import PokemonGallery from './PokemonGallery';
import SearchableGallery from './searchableGallery';
import * as pokemonList from './pokemon.json';

const App = function (props) {
  return (
    <div>
      <PokemonGallery className="gallery" pokemonList={pokemonList.default} />
      <SearchableGallery
        className="gallery"
        pokemonList={pokemonList.default}
      />
    </div>
  );
};

export default App;
