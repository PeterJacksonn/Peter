import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Intro.css";

function Intro() {
    return (
        <div id="intro" className="container">
            <div className="name">
                hi, I'm
                <span style={{ color: "var(--accent)" }}> Peter.</span>
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
