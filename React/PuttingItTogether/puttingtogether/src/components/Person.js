import React, {Component} from "react";

class Person extends Component {

    constructor(props){
        super(props)

        this.state = {
            age: this.props.age
        }
    }
    
    // const{firstName, lastName, hairColor, age} = props
    // const [currentAge, setCurrentAge] = useState(age)
    
    // increaseAge () {
    //     this.setState({personAge:this.state.personAge +1})
    // }
    
    render(){
        
        const {firstName, lastName, hairColor} = this.props
        
    return(
        <div>
            <p>{lastName}, {firstName}</p>
            <p>Age: {this.state.age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={()=> this.setState({age:this.state.age +1})}>Birthday Button</button>
        </div>
    )}
}

export default Person