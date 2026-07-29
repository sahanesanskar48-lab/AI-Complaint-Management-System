import { useRef, useState } from "react";
import API from "../services/api";

function UploadSection({ setComplaint }) {

    const fileInputRef = useRef(null);

    const [complaintText, setComplaintText] = useState("");

    const [loading, setLoading] = useState(false);

    const [progress, setProgress] = useState(0);

    const browseFile = () => {
        fileInputRef.current.click();
    };

    // PDF Upload
    const handleFileChange = async (event) => {

        const file = event.target.files[0];

        if (!file) return;

        const formData = new FormData();

        formData.append("file", file);

        try {

            setLoading(true);
            setProgress(10);

            const timer = setInterval(() => {

                setProgress((old) => {

                    if (old >= 90)
                        return old;

                    return old + 10;

                });

            }, 300);

            const response = await API.post(
                "/upload-pdf",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            clearInterval(timer);

            setProgress(100);

            setComplaint(response.data);

            setComplaintText(
                response.data.description || ""
            );

            setTimeout(() => {

                setLoading(false);

                setProgress(0);

            }, 800);

            alert("PDF Processed Successfully ✅");

        }

        catch (err) {

            console.log(err);

            alert("PDF Upload Failed ❌");

            setLoading(false);

            setProgress(0);

        }

    };

    // Text Extraction
    const handleExtract = async () => {

        if (complaintText.trim() === "") {

            alert("Please enter complaint text.");

            return;

        }

        try {

            setLoading(true);

            setProgress(20);

            const timer = setInterval(() => {

                setProgress((old) => {

                    if (old >= 90)
                        return old;

                    return old + 10;

                });

            }, 300);

            const response = await API.post("/extract", {
                complaint_text: complaintText
            });

            clearInterval(timer);

            setProgress(100);

            setComplaint(response.data);

            setTimeout(() => {

                setLoading(false);

                setProgress(0);

            }, 800);

            alert("Complaint Extracted Successfully ✅");

        }

        catch (err) {

            console.log(err);

            alert("AI Extraction Failed");

            setLoading(false);

            setProgress(0);

        }

    };

    return (

        <div className="bg-white rounded-xl shadow-lg p-6">

            <div className="flex justify-between items-center mb-5">

                <h2 className="text-2xl font-bold">

                    AI Complaint Intake

                </h2>

                <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm">

                    Pending Triage

                </span>

            </div>

            <div
                className="border-2 border-dashed border-blue-400 rounded-xl p-10 text-center cursor-pointer hover:bg-blue-50 transition"
                onClick={browseFile}
            >

                <h3 className="text-lg font-semibold">

                    Upload Complaint PDF

                </h3>

                <p className="text-gray-500 mt-2">

                    Drag & Drop or Click to Browse

                </p>

                <button
                    type="button"
                    className="mt-5 bg-blue-600 text-white px-6 py-2 rounded-lg"
                >

                    Browse File

                </button>

                <input
                    ref={fileInputRef}
                    type="file"
                    hidden
                    accept=".pdf"
                    onChange={handleFileChange}
                />

            </div>

            <div className="mt-6">

                <label className="font-semibold">

                    Complaint Text

                </label>

                <textarea
                    rows="6"
                    className="w-full border rounded-lg p-4 mt-2"
                    placeholder="Paste Complaint Email Here..."
                    value={complaintText}
                    onChange={(e) => setComplaintText(e.target.value)}
                />

            </div>

            {

                loading &&

                <div className="mt-5">

                    <div className="flex justify-between">

                        <span>

                            AI is analysing complaint...

                        </span>

                        <span>

                            {progress}%

                        </span>

                    </div>

                    <div className="w-full bg-gray-200 rounded-full h-3 mt-2">

                        <div
                            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                            style={{
                                width: `${progress}%`
                            }}
                        ></div>

                    </div>

                </div>

            }

            <div className="flex gap-4 mt-6">

                <button
                    onClick={handleExtract}
                    className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
                >

                    Extract Using AI

                </button>

                <button
                    onClick={() => {

                        setComplaintText("");

                        setComplaint({
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

                    }}
                    className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700"
                >

                    Clear

                </button>

            </div>

        </div>

    );

}

export default UploadSection;