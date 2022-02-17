import React, {useState} from 'react'

const Form = (props) =>{

    const{personObject, setPersonObject} = props

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")

    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) =>{
        
        setFirstName(e.target.value)
        if(e.target.value.length < 1){
            setFirstNameError("First Name is required")
        }
        else if(e.target.value.length <2){
            setFirstNameError("First Name must be at least 2 characters")
        }
        else{
            setFirstNameError("")
        }
    }

    const handleLastName = (e) =>{
        
        setLastName(e.target.value)
        if(e.target.value.length < 1){
            setLastNameError("Last Name is required")
        }
        else if(e.target.value.length <2){
            setLastNameError("Last Name must be at least 2 characters")
        }
        else{
            setLastNameError("")
        }
    }

    const handleEmail = (e) =>{
        
        setEmail(e.target.value)
        if(e.target.value.length < 1){
            setEmailError("Email is required")
        }
        else if(e.target.value.length <6){
            setEmailError("Email must be at least 5 characters")
        }
        else{
            setEmailError("")
        }
    }

     const handlePassword = (e) =>{
        
        setPassword(e.target.value)
        if(e.target.value.length < 1){
            setPasswordError("Password is required")
        }
        else if(e.target.value.length <9){
            setPasswordError("Password must be at least 8 characters")
        }
        else{
            setPasswordError("")
        }
    }

     const handleConfirmPassword = (e) =>{
        
        setConfirmPassword(e.target.value)
        if(e.target.value !== password){
            setConfirmPasswordError("Confirm Password must match Password")
        }
        else{
            setConfirmPasswordError("")
        }
    }

    const createUser = (e) =>{
        e.preventDefault()

        setPersonObject({firstName, lastName, email, password, confirmPassword})
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    return(
        <div>
            <h3>Form</h3>
            <form onSubmit={(e)=>createUser(e)}>
                <div>
                    <label>First Name </label>
                    <input
                        type="text"
                        onChange={(e)=>{
                            
                            handleFirstName(e)
                        }}
                        value={firstName}
                    />
                    {
                        firstNameError?
                        <p>{firstNameError}</p>
                        :null
                    }
                </div>
    
                <div>
                    <label>Last Name </label>
                    <input
                        type="text"
                        onChange={(e)=>{
                            handleLastName(e)
                        }}
                        value={lastName}
                        />
                        {
                        lastNameError?
                        <p>{lastNameError}</p>
                        :null
                    }
                </div>
    
                <div>
                    <label>Email </label>
                    <input
                        type="text"
                        onChange={(e)=>{
                            handleEmail(e)
                        }}
                        value={email}
                        />
                        {
                        emailError?
                        <p>{emailError}</p>
                        :null
                    }
                </div>
    
                <div>
                    <label>Password </label>
                    <input
                        type="password"
                        onChange={(e)=>{
                            handlePassword(e)
                        }}
                        value={password}
                        />
                        {
                        passwordError?
                        <p>{passwordError}</p>
                        :null
                    }
                </div>
    
                <div>
                    <label>Confirm Password </label>
                    <input
                        type="password"
                        onChange={(e)=>{
                            handleConfirmPassword(e)
                        }}
                        value={confirmPassword}
                        />
                        {
                        confirmPasswordError?
                        <p>{confirmPasswordError}</p>
                        :null
                    }
                </div>
                <button>Submit</button>
    
            </form>
        </div>
    )

}


export default Form