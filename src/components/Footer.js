import React from "react";
import { FaFacebook, FaInstagram, FaTwitter  } from "react-icons/fa";
import "../styles/footer.scss"


const Footer = () => {
    return (
        <footer>
            <div class="row">
                <div class="col">
                    <h2> The Lippie Factory</h2>
                    <p>The Lippie Factory is a Romanian cosmetics company and boutique specializing in customized lip products. The brand was
                        founded by Andreea Conoro in 2015 and it is carried exclusively at The Lippie Factory Boutique based in Bucharest, Romania</p>
                </div>
                <div class="col">
                    <h2>Contact Information</h2>
                    <p>Lady's Street nr.21</p>
                    <p>Bucharest, 242689</p>
                    <br />
                    <p class="email-id">thelippiefactory@beauty.com</p>
                    <br />
                    <h4>+40 - 740626490</h4>
                </div>
                <div class="col">
                    <h2>Links</h2>
                    <a href="#">Home</a>
                    <a href="#">Services</a>
                    <a href="#">About Us</a>
                    <a href="#">Features</a>
                    <a href="#">Contact Us</a>
                </div>
                <div class="col">
                    <h2>Newsletter</h2>
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Submit</button>
                    </form>
                    <div class="social-icons">
                        < FaFacebook size="2em"/>
                        < FaInstagram size="2em" />
                        < FaTwitter size="2em" />
                    </div>
                </div>
            </div>
            <hr />
            <p class="copyright">Copyright &copy; 2022 All Rights Reserved by The Lippie Factory </p>
        </footer>
    )
}
export default Footer;