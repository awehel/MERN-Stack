import React, {useState} from "react";

const Person = (props) =>{

    const{firstName, lastName, hairColor, age} = props
    const [currentAge, setCurrentAge] = useState(age)

    const increaseAge = () =>{
        setCurrentAge(currentAge+1)
    }

    return(
        <div>
            <p>{lastName}, {firstName}</p>
            <p>Age: {currentAge}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={increaseAge}>Birthday Button</button>
        </div>
    )
}

export default Person