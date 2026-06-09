import React from 'react';
import SkillCard from './SkillCard';
import { portfolioData } from '../data/portfolioData';

function SkillsSection() {
    return (
        <section id="skills" className="skills">
            <div className="container">
                <span className="section-tag">✦ Expertise ✦</span>
                <h2 className="section-title">My Skills</h2>
                <div className="skills-grid">
                    {portfolioData.skills.map((skill, idx) => (
                        <SkillCard 
                            key={idx}
                            icon={skill.icon}
                            name={skill.name}
                            level={skill.level}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default SkillsSection;