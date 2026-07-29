from dotenv import load_dotenv
from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent
ENV_FILE = BASE_DIR / ".env"

print("Looking for .env at:", ENV_FILE)
print("File exists:", ENV_FILE.exists())

load_dotenv(dotenv_path=ENV_FILE)

GROQ_API_KEY = os.getenv("GROQ_API_KEY")

print("API Key Found:", GROQ_API_KEY is not None)