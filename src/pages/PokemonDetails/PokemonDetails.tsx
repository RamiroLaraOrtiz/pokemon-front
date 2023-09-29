import { useParams } from "react-router-dom";
import { CardDetailWrapper } from "../../styled-components/Card/CardDetailWrapper";
import { DetailsCard } from "../../styled-components/Details/DetailsCard";
import {default as BackBall}  from "../../assets/pokeBackDetails.png";
import { useState, useEffect } from "react";
import { Pokemon } from "../../models/Pokemon";
import { getService } from "../../utils/httpsClient";
import { Result } from "../../models/PokemonIndex";
import { BadgeCardWrapper } from "../../styled-components/Card/BadgeCardWrapper";
import { CardBadgeType } from "../../styled-components/Card/CardBadgeType";
import { MoveWrapper } from "../../styled-components/Details/MoveWrapper";
import { Move } from "../../styled-components/Details/Move";
import useSound from 'use-sound';
import selectMove from '../../audio/selectMove.mp3';
import { Progress } from "antd";
import { Titles } from "../../styled-components/Details/Titles";
import { Spinner } from "../../components/Spinner/Spinner";



export default function PokemonDetails() {
	const { pokemonId } = useParams();

	const [pokemons, setPokemons] = useState<Pokemon>
	(Object)
	const [spinner, setSpinner] = useState<String>
	("false")
	
	const [play, { stop }] = useSound(selectMove);

	
	useEffect(() => {
		getPokemons()
	}, [])

	

	const getPokemons = async () => {
		
		let response = await getService('pokemon/'+pokemonId);
		let dataResponse = await response;
		
		setPokemons(await dataResponse)
		setSpinner("true")
		
	};

	if (pokemons === undefined) {
		return null;
	}
	
	return (
		<>
			<Spinner display={spinner}/>
			<CardDetailWrapper display={spinner}>
				
				<DetailsCard>
					<div style={{backgroundImage: `url(${BackBall})`,"backgroundSize": "cover"}} >
						<img src={pokemons.sprites?.other?.["official-artwork"].front_default} alt="pokemon" style={{"textAlign":"center",width:"100%" ,height:"100%"}}  />

					</div>

					<div>
					<Titles>{pokemons.name}</Titles>
					</div>

					<div style={{display:"flex", flexWrap:"wrap" , justifyContent:"space-between"}}>
						<h1>Base Expierience: {pokemons.base_experience}</h1>
						<h1>Height: {pokemons.height}</h1>
						<h1>Weight: {pokemons.weight}</h1>
					</div>

					<Titles>Stats</Titles>

					<div style={{display:"flex", flexWrap:"wrap" , justifyContent:"space-between"}}>
						
						{pokemons.stats?.map(stats=>{
							return(  
								<>
								<h1>{stats.stat.name}:{stats.base_stat}</h1>
								<Progress
								percent={stats.base_stat}
								strokeColor="black"
								showInfo={false}
							/>
							</>)
							})}
					</div>
				
					<div>
						<Titles >Type</Titles>
						<BadgeCardWrapper>
							
							{pokemons.types?.map(type=>{
							return(<CardBadgeType key={type.type.name} type={type.type.name}> {type.type.name}</CardBadgeType>)
							})}
						</BadgeCardWrapper>
					</div>
					
					<Titles >Moves</Titles>
					<MoveWrapper>
							{pokemons.moves?.slice(0, 20).map(move=>{
								return(
									<Move onMouseEnter={play} onMouseLeave={stop} >
										<span>▼</span>
										<h4>{move.move.name}</h4>
									</Move>
								)
							})}
					</MoveWrapper>
				</DetailsCard>
			</CardDetailWrapper>
		</>);
};
