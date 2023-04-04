import React from "react";
import "./testimonials.css";
import { Data } from "./Data";

const Testimonials = () => {
    return (
        <section className="testimonial container section" id="testimonial">
            <h2 className="section_title">Testimonials</h2>

            <span className="section_subtitle">My Clients Say</span>

            <div className="testimonial_container">
                {Data.map(({id, image, title, description}) => {
                    return (
                        <div className="testimonial" key={id}></div>
                    )
                })}
            </div>
        </section>
    )
}

export default Testimonials;