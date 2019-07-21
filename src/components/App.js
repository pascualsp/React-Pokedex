import React from 'react';
import './style.css';
import PokemonList from './PokemonList';
import PokemonDetail from './PokemonDetail';
import pokeapi from '../apis/pokeapi';

class App extends React.Component {
	state = {generation: 0, region: "", pokemons: [], selectedMon: null, offset: 0};
	
	componentDidMount() {
		this.onGenSelect(1);
		this.onPokemonSelect(132);
	}
	
	onGenSelect = async (gen) => {
		if (gen !== this.state.generation) {
			this.setState({generation: gen});
			let start;
			let end;
			
			if (gen === 1) {
				this.setState({region: "Kanto"});
				start = 0;
				end = 151;
			}
			else if (gen === 2) {
				this.setState({region: "Johto"});
				start = 151;
				end = 100;
			}
			else if (gen === 3) {
				this.setState({region: "Hoenn"});
				start = 251;
				end = 135;
			}
			else if (gen === 4) {
				this.setState({region: "Sinnoh"});
				start = 386;
				end = 107;
			}
			else if (gen === 5) {
				this.setState({region: "Unova"});
				start = 493;
				end = 156;
			}
			else if (gen === 6) {
				this.setState({region: "Kalos"});
				start = 649;
				end = 72;
			}
			else if (gen === 7) {
				this.setState({region: "Alola"});
				start = 721;
				end = 86;
			}
			
			this.setState({offset: start});
			
			const response = await pokeapi.get('/pokemon', {
				params: {
					offset: start,
					limit: end
				}
			});
			
			this.setState({pokemons: response.data.results});
		}
	};
	
	onPokemonSelect = async (pokemon) => {
		const query = '/pokemon/' + pokemon;
		const response = await pokeapi.get(query);
		this.setState({selectedMon: response.data});
	};
	
	render() {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<button type="button" onClick={() => this.onGenSelect(1)} className="btn btn-secondary">Gen 1</button>
					<button type="button" onClick={() => this.onGenSelect(2)} className="btn btn-secondary">Gen 2</button>
					<button type="button" onClick={() => this.onGenSelect(3)} className="btn btn-secondary">Gen 3</button>
					<button type="button" onClick={() => this.onGenSelect(4)} className="btn btn-secondary">Gen 4</button>
					<button type="button" onClick={() => this.onGenSelect(5)} className="btn btn-secondary">Gen 5</button>
					<button type="button" onClick={() => this.onGenSelect(6)} className="btn btn-secondary">Gen 6</button>
					<button type="button" onClick={() => this.onGenSelect(7)} className="btn btn-secondary">Gen 7</button>
				</div>
				
				<PokemonDetail pokemon={this.state.selectedMon} />
				
				<div className="row justify-content-center">
					<h1 className="display-2">{this.state.region}</h1>
				</div>
				
				<PokemonList
					onPokemonSelect={this.onPokemonSelect}
					pokemons={this.state.pokemons}
					offset={this.state.offset}
				/>
				
			</div>
		);
	}
}

export default App;