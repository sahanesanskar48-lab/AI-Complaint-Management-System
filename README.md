# 🤖 AI Complaint Management System

An AI-powered Pharmaceutical Complaint Management System developed using **React**, **FastAPI**, **Groq LLM**, **LangGraph**, and **MySQL**.

The system automatically extracts complaint information from complaint text or PDF files, performs AI-based risk assessment, generates a summary, and stores the complaint in a MySQL database.

---

# 📌 Features

- 📄 Complaint Text & PDF Upload
- 🤖 AI-based Complaint Information Extraction
- 🧠 LangGraph Workflow Integration
- ⚠️ AI Risk Assessment
- 📝 AI Generated Complaint Summary
- 📋 Auto-fill Complaint Form
- 💾 Save Complaint to MySQL Database
- 🎨 Responsive React Dashboard

---

# 🛠️ Tech Stack

## Frontend
- React.js
- Tailwind CSS
- Axios
- Vite

## Backend
- FastAPI
- Python
- Groq API
- LangGraph

## Database
- MySQL

---

# 🧠 AI Workflow

```
Complaint Text / PDF
          │
          ▼
      FastAPI API
          │
          ▼
     LangGraph Workflow
          │
          ├── Extract Complaint Details
          ├── Risk Assessment
          └── Summary Generation
          │
          ▼
      Structured JSON
          │
          ▼
 React Complaint Dashboard
          │
          ▼
      Save to MySQL
```

---

# 📂 Project Structure

```
AI-Complaint-Management-System
│
├── backend
│   ├── app.py
│   ├── ai_agent.py
│   ├── langgraph_agent.py
│   ├── database.py
│   ├── config.py
│   ├── requirements.txt
│   └── .env
│
├── frontend
│   ├── src
│   ├── public
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/sahanesanskar48-lab/AI-Complaint-Management-System.git
```

---

## Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app:app --reload
```

Backend URL

```
http://127.0.0.1:8000
```

Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend URL

```
http://localhost:5173
```

---

# 🔑 Environment Variable

Create a `.env` file inside the **backend** folder.

```
GROQ_API_KEY=YOUR_GROQ_API_KEY
```

---

# 📸 Application Workflow

1. Enter or Upload Complaint
2. AI extracts complaint details
3. Complaint Form is automatically filled
4. AI calculates Risk Level
5. AI generates Summary
6. User verifies data
7. Save Complaint to MySQL Database

---

# ✨ Future Improvements

- User Authentication
- Complaint History
- Complaint Search & Filter
- Dashboard Analytics
- Email Notification
- Duplicate Complaint Detection
- CAPA Recommendation using AI

---

# 👨‍💻 Author

**Sanskar Sahane**

Artificial Intelligence & Data Science Engineering Student

2026 Batch

---

# 📄 License

This project is developed for educational and learning purposes.