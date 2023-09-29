import { CardWrapper } from "../../styled-components/Card/CardWrapper";
import { Image } from "../../styled-components/Card/Image";

import { PropsCard } from "../../models/PropsCard";
import { CardNameId } from "../../styled-components/Card/CardNameId";
import { CardBadgeType } from "../../styled-components/Card/CardBadgeType";
import { BadgeCardWrapper } from "../../styled-components/Card/BadgeCardWrapper";
import { Link } from "react-router-dom";
import { ButtonFavorite } from "../../styled-components/Card/ButtonFavorite";
import { useDispatch, useSelector } from "react-redux";
import { addPokemonToFavorite,removePokemonFromFavorite } from "../../reducers/favoriteSlice";
import { Pokemon } from "../../models/Pokemon";

export interface initialState {
  totalCount:number
  productsList:[]
}
function  Card(pokemons:PropsCard) {

  const dispatch = useDispatch()
  const {pokemonsList} = useSelector(state => state.favorite)

  

  const handleAddOrRemoveProduct =(pokemonId:number)=>{

    const poke = pokemons.pokemons.find(poke => poke.id === pokemonId)

    console.log(pokemonsList.find((pdt:Pokemon) => pdt.id === pokemonId) ? true : false)
    if (pokemonsList.find((pdt:Pokemon) => pdt.id === pokemonId)) {
        dispatch(removePokemonFromFavorite(pokemonId))
    }else{
        dispatch(addPokemonToFavorite(poke))
    }
  }
  const CheckExist =(pokemonId:number)=>{


   return pokemonsList.find((pdt:Pokemon) => pdt.id === pokemonId) ? true : false

  }



	return (
   <>
    {pokemons.pokemons.map(pokemon=>{
      return(
        <CardWrapper key={pokemon.id*2}>
         <Link to={"/pokemon/" + pokemon.id} style={{ textDecoration: 'none',  color: "#000"}}>
            <CardNameId>
              <h1>N°{pokemon.id}</h1>
              <h1>{pokemon.name}</h1>
            </CardNameId>
            <BadgeCardWrapper>
              {pokemon.types?.map((type,index)=>{
                return(<CardBadgeType type={type.type.name} key={index*1}> {type.type.name}</CardBadgeType>)
              })}
            </BadgeCardWrapper>
            <Image  src={pokemon.sprites.other?.["official-artwork"].front_default} />
          </Link>
          <ButtonFavorite  onClick={()=>handleAddOrRemoveProduct(pokemon.id)} isExist={CheckExist(pokemon.id)}>{pokemonsList.find((pdt:Pokemon) => pdt.id === pokemon.id)? "Remove":"Add to favorites"}</ButtonFavorite>
        </CardWrapper>
      )
    })}
    </>
  )
};

export default Card;
