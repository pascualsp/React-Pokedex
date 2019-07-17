import React from 'react';
import './style.css';
import PokemonList from './PokemonList';
import pokeapi from '../apis/pokeapi';

class App extends React.Component {
	state = {generation: 0, pokemons: []};
	
	componentDidMount() {
		this.onGenSelect(1);
	}
	
	onGenSelect = async (gen) => {
		if (gen !== this.state.generation) {
			this.setState({generation: gen});
			let start;
			let end;
			
			if (gen === 1) {
				start = 0;
				end = 151;
			}
			else if (gen === 2) {
				start = 151;
				end = 100;
			}
			else if (gen === 3) {
				start = 251;
				end = 135;
			}
			else if (gen === 4) {
				start = 386;
				end = 107;
			}
			else if (gen === 5) {
				start = 493;
				end = 156;
			}
			else if (gen === 6) {
				start = 649;
				end = 72;
			}
			else if (gen === 7) {
				start = 721;
				end = 86;
			}
			
			const response = await pokeapi.get('/pokemon', {
				params: {
					offset: start,
					limit: end
				}
			});
			
			this.setState({pokemons: response.data.results});
		}
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
				
				<PokemonList pokemons={this.state.pokemons} />
				
			</div>
		);
	}
}

export default App;