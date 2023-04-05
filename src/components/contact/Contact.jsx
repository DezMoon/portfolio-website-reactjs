import React from "react";
import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Get in touch</h2>

            <span className="section_subtitle">Contact Me</span>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">Say Hello</h3>

                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx contact_card-icon"></i>

                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">moongachiku@gmail.com</span>

                            <a href="mailto:moongachiku@gmail.com" className="contact_button">
                                Email me 
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>

                        </div>

                        <div className="contact_card">
                            <i className="bx bx contact_card-icon"></i>

                            <h3 className="contact_card-title">Whatsapp</h3>
                            <span className="contact_card-data">+260 976 011 819</span>

                            <a href="https://wa.link/q25thg" className="contact_button">
                                DM on Whatsapp 
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                            
                        </div>

                        <div className="contact_card">
                            <i className="bx bx contact_card-icon"></i>

                            <h3 className="contact_card-title">Twitter</h3>
                            <span className="contact_card-data">@MoongaDez</span>

                            <a href="" className="contact_button">
                                DM on Twitter 
                                <i className="bx bx-right-arrow-alt contact_button-icon"></i>
                            </a>
                            
                        </div>
                    </div>
                </div>

                <div className="contact_content">
                    <h3 className="contact_title">Tell me about your project</h3>
                </div>
            </div>
        </section>
    )
}

export default Contact;