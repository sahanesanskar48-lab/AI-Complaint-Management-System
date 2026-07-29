from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import fitz

from langgraph_agent import run_langgraph
from database import save_complaint

app = FastAPI(title="AI Complaint Management System")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ComplaintRequest(BaseModel):
    complaint_text: str


class ComplaintData(BaseModel):
    complaint_source: str
    customer_name: str
    product_name: str
    batch_number: str
    manufacturing_date: str
    expiry_date: str
    description: str
    risk_level: str
    summary: str


@app.get("/")
def home():
    return {
        "message": "Backend Running Successfully 🚀"
    }


@app.post("/extract")
def extract(request: ComplaintRequest):

    result = run_langgraph(
        request.complaint_text
    )

    return result


@app.post("/upload-pdf")
async def upload_pdf(file: UploadFile = File(...)):

    pdf_bytes = await file.read()

    pdf = fitz.open(stream=pdf_bytes, filetype="pdf")

    extracted_text = ""

    for page in pdf:
        extracted_text += page.get_text()

    pdf.close()

    result = run_langgraph(
        extracted_text
    )

    return result


@app.post("/save")
def save(data: ComplaintData):

    save_complaint(
        data.model_dump()
    )

    return {
        "message": "Complaint Saved Successfully"
    }