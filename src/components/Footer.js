import { BsGithub } from "react-icons/bs";

const Footer = () => {
    return (
        <div>
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