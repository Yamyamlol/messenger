import React, { useState } from 'react'
import "./login.css"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {
   const [avatar, setAvatar] = useState({
      file: null,
      url: ""
   })

   const handleAvatar = e =>{
      if(e.target.files[0])
      setAvatar({
         file: e.target.files[0],
         url: URL.createObjectURL(e.target.files[0])
      })
   }

   const handleLogin = e =>{
      e.preventDefault()
      toast.warn("hello")  
   }

   return (
      <div className='login'>
         <div className="item">
            <h2>Welcome back</h2>
            <form onSubmit={handleLogin}>
               <input type="text" placeholder='E-mail' name="email"/>
               <input type="password" placeholder='Password' name="password"/>
               <button>Sign In</button>
            </form>
         </div> 
         <div className="separator"></div> 
         <div className="item">
            <h2>Create an Account</h2>
            <form action="">
               <label htmlFor="file">
                  <img src={avatar.url || "./avatar.png"} alt="Avatar" />
                  Upload an image
               </label>
               <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
               <input type="text" placeholder='Username' name="username"/>
               <input type="text" placeholder='E-mail' name="email"/>
               <input type="password" placeholder='Password' name="password"/>
               <button>Sign Up</button>
            </form>
         </div>
         <ToastContainer />
      </div>
   )
}

export default Login
