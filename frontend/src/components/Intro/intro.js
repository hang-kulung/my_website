import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName">Ninamhang</span> <br />AI Enthusiastic</span>
                <p className="introPara">I am Computer Engineering Undergraduate with strong<br />foundation in Computer Science and Mathematics,
                <br/>with interested in Data Science and AI</p>
                {/* <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/> Hire Me</button></Link> */}
            </div>
            <img src={bg} alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;