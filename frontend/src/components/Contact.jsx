import { useState } from 'react';
import { submitContact } from '../services/api';
import './Contact.css';

const CONTACT_INFO = [
  { label: 'Email', value: 'saikumaramirishetti98976@gmail.com', href: 'mailto:saikumaramirishetti98976@gmail.com' },
  { label: 'Phone', value: '+91 9542518037', href: 'tel:+919542518037' },
  { label: 'Location', value: 'Hyderabad, India', href: null },
  { label: 'LinkedIn', value: 'sai-kumar-amirishetti', href: 'https://linkedin.com/in/sai-kumar-amirishetti-b80b21215' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', text: '' }); // idle | loading | success | error

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus({ state: 'loading', text: '' });
    try {
      const res = await submitContact(form);
      setStatus({ state: 'success', text: res.message || "Message sent! I'll get back to you soon." });
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ state: 'error', text: err.message });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <p className="section-label">Let's connect</p>
        <h2 className="section-heading">Get In Touch</h2>
        <p className="contact-intro">
          Open to full-time roles, freelance projects, and collaborations on
          AI agent systems or full-stack applications. Drop me a message.
        </p>

        <div className="contact-grid">
          <div className="contact-info">
            {CONTACT_INFO.map(item => (
              <div className="contact-item" key={item.label}>
                <span className="contact-item-label">{item.label}</span>
                {item.href
                  ? <a href={item.href} target="_blank" rel="noreferrer" className="contact-item-value link">{item.value}</a>
                  : <span className="contact-item-value">{item.value}</span>
                }
              </div>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about the project or opportunity…"
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary submit-btn"
              disabled={status.state === 'loading'}
            >
              {status.state === 'loading' ? 'Sending…' : 'Send Message'}
            </button>

            {status.state === 'success' && <p className="form-feedback success">{status.text}</p>}
            {status.state === 'error'   && <p className="form-feedback error">{status.text}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
