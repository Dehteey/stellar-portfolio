import React from 'react';

function SkillCard({ icon, name, level }) {
    return (
        <div className="skill-card">
            <div className="skill-icon">{icon}</div>
            <div className="skill-info">
                <div className="skill-name">{name}</div>
                <div className="skill-bar"><div className="skill-progress" style={{ width: `${level}%` }}></div></div>
            </div>
        </div>
    );
}

export default SkillCard;