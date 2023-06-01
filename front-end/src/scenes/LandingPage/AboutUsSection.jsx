import React from 'react';
import './AboutUsSection.css'; 

function AboutUsSection() {
    return (
        <section id="about-us">
            <div className="container">
                <h2>About Us</h2>
                <div className="row">
                    <div className="col-md-6">
                        <img src="../../assets/Tali3.png" alt="About Us" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <p>Tali3 is an innovative library management system designed to streamline library operations and enhance user experiences. Our comprehensive software solution offers robust features for catalog management, circulation management, and patron management.</p>
                        <p>With Tali3, libraries can efficiently organize and maintain their collections of books, journals, multimedia resources, and more. Our catalog management service ensures accurate record-keeping, making it effortless for users to find and access the materials they need.</p>
                        <p>At Tali3, we are committed to delivering a user-friendly library management system that maximizes efficiency and enhances user satisfaction. Our goal is to empower libraries with the tools they need to effectively manage their resources, engage patrons, and provide a seamless library experience for all users.</p>
                        <p>Choose Tali3 as your library management system and unlock the potential to revolutionize your library operations, making them more organized, accessible, and user-centric.</p>
                    </div>
                </div>
                </div>
        </section>
    );
}

export default AboutUsSection;