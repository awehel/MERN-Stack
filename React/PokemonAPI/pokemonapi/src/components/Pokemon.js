import React, {useEffect, useState} from 'react'

const Pokemon = (props) =>{

    const[pokemonList, setPokemonList] = useState([])

    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
        .then((res)=>res.json())
        .then((res)=>setPokemonList(res.results))
        .catch((err)=>console.log(err))
    }, [])

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