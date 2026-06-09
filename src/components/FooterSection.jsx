import React from 'react';
import { portfolioData } from '../data/portfolioData';

function FooterSection() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="footer">
            <div className="container">
                <p>© {currentYear} {portfolioData.name}. Built with React </p>
            </div>
        </footer>
    );
}

export default FooterSection;