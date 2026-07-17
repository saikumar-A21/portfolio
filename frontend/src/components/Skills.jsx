import './Skills.css';

const skillGroups = [
  {
    category: 'Backend',
    icon: '⚙️',
    skills: ['Java (Core, Java 8+, Multithreading)', 'Spring Boot', 'Spring Data JPA / Hibernate', 'RESTful APIs', 'Microservices', 'JWT / OAuth / RBAC'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    skills: ['React.js', 'Angular', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 / CSS3', 'Bootstrap'],
  },
  {
    category: 'Databases & Cloud',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MySQL', 'SQL (Complex Queries, Indexing)', 'AWS (Basics)', 'Docker (Basics)', 'Jenkins / Maven / Git'],
  },
  {
    category: 'AI & Agents',
    icon: '🤖',
    skills: ['OpenClaw', 'Claude Code', 'n8n Automation', 'AI Agent Orchestration', 'Agentic Workflows', 'Python'],
  },
];

const certs = [
  { name: 'Java Full Stack', issuer: 'V Cube Software Solutions' },
  { name: 'Java Certification', issuer: 'Oracle' },
  { name: 'Python Certification', issuer: 'Netcad' },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <p className="section-label">What I work with</p>
        <h2 className="section-heading">Skills & Stack</h2>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.category}>
              <div className="skill-card-header">
                <span className="skill-icon">{group.icon}</span>
                <h3 className="skill-category">{group.category}</h3>
              </div>
              <ul className="skill-list">
                {group.skills.map((s) => (
                  <li key={s} className="skill-item">
                    <span className="skill-dot" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="certs-row">
          <p className="section-label" style={{ marginBottom: 24 }}>Certifications</p>
          <div className="certs-list">
            {certs.map((c) => (
              <div className="cert-badge" key={c.name}>
                <span className="cert-icon">✦</span>
                <div>
                  <span className="cert-name">{c.name}</span>
                  <span className="cert-issuer">{c.issuer}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
