import React from 'react';
import { motion } from 'framer-motion';
import { 
  RiNotification3Line, 
  RiCheckDoubleLine, 
  RiAlarmWarningFill, 
  RiInformationFill, 
  RiCheckFill, 
  RiMore2Fill,
  RiDeleteBinLine,
  RiCheckLine,
  RiFlagLine
} from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from '../components/ui/Dropdown';

const Notifications = () => {
  const notifications = [
    { id: 1, type: 'alert', title: 'Server Load Critical', message: 'CPU utilization exceeded 95% on US-East-1 db instance.', time: '2 mins ago', read: false },
    { id: 2, type: 'info', title: 'New Organization Member', message: 'Charlie Day accepted the invitation to join Project Alpha.', time: '4 hours ago', read: false },
    { id: 3, type: 'success', title: 'Payment Successful', message: 'Your monthly Pro Tier subscription of $49 has been processed.', time: '1 day ago', read: true },
    { id: 4, type: 'info', title: 'Scheduled Maintenance', message: 'The database will undergo routine maintenance this Sunday at 2AM UTC.', time: '2 days ago', read: true },
    { id: 5, type: 'success', title: 'Goal Completed', message: 'Congratulations! You hit your 100km running target this month.', time: '3 days ago', read: true },
    { id: 6, type: 'alert', title: 'Failed Login Attempt', message: 'Multiple failed logins detected from IP 192.168.1.5.', time: '5 days ago', read: true },
  ];

  const getIcon = (type) => {
    switch (type) {
      case 'alert': return <div className="w-12 h-12 rounded-xl bg-rose-500/10 text-rose-500 flex items-center justify-center flex-shrink-0 text-xl"><RiAlarmWarningFill /></div>;
      case 'info': return <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center flex-shrink-0 text-xl"><RiInformationFill /></div>;
      case 'success': return <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center flex-shrink-0 text-xl"><RiCheckFill /></div>;
      default: return <div className="w-12 h-12 rounded-xl bg-[var(--glass-border)] text-[var(--text-secondary)] flex items-center justify-center flex-shrink-0 text-xl"><RiNotification3Line /></div>;
    }
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)]">
      <motion.div
        className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            System <span className="text-gradient from-[var(--aurora-1)] to-[var(--aurora-2)]">Notifications</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Your chronological alert history.</p>
        </div>
        <Button variant="glass" className="gap-2 font-bold">
          <RiCheckDoubleLine size={20} /> Mark All as Read
        </Button>
      </motion.div>

      <Card
        padding="none"
        transition={{ delay: 0.2 }}
        className="relative overflow-hidden"
      >
        <div className="p-2 space-y-2">
          {notifications.map((notif, idx) => (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (idx * 0.1) }}
              className={`flex items-start justify-between p-5 rounded-2xl transition-colors cursor-pointer border ${notif.read ? 'bg-[var(--glass-border)]/20 border-transparent hover:bg-[var(--glass-border)]/40' : 'bg-[var(--glass-border)] border-[var(--aurora-1)]/30 shadow-[var(--aurora-1)]/5 shadow-lg'}`}
            >
              <div className="flex gap-5">
                {getIcon(notif.type)}
                <div>
                  <h3 className={`text-lg font-bold mb-1 ${notif.read ? 'text-[var(--text-primary)]' : 'text-gradient from-[var(--aurora-1)] to-[var(--aurora-2)]'}`}>
                    {notif.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] leading-relaxed mb-3 pr-4">{notif.message}</p>
                  <span className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)] opacity-60 bg-[var(--bg-primary)] px-2 py-1 rounded-md border border-[var(--glass-border)]">
                    {notif.time}
                  </span>
                </div>
              </div>

              <Dropdown>
                <DropdownTrigger asChild showChevron={false}>
                  <button className="p-2 rounded-xl text-[var(--text-secondary)] hover:bg-[var(--glass-bg)] hover:text-[var(--text-primary)] transition-colors">
                    <RiMore2Fill size={20} />
                  </button>
                </DropdownTrigger>
                <DropdownContent align="right" width="w-48">
                  <DropdownItem className="gap-3">
                    <RiCheckLine className="text-lg opacity-70" /> Mark as read
                  </DropdownItem>
                  <DropdownItem className="gap-3">
                    <RiFlagLine className="text-lg opacity-70" /> Archive
                  </DropdownItem>
                  <DropdownItem variant="danger" className="gap-3">
                    <RiDeleteBinLine className="text-lg opacity-70" /> Delete
                  </DropdownItem>
                </DropdownContent>
              </Dropdown>
            </motion.div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Notifications;
