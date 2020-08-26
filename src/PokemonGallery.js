import React from 'react';
import Pokemon from './Pokemon';

const PokemonGallery = function (props) {
  return (
    <div className={props.className}>
      {props.pokemonList.map(({ id, name, front_default, back_default }) => (
        <Pokemon
          id={id}
          key={id}
          name={name}
          front_default={front_default}
          back_default={back_default}
        />
      ))}
    </div>
  );
};

export default PokemonGallery;
