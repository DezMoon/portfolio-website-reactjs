import React, { useState } from "react";
import "./qualification.css";


const Qualification = () => {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification  section" id="qualification">
            <h2 className="section_title">Qualifications</h2>

            <span className="section_subtitle">My Journey</span>
            
            <div className="qualification_container container">
                <div className="qualification_tabs">
                    <div className={toggleState === 1 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                    onClick={() => toggleTab(1)}>
                        <i className="uil uil-graduation-cap qualification_icon"></i>
                        Education
                    </div>

                    <div className={toggleState === 2 ? "qualification_button qualification_active button--flex" : "qualification_button button--flex"}
                    onClick={() => toggleTab(2)}>
                        <i className="uil uil-briefcase-alt qualification_icon"></i>
                        Expirence
                    </div>
                </div>

                <div className="qualification_sections">
                    <div className={
                        toggleState === 1 
                        ? "qualification_content qualification_content-active" 
                        : "qualification_content"}>
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Full-Stack Web Development</h3>
                                <span className="qualification_subtitle">Microverse - Virtual</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2023 - Present
                                </div>
                            </div>

                            <div>
                            <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                                </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            
                            </div>

                            <div>
                                <h3 className="qualification_title">JavaScript Algorithms and Data Structures</h3>
                                <span className="qualification_subtitle">FreeCodeCamp - Virtual</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - 2022
                                </div>
                            </div>

                           
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Bachelor's of Information Technology</h3>
                                <span className="qualification_subtitle">Zambia Catholic University - Kalulushi, Zambia</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2015 - 2018
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                    </div>

                    <div className={
                        toggleState === 2 
                        ? "qualification_content qualification_content-active" 
                        : "qualification_content"}>
                        
                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Full-Stack web developer</h3>
                                <span className="qualification_subtitle">Freelance - Lusaka, Zambia</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">IT Consultant & Specialist</h3>
                                <span className="qualification_subtitle">Ahava Consulting Limited - Lusaka, Zambia</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2020 - Present
                                </div>
                            </div>

                           
                        </div>

                        <div className="qualification_data">
                            <div>
                                <h3 className="qualification_title">Front-end Web developer - React JS</h3>
                                <span className="qualification_subtitle">Muda corp - Remote</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> August, 2020 - December, 2020
                                </div>
                            </div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>
                        </div>

                        <div className="qualification_data">
                            <div></div>

                            <div>
                                <span className="qualification_rounder"></span>
                                <span className="qualification_line"></span>
                            </div>

                            <div>
                                <h3 className="qualification_title">full-Stack Web developer</h3>
                                <span className="qualification_subtitle">VizionIT Zambia - Ndola, Zambia</span>
                                <div className="qualification_calendar">
                                    <i className="uil uil-calendar-alt"></i> 2018 - 2020
                                </div>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification;