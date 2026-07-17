import { useEffect, useState } from 'react';
import { fetchProjects } from '../services/api';
import './Projects.css';

// Fallback static data shown when backend is not running
const STATIC_PROJECTS = [
  {
    id: 1,
    title: 'AI-Powered Luxury Asset Maintenance Platform',
    description:
      'Agentic AI system with a Finance Manager Orchestrator coordinating Accountant, Tax Specialist, and Financial Analyst sub-agents. The Accountant Agent (STERLING) handles invoice generation, payment confirmation, and vendor payout control with an immutable ledger and dual-condition payout release.',
    technologies: 'OpenClaw, Claude Code, React, PostgreSQL',
    githubUrl: 'https://github.com/saikumar-A21',
    liveUrl: 'https://github.com/saikumar-A21',
    tag: 'AI Agents',
  },
  {
    id: 2,
    title: 'Mock Interview Prep — AI-Powered Platform',
    description:
      'Enterprise-grade RESTful APIs built with Spring Boot using dependency injection and inversion of control. Integrated Stripe for secure payment processing and DocuSign for digital document workflows. Applied TDD with Postman for comprehensive API validation.',
    technologies: 'Java, Spring Boot, Spring Data JPA, MySQL, Stripe, DocuSign, JWT',
    githubUrl: 'https://github.com/saikumar-A21',
    liveUrl: null,
    tag: 'Full Stack',
  },
  {
    id: 3,
    title: 'Student Services System',
    description:
      'Full-stack CRUD application with an Angular frontend and Spring Boot backend, exposing RESTful APIs for efficient data retrieval via HttpClient. Clean separation of concerns with a layered architecture.',
    technologies: 'Angular, Spring Boot, MySQL, REST API',
    githubUrl: 'https://github.com/saikumar-A21',
    liveUrl: null,
    tag: 'Full Stack',
  },
];

export default function Projects() {
  const [projects, setProjects] = useState(STATIC_PROJECTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProjects()
      .then(data => { if (data?.length) setProjects(data); })
      .catch(() => { /* backend offline — static data already shown */ })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <p className="section-label">What I've built</p>
        <h2 className="section-heading">Projects</h2>

        {loading && <p className="projects-loading">Loading latest projects…</p>}

        <div className="projects-grid">
          {projects.map((project, i) => (
            <article className="project-card" key={project.id || i}>
              <div className="project-card-top">
                <span className="project-tag">{project.tag || 'Project'}</span>
                <div className="project-links">
                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noreferrer" title="GitHub">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    </a>
                  )}
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" title="Live Demo">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                        <polyline points="15 3 21 3 21 9"/>
                        <line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>

              <div className="project-tech">
                {project.technologies?.split(',').map(t => (
                  <span className="tech-chip" key={t.trim()}>{t.trim()}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
