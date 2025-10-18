import './contact.css';
import facebookIcon from '../../assets/facebook-icon.png';
import LinkedInIcon from '../../assets/LinkedIn.png';
import githubIcon from '../../assets/github.png';
import instagramIcon from '../../assets/instagram.png';
import React, { useState } from 'react';


const Contact = () => {

    const [formData, setFormData] = useState({
        from_name: '',
        from_email: '',
        message: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    };


    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // prevent page reload

        try {
            const response = await fetch('http://localhost:8000/contact/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.from_name,
                    email: formData.from_email,
                    message: formData.message,
                }),
            });

            if (response.ok) {
                alert('Message sent successfully!');
                setFormData({ from_name: '', from_email: '', message: '' });
            } else {
                alert('Something went wrong.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to connect to server.');
        }
    };

    return (
        <div id='contactPage'>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">
                    Please fill out the form below to contact me.
                </span>

                <form className="contactForm" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="name" 
                        placeholder='Your Name' 
                        name='from_name' 
                        value={formData.from_name}
                        onChange={handleChange}
                        required
                    />
                    <input 
                        type="email" 
                        className="email" 
                        placeholder='Your Email' 
                        name='from_email' 
                        value={formData.from_email}
                        onChange={handleChange}
                    />
                    <textarea 
                        name="message" 
                        placeholder='Your Message' 
                        rows={5} 
                        className='msg'             
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button type="submit" className='submitBtn'>
                        Submit
                    </button>

                    <div className="links">
                        <a href= "https://www.facebook.com/prawjal.kulung/" target="_blank" rel="noopener noreferrer">
                            <img src={facebookIcon} alt="Facebook" className="link" />
                        </a>
                        <a href="https://www.linkedin.com/in/ninamhang-kulung-5a5805279/" target="_blank" rel="noopener noreferrer">
                            <img src={LinkedInIcon} alt="LinkedIn" className="link" />
                        </a>
                        <a href='https://github.com/hang-kulung' target='_blank' rel="noopener noreferrer">
                            <img src={githubIcon} alt="Github" className="link" />
                        </a>
                        <a href="https://www.instagram.com/ninam_hang21/?hl=en" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" className="link" />
                        </a>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
