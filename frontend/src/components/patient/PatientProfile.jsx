import { FaUserCircle, FaEnvelope, FaIdBadge } from "react-icons/fa";

const PatientProfile = ({ user }) => {
    return (
        <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-primary to-accent"></div>
                <div className="px-8 pb-8">
                    <div className="relative -top-12 mb-[-30px]">
                        <div className="w-24 h-24 rounded-full bg-white p-1 shadow-lg inline-block">
                            <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-4xl">
                                <FaUserCircle />
                            </div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                        <p className="text-gray-500 capitalize">{user.role}</p>
                    </div>

                    <div className="mt-8 space-y-6">
                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                <FaEnvelope />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">Email Address</p>
                                <p className="text-gray-900 font-medium">{user.email}</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100">
                            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                                <FaIdBadge />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase font-bold tracking-wider">User ID</p>
                                <p className="text-gray-900 font-medium font-mono text-sm">{user._id}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-8 border-t border-gray-100 text-center">
                        <p className="text-sm text-gray-400">
                            To update your profile information, please contact administrator.<br />
                            <span className="text-xs">(Self-update feature coming soon)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientProfile;
