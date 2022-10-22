import { BsGithub } from "react-icons/bs";
import "./Footer.css"


const Footer = () => {
    return (
        <div className="container-footer">
            Created by
            <span className="creator">
                <a href="https://www.linkedin.com/in/mohamed-ichoubane-280431156/" target="_blank" rel="noreferrer">
                    Mohamed Ichoubane
                </a>
            </span>
            <a href="https://github.com/IchoubaneMed/memory-card" target="_blank" rel="noreferrer">
                <span className="github"><BsGithub /></span>
            </a>
        </div>
    );
}

export default Footer;