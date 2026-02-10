import React from 'react';
import './Skills.css';

const Skills = () => {
    const skillGroups = [
        {
            category: 'Technical',
            skills: ['React', 'JavaScript', 'Python', 'Node.js', 'MongoDB', 'PostgreSQL', 'Git', 'Docker']
        },
        {
            category: 'Design',
            skills: ['Figma', 'UI/UX Design', 'Responsive Design', 'Prototyping', 'User Research']
        },
        {
            category: 'Management',
            skills: ['Team Leadership', 'Project Management', 'Agile/Scrum', 'Communication', 'Problem Solving']
        }
    ];

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <div className="skills-grid grid grid-3">
                    {skillGroups.map((group, index) => (
                        <div key={index} className="skill-group card">
                            <h3 className="skill-category">{group.category}</h3>
                            <div className="skill-list">
                                {group.skills.map((skill, i) => (
                                    <div key={i} className="skill-item">
                                        <span className="skill-bullet">•</span>
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
