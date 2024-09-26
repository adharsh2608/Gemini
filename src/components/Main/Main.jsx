import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'

const Main = () => {
  return (
    <div className="main">
        <div className="nav">
            <p>Octopus</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Adharsh.</span></p>
                <p>How can I help you today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Checking if this works</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Checking if this works 1</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Checking if this works 2</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>Checking if this works 3</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main