import React from 'react';
import { motion } from 'framer-motion';
import { RiTrophyLine, RiShieldStarLine } from 'react-icons/ri';

const Achievements = () => {
  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)]">
      <motion.div
        className="mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <RiTrophyLine className="text-[var(--aurora-4)]" />
          <span className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-widest">Rewards</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">
          Trophy <span className="text-[var(--aurora-4)] text-gradient">Room</span>
        </h1>
        <p className="text-[var(--text-secondary)] text-lg font-medium">Gamify your life trajectory.</p>
      </motion.div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
          <motion.div
            key={item}
            className="glass-card p-6 flex flex-col items-center justify-center rounded-3xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--aurora-3)] to-[var(--aurora-4)] mb-4 flex items-center justify-center filter brightness-50">
              <RiShieldStarLine size={32} className="text-white opacity-50" />
            </div>
            <p className="text-[var(--text-secondary)] font-bold text-sm tracking-tight mb-1 text-center">Locked Emblem</p>
            <p className="text-[10px] uppercase text-[var(--text-secondary)]/40 tracking-[0.2em]">Tier {item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
