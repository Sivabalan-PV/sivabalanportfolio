import React from 'react';
import './skills.css'

import react from '../../assets/react.png'
import javascript from '../../assets/javascript.png'
import java from '../../assets/java.png'
import python from '../../assets/python.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import sql from '../../assets/sql.png'
const skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">Skills</span>
        <span className="skillDesc">I am skilled and passionate developer who loves to create new things. I have a good understanding of web development and networks. I have created visually appealing and user-friendly websites using the listed skills</span>
    <div className="skillBars">
        <div className="skillbar">
            <img src={html} alt="html" className="skillBarImg" />
            <div className="skillBarText">
                <h2>HTML</h2>
                <p>Learned from completing Introduction to Frontend Development course in Coursera offered by Meta.Created the interfaces of website using HTML and CSS</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={css}alt="css" className="skillBarImg" />
            <div className="skillBarText">
                <h2>CSS</h2>
                <p>Learned from completing Introduction to Frontend Development course in Coursera offered by Meta.Created the interfaces of website using HTML and CSS</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={javascript} alt="javascript" className="skillBarImg" />
            <div className="skillBarText">
                <h2>JavaScript</h2>
                <p>Learned from completing Programming with JavaScript course in Coursera offered by Meta.Done small Interactive Web applications using Javascript</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={react} alt="react" className="skillBarImg" />
            <div className="skillBarText">
                <h2>React</h2>
                <p>Learned from youtube vedioes.Done some small interfaces using react,vite and typescript</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={python}alt="python" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Python</h2>
                <p>Learned through collage courses.Know the basics and have some indepth knowledge</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={java} alt="java" className="skillBarImg" />
            <div className="skillBarText">
                <h2>Java</h2>
                <p>Learned through collage courses.Know about basics and Java Swing.Have created small GUI's</p>
            </div>
        </div>
        <div className="skillbar">
            <img src={sql} alt="sql" className="skillBarImg" />
            <div className="skillBarText">
                <h2>SQL</h2>
                <p>Learned through collage courses.Know to do all the CRUD operations.</p>
            </div>
        </div>
    </div>
    </section>
  )
}

export default skills