import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">SK<span className="dot">.</span></span>
        <p className="footer-copy">
          Built with React + Spring Boot · Deployed on Netlify + Render
        </p>
        <div className="footer-links">
          <a href="https://github.com/saikumar-A21" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/sai-kumar-amirishetti-b80b21215" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="mailto:saikumaramirishetti98976@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
