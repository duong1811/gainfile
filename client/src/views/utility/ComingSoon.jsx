import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRocket, FaEnvelope, FaBell } from 'react-icons/fa';
import Link from 'next/link';

const ComingSoon = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        setSubscribed(true);
        setEmail('');
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#030712] relative overflow-hidden">
            {/* Background Animations */}
            <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent opacity-50" />
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
                <motion.div 
                    animate={{ y: [0, -100, 0], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="absolute top-1/2 left-1/4 w-px h-64 bg-gradient-to-t from-transparent via-purple-500 to-transparent"
                />
                <motion.div 
                    animate={{ y: [100, 0, 100], opacity: [0, 0.5, 0] }}
                    transition={{ duration: 12, repeat: Infinity, delay: 2 }}
                    className="absolute top-1/3 left-3/4 w-px h-48 bg-gradient-to-t from-transparent via-indigo-500 to-transparent"
                />
            </div>
            
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="glass-card max-w-3xl w-full p-16 rounded-[40px] text-center relative z-10 border border-white/5 border-t-white/10"
            >
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex justify-center mb-10"
                >
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-purple-600/30 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <motion.div
                             animate={{ y: [0, -10, 0] }}
                             transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                             className="w-24 h-24 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl flex items-center justify-center text-5xl text-white shadow-2xl relative z-10"
                        >
                            <FaRocket />
                        </motion.div>
                    </div>
                </motion.div>
                
                <h1 className="text-5xl font-black mb-6 text-white leading-tight">Something Big Is <br />
                    <motion.span 
                        className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        On The Way
                    </motion.span>
                </h1>
                
                <p className="text-xl text-gray-400 mb-12 max-w-lg mx-auto leading-relaxed">
                    We're building the future of productivity. Be the first to know when we launch and get exclusive early-access perks.
                </p>

                <AnimatePresence mode="wait">
                    {!subscribed ? (
                        <motion.form 
                            key="subscribe"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            onSubmit={handleSubscribe}
                            className="flex flex-col sm:flex-row items-center justify-center gap-3"
                        >
                            <div className="relative flex-1 w-full max-w-sm group">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition-colors" />
                                <input 
                                    type="email" 
                                    required
                                    placeholder="Enter your email address" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-4 focus:ring-purple-500/10 transition-all text-lg"
                                />
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold hover:bg-gray-100 transition-all shadow-xl flex items-center justify-center gap-2"
                            >
                                <FaBell className="text-sm" /> Notify Me
                            </motion.button>
                        </motion.form>
                    ) : (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-400 font-medium inline-flex items-center gap-2"
                        >
                            🎉 Awesome! We'll keep you posted.
                        </motion.div>
                    )}
                </AnimatePresence>

                <div className="mt-16 pt-12 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-gray-500">
                    <div className="flex items-center gap-6">
                        <Link href="/dashboard" className="hover:text-white transition-colors">Go Back</Link>
                        <Link href="/support" className="hover:text-white transition-colors">Support</Link>
                    </div>
                    <p>&copy; 2026 Trackify AI. All rights reserved.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default ComingSoon;
