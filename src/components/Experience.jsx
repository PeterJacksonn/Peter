import "../styles/Experience.css";

const experience = [
    {
        role: "Software Engineer",
        company: "Ovarro",
        companyUrl: "https://www.ovarro.com",
        dates: "Jul 2024 – present",
        description:
            "Building SCADA/IIoT platform software for UK water utilities. Working across the full stack on a system that monitors and controls critical water infrastructure in real time.",
    },
];

function Experience() {
    return (
        <section id="experience">
            <div className="section-header">
                <span className="section-title">experience</span>
            </div>
            <div className="exp-timeline">
                {experience.map((job, i) => (
                    <div key={i} className="exp-entry">
                        <div className="exp-card">
                            <div className="exp-card-top">
                                <span className="exp-role">{job.role}</span>
                                <span className="exp-dates">{job.dates}</span>
                            </div>
                            <div className="exp-company">
                                <a
                                    href={job.companyUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="exp-company-link"
                                >
                                    {job.company}
                                </a>
                            </div>
                            <p className="exp-description">{job.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
