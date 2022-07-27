import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div class="footer">
            {/* <h2>Follow Me</h2> */}
            <a href=""
                className="social">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.facebook.com/jennifer.faulkner.18"
                className="social">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="" className="social">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://www.instagram.com/piercingsbyjenn/?hl=en"
                className="social">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <p>Copyright &copy; 2022 designed by Samsites.</p>
        </div>
    );
};
