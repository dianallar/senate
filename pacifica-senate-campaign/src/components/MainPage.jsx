import React from 'react';
import './main.css';

const MainPage = () => {
    return (
        <div className="main-page">
            <header className="header">
                <h1>Diana Allar for Senate</h1>
                <p>Join us in building a brighter future for Pacifica!</p>
                <button className="cta-button">Get Involved</button>
            </header>
            <section className="bio">
                <h2>About Diana</h2>
                <p>Diana Allar is a dedicated public servant with a passion for community and progress. With years of experience in local government, she is committed to representing the voices of Pacifica residents.</p>
            </section>
            <section className="issues">
                <h2>Campaign Issues</h2>
                <ul>
                    <li>Environmental Protection</li>
                    <li>Healthcare for All</li>
                    <li>Education Reform</li>
                    <li>Economic Growth</li>
                </ul>
            </section>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Diana Allar for Senate. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default MainPage;