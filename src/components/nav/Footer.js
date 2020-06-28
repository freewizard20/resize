import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <footer>
            <span className="copyright">© 2020 fweasy</span>
            <ul className="footer-link">
                <li><a href="/about">About</a></li>
                <li><a href="/tos">Terms of Service</a></li>
            </ul>
        </footer>
    )
}

export default Footer
