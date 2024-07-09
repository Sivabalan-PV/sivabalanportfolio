import React from 'react';
import './works.css';
import portfolio from '../../assets/portfolio.png'
import gui from '../../assets/gui.png'
import aqm from '../../assets/aqm.png' 
const Works = () => {
  return (
    <section id='works'>
        <h2 className="workstitle">My Projects</h2>
        <span className="workDesc">Using the skills I have gained so far, I have created the projects listed below. Each project was completed with utmost dedication and attention to even the smallest details.</span>
        <div className="worksImgs">
            <div className="wrapper">
                <div className="image">
            <img src={aqm} alt="aqm" className="worksImg" />
            <div className="content">
                <h1>Airsense</h1>
                <p>An Air Quality Monitoring web application done using OpenWeathermapAPI, Leaflet Maps and HTML,CSS,JavaScript</p>
            </div>
            </div>
            </div>

            <div className="wrapper">
                <div className="image">
            <img src={portfolio} alt="portfolio" className="worksImg" />
            <div className="content">
                <h1>Portfolio Website</h1>
                <p>Using Html, css, Javascript, reactjs created a responsive protfolio website showcasing my skills and contact information</p>
            </div>
            </div>
            </div>

            <div className="wrapper">
                <div className="image">
            <img src={gui} alt="gui" className="worksImg" />
            <div className="content">
                <h1>Chat application using GUI</h1>
                <p>With the help of Java Swing, created a chat application by which two persons can communicate with each other</p>
            </div>
            </div>
            </div>
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works