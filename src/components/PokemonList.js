import React from 'react';
import PokemonListItem from './PokemonListItem';

const PokemonList = ({onPokemonSelect, pokemons, offset}) => {
	
	const renderedList = pokemons.map((pokemon, index) => {
		return <PokemonListItem
				key={index}
				onPokemonSelect={onPokemonSelect}
				id={index + offset + 1}
				name={pokemon.name}
				url={pokemon.url}
		/>;
	});
	
	return (
		<div className="row justify-content-center">
			{renderedList}
		</div>
	);
};

export default PokemonList;