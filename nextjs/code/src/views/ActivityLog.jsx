import React from 'react';
import { motion } from 'framer-motion';
import { RiHistoryLine, RiRefreshLine } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const ActivityLog = () => {
  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Audit <span className="text-gradient from-indigo-400 to-purple-500">Trail</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Compliance-ready chronological history.</p>
        </div>
        <Button variant="glass" className="gap-2">
          <RiRefreshLine /> Refresh Log
        </Button>
      </motion.div>

      <Card
        padding="lg"
        className="p-8 relative overflow-hidden"
      >
        <div className="absolute top-0 bottom-0 left-[39px] md:left-[51px] w-px bg-gradient-to-b from-indigo-500/50 to-transparent"></div>

        <div className="space-y-8 relative z-10">
          {[
            { tag: 'AUTH', color: 'bg-emerald-500', msg: 'Admin logged in from IP 192.168.1.1', time: '2 mins ago' },
            { tag: 'DATA', color: 'bg-blue-500', msg: 'System backup snapshot generated successfully', time: '1 hour ago' },
            { tag: 'USER', color: 'bg-orange-500', msg: 'Role "Editor" assigned to john.doe@trackify.app', time: '5 hours ago' },
            { tag: 'API', color: 'bg-purple-500', msg: 'Token "Staging Sync" was regenerated', time: '1 day ago' },
          ].map((log, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-6"
            >
              <div className={`w-4 h-4 rounded-full mt-1 flex-shrink-0 shadow-lg ${log.color} shadow-${log.color.split('-')[1]}-500/40 relative outline outline-[6px] outline-[var(--bg-primary)] z-10`}></div>
              <div>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded border border-[var(--glass-border)] uppercase tracking-wider text-[var(--text-secondary)]`}>{log.tag}</span>
                <p className="font-bold text-lg mt-1 mb-1">{log.msg}</p>
                <p className="text-xs font-medium text-[var(--text-secondary)] flex items-center gap-1">
                  <RiHistoryLine /> {log.time}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default ActivityLog;
