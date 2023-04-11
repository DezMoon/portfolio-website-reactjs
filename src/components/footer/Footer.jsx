import React from "react";
import "./footer.css";

const Footer = () => {



    return (
        <footer className="footer">
            <div className="footer_container container">
                <h1 className="footer_title">Moonga Desmond</h1>

                <ul className="footer_list">
                    <li>
                        <a href="#about" className="footer_link">About</a>
                    </li>

                    <li>
                        <a href="#services" className="footer_link">Services</a>
                    </li>

                    <li>
                        <a href="#portfolio" className="footer_link">Portfolio</a>
                    </li>
                </ul>

                <div className="footer_social">
                    <a href="https://web.facebook.com/desmond.chikumba.moonga" className="footer_social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-facebook"></i>
                    </a>

                    <a href="https://www.linkedin.com/desmond-chiku-moonga" className="footer_social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-linkedin"></i>
                    </a>

                    <a href="https://github.com/DezMoon" className="footer_social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-github"></i>
                    </a>

                    <a href="https://twitter.com/MoongaDez" className="footer_social-link" target="_blank" rel="noreferrer">
                    <i className="bx bxl-twitter"></i>
                    </a>
                </div>

                <span className="footer_copy">
                &#169; {new Date().getFullYear()} Moonga Desmond. All rigths reserved.
                </span>

            </div>
        </footer>
    )
}

export default Footer;