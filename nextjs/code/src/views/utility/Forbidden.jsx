import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaKey, FaArrowLeft } from 'react-icons/fa';

const Forbidden = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#030712] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="glass-card max-w-2xl w-full p-12 rounded-3xl text-center relative z-10 border border-white/5"
      >
        <motion.div
           initial={{ scale: 0, rotate: -45 }}
           animate={{ scale: 1, rotate: 0 }}
           transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
           className="w-24 h-24 mx-auto mb-8 bg-orange-500/10 rounded-3xl flex items-center justify-center border border-orange-500/20"
        >
          <FaShieldAlt className="text-5xl text-orange-500" />
        </motion.div>
        
        <motion.h1 
          className="text-8xl font-black mb-4 tracking-tighter"
          style={{
            background: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #c2410c 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          403
        </motion.h1>
        
        <h2 className="text-3xl font-bold mb-4 text-white">Access Denied</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
           Your current clearance doesn't allow access to this restricted area. It's locked down for your protection.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white rounded-2xl font-semibold transition-colors shadow-lg shadow-orange-500/20"
            >
              <FaArrowLeft /> Go Back Home
            </motion.button>
          </Link>
          
          <Link href="/login">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-semibold transition-colors"
            >
              <FaKey /> Re-Authenticate
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Security Scanning Effect */}
      <motion.div 
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        animate={{
          background: [
            "linear-gradient(0deg, transparent 0%, rgba(249, 115, 22, 0.05) 50%, transparent 100%)",
            "linear-gradient(0deg, transparent 50%, rgba(249, 115, 22, 0.05) 100%, transparent 0%)"
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
};

export default Forbidden;
