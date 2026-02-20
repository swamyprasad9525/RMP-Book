import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FaBell, FaTimes, FaBars } from "react-icons/fa";
import { motion } from "framer-motion";

// Hooks
import useScrolled from "../hooks/useScrolled";
import useMobileMenu from "../hooks/useMobileMenu";

// Components
import NavLink from "./common/NavLink";
import NavDropdown from "./common/NavDropdown";
import MobileDrawer from "./common/MobileDrawer";

const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    // State & Hooks
    const scrolled = useScrolled(50);
    const { isOpen: isMobileOpen, toggle: toggleMobile, close: closeMobile } = useMobileMenu();
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);

    const handleLogout = () => {
        logout();
        navigate("/login");
        closeMobile();
    };

    // Navigation Links Config
    const navLinks = [
        { name: "Home", path: "/" },
        // { name: "Doctors", path: "/doctors" }, // Uncomment when page exists
    ];

    // Hide Navbar on specific routes
    const location = useLocation();
    const hideOnRoutes = ["/login", "/register", "/patient-dashboard", "/doctor-dashboard"];
    if (hideOnRoutes.includes(location.pathname)) {
        return null;
    }

    if (user) {
        if (user.role === 'patient') {
            // Dashboard link is redundant if we hide navbar on dashboard, keeping for Home/Service pages
            navLinks.push({ name: "Dashboard", path: "/patient-dashboard" });
            navLinks.push({ name: "My Appointments", path: "/patient-dashboard" });
        } else {
            navLinks.push({ name: "Dashboard", path: "/doctor-dashboard" });
            navLinks.push({ name: "Schedule", path: "/doctor-dashboard" });
        }
    }

    return (
        <>
            {/* Main Navbar Container */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                    ? "bg-white/85 backdrop-blur-md shadow-sm border-white/20 py-2"
                    : "bg-white/60 backdrop-blur-sm border-transparent py-4"
                    }`}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">

                    {/* LOGO SECTION */}
                    <Link to="/" className="flex items-center gap-3 group relative z-50">
                        {/* Icon Container */}
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-accent/30 flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                        {/* Text Stack */}
                        <div className="flex flex-col">
                            <span className="text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent leading-none group-hover:translate-x-0.5 transition-transform duration-300">
                                RMP Book
                            </span>
                            <span className="text-[0.65rem] uppercase tracking-[0.2em] text-gray-500 font-bold leading-none mt-1">
                                Health Management
                            </span>
                        </div>
                    </Link>

                    {/* DESKTOP NAVIGATION */}
                    <div className="hidden md:flex items-center gap-1 bg-gray-100/50 p-1 rounded-full border border-gray-200/50 backdrop-blur-sm">
                        {navLinks.map((link) => (
                            <NavLink key={link.name + link.path} to={link.path}>
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* DESKTOP ACTIONS */}
                    <div className="hidden md:flex items-center gap-4">
                        {user ? (
                            <div className="flex items-center gap-4">
                                {/* Notification Bell */}
                                <button className="relative p-2 text-gray-400 hover:text-primary transition-colors transform hover:scale-110">
                                    <FaBell className="text-xl" />
                                    <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-danger rounded-full border-2 border-white animate-pulse-badge"></span>
                                </button>

                                {/* Profile Dropdown Trigger */}
                                <div className="relative">
                                    <button
                                        onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                                        className="flex items-center gap-3 pl-1 pr-3 py-1 rounded-full border border-gray-200 bg-white/50 hover:bg-white hover:shadow-md transition-all duration-300 group"
                                    >
                                        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br ${user.role === 'doctor' ? 'from-emerald-400 to-primary' : 'from-primary to-accent'}`}>
                                            {user.name.charAt(0)}
                                        </div>
                                        <div className="flex flex-col items-start mr-1">
                                            <span className="text-xs font-bold text-gray-700 leading-none group-hover:text-primary transition-colors">{user.name.split(' ')[0]}</span>
                                        </div>
                                    </button>

                                    {/* Dropdown Component */}
                                    <NavDropdown
                                        user={user}
                                        isOpen={showProfileDropdown}
                                        onClose={() => setShowProfileDropdown(false)}
                                        onLogout={handleLogout}
                                    />
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-3">
                                <Link
                                    to="/login"
                                    className="px-5 py-2 rounded-full border border-primary/30 text-primary font-bold hover:bg-primary/5 transition-all duration-300"
                                >
                                    Login
                                </Link>
                                <Link
                                    to="/register"
                                    className="px-6 py-2 rounded-full bg-gradient-to-r from-primary to-accent text-white font-bold shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5 transition-all duration-300"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* MOBILE TOGGLE */}
                    <button
                        onClick={toggleMobile}
                        className="md:hidden relative z-50 p-2 text-gray-600 hover:text-primary focus:outline-none"
                    >
                        {isMobileOpen
                            ? <FaTimes className="text-2xl" />
                            : <FaBars className="text-2xl" />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Drawer Component */}
            <MobileDrawer
                isOpen={isMobileOpen}
                onClose={closeMobile}
                user={user}
                onLogout={handleLogout}
            />
        </>
    );
};

export default Navbar;
