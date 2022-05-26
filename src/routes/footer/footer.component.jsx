import React from "react";

import './footer.styles.scss'

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function Footer() {
    return (
        <footer>
            <p>&#169; {currentYear} Michael Moorley</p>
        </footer>
    )
}

export default Footer;