from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .models import Project
from .data import projects
import httpx
import os

app = FastAPI()

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/projects")
async def get_projects():
    return projects

# Optional: AI-generated project summary
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

@app.get("/ai-summary")
async def ai_summary(project_desc: str):
    async with httpx.AsyncClient() as client:
        headers = {"Authorization": f"Bearer {OPENAI_API_KEY}"}
        payload = {
            "model": "gpt-5-mini",
            "messages": [
                {"role": "system", "content": "You are a concise tech writer."},
                {"role": "user", "content": f"Summarize this project in 2 sentences: {project_desc}"}
            ]
        }
        response = await client.post("https://api.openai.com/v1/chat/completions", json=payload, headers=headers)
        return {"summary": response.json()["choices"][0]["message"]["content"]}
