import React, {useState} from 'react'

const Form = (props) =>{

    const{personObject, setPersonObject} = props

    const[firstName, setFirstName] = useState("")
    const[lastName, setLastName] = useState("")
    const[email, setEmail] = useState("")
    const[password, setPassword] = useState("")
    const[confirmPassword, setConfirmPassword] = useState("")

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
                            setFirstName(e.target.value)
                        }}
                        value={firstName}
                    />
                </div>
    
                <div>
                    <label>Last Name </label>
                    <input
                        type="text"
                        onChange={(e)=>{
                            setLastName(e.target.value)
                        }}
                        value={lastName}
                        />
                </div>
    
                <div>
                    <label>Email </label>
                    <input
                        type="text"
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}
                        value={email}
                        />
                </div>
    
                <div>
                    <label>Password </label>
                    <input
                        type="password"
                        onChange={(e)=>{
                            setPassword(e.target.value)
                        }}
                        value={password}
                        />
                </div>
    
                <div>
                    <label>Confirm Password </label>
                    <input
                        type="password"
                        onChange={(e)=>{
                            setConfirmPassword(e.target.value)
                        }}
                        value={confirmPassword}
                        />
                </div>
                <button>Submit</button>
    
            </form>
        </div>
    )

}


export default Form