import React from 'react';
import PokemonListItem from './PokemonListItem';

const PokemonList = ({pokemons}) => {
	
	const renderedList = pokemons.map((pokemon, index) => {
		return <PokemonListItem
				key={index}
				id={index + 1}
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