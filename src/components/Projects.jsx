import React from 'react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'Built a full-stack e-commerce solution with React and Node.js, serving 1000+ users with 99.9% uptime.',
            impact: 'Reduced checkout time by 40% through optimized UX',
            tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            link: '#'
        },
        {
            title: 'AI Study Assistant',
            description: 'Developed an AI-powered study companion using machine learning to personalize learning paths.',
            impact: 'Helped 500+ students improve retention by 35%',
            tech: ['Python', 'TensorFlow', 'Flask', 'React'],
            link: '#'
        },
        {
            title: 'Campus Event Manager',
            description: 'Created a comprehensive event management system for college clubs and organizations.',
            impact: 'Streamlined event coordination for 20+ clubs',
            tech: ['Next.js', 'PostgreSQL', 'Prisma', 'Tailwind'],
            link: '#'
        }
    ];

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <h2 className="section-title">Projects</h2>
                <div className="projects-grid grid grid-2">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card card">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-impact">
                                <span className="impact-label">Impact:</span> {project.impact}
                            </div>
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <a href={project.link} className="project-link link">
                                View Project →
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
