import React from 'react';
import ProjectCard from './ProjectCard';
import { portfolioData } from '../data/portfolioData';

function ProjectsSection() {
    return (
        <section id="projects" className="projects">
            <div className="container">
                <span className="section-tag">✦ Portfolio ✦</span>
                <h2 className="section-title">My Projects</h2>
                <div className="projects-grid">
                    {portfolioData.projects.map(project => (
                        <ProjectCard 
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            image={project.image}
                            tech={project.tech}
                            year={project.year}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ProjectsSection;