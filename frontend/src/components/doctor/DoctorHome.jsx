import { motion } from "framer-motion";
import { FaUserInjured, FaCalendarCheck, FaChartLine, FaWallet } from "react-icons/fa";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const DoctorHome = ({ user, appointments }) => {
    // Calculate stats
    const stats = {
        patients: new Set(appointments.map(a => a.patientName)).size,
        appointments: appointments.length,
        today: appointments.filter(a => a.date === new Date().toISOString().split('T')[0]).length,
        earnings: appointments.filter(a => a.status === 'approved').length * 50 // Mock $50 per appointment
    };

    // Mock data for chart - in real app, derive from appointments by date
    const data = [
        { name: 'Mon', apps: 4 },
        { name: 'Tue', apps: 3 },
        { name: 'Wed', apps: 7 },
        { name: 'Thu', apps: 5 },
        { name: 'Fri', apps: 8 },
        { name: 'Sat', apps: 6 },
        { name: 'Sun', apps: 2 },
    ];

    return (
        <div className="space-y-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex justify-between items-center"
            >
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-800">Welcome, Dr. {user.name} 👨‍⚕️</h1>
                    <p className="text-gray-500">You have {stats.today} appointments scheduled for today.</p>
                </div>
                <div className="hidden md:block">
                    <button className="bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-secondary transition">View Schedule</button>
                </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: "Total Patients", value: stats.patients, icon: FaUserInjured, color: "text-blue-500", bg: "bg-blue-100" },
                    { label: "Appointments", value: stats.appointments, icon: FaCalendarCheck, color: "text-purple-500", bg: "bg-purple-100" },
                    { label: "Today's Visit", value: stats.today, icon: FaChartLine, color: "text-warning", bg: "bg-orange-100" },
                    { label: "Earnings", value: `$${stats.earnings}`, icon: FaWallet, color: "text-success", bg: "bg-green-100" },
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

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-96">
                    <h3 className="font-heading font-bold text-lg text-gray-800 mb-6">Appointment Analytics</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF' }} />
                            <Tooltip contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }} />
                            <Area type="monotone" dataKey="apps" stroke="#00B4D8" fill="#00B4D8" fillOpacity={0.1} strokeWidth={3} />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <h3 className="font-heading font-bold text-lg text-gray-800 mb-4">Recent Requests</h3>
                    <div className="space-y-4">
                        {appointments.filter(a => a.status === 'pending').slice(0, 4).map((app, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm font-bold">
                                    {app.patientName.charAt(0)}
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <h4 className="font-bold text-sm text-gray-900 truncate">{app.patientName}</h4>
                                    <p className="text-xs text-gray-500 truncate">{app.date} • {app.timeSlot}</p>
                                </div>
                                <span className="text-xs font-bold text-warning bg-orange-100 px-2 py-1 rounded">Pending</span>
                            </div>
                        ))}
                        {appointments.filter(a => a.status === 'pending').length === 0 && (
                            <p className="text-gray-500 text-sm text-center py-4">No pending requests</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorHome;
