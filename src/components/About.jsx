import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <p className="about-text">
                        I'm a B.Tech student passionate about building meaningful digital experiences.
                        My journey in technology started with curiosity and has evolved into a deep
                        commitment to creating solutions that make a difference.
                    </p>
                    <p className="about-text">
                        When I'm not coding, you'll find me exploring new technologies, contributing
                        to open-source projects, or collaborating with teams to bring innovative ideas
                        to life. I believe in continuous learning and the power of technology to solve
                        real-world problems.
                    </p>
                    <p className="about-text">
                        Currently, I'm focused on web development, user experience design, and building
                        scalable applications. I'm always excited to take on new challenges and work
                        with like-minded individuals who share my passion for innovation.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
