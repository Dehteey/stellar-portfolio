import React from 'react';
import { portfolioData } from '../data/portfolioData';

function HeroSection() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
    
    return (
        <section id="home" className="hero">
            <div className="hero-bg">
                <div className="gradient-orb"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
            </div>
            <div className="hero-content">
                <div>
                    <h1 className="hero-name">{portfolioData.name}</h1>
                    <h2 className="gradient-text">{portfolioData.title}</h2>
                    <p className="hero-description">{portfolioData.tagline}</p>
                    <button className="btn-primary" onClick={() => scrollTo('projects')}>View Work →</button>
                    <button className="btn-outline" onClick={() => scrollTo('contact')}>Contact</button>
                </div>
                <div className="hero-visual">
                    <div className="code-window">
                        <div className="code-header">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="code-body">
                            <div>✍️Writer</div>
                            <div>🎨 Artist</div>
                            <div>🚀 Problem Solver</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;