import React from 'react';

const PokemonListItem = ({id, name, url}) => {
	const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
	
	return (
		<div className="col-2 text-center list-entry">
			<img alt={name} src={imageUrl} />
			<div>
				#{id} {name}
			</div>
		</div>
	);
};

export default PokemonListItem;