import { motion } from 'framer-motion';
import { RiArrowUpLine, RiArrowDownLine } from 'react-icons/ri';

const StatCard = ({ title, value, change, icon: Icon, color }) => {
  const isPositive = change.includes('+');
  const isNegative = change.includes('-');

  return (
    <motion.div
      className="glass-card p-6 rounded-[2rem] flex flex-col gap-4 relative overflow-hidden group"
      whileHover={{ 
        y: -5,
        backgroundColor: "rgba(255, 255, 255, 0.05)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className="flex justify-between items-start">
        <div className={`p-3 rounded-2xl ${color} shadow-lg shadow-black/20`}>
          <Icon size={22} className="text-white" />
        </div>
        <div className={`flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
          isPositive ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
          isNegative ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20' : 
          'bg-white/5 text-white/40 border border-white/10'
        }`}>
          {isPositive && <RiArrowUpLine size={12} />}
          {isNegative && <RiArrowDownLine size={12} />}
          {change}
        </div>
      </div>

      <div className="space-y-1">
        <h3 className="text-white/40 text-xs font-semibold uppercase tracking-[0.15em]">{title}</h3>
        <div className="text-3xl font-bold text-white tracking-tight">{value}</div>
      </div>

      {/* Decorative background element */}
      <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500 ${color}`} />
    </motion.div>
  );
};

export default StatCard;