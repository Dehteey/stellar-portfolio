import React from 'react';

function ProjectCard({ title, description, image, tech, year }) {
    return (
        <div className="project-card">
            <div className="project-image">
                <div className="project-emoji">{image}</div>
            </div>
            <div className="project-info">
                <div className="project-meta">
                    <span className="project-year">{year}</span>
                </div>
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-tech">
                    {tech.map((t, idx) => (
                        <span key={idx}>{t}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;