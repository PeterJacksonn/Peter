import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Carousel } from "react-bootstrap";
import { spotlightProjects, projects } from "../data/projects";
import "../styles/Projects.css";
function Projects() {
    return (
        <section id="projects">
            <div className="section-header">
                <span className="section-title">projects</span>
            </div>

            <Carousel
                interval={null}
                className="spotlight-carousel"
                prevIcon={<ChevronLeftIcon style={{ fontSize: 36, color: "var(--accent)" }} />}
                nextIcon={<ChevronRightIcon style={{ fontSize: 36, color: "var(--accent)" }} />}
            >
                {spotlightProjects.map((project, i) => (
                    <Carousel.Item key={project.title}>
                        <div className="spotlight-slide">
                            {project.image ? (
                                <img src={project.image} alt={project.title} className="spotlight-bg" />
                            ) : (
                                <div className="spotlight-bg spotlight-placeholder" />
                            )}
                            <div className="spotlight-overlay" />
                            <div className="spotlight-caption">
                                <span className="spotlight-num">0{i + 1}</span>
                                <h3 className="spotlight-title">{project.title}</h3>
                                <p className="spotlight-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tech.map((t) => (
                                        <span key={t} className="project-tag">{t}</span>
                                    ))}
                                </div>
                                {project.link && (
                                    <div className="spotlight-links">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-icon-link"
                                            aria-label="GitHub repository"
                                        >
                                            <GitHubIcon style={{ fontSize: 22 }} />
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.title} className="project-card">
                        <div className="project-card-header">
                            <span className="project-title">{project.title}</span>
                            <div className="project-links">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="project-icon-link"
                                        aria-label="Live site"
                                    >
                                        <OpenInNewIcon style={{ fontSize: 18 }} />
                                    </a>
                                )}
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="project-icon-link"
                                    aria-label="GitHub repository"
                                >
                                    <GitHubIcon style={{ fontSize: 18 }} />
                                </a>
                            </div>
                        </div>
                        <p className="project-description">{project.description}</p>
                        <div className="project-tags">
                            {project.tech.map((t) => (
                                <span key={t} className="project-tag">{t}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
