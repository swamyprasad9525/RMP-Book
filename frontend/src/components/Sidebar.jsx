import { motion } from "framer-motion";
import { FaHome, FaCalendarPlus, FaList, FaUser, FaSignOutAlt, FaTimes } from "react-icons/fa";

const Sidebar = ({ role, activeTab, setActiveTab, isOpen, setIsOpen, logout }) => {
    const menus = role === 'patient' ? [
        { name: "Home", icon: FaHome, id: "home" },
        { name: "Book Appointment", icon: FaCalendarPlus, id: "book" },
        { name: "My Appointments", icon: FaList, id: "appointments" },
        { name: "Profile", icon: FaUser, id: "profile" },
    ] : [
        { name: "Dashboard", icon: FaHome, id: "home" },
        { name: "Appointments", icon: FaList, id: "appointments" },
        { name: "Schedule", icon: FaCalendarPlus, id: "schedule" },
        { name: "Profile", icon: FaUser, id: "profile" },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* Sidebar */}
            <motion.div
                className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-2xl font-heading font-bold text-primary">MediBook</h2>
                    <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-500 hover:text-danger">
                        <FaTimes />
                    </button>
                </div>

                <div className="p-4 space-y-2">
                    {menus.map((menu) => (
                        <button
                            key={menu.id}
                            onClick={() => {
                                setActiveTab(menu.id);
                                setIsOpen(false);
                            }}
                            className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors ${activeTab === menu.id
                                ? "bg-accent/10 text-accent"
                                : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                                }`}
                        >
                            <menu.icon className="text-lg" />
                            {menu.name}
                        </button>
                    ))}
                </div>

                <div className="absolute bottom-0 w-full p-4 border-t border-gray-100">
                    <button
                        onClick={logout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium text-danger hover:bg-red-50 transition-colors"
                    >
                        <FaSignOutAlt className="text-lg" />
                        Logout
                    </button>
                </div>
            </motion.div>
        </>
    );
};

export default Sidebar;
