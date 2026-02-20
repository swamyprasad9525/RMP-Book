import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserCircle, FaCog, FaSignOutAlt, FaQuestionCircle } from 'react-icons/fa';
import useClickOutside from '../../hooks/useClickOutside';

const NavDropdown = ({ user, isOpen, onClose, onLogout }) => {
    const dropdownRef = useRef(null);
    useClickOutside(dropdownRef, onClose);

    if (!isOpen) return null;

    // Role badge colors
    const roleColors = user.role === 'doctor'
        ? 'bg-emerald-500/10 text-emerald-600'
        : 'bg-cyan-500/10 text-cyan-600';

    return (
        <AnimatePresence>
            <motion.div
                ref={dropdownRef}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-14 right-0 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-white/50 overflow-hidden z-50 transform origin-top-right"
            >
                {/* Header */}
                <div className="p-4 bg-gradient-to-br from-primary/5 to-accent/5 border-b border-gray-100/50">
                    <div className="flex flex-col items-center text-center">
                        <div className={`w-12 h-12 rounded-full mb-3 shadow-md flex items-center justify-center text-white text-lg font-bold bg-gradient-to-br ${user.role === 'doctor' ? 'from-emerald-400 to-primary' : 'from-primary to-accent'}`}>
                            {user.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                        </div>
                        <h4 className="font-bold text-gray-800">{user.name}</h4>
                        <p className="text-xs text-gray-500 mb-2">{user.email}</p>
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${roleColors}`}>
                            {user.role}
                        </span>
                    </div>
                </div>

                {/* Menu Items */}
                <div className="p-2">
                    <Link to="/profile" onClick={onClose} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 rounded-xl hover:bg-accent/5 transition-colors group">
                        <FaUserCircle className="text-gray-400 group-hover:text-accent transition-colors" />
                        My Profile
                    </Link>
                    <Link to="/settings" onClick={onClose} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 rounded-xl hover:bg-accent/5 transition-colors group">
                        <FaCog className="text-gray-400 group-hover:text-accent transition-colors" />
                        Settings
                    </Link>
                    <Link to="/help" onClick={onClose} className="flex items-center gap-3 px-4 py-3 text-sm text-gray-700 rounded-xl hover:bg-accent/5 transition-colors group">
                        <FaQuestionCircle className="text-gray-400 group-hover:text-accent transition-colors" />
                        Help & Support
                    </Link>

                    <div className="my-1 border-t border-gray-100/50"></div>

                    <button
                        onClick={() => { onLogout(); onClose(); }}
                        className="w-full flex items-center gap-3 px-4 py-3 text-sm text-danger rounded-xl hover:bg-danger/5 transition-colors group"
                    >
                        <FaSignOutAlt className="text-danger/70 group-hover:text-danger transition-colors" />
                        Sign Out
                    </button>
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default NavDropdown;
