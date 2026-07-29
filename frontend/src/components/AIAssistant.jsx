function AIAssistant({ complaint }) {

    const getRiskColor = () => {

        const risk = (complaint.risk_level || "").toLowerCase();

        if (risk.includes("high"))
            return "bg-red-100 text-red-700";

        if (risk.includes("medium"))
            return "bg-yellow-100 text-yellow-700";

        return "bg-green-100 text-green-700";
    };

    return (

        <div className="bg-white rounded-xl shadow-lg p-6">

            <h2 className="text-xl font-bold mb-5">
                AI Complaint Assistant
            </h2>

            <div className="space-y-4">

                <div className="border rounded-lg p-4">

                    <p className="text-gray-500 text-sm">
                        Product
                    </p>

                    <p className="font-semibold">
                        {complaint.product_name || "Not Available"}
                    </p>

                </div>

                <div className="border rounded-lg p-4">

                    <p className="text-gray-500 text-sm">
                        Batch Number
                    </p>

                    <p className="font-semibold">
                        {complaint.batch_number || "Not Available"}
                    </p>

                </div>

                <div className="border rounded-lg p-4">

                    <p className="text-gray-500 text-sm">
                        Customer
                    </p>

                    <p className="font-semibold">
                        {complaint.customer_name || "Not Available"}
                    </p>

                </div>

                <div className="border rounded-lg p-4">

                    <p className="text-gray-500 text-sm">
                        AI Risk Assessment
                    </p>

                    <span
                        className={`px-3 py-1 rounded-full text-sm ${getRiskColor()}`}
                    >
                        {complaint.risk_level || "Pending"}
                    </span>

                </div>

                <div className="border rounded-lg p-4">

                    <p className="text-gray-500 text-sm mb-2">
                        AI Summary
                    </p>

                    <p className="text-sm leading-6">
                        {complaint.summary || "Waiting for AI analysis..."}
                    </p>

                </div>

            </div>

        </div>

    );

}

export default AIAssistant;