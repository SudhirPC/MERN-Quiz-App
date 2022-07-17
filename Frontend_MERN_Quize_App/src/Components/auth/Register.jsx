import React, { useState } from "react"
import "./Register.css"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"

export const Register = () => {

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })
const navigate=useNavigate()
    const register = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("https://gear-best-by-sudhir.herokuapp.com/register", user)
            .then( res => {
                if(res.data.message==="Successfully Registerd"){
                    alert(res.data.message)
                    navigate("/login")
                }else{
                    alert("Invalid  Registration Credentials")
                }
                console.log(res)
                
            })
        } else {
            alert("Invalid Input")
        }
        
    }

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    
    
    return (
        <div className="register ">
     {console.log( user)}
            <p className="text-2xl font-semibold">Register</p>
            <input type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange }></input>
            <input type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
            <input type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
            <input type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange }></input>
           <div className="pl-8 pr-8 bg-blue-500 h-10 rounded-sm text-white pt-2 text-xl" onClick={register} >Register</div>
            <div>or</div>
            <Link to="/login"> <div className="pl-8 pr-8 bg-blue-500 h-10 rounded-sm text-white pt-2 text-xl">Login</div> </Link>
        </div>
    )
}

 
