import API from "../services/api";

function ComplaintForm({ complaint, setComplaint }) {

    const handleSave = async () => {

        try {

            await API.post("/save", complaint);

            alert("Complaint Saved Successfully ✅");

        }

        catch (error) {

            console.log(error);

            alert("Unable to Save Complaint ❌");

        }

    };

    return (

        <div className="bg-white rounded-xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-6">

                Complaint Form

            </h2>

            <div className="grid grid-cols-2 gap-5">

                <div>

                    <label className="font-semibold">

                        Complaint Source

                    </label>

                    <input
                        type="text"
                        value={complaint.complaint_source}
                        onChange={(e) =>
                            setComplaint({
                                ...complaint,
                                complaint_source: e.target.value
                            })
                        }
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                </div>

                <div>

                    <label className="font-semibold">

                        Customer Name

                    </label>

                    <input
                        type="text"
                        value={complaint.customer_name}
                        onChange={(e) =>
                            setComplaint({
                                ...complaint,
                                customer_name: e.target.value
                            })
                        }
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                </div>

                <div>

                    <label className="font-semibold">

                        Product Name

                    </label>

                    <input
                        type="text"
                        value={complaint.product_name}
                        onChange={(e) =>
                            setComplaint({
                                ...complaint,
                                product_name: e.target.value
                            })
                        }
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                </div>

                <div>

                    <label className="font-semibold">

                        Batch Number

                    </label>

                    <input
                        type="text"
                        value={complaint.batch_number}
                        onChange={(e) =>
                            setComplaint({
                                ...complaint,
                                batch_number: e.target.value
                            })
                        }
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                </div>

                <div>

                    <label className="font-semibold">

                        Manufacturing Date

                    </label>

                    <input
                        type="text"
                        value={complaint.manufacturing_date}
                        onChange={(e) =>
                            setComplaint({
                                ...complaint,
                                manufacturing_date: e.target.value
                            })
                        }
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                </div>

                <div>

                    <label className="font-semibold">

                        Expiry Date

                    </label>

                    <input
                        type="text"
                        value={complaint.expiry_date}
                        onChange={(e) =>
                            setComplaint({
                                ...complaint,
                                expiry_date: e.target.value
                            })
                        }
                        className="w-full border rounded-lg p-3 mt-2"
                    />

                </div>

            </div>

            <div className="mt-6">

                <label className="font-semibold">

                    Complaint Description

                </label>

                <textarea
                    rows="5"
                    value={complaint.description}
                    onChange={(e) =>
                        setComplaint({
                            ...complaint,
                            description: e.target.value
                        })
                    }
                    className="w-full border rounded-lg p-3 mt-2"
                />

            </div>

            <div className="flex gap-4 mt-6">

                <button
                    onClick={handleSave}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
                >

                    Save Complaint

                </button>

                <button
                    onClick={() => {

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

export default ComplaintForm;