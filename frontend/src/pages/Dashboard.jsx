import { useState } from "react";

import Navbar from "../components/Navbar";
import UploadSection from "../components/UploadSection";
import ComplaintForm from "../components/ComplaintForm";
import AIAssistant from "../components/AIAssistant";

function Dashboard() {

    const [complaint, setComplaint] = useState({
        complaint_source: "",
        customer_name: "",
        product_name: "",
        batch_number: "",
        manufacturing_date: "",
        expiry_date: "",
        description: "",
        risk_level: "",
        summary: ""
    });

    const totalComplaints =
        complaint.customer_name ? 1 : 0;

    const highRisk =
        complaint.risk_level === "High" ? 1 : 0;

    const pending =
        complaint.customer_name ? 0 : 1;

    return (
        <>
            <Navbar />

            <div className="min-h-screen bg-slate-100 p-8">

                <div className="mb-8">

                    <h1 className="text-4xl font-bold text-slate-800">

                        AI Complaint Management Dashboard

                    </h1>

                    <p className="text-gray-500 mt-2">

                        Pharmaceutical Complaint Intake & AI Analysis

                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-blue-600">

                        <h3 className="text-gray-500">

                            Total Complaints

                        </h3>

                        <p className="text-4xl font-bold text-blue-600 mt-3">

                            {totalComplaints}

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-red-600">

                        <h3 className="text-gray-500">

                            High Risk Complaints

                        </h3>

                        <p className="text-4xl font-bold text-red-600 mt-3">

                            {highRisk}

                        </p>

                    </div>

                    <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-500">

                        <h3 className="text-gray-500">

                            Pending Review

                        </h3>

                        <p className="text-4xl font-bold text-yellow-500 mt-3">

                            {pending}

                        </p>

                    </div>

                </div>

                <UploadSection
                    setComplaint={setComplaint}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">

                    <div className="lg:col-span-2">

                        <ComplaintForm
                            complaint={complaint}
                            setComplaint={setComplaint}
                        />

                    </div>

                    <div>

                        <AIAssistant
                            complaint={complaint}
                        />

                    </div>

                </div>

            </div>

        </>
    );

}

export default Dashboard;