import React from "react";

function Contact() {
    return (
        <section className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="mb-4 text-center" style={{ color: "white" }}>Contact Us</h2>
                    <p className="text-center text-muted mb-5">
                        Have any questions or need support? Feel free to reach out to us!
                    </p>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label" style={{ color: "white" }}>Your Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter your full name" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label" style={{ color: "white" }}>Email Address</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter your email address" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label" style={{ color: "white" }}>Message</label>
                            <textarea style={{ resize: "none" }} className="form-control" id="message" rows="5" placeholder="Write your message here" required></textarea>
                        </div>
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary px-4">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
