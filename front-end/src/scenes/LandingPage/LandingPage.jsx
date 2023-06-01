import React, { useState } from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import TeamSection from "./TeamSection";
import AboutUsSection from "./AboutUsSection";
import ContactSection from "./ContactSection";
import ServicesSection from "./ServicesSection";
import StaticFaqSection from "./StaticFaqSection";
import Pricing from "./Pricing";
import Logo from "../../components/Logo";
function LandingPage() {
    const [isFooterUp, setIsFooterUp] = useState(false);

    const toggleFooterAnimation = () => {
        setIsFooterUp(!isFooterUp);
    };
    return (
        <div className="landing-page">
            <header className="fixed-top">
                <nav>
                    <Logo></Logo>
                    <ul className="nav-links">
                        <li>
                            <a href="#about-us">About Us</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#pricing">Pricing</a>
                        </li>
                        <li>
                            <a href="#team">Team</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                        <li>
                            <a href="#faq">FAQ</a>
                        </li>
                    </ul>
                    <div class="btn-group">
                        <Link to="/login" className="login-btn">
                            Login
                        </Link>
                        <Link to="/" className="signup-btn">
                            Signup
                        </Link>
                    </div>
                </nav>
            </header>

            <main>
                <h1 class="welcome">
                    Welcome to <span>Tali3</span>
                </h1>
                <AboutUsSection style={{ height: "100%" }} />
                <ServicesSection />
                <br />
                <Pricing />
                <br />
                <br />
                <br />
                <TeamSection />
                <br /> <br />
                <ContactSection />
                <StaticFaqSection />
            </main>
            <footer
                className={`footer ${isFooterUp ? "footer-up" : ""}`}
                onClick={toggleFooterAnimation}
            >
                <p
                    style={{
                        textAlign: "center",
                        color: "white",
                        backgroundColor: "darkblue",
                        padding: "10px",
                        left: "0",
                        bottom: "0",
                        width: "100%",
                    }}
                >
                    &copy; 2023 Tali3. Allrights reserved.
                </p>
            </footer>
        </div>
    );
}

export default LandingPage;
