import React from 'react'
import "./register.css"

export default function Register() {
    return (
        <div className="register">
            <div className="registerWrapper">
            <div className="registerLeft">
                <h3 className="registerLogo">CyrilSocial</h3>
                <span className="registerDesc">Connect with friends and the world around you on Cyrilsocial</span>
            </div>
            <div className="registerRight">
                <div className="registerBox">
                    <input placeholder="Username" type="text" className="registerInput" />
                    <input placeholder="Email" type="email" className="registerInput" />
                    <input placeholder="Password" type="password" className="registerInput" />
                    <input placeholder="Password Again" type="password" className="loginInput" />
                    <button className="registerButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
            </div>
        </div>
    )
}
