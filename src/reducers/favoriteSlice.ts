import { createSlice } from '@reduxjs/toolkit'
import { initialState } from "../models/initialState";
const initialState:initialState = {
    totalCount:0,
    pokemonsList:[]
}

export const FavoriteSlice = createSlice({
    name:'favorite',
    initialState:initialState,
    reducers:{
        addPokemonToFavorite:(state,action)=>{
            state.pokemonsList=[...state.pokemonsList,action.payload]
            state.totalCount +=1
        },
        removePokemonFromFavorite:(state,action)=>{
            const pokemonId = action.payload
            state.totalCount -= 1
            state.pokemonsList = state.pokemonsList.filter(pokemon => pokemon.id !== pokemonId) 

        }
         
    }
})

export const {addPokemonToFavorite,removePokemonFromFavorite} = FavoriteSlice.actions

export default FavoriteSlice.reducer