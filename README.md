# Sai Kumar — 3D Cinematic Portfolio

> Java Full Stack Developer & AI Systems Builder

**Live site:** https://sai-kumar-port.netlify.app  
**Backend API:** *(deploy backend to Render, paste URL here)*

---

## Architecture

```
portfolio/
├── frontend/   → React (CRA) — deployed on Netlify
└── backend/    → Spring Boot — deployed on Render / Railway
```

## Stack

| Layer    | Tech                                    |
|----------|-----------------------------------------|
| Frontend | React 18, CSS3 animations, Canvas API   |
| Backend  | Spring Boot 3, Spring Data JPA          |
| Database | PostgreSQL (Supabase / Neon free tier)  |
| Deploy   | Netlify (frontend) + Render (backend)   |

## Run Locally

**Frontend**
```bash
cd frontend
cp .env.example .env        # set REACT_APP_API_URL=http://localhost:8080
npm install
npm start                   # http://localhost:3000
```

**Backend**
```bash
cd backend
# Requires PostgreSQL running locally, or set DATABASE_URL env var
mvn spring-boot:run         # http://localhost:8080
```

## API Endpoints

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| GET    | /api/projects  | List all projects        |
| POST   | /api/contact   | Submit contact form      |

## Netlify Deploy Settings

- Base directory: `frontend`
- Build command: `npm run build`
- Publish directory: `frontend/build`
- Environment variable: `REACT_APP_API_URL` → your Render backend URL
