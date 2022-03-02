import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Planets = (props) => {
    
    const { searchParam, paramId } = useParams();
    const { planet, setPlanet } = props;
    const [isError, setIsError] = useState(false)

    useEffect(() => {
        axios
            .get(`https://swapi.dev/api/planets/${paramId}`)
            .then((res) => {
                console.log(searchParam);
                console.log(paramId);
                console.log(res);
                console.log(res.data);
                setPlanet(res.data)
                setIsError(false)
            })
            .catch((err) =>{
                console.log(err);
                setIsError(true)
            } );
                
    }, [paramId]);
    
    if(isError){
        return (
            <div className="my-2">

                <h2>These are not the droids you are looking for</h2>
                <img style={{width:'600px', height:'500px'}} src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg" alt='obi-wan'/>
            </div>
        )

    }
    else{
        return (
            
            <div className="my-3">
                <h2>{planet.name}</h2>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Surface Water: {planet.surface_water}</p>
                <p>Population: {planet.population}</p>
            </div>
        );

    }
};

export default Planets;
