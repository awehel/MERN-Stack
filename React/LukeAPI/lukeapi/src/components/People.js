import {useParams, Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";

const People = (props) => {
    
    const {searchParam, paramId} = useParams()
    const {person, setPerson} = props
    const {planet, setPlanet} = props
    const [isError, setIsError] = useState(false);

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${paramId}`)
            .then((res) => {
                // console.log(searchParam);
                // console.log(paramId);
                // console.log(res);
                console.log(res.data);
                setPerson(res.data)
                setIsError(false);
                
            })
            .catch((err) => {
                setIsError(true);
                console.log(err)
            });
    }, [paramId])

    useEffect(()=>{
        axios.get(person.homeworld)
        .then((res) =>{
            console.log(res);
            console.log(res.data);
            setPlanet(res.data);
        })
        .catch((err)=>{
            console.log(err);
            
        } )
    }, [person])

    const homeworldURL = person.homeworld
    let urlDigits = ""
    const homeDigits = (homeURL) =>{
        if(homeURL.charAt(homeURL.length-3) === "/"){
            urlDigits = "" + homeURL.charAt(homeURL.length-2)
        }
        else{
            urlDigits =
                "" +
                homeURL.charAt(homeURL.length - 3) +
                homeURL.charAt(homeURL.length - 2);
        }

    }

    homeDigits(homeworldURL)

    if(isError){
        return (
            <div className="my-2">
                <h2>These are not the droids you are looking for</h2>
                <img
                    style={{ width: "600px", height: "500px" }}
                    src="https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg"
                    alt="obi-wan"
                />
            </div>
        );
    }
    else{
        return (
            <div className="my-4">
                <h2>{person.name}</h2>
                <p>Height: {person.height}</p>
                <p>Eye Color: {person.eye_color}</p>
                <p>Skin Color: {person.skin_color}</p>
                <p>
                    Home World: <Link to={`/planets/${urlDigits}`}>{planet.name}</Link>
                </p>

                <p>URL Digits: {urlDigits}</p>
            </div>
        );
    }

    
        
};

export default People;
