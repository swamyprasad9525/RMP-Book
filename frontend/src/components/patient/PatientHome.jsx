import { motion } from "framer-motion";
import { FaCalendarCheck, FaClock, FaTimesCircle, FaCheckCircle } from "react-icons/fa";

const PatientHome = ({ user, appointments }) => {
    const stats = {
        total: appointments.length,
        pending: appointments.filter(a => a.status === 'pending').length,
        approved: appointments.filter(a => a.status === 'approved').length,
        rejected: appointments.filter(a => a.status === 'rejected').length,
    };

    const nextAppointment = appointments
        .filter(a => a.status === 'approved')
        .sort((a, b) => new Date(a.date) - new Date(b.date))[0];

    return (
        <div className="space-y-6">
            {/* Welcome Card */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-white shadow-lg"
            >
                <h1 className="text-3xl font-heading font-bold mb-2">Welcome back, {user.name} 👋</h1>
                <p className="opacity-90">Here's an overview of your health appointments.</p>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Booked", value: stats.total, icon: FaCalendarCheck, color: "text-blue-500", bg: "bg-blue-100" },
                    { label: "Pending", value: stats.pending, icon: FaClock, color: "text-warning", bg: "bg-orange-100" },
                    { label: "Approved", value: stats.approved, icon: FaCheckCircle, color: "text-success", bg: "bg-green-100" },
                    { label: "Rejected", value: stats.rejected, icon: FaTimesCircle, color: "text-danger", bg: "bg-red-100" },
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition"
                    >
                        <div className={`p-4 rounded-full ${stat.bg} ${stat.color} text-xl`}>
                            <stat.icon />
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                            <h3 className="text-2xl font-bold font-heading text-gray-800">{stat.value}</h3>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Next Appointment Widget */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-heading font-bold text-lg text-gray-800 mb-4">Up Next</h3>
                    {nextAppointment ? (
                        <div className="flex items-center gap-4 p-4 bg-light rounded-lg border-l-4 border-accent">
                            <div className="bg-white p-3 rounded-full shadow-sm">
                                <FaCalendarCheck className="text-accent text-xl" />
                            </div>
                            <div>
                                <h4 className="font-bold text-primary">{nextAppointment.doctorName}</h4>
                                <p className="text-sm text-gray-600">{nextAppointment.department} • {nextAppointment.date} at {nextAppointment.timeSlot}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-gray-500 italic">No upcoming approved appointments.</p>
                    )}
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-heading font-bold text-lg text-gray-800 mb-4">Recent Activity</h3>
                    <ul className="space-y-4">
                        {appointments.slice(0, 3).map((app, i) => (
                            <li key={i} className="flex items-center justify-between text-sm">
                                <span className="text-gray-700">Booked with <strong>{app.doctorName}</strong></span>
                                <span className="text-gray-400">{app.date}</span>
                            </li>
                        ))}
                        {appointments.length === 0 && <p className="text-gray-500 italic">No recent activity.</p>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PatientHome;
