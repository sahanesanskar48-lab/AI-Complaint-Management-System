from groq import Groq
from config import GROQ_API_KEY
import json
import re

client = Groq(api_key=GROQ_API_KEY)


def extract_complaint_details(complaint_text: str):

    prompt = f"""
You are an expert Pharmaceutical Quality Management System (QMS) AI Assistant.

Extract the complaint information and return ONLY valid JSON.

Rules:

1. complaint_source means where the complaint came from.
Possible values:
- Email
- Phone
- Customer Portal
- WhatsApp
- Unknown

Never put the company name in complaint_source.

2. customer_name is the company or customer who raised the complaint.

3. product_name should contain medicine name and strength.

4. batch_number should contain only batch number.

5. manufacturing_date should be in DD Month YYYY format.

6. expiry_date should be in DD Month YYYY format.

7. description should be short (1 sentence).

8. risk_level should be:

High:
- Broken tablets
- Wrong medicine
- Contamination
- Leakage
- Cracks
- Missing tablets

Medium:
- Color variation
- Label issue
- Printing issue

Low:
- Packaging issue
- Minor scratches

9. summary should be one sentence.

Return ONLY this JSON:

{{
    "complaint_source":"",
    "customer_name":"",
    "product_name":"",
    "batch_number":"",
    "manufacturing_date":"",
    "expiry_date":"",
    "description":"",
    "risk_level":"",
    "summary":""
}}

Complaint Text:

{complaint_text}

Return JSON only.
"""

    response = client.chat.completions.create(
        model="llama-3.3-70b-versatile",
        messages=[
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0
    )

    result = response.choices[0].message.content.strip()

    try:

        # Remove markdown if model returns ```json ... ```
        result = result.replace("```json", "").replace("```", "").strip()

        json_match = re.search(r"\{.*\}", result, re.DOTALL)

        if json_match:
            return json.loads(json_match.group())

        return {
            "error": "JSON not found",
            "raw_response": result
        }

    except Exception as e:

        return {
            "error": str(e),
            "raw_response": result
        }