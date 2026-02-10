import React from 'react';
import './Contact.css';

const Contact = () => {
    const contactLinks = [
        {
            platform: 'Email',
            handle: 'your.email@example.com',
            url: 'mailto:your.email@example.com',
            icon: '✉'
        },
        {
            platform: 'LinkedIn',
            handle: 'linkedin.com/in/yourprofile',
            url: 'https://linkedin.com/in/yourprofile',
            icon: '💼'
        },
        {
            platform: 'GitHub',
            handle: 'github.com/yourusername',
            url: 'https://github.com/yourusername',
            icon: '💻'
        }
    ];

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <div className="contact-content">
                    <p className="contact-intro">
                        I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
                        Feel free to reach out through any of the platforms below!
                    </p>
                    <div className="contact-links">
                        {contactLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                className="contact-link card"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="contact-icon">{link.icon}</span>
                                <div className="contact-info">
                                    <div className="contact-platform">{link.platform}</div>
                                    <div className="contact-handle">{link.handle}</div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
