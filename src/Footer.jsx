import React from "react";

// var today = new Date();
// var year = today.getFullYear();
const year = new Date().getFullYear();

function Footer(){
    return (<footer>
    <p>Copyright Raihan Morshed {year}</p>
    </footer>);

}

export default Footer;