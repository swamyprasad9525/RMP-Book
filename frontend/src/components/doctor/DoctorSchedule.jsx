import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaCalendarAlt, FaClock } from 'react-icons/fa';

const DoctorSchedule = ({ appointments }) => {
    const [date, setDate] = useState(new Date());

    // Filter appointments for selected date
    const selectedDateString = date.toISOString().split('T')[0];
    const dailyAppointments = appointments.filter(app =>
        app.date === selectedDateString && app.status === 'approved'
    ).sort((a, b) => a.timeSlot.localeCompare(b.timeSlot));

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-full">
            {/* Calendar Section */}
            <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold font-heading text-primary mb-6">Schedule Overview</h2>
                <div className="custom-calendar-wrapper">
                    <Calendar
                        onChange={setDate}
                        value={date}
                        className="w-full border-none shadow-sm rounded-xl p-4"
                        tileClassName={({ date, view }) => {
                            if (view === 'month') {
                                const dateString = date.toISOString().split('T')[0];
                                const hasApps = appointments.some(app => app.date === dateString && app.status === 'approved');
                                return hasApps ? 'bg-accent/10 text-accent font-bold rounded-full' : null;
                            }
                        }}
                    />
                </div>
            </div>

            {/* Daily List Section */}
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col h-full">
                <div className="mb-6 pb-4 border-b border-gray-100">
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        <FaCalendarAlt className="text-accent" />
                        {date.toDateString()}
                    </h3>
                    <p className="text-gray-500 mt-1">{dailyAppointments.length} appointments scheduled</p>
                </div>

                <div className="flex-1 overflow-y-auto space-y-4 custom-scrollbar">
                    {dailyAppointments.length > 0 ? (
                        dailyAppointments.map((app, i) => (
                            <div key={i} className="flex gap-4 p-4 rounded-xl bg-gray-50 border-l-4 border-accent">
                                <div className="text-center min-w-[60px]">
                                    <span className="block font-bold text-gray-800 text-lg">{app.timeSlot}</span>
                                    <span className="text-xs text-gray-500 flex items-center justify-center gap-1"><FaClock /> AM</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900">{app.patientName}</h4>
                                    <p className="text-sm text-gray-500">{app.department} Checkup</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="text-center py-10 text-gray-400">
                            <p>No appointments for this day.</p>
                            <p className="text-sm">Enjoy your free time!</p>
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .react-calendar { width: 100%; border: none; font-family: 'Inter', sans-serif; }
                .react-calendar__tile { padding: 1.5em 0.5em; }
                .react-calendar__tile--active { background: #0A2647 !important; color: white !important; border-radius: 8px; }
                .react-calendar__tile--now { background: #f0f8ff; color: #00B4D8; border-radius: 8px; }
            `}</style>
        </div>
    );
};

export default DoctorSchedule;
