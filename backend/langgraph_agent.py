from typing import TypedDict
from langgraph.graph import StateGraph, START, END

from ai_agent import extract_complaint_details


class ComplaintState(TypedDict):
    complaint_text: str
    extracted_data: dict


def extract_node(state: ComplaintState):

    data = extract_complaint_details(
        state["complaint_text"]
    )

    return {
        **state,
        "extracted_data": data
    }


def risk_node(state: ComplaintState):

    data = state["extracted_data"]

    if not data.get("risk_level"):
        data["risk_level"] = "Medium"

    return {
        **state,
        "extracted_data": data
    }


def summary_node(state: ComplaintState):

    data = state["extracted_data"]

    if not data.get("summary"):
        data["summary"] = "Complaint processed successfully."

    return {
        **state,
        "extracted_data": data
    }


workflow = StateGraph(ComplaintState)

workflow.add_node("extract", extract_node)
workflow.add_node("risk", risk_node)
workflow.add_node("summary", summary_node)

workflow.add_edge(START, "extract")
workflow.add_edge("extract", "risk")
workflow.add_edge("risk", "summary")
workflow.add_edge("summary", END)

graph = workflow.compile()


def run_langgraph(complaint_text: str):

    result = graph.invoke(
        {
            "complaint_text": complaint_text,
            "extracted_data": {}
        }
    )

    return result["extracted_data"]