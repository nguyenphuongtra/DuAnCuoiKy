import React from 'react'
import { Link } from 'react-router-dom'
import "./Login.css"
import { useState } from 'react'
function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassWord] = useState('')
    
    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassWord = (event) => {
        setPassWord(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault();
    }
  return (
    <div className="body-login">
        <div class="container-login">
            <div class="box">
                <div class="form sign_in">
                    <h3>Sign In</h3>
                    <span>or use your account</span>

                    <form action="#" id="form_input" onSubmit={handleSubmit}>
                        <div class="type">
                            <input type="email" placeholder="Email" name="" id="email" value={email} onChange={handleEmail}/>
                        </div>
                        <div class="type">
                            <input type="password" placeholder="Password" name="" id="password" value={password} onChange={handlePassWord}/>

                        </div>

                        <div class="forgot">
                            <span>Forgot your password?</span>
                            <Link to={'/signup'}>Sign up</Link>
                        </div>

                        <Link to={'/'}><button class="btn-si">Sign In</button></Link>
                    </form>
                </div>
        
                
            </div>

        </div>
    </div>
  )
}

export default Login
