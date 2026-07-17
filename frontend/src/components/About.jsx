import './About.css';

const timeline = [
  {
    year: '2025 – Now',
    role: 'Java Developer Intern',
    org: 'Galactix Solutions Pvt Ltd',
    desc: 'Building TA-Jobs architecture, AI agent orchestration using OpenClaw & Claude Code, and an Ads Agent for multi-market paid advertising intelligence. Implementing JWT, OAuth, and RBAC security.',
  },
  {
    year: '2021 – 2024',
    role: 'B.Tech in Computer Science',
    org: 'Mahatma Gandhi Institute of Technology',
    desc: 'Graduated with strong foundations in OOP, Data Structures, Algorithms, and distributed systems. CGPA: 6.76/10.',
  },
  {
    year: '2018 – 2021',
    role: 'Diploma in Computer Engineering',
    org: 'Government Polytechnic Warangal',
    desc: 'Built foundational knowledge in software development and computer engineering. CGPA: 7.93/10.',
  },
];

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <p className="section-label">Who I am</p>
        <h2 className="section-heading">About Me</h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm a <strong>Java Full Stack Developer</strong> based in Hyderabad, passionate about
              building systems that are fast, secure, and meaningful. My work spans
              RESTful microservices in Spring Boot, reactive React frontends, and
              cutting-edge <strong>Agentic AI systems</strong> using OpenClaw and Claude Code.
            </p>
            <p>
              Currently at Galactix Solutions, I'm developing autonomous AI agents
              for business operations — including a Finance Manager Orchestrator with
              sub-agents for accounting, tax, and financial analysis.
            </p>
            <p>
              I care about clean architecture, test-driven development, and writing
              code that other engineers actually enjoy reading.
            </p>

            <div className="about-links">
              <a href="https://linkedin.com/in/sai-kumar-amirishetti-b80b21215" target="_blank" rel="noreferrer" className="about-link">
                LinkedIn ↗
              </a>
              <a href="https://github.com/saikumar-A21" target="_blank" rel="noreferrer" className="about-link">
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="timeline">
            {timeline.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot" />
                <div className="timeline-body">
                  <span className="timeline-year">{item.year}</span>
                  <h4 className="timeline-role">{item.role}</h4>
                  <span className="timeline-org">{item.org}</span>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
