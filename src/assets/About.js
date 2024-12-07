import React from "react";
import "./Slider.css";

function About() {
    return (
        <div>
            <section className="container py-5">
                <div className="row align-items-center">
                    <div className="col-md-6" >
                        <h2 className="mb-4" style={{ color: "white" }}>About Us</h2>
                        <p className="text-muted lead" >
                            Welcome to <strong>Our Company</strong>, where we strive for excellence in everything we do. With years of experience and a dedicated team, we deliver innovative solutions tailored to your needs. Our vision is to lead with trust and innovation, building strong relationships with our clients.
                        </p>
                        <p className="text-muted" >
                            Join us on our journey to shape the future with creativity and integrity.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?cs=srgb&dl=pexels-pixabay-269077.jpg&fm=jpg" alt="About" class="img-fluid rounded" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;