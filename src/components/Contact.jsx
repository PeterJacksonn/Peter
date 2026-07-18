import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../styles/Contact.css";

function Contact() {
    return (
        <section id="contact">
            <div className="section-header">
                <span className="section-title">contact</span>
            </div>
            <div className="contact-content">
                <p className="contact-cta">
                    I'm always open to hearing about interesting projects or opportunities.
                    Whether you have a question or just want to say hello, my inbox is open.
                </p>
                <div className="contact-actions">
                    <a href="mailto:pjacksonn03@gmail.com" className="email-btn">
                        <EmailRoundedIcon style={{ fontSize: 20 }} />
                        Say hello
                    </a>
                    <div className="contact-socials">
                        <a
                            href="https://github.com/PeterJacksonn"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                            aria-label="GitHub"
                        >
                            <GitHubIcon style={{ fontSize: 22 }} />
                        </a>
                        <a
                            href="https://linkedin.com/in/pjacksonn"
                            target="_blank"
                            rel="noreferrer"
                            className="social-link"
                            aria-label="LinkedIn"
                        >
                            <LinkedInIcon style={{ fontSize: 22 }} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
