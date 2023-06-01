import React from "react";

const HeaderLanding = () => {
    return (
        <header>
            <div className="logo">
                <img src="logo.png" alt="Logo" />
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/about">Team</a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderLanding;
