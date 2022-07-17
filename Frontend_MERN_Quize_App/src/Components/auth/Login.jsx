import React, {useState} from "react"
import "./Login.css"
import axios from "axios"
import {Link, useNavigate} from "react-router-dom"
// import { loginUser, loginUserName } from "../Redux/Action.js"
// import { useDispatch, useSelector } from "react-redux"

export const Login = ({ setLoginUser}) => {
//     const userId=useSelector((state)=>state.gearbest.userId)
//  const dispatch=useDispatch()
 const navigate=useNavigate()
    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        // axios.post("https://gear-best-by-sudhir.herokuapp.com/login", user)
        // .then(res => {
        //     console.log(res.data.user.name)

            // dispatch(loginUser(res.data.user._id))
            // dispatch(loginUserName(res.data.user.name))
            // if(userId!==""){
            //     alert(res.data.message)
            //     navigate("/")
            //   }
           
            // setLoginUser(res.data.user)
       
        // }).catch((err) => {
        //     alert("Invalid Credientials")
        // })
    }

    return (
        <div className="login">
            {console.log(user)}
            <h1  className="text-2xl font-semibold">Login</h1>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email"></input>
            <input type="password" name="password" value={user.password} onChange={handleChange}  placeholder="Enter your Password" ></input>
          <Link to="/">  <div onClick={()=>{login()}} className="pl-8 pr-8 bg-blue-500 h-10 rounded-md text-white pt-2 text-xl">Login</div></Link>
            <div>or</div>
            <Link to="/register"> <div className="pl-8 pr-8 bg-blue-500  h-10 rounded-md text-white pt-2 text-xl">Register</div> </Link>
        </div>
    )
}

 