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
            <div className="main-bottom">
                <div className="search-box">
                    <input type="text" placeholder='Enter a prompt here' />
                    <div>
                        <img src={assets.gallery_icon} alt="" />
                        <img src={assets.mic_icon} alt="" />
                        <img src={assets.send_icon} alt="" />
                    </div>
                </div>
                <p className="bottom-info">
                    Kuppathotti  may display inaccurate info, including about people, so double check its responses. Your privacy and Kuppathotti apps.
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main