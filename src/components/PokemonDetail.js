import React from 'react';

const PokemonDetail = ({pokemon}) => {
	if (pokemon !== null) {
		const typesList = pokemon.types.reverse().map((type, index) => {
			if (index === 1) {
				return <h5 className="info" key={index}>, {type.type.name}</h5>;
			} else {
			return <h5 className="info" key={index}>{type.type.name}</h5>;
			}
		});
		
		const abilityList = pokemon.abilities.reverse().map((ability, index) => {
			if (index > 0) {
				return <h5 className="info" key={index}>, {ability.ability.name}</h5>;
			} else {
			return <h5 className="info" key={index}>{ability.ability.name}</h5>;
			}
		});
		
		const statsList = pokemon.stats.reverse().map((stat, index) => {
			return (
				<div key={index} className="col-6 text-center">
					<h5>{stat.stat.name}:</h5>
					<h5 className="info" key={index}>{stat.base_stat} </h5>
				</div>
			);
		});
		
		const wikiUrl = "https://bulbapedia.bulbagarden.net/wiki/" + pokemon.name + "_(Pokémon)";
		
		return (
			<div>
				<div className="modal fade" id="detailView" tabindex="-1" role="dialog" aria-labelledby="detailViewLabel" aria-hidden="true">
					<div className="modal-dialog modal-dialog-centered" role="document">
						<div className="modal-content">
							<div className="modal-body">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<br />
								<div className="row justify-content-center">
									<h3 className="modal-title">#{pokemon.id}: {pokemon.name}</h3>
								</div>
								<div className="row justify-content-center">
									<img className="detail-sprite" alt={pokemon.id} src={pokemon.sprites.front_default} />
								</div>
								<div className="row justify-content-center">
									<h5>Type:</h5>
								</div>
								<div className="row justify-content-center">
									{typesList}
								</div>
								<div className="row justify-content-center">
									<h5>Abilities:</h5>
								</div>
								<div className="row justify-content-center">
									{abilityList}
								</div>
								<div className="row justify-content-center">
									<h5>Stats:</h5>
								</div>
								<div className="row justify-content-center">
									{statsList}
								</div>
								<div className="row justify-content-center">
									<a className="wiki-link" href={wikiUrl} target="_blank" rel="noopener noreferrer">more info</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	return null;
};

export default PokemonDetail;