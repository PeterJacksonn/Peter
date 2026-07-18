import "../styles/About.css";
import me from "../assets/mee.jpg";

function About() {

    const techStack = [
        "Java",
        "Javascript",
        "Python",
        "React.js"
    ];

    return (
        <section id="about">
            <div className="section-header">
                <span className="section-title">about me</span>
            </div>
            <div className="about-content">
                <div className="about-text">
                    <p>
                        I'm currently a <b>Software Engineer</b> at{" "}
                        <a href="https://www.ovarro.com" target="_blank" rel="noreferrer">Ovarro</a>,
                        where I help build SCADA software used by major water utilities to monitor critical
                        infrastructure in real time.
                    </p>
                    <p>
                        I recently graduated with{" "}
                        <span className="about-highlight">First Class Honours</span>{" "}
                        in Computer Science, with an overall grade of 84.4%.
                    </p>
                    <p>
                        Recently I've been working with these technologies:
                    </p>
                    <ul className="tech-stack">
                        {techStack.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="about-img-wrapper">
                    <img src={me} alt="Peter" className="about-img" />
                </div>
            </div>
        </section>
    );
}

export default About;
