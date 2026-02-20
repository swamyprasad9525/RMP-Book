import { useState } from "react";
// import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"; 
import axios from "axios";
import { FaCheck, FaTimes, FaClock } from "react-icons/fa";

const DoctorAppointments = ({ appointments, onSuccess }) => {
    const handleStatusUpdate = async (id, status) => {
        try {
            await axios.put(`/api/appointments/${id}`, { status }, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            onSuccess(); // Refresh
        } catch (error) {
            console.error("Failed to update status", error);
            alert("Failed to update status");
        }
    };

    const columns = {
        pending: { title: "Pending Request", icon: FaClock, color: "text-warning", bg: "bg-orange-50" },
        approved: { title: "Approved", icon: FaCheck, color: "text-success", bg: "bg-green-50" },
        rejected: { title: "Rejected", icon: FaTimes, color: "text-danger", bg: "bg-red-50" }
    };

    return (
        <div className="h-full overflow-hidden flex flex-col">
            <h2 className="text-2xl font-bold font-heading text-primary mb-6">Appointment Board</h2>

            <div className="flex-1 overflow-x-auto overflow-y-hidden">
                <div className="flex gap-6 h-full min-w-[1000px] pb-4">
                    {Object.entries(columns).map(([status, col]) => (
                        <div key={status} className={`flex-1 ${col.bg} rounded-xl p-4 flex flex-col h-full`}>
                            <div className="flex items-center gap-2 mb-4">
                                <col.icon className={col.color} />
                                <h3 className="font-bold text-gray-700">{col.title}</h3>
                                <span className="bg-white px-2 py-0.5 rounded-full text-xs font-bold text-gray-500 shadow-sm">
                                    {appointments.filter(a => a.status === status).length}
                                </span>
                            </div>

                            <div className="flex-1 overflow-y-auto space-y-3 custom-scrollbar pr-2">
                                {appointments.filter(a => a.status === status).map((app) => (
                                    <div key={app._id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition">
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-bold text-gray-800">{app.patientName}</h4>
                                            <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded">{app.date}</span>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-3">{app.department} • {app.timeSlot}</p>

                                        {status === 'pending' && (
                                            <div className="flex gap-2 mt-2">
                                                <button
                                                    onClick={() => handleStatusUpdate(app._id, 'approved')}
                                                    className="flex-1 bg-success/10 text-success hover:bg-success hover:text-white py-2 rounded text-sm font-bold transition"
                                                >
                                                    Approve
                                                </button>
                                                <button
                                                    onClick={() => handleStatusUpdate(app._id, 'rejected')}
                                                    className="flex-1 bg-danger/10 text-danger hover:bg-danger hover:text-white py-2 rounded text-sm font-bold transition"
                                                >
                                                    Reject
                                                </button>
                                            </div>
                                        )}
                                        {status === 'approved' && (
                                            <button
                                                onClick={() => handleStatusUpdate(app._id, 'rejected')}
                                                className="w-full text-xs text-gray-400 hover:text-danger hover:underline mt-2 text-left"
                                            >
                                                Cancel Appointment
                                            </button>
                                        )}
                                    </div>
                                ))}
                                {appointments.filter(a => a.status === status).length === 0 && (
                                    <div className="text-center py-8 text-gray-400 italic text-sm">No items</div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DoctorAppointments;
