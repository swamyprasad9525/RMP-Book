import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserMd, FaCalendarAlt, FaCheck, FaStethoscope, FaArrowRight, FaArrowLeft, FaSpinner } from "react-icons/fa";

const BookAppointment = ({ onSuccess }) => {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);
    const [formData, setFormData] = useState({
        department: "",
        doctorName: "",
        date: "",
        timeSlot: ""
    });

    const [doctors, setDoctors] = useState([]);

    // Fetch doctors on mount
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const { data } = await axios.get("/api/doctors");
                setDoctors(data);
            } catch (error) {
                console.error("Failed to fetch doctors", error);
            }
        };
        fetchDoctors();
    }, []);

    // Filter unique departments from fetched doctors
    const departments = [...new Set(doctors.map(doc => doc.department).filter(Boolean))];



    const handleNext = () => setStep(step + 1);
    const handleBack = () => setStep(step - 1);

    const handleSubmit = async () => {
        setLoading(true);
        try {
            await axios.post("/api/appointments", formData, {
                headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
            });
            setMessage({ type: 'success', text: "Appointment Booked Successfully!" });
            setTimeout(() => {
                setStep(1);
                setFormData({ department: "", doctorName: "", date: "", timeSlot: "" });
                setMessage(null);
                onSuccess();
            }, 2000);
        } catch (error) {
            setMessage({ type: 'error', text: "Booking Failed. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-lg p-6 max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold text-primary mb-6">Book an Appointment</h2>

            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-8 relative">
                <div className="absolute left-0 top-1/2 w-full h-1 bg-gray-200 -z-0"></div>
                {[1, 2, 3].map((s) => (
                    <div key={s} className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${step >= s ? "bg-accent text-white" : "bg-gray-200 text-gray-500"}`}>
                        {s}
                    </div>
                ))}
            </div>

            {/* Message Toast */}
            {message && (
                <div className={`p-4 mb-4 rounded-lg text-center ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {message.text}
                </div>
            )}

            <AnimatePresence mode="wait">
                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                    >
                        <h3 className="text-lg font-bold mb-4">Select Department</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {departments.map((dept) => (
                                <button
                                    key={dept}
                                    onClick={() => setFormData({ ...formData, department: dept, doctorName: "" })}
                                    className={`p-6 rounded-xl border-2 flex flex-col items-center gap-3 transition hover:shadow-md ${formData.department === dept ? "border-accent bg-accent/5 text-accent" : "border-gray-100 hover:border-accent/50"}`}
                                >
                                    <FaStethoscope className="text-3xl" />
                                    <span className="font-medium">{dept}</span>
                                </button>
                            ))}
                        </div>
                        <div className="mt-8 flex justify-end">
                            <button
                                onClick={handleNext}
                                disabled={!formData.department}
                                className="bg-primary text-white px-6 py-2 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                Next <FaArrowRight />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-6"
                    >
                        <h3 className="text-lg font-bold mb-4">Select Details</h3>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Select Doctor</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                                    <FaUserMd />
                                </div>
                                <select
                                    required
                                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition appearance-none bg-white"
                                    value={formData.doctorName}
                                    onChange={(e) => {
                                        const selectedDoc = doctors.find(d => d.name === e.target.value);
                                        setFormData({
                                            ...formData,
                                            doctorName: e.target.value,
                                            // Auto-update department if doctor is selected directly (though flow forces dept first, this is safe)
                                            department: selectedDoc ? selectedDoc.department : formData.department
                                        });
                                    }}
                                >
                                    <option value="">Choose a doctor...</option>
                                    {doctors
                                        .filter(doc => !formData.department || doc.department === formData.department)
                                        .map((doc) => (
                                            <option key={doc._id} value={doc.name}>
                                                {doc.name} {formData.department ? '' : `(${doc.department})`}
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>

                        {/* Custom Date Selection */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Select Date</label>
                            <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
                                {(() => {
                                    const days = [];
                                    const today = new Date();
                                    for (let i = 0; i < 14; i++) {
                                        const d = new Date(today);
                                        d.setDate(today.getDate() + i);
                                        days.push({
                                            full: d.toISOString().split('T')[0],
                                            day: d.toLocaleDateString('en-US', { weekday: 'short' }),
                                            date: d.getDate()
                                        });
                                    }
                                    return days.map((dayItem) => (
                                        <button
                                            key={dayItem.full}
                                            onClick={() => setFormData({ ...formData, date: dayItem.full })}
                                            className={`flex-shrink-0 w-16 h-20 rounded-xl flex flex-col items-center justify-center border-2 transition ${formData.date === dayItem.full ? 'bg-primary text-white border-primary shadow-lg scale-105' : 'bg-white border-gray-100 text-gray-500 hover:border-gray-200'}`}
                                        >
                                            <span className="text-xs font-medium uppercase">{dayItem.day}</span>
                                            <span className="text-xl font-bold">{dayItem.date}</span>
                                        </button>
                                    ));
                                })()}
                            </div>
                        </div>

                        {/* Custom Time Selection */}
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Select Time Slot</label>
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
                                {[
                                    "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
                                    "11:00 AM", "11:30 AM", "04:00 PM", "04:30 PM",
                                    "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM"
                                ].map((slot) => (
                                    <button
                                        key={slot}
                                        onClick={() => setFormData({ ...formData, timeSlot: slot })}
                                        className={`py-2 px-3 rounded-lg text-sm font-bold border-2 transition ${formData.timeSlot === slot ? 'bg-accent text-white border-accent shadow-md' : 'bg-white border-gray-100 text-gray-500 hover:border-accent/30'}`}
                                    >
                                        {slot}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8 flex justify-between">
                            <button onClick={handleBack} className="text-gray-500 font-bold flex items-center gap-2"><FaArrowLeft /> Back</button>
                            <button
                                onClick={handleNext}
                                disabled={!formData.doctorName || !formData.date || !formData.timeSlot}
                                className="bg-primary text-white px-6 py-2 rounded-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                Next <FaArrowRight />
                            </button>
                        </div>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="text-center"
                    >
                        <h3 className="text-lg font-bold mb-6">Review & Confirm</h3>
                        <div className="bg-light p-6 rounded-xl border border-blue-100 max-w-sm mx-auto mb-8 text-left">
                            <div className="space-y-4">
                                <div className="flex justify-between border-b border-blue-200 pb-2">
                                    <span className="text-gray-500">Department</span>
                                    <span className="font-bold text-primary">{formData.department}</span>
                                </div>
                                <div className="flex justify-between border-b border-blue-200 pb-2">
                                    <span className="text-gray-500">Doctor</span>
                                    <span className="font-bold text-primary">{formData.doctorName}</span>
                                </div>
                                <div className="flex justify-between border-b border-blue-200 pb-2">
                                    <span className="text-gray-500">Date</span>
                                    <span className="font-bold text-primary">{formData.date}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Time</span>
                                    <span className="font-bold text-primary">{formData.timeSlot}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between">
                            <button onClick={handleBack} className="text-gray-500 font-bold flex items-center gap-2"><FaArrowLeft /> Back</button>
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="bg-success hover:bg-green-500 text-white px-8 py-3 rounded-lg font-bold shadow-lg transform transition hover:scale-105 flex items-center gap-2"
                            >
                                {loading ? <FaSpinner className="animate-spin" /> : <>Confirm Booking <FaCheck /></>}
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    );
};

export default BookAppointment;
