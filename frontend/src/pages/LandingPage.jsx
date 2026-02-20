import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUserMd, FaCalendarCheck, FaNotesMedical, FaCheckCircle, FaArrowRight, FaStar, FaClock, FaShieldAlt, FaLock, FaHospital, FaPlay, FaSearch, FaBell } from 'react-icons/fa';

const LandingPage = () => {
    return (
        <div className="font-sans text-gray-900 bg-gray-50">

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-[#060f1e] text-white pt-32 pb-20">

                {/* 🌌 PHASE 1: BACKGROUND DESIGN */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#060f1e] via-[#0a1f3d] to-[#091929]"></div>

                {/* Mesh Gradient Blobs */}
                <div className="absolute -top-[200px] -left-[200px] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.12)_0%,transparent_65%)] blur-[80px] animate-blob-1 pointer-events-none"></div>
                <div className="absolute -bottom-[100px] -right-[100px] w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.09)_0%,transparent_65%)] blur-[60px] animate-blob-2 pointer-events-none"></div>
                <div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(6,214,160,0.06)_0%,transparent_70%)] blur-[50px] animate-blob-3 pointer-events-none"></div>

                {/* Dot Grid Pattern */}
                <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(0,180,216,0.15)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 pointer-events-none"></div>

                {/* Horizontal Light Beam */}
                <div className="absolute top-[35%] left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-40"></div>

                {/* Bottom Fade */}
                <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-[#060f1e] to-transparent"></div>

                <div className="container mx-auto px-8 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 h-full items-center max-w-[1280px]">

                    {/* ✍️ LEFT SIDE - TEXT CONTENT */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-10 lg:pt-0">

                        {/* Eyebrow Label */}
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-accent/10 border border-accent/25 backdrop-blur-md mb-7 animate-slide-up-fade" style={{ animationDelay: '0s' }}>
                            <div className="relative w-4 h-4 flex items-center justify-center">
                                <div className="absolute inset-0 rounded-full bg-[#06D6A0]/20 animate-ring-pulse"></div>
                                <div className="w-2 h-2 rounded-full bg-[#06D6A0] shadow-[0_0_8px_rgba(6,214,160,0.8)]"></div>
                            </div>
                            <span className="text-xs font-bold text-white/85 tracking-wide">India's Smartest Appointment Platform</span>
                        </div>

                        {/* Main Headline */}
                        <div className="mb-6 space-y-2">
                            <h1 className="text-5xl lg:text-[5.5rem] font-black leading-[1.0] tracking-tight text-white animate-slide-up-fade" style={{ animationDelay: '0.2s' }}>
                                Book Smarter.
                            </h1>
                            <h1 className="text-5xl lg:text-[5.5rem] font-black leading-[1.0] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#06D6A0] to-accent bg-[length:200%_auto] animate-shimmer animate-slide-up-fade" style={{ animationDelay: '0.35s' }}>
                                Heal Faster.
                            </h1>
                            <h1 className="text-5xl lg:text-[5.5rem] font-black leading-[1.0] tracking-tight text-white/35 animate-slide-up-fade" style={{ animationDelay: '0.5s' }}>
                                Live Better.
                            </h1>
                        </div>

                        {/* Subheadline */}
                        <p className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg animate-fade-in" style={{ animationDelay: '0.65s' }}>
                            Skip the waiting room. Connect with verified specialists, book confirmed slots, and manage your entire health journey — from anywhere, in minutes.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto animate-slide-up-fade" style={{ animationDelay: '0.8s' }}>
                            <Link to="/register" className="group relative overflow-hidden bg-gradient-to-br from-accent to-[#0096c7] text-white font-bold py-4 px-9 rounded-2xl shadow-[0_8px_32px_rgba(0,180,216,0.4)] hover:shadow-[0_12px_40px_rgba(0,180,216,0.55)] transform hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3">
                                {/* Shine Effect */}
                                <div className="absolute top-0 -left-[100%] w-[60%] h-full bg-gradient-to-r from-transparent via-white/15 to-transparent skew-x-[-20deg] group-hover:left-[150%] transition-all duration-700 ease-in-out"></div>
                                <span>Book Appointment</span>
                                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <button className="flex items-center gap-3 bg-white/5 text-white/85 font-semibold py-4 px-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-accent/30 backdrop-blur-md transition-all duration-300 w-full sm:w-auto justify-center">
                                <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center text-[10px] text-accent">
                                    <FaPlay />
                                </div>
                                How It Works
                            </button>
                        </div>

                        {/* Trust Bar */}
                        <div className="mt-12 pt-8 border-t border-white/10 w-full flex flex-wrap items-center gap-8 animate-fade-in" style={{ animationDelay: '1.0s' }}>
                            {[
                                { icon: FaShieldAlt, color: "#06D6A0", text: "ABDM Compliant" },
                                { icon: FaStar, color: "#FFD166", text: "4.8 App Rating" },
                                { icon: FaHospital, color: "#00B4D8", text: "15+ Specialties" },
                                { icon: FaLock, color: "#06D6A0", text: "SSL Secured" }
                            ].map((item, idx) => (
                                <React.Fragment key={idx}>
                                    <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity">
                                        <item.icon style={{ color: item.color }} className="text-lg" />
                                        <span className="text-xs font-bold text-white/50 tracking-wider uppercase">{item.text}</span>
                                    </div>
                                    {idx < 3 && <div className="hidden sm:block w-px h-5 bg-white/10"></div>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    {/* 🖼️ RIGHT SIDE - VISUAL SHOWCASE */}
                    <div className="relative h-[580px] hidden lg:flex items-center justify-center">

                        {/* Background Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.15)_0%,transparent_65%)] blur-[40px] pointer-events-none animate-fade-in" style={{ animationDelay: '1.1s' }}></div>

                        {/* MAIN APP MOCKUP CARD */}
                        <div className="relative z-10 w-[300px] h-[480px] bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-5 shadow-[0_40px_80px_rgba(0,0,0,0.5)] animate-card-float animate-scale-in" style={{ animationDelay: '0.3s' }}>

                            {/* App Header */}
                            <div className="flex justify-between items-center mb-4">
                                <span className="text-accent font-bold text-sm tracking-wide">RMP Book</span>
                                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-white/80">
                                    <FaBell className="text-xs" />
                                </div>
                            </div>

                            {/* Search Bar */}
                            <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-3 mb-4">
                                <FaSearch className="text-white/30 text-xs" />
                                <span className="text-[10px] text-white/30">Search doctors, specialties...</span>
                            </div>

                            {/* Section Label */}
                            <h4 className="text-[10px] uppercase font-bold text-white/40 tracking-widest mb-3">Available Specialists</h4>

                            {/* Dept Pills */}
                            <div className="flex gap-2 overflow-hidden mb-4">
                                {['All', 'Cardiology', 'Neuro', 'Pedia'].map((dept, i) => (
                                    <span key={i} className={`text-[10px] font-bold px-3 py-1 rounded-full border ${i === 0 ? 'bg-accent/20 border-accent/40 text-accent' : 'bg-white/5 border-white/10 text-white/40'}`}>
                                        {dept}
                                    </span>
                                ))}
                            </div>

                            {/* Doctor List */}
                            <div className="space-y-2">
                                {[
                                    { name: "Dr. A. Sharma", spec: "Cardiology", initials: "AS", grad: "from-red-500 to-red-700", active: true },
                                    { name: "Dr. R. Menon", spec: "Neurology", initials: "RM", grad: "from-purple-500 to-purple-700", active: false },
                                    { name: "Dr. P. Nair", spec: "Pediatrics", initials: "PN", grad: "from-amber-500 to-amber-700", active: false }
                                ].map((doc, i) => (
                                    <div key={i} className={`flex items-center gap-3 p-2.5 rounded-xl border transition-all ${doc.active ? 'bg-accent/10 border-accent/25' : 'bg-white/5 border-white/5'}`}>
                                        <div className={`w-9 h-9 rounded-[10px] bg-gradient-to-br ${doc.grad} flex items-center justify-center text-xs font-bold shadow-sm`}>{doc.initials}</div>
                                        <div className="flex-1">
                                            <h5 className="text-xs font-bold text-white">{doc.name}</h5>
                                            <p className="text-[10px] text-white/50">{doc.spec}</p>
                                        </div>
                                        <span className={`text-[10px] ${doc.active ? 'text-accent' : 'text-white/20'}`}>{doc.active ? 'Book →' : '→'}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Book Confirmed Slot Button */}
                            <div className="mt-4 bg-gradient-to-r from-accent to-[#0096c7] p-3 rounded-xl text-center shadow-lg shadow-accent/20">
                                <p className="text-xs font-bold">📅 Book Confirmed Slot</p>
                            </div>
                        </div>

                        {/* Floating Card 1: Appointment Confirmed */}
                        <div className="absolute -top-5 -right-[80px] bg-white/90 backdrop-blur-xl p-4 rounded-2xl border border-white/50 shadow-2xl min-w-[210px] animate-float-1 animate-fade-in z-20" style={{ animationDelay: '0.7s' }}>
                            <div className="flex items-center gap-3 mb-2">
                                <div className="w-6 h-6 rounded-full bg-[#06D6A0] flex items-center justify-center shadow-[0_0_12px_rgba(6,214,160,0.5)]">
                                    <FaCheckCircle className="text-white text-[10px]" />
                                </div>
                                <span className="text-xs font-bold text-[#0A2647]">Appt Confirmed</span>
                            </div>
                            <div className="pl-9">
                                <p className="text-[10px] text-slate-500 font-semibold">🕐 Tomorrow, 10:30 AM</p>
                                <p className="text-[9px] text-slate-400">📍 Cardiology Dept</p>
                            </div>
                        </div>

                        {/* Floating Card 2: Time Picker */}
                        <div className="absolute bottom-10 -left-[100px] bg-white p-4 rounded-2xl shadow-2xl min-w-[200px] animate-float-2 animate-fade-in z-20" style={{ animationDelay: '0.9s' }}>
                            <p className="text-[10px] font-bold text-[#0A2647] mb-3">Pick a Time</p>
                            <div className="grid grid-cols-2 gap-2">
                                {['09:00 AM', '10:30 AM', '02:00 PM', '04:30 PM'].map((time, i) => (
                                    <div key={i} className={`text-[9px] font-bold px-2 py-1.5 rounded-lg text-center ${i === 0 ? 'bg-accent text-white' : 'bg-slate-100 text-slate-500'}`}>
                                        {time}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vertical Specialty Pills */}
                        <div className="absolute top-1/2 -right-[60px] -translate-y-1/2 flex flex-col gap-3">
                            {['🫀', '🧠', '🦷', '👁️'].map((icon, i) => (
                                <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex items-center justify-center text-xl shadow-lg animate-pill-float animate-fade-in" style={{ animationDelay: `${1.0 + (i * 0.2)}s` }}>
                                    {icon}
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-16">How It Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            { icon: FaUserMd, title: "Register", desc: "Create your free account as a patient to get started." },
                            { icon: FaCalendarCheck, title: "Book Appointment", desc: "Choose a doctor and pick a time slot that suits you." },
                            { icon: FaCheckCircle, title: "Get Confirmed", desc: "Receive instant confirmation and visit the doctor." }
                        ].map((step, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="p-8 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition"
                            >
                                <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary text-3xl">
                                    <step.icon />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-800">{step.title}</h3>
                                <p className="text-gray-600">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-light">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">Why Choose RMP Book?</h2>
                            <div className="space-y-6">
                                {[
                                    "Role-Based Dashboards for Patients & Doctors",
                                    "Real-time Appointment Status Updates",
                                    "Secure & Private Health Data",
                                    "Easy Scheduling & Cancellation"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <FaCheckCircle className="text-success text-xl flex-shrink-0" />
                                        <p className="text-lg text-gray-700">{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-xl rotate-2 hover:rotate-0 transition duration-500">
                            {/* Mock UI Representation */}
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-accent">
                                    <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center text-accent"><FaCalendarCheck /></div>
                                    <div>
                                        <h4 className="font-bold text-primary">Appointment Confirmed</h4>
                                        <p className="text-xs text-gray-500">Dr. Smith • Cardio • 10:00 AM</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border-l-4 border-warning">
                                    <div className="w-10 h-10 bg-warning/20 rounded-full flex items-center justify-center text-warning"><FaNotesMedical /></div>
                                    <div>
                                        <h4 className="font-bold text-primary">Pending Approval</h4>
                                        <p className="text-xs text-gray-500">Dr. Doe • Neuro • 12:30 PM</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-primary text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-6 md:mb-0">
                            <h3 className="text-2xl font-heading font-bold">RMP Book</h3>
                            <p className="text-gray-400 mt-2">Simplify your healthcare journey.</p>
                        </div>
                        <div className="flex gap-8 text-gray-300">
                            <Link to="/login" className="hover:text-accent transition">Login</Link>
                            <Link to="/register" className="hover:text-accent transition">Register</Link>
                            <span className="cursor-pointer hover:text-accent transition">About</span>
                            <span className="cursor-pointer hover:text-accent transition">Contact</span>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-500 text-sm">
                        © 2026 RMP Book System. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;
