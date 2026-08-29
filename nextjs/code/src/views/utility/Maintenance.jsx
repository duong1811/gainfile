import React from 'react';
import { motion } from 'framer-motion';
import { FaTools, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';
import Link from 'next/link';

const Maintenance = () => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#030712] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 bg-gradient-to-tr from-orange-900/10 via-transparent to-indigo-900/10 opacity-40" />
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="glass-card max-w-2xl w-full p-16 rounded-[48px] text-center relative z-10 border border-white/5 border-b-white/10 shadow-3xl"
            >
                <div className="relative inline-block mb-10">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-28 h-28 mx-auto"
                    >
                        <div className="absolute inset-0 rounded-full border-4 border-dashed border-orange-500/30 blur-sm" />
                        <div className="absolute inset-2 rounded-full border-4 border-dashed border-orange-500/50" />
                    </motion.div>
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute inset-0 flex items-center justify-center text-4xl text-orange-400"
                    >
                        <FaTools />
                    </motion.div>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">System Refinement <br />In Progress</h1>
                
                <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    We're currently polishing the gears to bring you a smoother experience. We'll be back online in just a few minutes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12">
                    {[
                        { icon: <FaCheckCircle/>, label: "Core Services", status: "Operational", color: "text-green-500" },
                        { icon: <FaTools/>, label: "Data Pipeline", status: "Polishing", color: "text-orange-500" },
                        { icon: <FaExclamationTriangle/>, label: "Frontend", status: "Paused", color: "text-red-500" }
                    ].map((item, i) => (
                        <div key={i} className="bg-white/5 p-4 rounded-2xl border border-white/10 text-center">
                            <div className={`flex justify-center mb-2 ${item.color}`}>{item.icon}</div>
                            <div className="text-xs text-gray-500 uppercase tracking-widest font-semibold mb-1">{item.label}</div>
                            <div className={`text-sm font-bold ${item.color}`}>{item.status}</div>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/dashboard">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-bold transition-all shadow-xl shadow-orange-500/25 flex items-center justify-center gap-2"
                        >
                            Return to Safety
                        </motion.button>
                    </Link>
                    
                    <Link href="/support">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold transition-all flex items-center justify-center gap-2"
                        >
                            Need Urgent Help?
                        </motion.button>
                    </Link>
                </div>
            </motion.div>
            
            {/* Spinning background gears */}
            <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
               className="absolute -top-32 -right-32 text-[20rem] text-orange-500/5 opacity-20 pointer-events-none"
            >
                <FaTools />
            </motion.div>
            <motion.div 
               animate={{ rotate: -360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute -bottom-32 -left-32 text-[15rem] text-indigo-500/5 opacity-20 pointer-events-none"
            >
                <FaTools />
            </motion.div>
        </div>
    );
};

export default Maintenance;
