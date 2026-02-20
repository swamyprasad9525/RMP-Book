import { NavLink as RouterNavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavLink = ({ to, children, onClick }) => {
    return (
        <RouterNavLink
            to={to}
            onClick={onClick}
            className={({ isActive }) =>
                `relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group ${isActive
                    ? "text-primary font-semibold shadow-sm"
                    : "text-gray-600 hover:text-primary hover:bg-cyan-500/5 hover:-translate-y-px"
                }`
            }
        >
            {({ isActive }) => (
                <>
                    {/* Active Background Gradient */}
                    {isActive && (
                        <motion.div
                            layoutId="nav-pill"
                            className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/15 -z-10"
                            initial={false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    )}

                    {/* Content */}
                    <span className="relative z-10">{children}</span>

                    {/* Active Dot indicator */}
                    {isActive && (
                        <motion.div
                            layoutId="nav-dot"
                            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent"
                        />
                    )}

                    {/* Hover Ripple Effect (CSS animation in index.css) */}
                    <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ripple-bg"></span>
                </>
            )}
        </RouterNavLink>
    );
};

export default NavLink;
