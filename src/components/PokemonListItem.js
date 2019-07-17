import React from 'react';

const PokemonListItem = ({id, name, url}) => {
	const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
	const wikiUrl = "https://bulbapedia.bulbagarden.net/wiki/" + name + "_(Pokémon)";
	
	return (
		<div className="col-2 text-center list-entry">
			<img alt={name} src={imageUrl} />
			<div>
				<a href={wikiUrl} target="_blank" rel="noopener noreferrer">#{id}: {name}</a>
			</div>
		</div>
	);
};

export default PokemonListItem;