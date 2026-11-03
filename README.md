# St. Daniel Comboni Secondary School Website

Public website prototype for St. Daniel Comboni Secondary School in Juba, South Sudan. This repository currently contains a React/Vite frontend, a small FastAPI health-check scaffold, sample content, and the project design assets.

## Current implementation

- React 19, Vite, and React Router provide the public pages.
- Framer Motion provides restrained route transitions and respects reduced-motion preferences.
- Glow Icons SVG assets provide the shared interface icon set.
- Sample content is stored in `frontend/src/data/siteData.js` and browser-local edits use `localStorage`.
- The backend currently exposes only `GET /health`; there is no connected content API or CMS authentication.
- The `/admin` page is a local demo editor. It is not protected and does not publish to a server.
- Contact delivery, event registration, newsletter signup, and the external portal URL are not configured.

A notice appears on the site because names, dates, statistics, photos, and other sample content still need review. Replace sample information with school-approved material before publishing.

## Run locally

### Frontend

```powershell
cd frontend
npm install
npm run dev
```

Vite prints the local development URL after startup. Available scripts are `npm run dev`, `npm run build`, `npm run preview`, and `npm run lint`.

### Backend scaffold

```powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```

The backend health endpoint is available at `/health`. The frontend does not currently call it. Configure allowed frontend origins with `CORS_ORIGINS` as a comma-separated environment variable; the default is `http://localhost:5173`.

## Main folders

- `frontend/src/components/` — shared header, footer, homepage sections, and icons.
- `frontend/src/pages/` — routed website pages.
- `frontend/src/context/` — browser-side sample content and search state.
- `frontend/src/data/` — sample website data.
- `backend/app/` — FastAPI entry point and database connection scaffold.
- `design-system/` — generated design-system reference.
- `Glow Icons v1.0/` — supplied SVG icon collection.

## Not implemented yet

The production CMS, server-side content APIs, authentication and roles, database models and migrations, media storage, contact email delivery, spam protection, analytics, sitemap generation, and deployment configuration are not implemented. The public website must not be treated as production-ready until these features, verified school content, security review, and responsive/accessibility checks are completed.
