import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: 'Technical Lead',
            organization: 'College Tech Club',
            period: '2024 - Present',
            description: 'Leading a team of 15 developers in building web applications and organizing tech workshops for 200+ students.'
        },
        {
            role: 'Software Development Intern',
            organization: 'Tech Startup Inc.',
            period: 'Summer 2024',
            description: 'Developed features for a SaaS platform using React and Node.js, improving user engagement by 25%.'
        },
        {
            role: 'Research Assistant',
            organization: 'University AI Lab',
            period: '2023 - 2024',
            description: 'Contributed to machine learning research focused on natural language processing and published findings in a conference paper.'
        },
        {
            role: 'Event Coordinator',
            organization: 'Annual Tech Fest',
            period: '2023',
            description: 'Managed logistics and coordination for a 3-day tech festival with 1000+ participants and 20+ events.'
        }
    ];

    return (
        <section className="experience section" id="experience">
            <div className="container">
                <h2 className="section-title">Experience & Leadership</h2>
                <div className="experience-timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-marker"></div>
                            <div className="experience-content">
                                <h3 className="experience-role">{exp.role}</h3>
                                <div className="experience-meta">
                                    <span className="experience-org">{exp.organization}</span>
                                    <span className="experience-period">{exp.period}</span>
                                </div>
                                <p className="experience-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
