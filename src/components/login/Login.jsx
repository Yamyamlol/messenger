import React, { useState } from 'react'
import "./login.css"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {CreateUserWithEmailAndPassword} from "firebase/auth"
import {doc, setDoc} from "firebase/firestore"

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
   const handleRegister = async (e) =>{
      e.preventDefault()
      const formData = new FormData(e.target)
      const { username, email, password } = Object.fromEntries(
        formData.entries()
      );
      try {
         const res = await CreateUserWithEmailAndPassword(auth, email, password)
         await setDoc(doc(db, "users", res.user.uid), {
            username,
            email,
            id: res.user.uid,
            blocked: []
         })
      } catch (error) {
         console.log(error)
         toast.error(error.message)
      }
      console.log(username, email, password);
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
            <form onSubmit={handleRegister}>
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
