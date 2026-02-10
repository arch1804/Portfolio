import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero section" id="home">
            <div className="container hero-container">
                <div className="hero-content">
                    <div className="hero-badge">Welcome to my Portfolio</div>
                    <h1 className="hero-title">
                        Hi! I'm <span className="highlight">Archita Singh</span>
                    </h1>
                    <p className="hero-description">
                        A passionate B.Tech student specializing in web development and design.
                        I create beautiful, functional digital experiences that make a difference.
                        Let's build something amazing together.
                    </p>
                    <a href="#contact" className="hero-btn">
                        Let's Connect
                        <span className="btn-arrow">→</span>
                    </a>
                </div>

                <div className="hero-image">
                    <div className="floating-astronaut">
                        <img
                            src="/astronaut.png"
                            alt="Astronaut illustration"
                            className="astronaut-img"
                        />
                    </div>
                    <div className="rocket">🚀</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
