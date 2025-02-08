import { useEffect, useState } from "react";

const Docdash = () => {
    const [doctor, setDoctor] = useState({});
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem("user"));
        if (storedData) {
            setDoctor(storedData);
            fetchAppointments(storedData.id); // Fetch appointments
        }
    }, []);

    const fetchAppointments = async (doctorId) => {
        try {
            const response = await fetch(`http://localhost:5000/a?id=${doctorId}`);
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.error || "Error fetching appointments");
            }
            setAppointments(data);
        } catch (error) {
            console.error("Error fetching appointments:", error);
        }
    };

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-md">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    Welcome, Dr. {doctor.name}
                </h1>
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Appointments</h2>

                {appointments.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {appointments.map((appt) => (
                            <div key={appt._id} className="bg-blue-50 p-4 rounded-xl shadow-md">
                                <p className="text-lg font-semibold text-gray-800">
                                    👤 Patient: <span className="font-normal">{appt.patientName}</span>
                                </p>
                                <p className="text-gray-700">
                                    📅 <strong>Date:</strong> {appt.date}
                                </p>
                                <p className="text-gray-700">
                                    ⏰ <strong>Time:</strong> {appt.time}
                                </p>
                                <p className="text-gray-700">
                                    📞 <strong>Contact:</strong> {appt.phone}
                                </p>

                                {/* Show Vaccination Certificate if available */}
                                {appt.vaccin ? (
                                    <p className="mt-2">
                                        💉 <strong>Vaccination Certificate:</strong>{" "}
                                        <a
                                            href={`http://localhost:5000${appt.vaccin}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-blue-600 hover:underline font-medium"
                                        >
                                            View Certificate
                                        </a>
                                    </p>
                                ) : (
                                    <p className="text-red-500">🚫 No Vaccination Certificate Uploaded</p>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-600 text-lg mt-4">No Appointments Found.</p>
                )}
            </div>
        </div>
    );
};

export default Docdash;
