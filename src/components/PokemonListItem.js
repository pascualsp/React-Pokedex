import React from 'react';

const PokemonListItem = ({id, name, url}) => {
	const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
	console.log({imageUrl});
	
	return (
		<div className="col-2 text-center">
			<img src={imageUrl} />
			<div>
				{name}
			</div>
		</div>
	);
};

export default PokemonListItem;