# Local Development and Testing

Run the frontend and API in separate terminals from the project root. The frontend is a React/Vite website; the FastAPI backend is currently a health-check scaffold.

## Prerequisites

- Node.js and npm
- Python 3.10 or newer

## 1. Start the frontend

In PowerShell, open a terminal at the project root and run:

```powershell
cd frontend
npm install
npm run dev
```

Open the local URL Vite prints, normally <http://localhost:5173>. Keep this terminal open while using the site. Vite refreshes the page when frontend files change.

## 2. Start the backend

Open a second PowerShell terminal at the project root:

```powershell
cd backend
python -m venv .venv
.venv\Scripts\Activate.ps1
python -m pip install -r requirements.txt
Copy-Item .env.example .env
uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

If PowerShell prevents virtual-environment activation, you can run the environment's Python and Uvicorn directly:

```powershell
.venv\Scripts\python.exe -m pip install -r requirements.txt
.venv\Scripts\python.exe -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8000
```

The API health check is <http://127.0.0.1:8000/health>. FastAPI's interactive API page is at <http://127.0.0.1:8000/docs>.

If Windows reports `WinError 10013` while binding port `8000`, try another local port, for example:

```powershell
.venv\Scripts\python.exe -m uvicorn app.main:app --reload --host 127.0.0.1 --port 8001
```

Then use <http://127.0.0.1:8001/health> and <http://127.0.0.1:8001/docs>. The frontend currently does not call the API, so changing the backend port does not affect the website preview.

The default settings in `backend/.env.example` allow requests from `http://localhost:5173`. If Vite uses a different origin or port, update `CORS_ORIGINS` in `backend/.env` to match it. Separate multiple origins with commas.

## Run both at once

Leave both terminals running:

| Terminal | Working directory | Command |
| --- | --- | --- |
| Frontend | `frontend` | `npm run dev` |
| Backend | `backend` | `uvicorn app.main:app --reload --host 127.0.0.1 --port 8000` |

Use the Vite URL to preview the website. Stop either server with **Ctrl+C** in its terminal.

## Build and lint the frontend

From the project root:

```powershell
cd frontend
npm run build
npm run lint
```

The project does not currently define a test script. The `build` command creates the production frontend bundle in `frontend/dist`; `npm run preview` can serve that bundle locally after a build.

## Current backend scope

At this stage, the backend only exposes `GET /health`. The website's sample content is handled in the browser, and the frontend does not yet call the API. Database settings, CMS endpoints, authentication, and content persistence are not connected, so starting the backend is optional for checking the public website UI.
