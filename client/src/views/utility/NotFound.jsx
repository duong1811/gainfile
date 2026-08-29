import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaHome, FaQuestionCircle } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#030712] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-700" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="glass-card max-w-2xl w-full p-12 rounded-3xl text-center relative z-10 border border-white/10"
      >
        <motion.h1 
          className="text-9xl font-black mb-4 tracking-tighter"
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 50%, #ec4899 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.2
          }}
        >
          404
        </motion.h1>
        
        <h2 className="text-3xl font-bold mb-4 text-white">Oops! Page Escape-d</h2>
        <p className="text-gray-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you're searching for seems to have vanished into the digital void. Don't worry, it happens to the best of us.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-2xl font-semibold transition-colors shadow-lg shadow-indigo-500/25"
            >
              <FaHome /> Back to Dashboard
            </motion.button>
          </Link>
          
          <Link href="/support">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-semibold transition-colors"
            >
              <FaQuestionCircle /> Help Center
            </motion.button>
          </Link>
        </div>
      </motion.div>

      {/* Modern floating elements */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-indigo-500/20 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            delay: Math.random() * 5
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`
          }}
        />
      ))}
    </div>
  );
};

export default NotFound;
