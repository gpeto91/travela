import React, { useState } from "react";
import moment from "moment";

const Footer = () => {
    const [year, setYear] = useState(moment().year());

    return(
        <footer style={{textAlign: "center", fontFamily: "montserrat_alternatesregular", padding: "0 15px"}}>
            <p>Travel A© | { year }</p>
            <p>8073 N. Birchwood Drive Mount Pearl, LB A1N 9T4</p>
        </footer>
    )
}

export default Footer;
