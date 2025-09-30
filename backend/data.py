from .models import Project

projects = [
    Project(
        id=1,
        title="Portfolio Website",
        description="My personal portfolio built with React and FastAPI",
        tech_stack=["React", "TypeScript", "FastAPI", "TailwindCSS"],
        github_link="https://github.com/yourusername/portfolio",
        demo_link="https://yourportfolio.com"
    ),
    Project(
        id=2,
        title="AI Chatbot",
        description="Chatbot using OpenAI API integrated in FastAPI backend",
        tech_stack=["Python", "FastAPI", "OpenAI", "React"],
        github_link="https://github.com/yourusername/ai-chatbot",
        demo_link="https://yourchatbot.com"
    )
]
