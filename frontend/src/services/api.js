const API_BASE = process.env.REACT_APP_API_URL || 'http://localhost:8111';

export async function fetchProjects() {
  const res = await fetch(`${API_BASE}/api/projects`);
  if (!res.ok) throw new Error('Failed to load projects');
  return res.json();
}

export async function submitContact({ name, email, message }) {
  const res = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, message }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.message || 'Failed to send. Try again.');
  return data;
}
