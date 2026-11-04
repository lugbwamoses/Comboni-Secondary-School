import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv

load_dotenv()

cors_origins = [
    origin.strip()
    for origin in os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")
    if origin.strip()
]

app = FastAPI(title="St. Daniel Comboni Secondary School Website API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=cors_origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
@app.get("/api/health")
async def health_check():
    return {"status": "ok"}

# Routers will be included here later, e.g.:
# from .routers import pages, programmes, faculties, departments, news, events, gallery, downloads, staff, research, contact
# app.include_router(pages.router)
# app.include_router(programmes.router)
# ...
