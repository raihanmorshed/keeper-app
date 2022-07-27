import React from "react";

// var today = new Date();
// var year = today.getFullYear();
const year = new Date().getFullYear();

function Footer(){
    return (<footer>
    <p>Copyright ⓒ {year} Raihan Morshed </p>
    </footer>);

}

export default Footer;