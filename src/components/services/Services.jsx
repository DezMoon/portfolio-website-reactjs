import React, { useState } from "react";
import "./services.css";

const Services = () => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="services section" id="services">
            <h2 className="section_title">Services</h2>

            <span className="section_subtitle">What I Offer</span>

            <div className="services_container container grid">
                <div className="services_content">
                <i class="uil uil-browser services_icon"></i>
                    <h3 className="services_title">
                    Website <br/> Development
                    </h3>
                

                <span className="services_button" onClick={() => toggleTab(1)}>
                    View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                <div className={toggleState === 1 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Website Development</h3>
                        <p className="services_modal-description">
                            Service with more than 3 years of experience.Providing quality work to clients and companies.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Website Design - Front-end
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Website configuration/development - Back-end
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Re-design/Re-develp
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                24/7 Suport and maintenance.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Website Hosting
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                </div>

                <div className="services_content">
                <i class="uil uil-code-branch services_icon"></i>
                    <h3 className="services_title">
                        Application <br/> Development
                    </h3>
                

                <span className="services_button" onClick={() => toggleTab(2)}>
                    View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                <div className={toggleState === 2 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">Application Development</h3>
                        <p className="services_modal-description">
                            Service with more than 2 years of experience.Providing quality work to clients and companies.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Desktop application development with C# .NET
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Android app deleopment with flutter/kotlin
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                iOS app development 
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
                </div>

                <div className="services_content">
                <i class="uil uil-comment-alt-question services_icon"></i>
                    <h3 className="services_title">
                        IT Consultancy <br/> & Support
                    </h3>
                

                <span className="services_button" onClick={() => toggleTab(3)}>
                    View More
                    <i className="uil uil-arrow-right services_button-icon"></i>
                    </span>

                <div className={toggleState === 3 ? "services_modal active-modal" : "services_modal"}>
                    <div className="services_modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services_modal-close"></i>
                        <h3 className="services_modal-title">IT Consultancy & Support</h3>
                        <p className="services_modal-description">
                            Service with more than 7 years of experience.Providing quality support and Consultancy to clients and companies.
                        </p>

                        <ul className="services_modal-services grid">
                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Troubleshooting - problem solving. 
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Software and hardware - Configuration, Installation and maintenance.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                Networking - installation, management and maintenance.
                                </p>
                            </li>

                            <li className="services_modal-service">
                                <i className="uil uil-check-circle services_modal-icon"></i>
                                <p className="services_modal-info">
                                General IT Support.
                                </p>
                            </li>

                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Services;