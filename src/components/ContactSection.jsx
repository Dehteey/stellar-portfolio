import React, { useState } from 'react';
import { portfolioData } from '../data/portfolioData';

function ContactSection() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
    };
    
    return (
        <section id="contact" className="contact">
            <div className="container">
                <span className="section-tag">✦ Connect ✦</span>
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-grid">
                    <div className="contact-info">
                        <div className="info-card">
                            <div className="info-icon">📧</div>
                            <div><h4>Email</h4><p>{portfolioData.email}</p></div>
                        </div>
                        <div className="info-card">
                            <div className="info-icon">📍</div>
                            <div><h4>Location</h4><p>{portfolioData.location}</p></div>
                        </div>
                        <div className="social-links">
                            <h4>Find me on</h4>
                            <div className="social-icons">
                                <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href={portfolioData.social.twitter} target="_blank" rel="noopener noreferrer">Twitter</a>
                            </div>
                        </div>
                    </div>
                    
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <input type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                        <input type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
                        <textarea name="message" placeholder="Your message" rows="5" value={form.message} onChange={handleChange} required />
                        <button type="submit" className="submit-btn">Send Message →</button>
                        {submitted && <div className="success-message">Message sent! Will get back to you shortly</div>}
                    </form>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;