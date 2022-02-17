import React, {useState} from 'react'

const Display = (props) =>{
    const {personObject} = props
    
    return (
        <div>
            <hr></hr>
            <h3>Display</h3>
            <p>First Name: {personObject.firstName}</p>
            <p>Last Name: {personObject.lastName}</p>
            <p>Email: {personObject.email}</p>
            <p>Password: {personObject.password}</p>
            <p>Confirm Password: {personObject.confirmPassword}</p>
        </div>
    )
}


export default Display