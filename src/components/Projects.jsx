import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Carousel } from "react-bootstrap";
import { spotlightProjects, projects } from "../data/projects";
import "../styles/Projects.css";

function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);
    const current = spotlightProjects[activeIndex];

    return (
        <section id="projects">
            <div className="projects-header">
                <span className="section-title">projects</span>
                <span className="projects-header-line" />
                <a
                    href="https://github.com/PeterJacksonn"
                    target="_blank"
                    rel="noreferrer"
                    className="view-all-link"
                >
                    View All →
                </a>
            </div>

            <Carousel
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
                interval={null}
                indicators={false}
                className="spotlight-carousel"

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
                                <h3 className="spotlight-title">{project.title}</h3>
                                <p className="spotlight-desc">{project.description}</p>
                                <div className="project-tags">
                                    {project.tech.map((t) => (
                                        <span key={t} className="project-tag">{t}</span>
                                    ))}
                                </div>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="spotlight-github"
                                        aria-label="GitHub repository"
                                    >
                                        <GitHubIcon style={{ fontSize: 22 }} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>

            <div className="carousel-controls">
                <div className="carousel-dots">
                    {spotlightProjects.map((_, i) => (
                        <button
                            key={i}
                            className={`carousel-dot${i === activeIndex ? " active" : ""}`}
                            onClick={() => setActiveIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>

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
