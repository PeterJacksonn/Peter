import "../styles/Experience.css";

const experience = [
    {
        role: "Software Engineer",
        company: "Ovarro",
        companyUrl: "https://www.ovarro.com",
        dates: "Jul 2024 - Present",
        bullets: [
            "Led a large-scale upgrade & data migration for a customer, writing Java plugins and SQL scripts to handle high-volume datasets under production constraints",
            "Developed and maintained Ovarro's production SCADA software used by major water utilities, working across both the Java application and JavaScript web frontend",
            "Worked the full SDLC: design, implementation, code review, QA, deployment",
            "Ran daily stand-ups as part of the team's Scrum process",
        ],
    },
];

function Experience() {
    return (
        <section id="experience">
            <div className="section-header">
                <span className="section-title">experience</span>
            </div>
            <div className="exp-list">
                {experience.map((job, i) => (
                    <div key={i} className="exp-entry">
                        <div className="exp-heading">
                            <span className="exp-role">{job.role} @ </span>
                            <a
                                href={job.companyUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="exp-company-link"
                            >
                                {job.company}
                            </a>
                        </div>
                        <div className="exp-dates">{job.dates}</div>
                        <ul className="exp-bullets">
                            {job.bullets.map((point, j) => (
                                <li key={j}>
                                    <span className="exp-bullet-marker">▷</span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
