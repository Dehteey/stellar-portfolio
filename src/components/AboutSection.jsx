import React from 'react';
import { portfolioData } from '../data/portfolioData';

function AboutSection() {
    return (
        <section id="about" className="about">
            <div className="container">
                <span className="section-tag">✦ About ✦</span>
                <h2 className="section-title">DT Ross</h2>
                <div className="about-grid">
                    <div>
                        {portfolioData.about.map((p, i) => <p key={i} className="about-text">{p}</p>)}
                        <div className="philosophy">
                            <div className="philosophy-item"><div className="philosophy-icon">🎯</div><h4>User First</h4></div>
                            <div className="philosophy-item"><div className="philosophy-icon">⚡</div><h4>Performance</h4></div>
                            <div className="philosophy-item"><div className="philosophy-icon">💎</div><h4>Delight</h4></div>
                        </div>
                    </div>
                    <div className="fun-facts">
                        <h3>✦ Things I Love ✦</h3>
                        <ul><li>💻 Coding</li><li>🎬 Horror movies at 2am</li><li>📖 Reading novels</li><li>✍️ Writing stories</li><li>🎨 Drawing</li></ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;