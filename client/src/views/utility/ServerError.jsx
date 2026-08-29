import React from 'react';
import { motion } from 'framer-motion';
import { FaServer, FaUndo, FaHeadset } from 'react-icons/fa';
import Link from 'next/link';

const ServerError = () => {
    const handleRefresh = () => {
        window.location.reload();
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#030712] relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="glass-card max-w-2xl w-full p-12 rounded-3xl text-center relative z-10 border border-white/5 shadow-2xl"
            >
                <motion.div
                   animate={{ 
                       rotate: [0, -10, 10, -10, 10, 0],
                       scale: [1, 1.1, 1]
                   }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                   className="w-24 h-24 mx-auto mb-8 bg-blue-500/10 rounded-3xl flex items-center justify-center border border-blue-500/20 shadow-inner"
                >
                    <FaServer className="text-5xl text-blue-500" />
                </motion.div>
                
                <motion.h1 
                    className="text-8xl font-black mb-4 tracking-tighter"
                    style={{
                        background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    500
                </motion.h1>
                
                <h2 className="text-3xl font-bold mb-4 text-white">System Malfunction</h2>
                <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
                    Our technical sorcerers are currently re-aligning the digital stars. Please try refreshing again in a moment.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.button
                        onClick={handleRefresh}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-semibold transition-colors shadow-lg shadow-blue-500/25"
                    >
                        <FaUndo /> Retry Connection
                    </motion.button>
                    
                    <Link href="/support">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-semibold transition-colors"
                        >
                            <FaHeadset /> Contact Support
                        </motion.button>
                    </Link>
                </div>
            </motion.div>

            {/* Matrix-like Digital Glitch Effect */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-10 flex flex-wrap gap-4 p-8 overflow-hidden">
                {[...Array(200)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="w-1 h-8 bg-blue-500 rounded-full"
                        animate={{ 
                            height: [4, 32, 4],
                            opacity: [0.1, 0.4, 0.1]
                        }}
                        transition={{ 
                            duration: Math.random() * 2 + 1,
                            repeat: Infinity,
                            delay: Math.random() * 2
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServerError;
