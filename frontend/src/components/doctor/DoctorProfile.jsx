import { FaUserMd, FaEnvelope, FaHospital, FaStethoscope } from "react-icons/fa";

const DoctorProfile = ({ user }) => {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-40 bg-gradient-to-r from-primary to-secondary relative flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <h1 className="relative z-10 text-3xl font-heading font-bold text-white tracking-widest uppercase">Doctor Profile</h1>
                </div>
                <div className="px-8 pb-8">
                    <div className="relative -top-16 mb-[-40px] flex justify-center">
                        <div className="w-32 h-32 rounded-full bg-white p-2 shadow-xl">
                            <div className="w-full h-full rounded-full bg-gray-100 flex items-center justify-center text-primary text-5xl">
                                <FaUserMd />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <h2 className="text-3xl font-bold text-gray-900">{user.name}</h2>
                        <span className="inline-block px-4 py-1 rounded-full bg-accent/10 text-accent font-bold text-sm mt-2 uppercase tracking-wide">
                            {user.role}
                        </span>
                    </div>

                    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 text-xl">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email</p>
                                <p className="text-gray-900 font-medium">{user.email}</p>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 text-xl">
                                <FaHospital />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Affiliation</p>
                                <p className="text-gray-900 font-medium">MediBook Hospital</p>
                            </div>
                        </div>

                        <div className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-center gap-4 md:col-span-2">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 text-xl">
                                <FaStethoscope />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Specialization</p>
                                <p className="text-gray-900 font-medium">General Medicine (Default)</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <button className="text-accent font-bold hover:underline text-sm">Valid License Verified ✅</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
