import { Badge, Avatar } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";
import { Spinner } from "../../components/Spinner/Spinner/Spinner";

import { Pokemon } from "../../models/Pokemon";
import { Result } from "../../models/PokemonIndex";
import { Contaner } from "../../styled-components/Home/Container";
import { getService } from "../../utils/httpsClient";
Contaner
function  Home() {
	const [pokemons, setPokemons] = useState<Pokemon[]>
	([])
	const [spinner, setSpinner] = useState<String>
	("false")

	
	useEffect(() => {
		getPokemons()
	}, [])

	

	const getPokemons = async () => {
		let urlPokemon = 'pokemon?limit=151&offset=0';
		let response = await getService(urlPokemon);
		let dataResponse = await response;
		
		const promises = dataResponse.results.map(async (pokemonD:Result)=>{
			let urlPokemonD =  pokemonD.url.substring(26);
			let response = await getService(urlPokemonD);
			let dataResponse = await response;
		
			return(dataResponse)
		})

		const pokes = await Promise.all(promises)
		console.log(pokes)
		setSpinner("true")
		setPokemons(pokes)
		
	};

	if (pokemons === undefined) {
		return null;
	}
	

	return (
		<div>
			<Spinner display={spinner}/>
			<Contaner display={spinner}>
				<Card pokemons={pokemons} />
			</Contaner>
		</div>
	);
};

export default Home;
