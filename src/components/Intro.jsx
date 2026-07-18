import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { TypeAnimation } from "react-type-animation";
import "../styles/Intro.css";

function Intro() {
    return (
        <div id="intro">
            <div className="name">
                hi, I'm{" "}
                <TypeAnimation
                    sequence={["Peter.", 2000]}
                    wrapper="span"
                    speed={50}
                    style={{ color: "var(--accent)" }}
                    cursor={true}
                    repeat={0}
                />
            </div>
            <div className="tagline">
                Software engineer in the UK. I build SCADA software at Ovarro and obsess
                over my Linux config.
            </div>
            <a href="mailto:pjacksonn03@gmail.com" className="linkedInLink">
                <LinkedInIcon />
                {" Lets connect!"}
            </a>
        </div>
    );
}

export default Intro;
