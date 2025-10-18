import React from 'react';
import './about.css';
import Education from '../../assets/education.png';
import WebDesign from '../../assets/website-design.png';

const About = () => {
    return (
        <section id='skills'>
            <span className="skillTitle">ABOUT ME</span>
            <span className="skillDesc">I am a Computer Engineering undergraduate with a strong foundation in Computer Science and Mathematics and an interest in Data Science and AI. I am skilled in python and familiar with it's libraires (pandas, pytorch, skilit). I have experience of working with django framwork for backend web development </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={Education} alt="Education" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>EDUCATION</h2>
                        <h4>• Bachelor in Computer Engineering</h4>
                        <p> IOE, Thapathali Campus (2023-Present)</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>Professional Experience</h2>
                        <h4>• Research and Development team</h4>
                        <p>ECAST, IOE Thapathali Campus (2025-present)</p>
                        <h4>• Technical Team</h4>
                        <p>ECAST, IOE Thapathali Campus (2023-2025)</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;