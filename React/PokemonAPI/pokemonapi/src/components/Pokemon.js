import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Pokemon = (props) =>{

    const[pokemonList, setPokemonList] = useState([])

    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then((res)=>{
                console.log(res.data.results)
                setPokemonList(res.data.results)
                })
            .catch((err)=>console.log(err))}
    , [])

    return (
        <div>
            {
                pokemonList.map((pokemon, index)=>{
                    return(
                        <p key={index}>{pokemon.name}</p>
                    )
                })
            }
        </div>
    )

}

export default Pokemon