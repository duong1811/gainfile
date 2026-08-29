import React from 'react';
import { motion } from 'framer-motion';
import { RiVidiconLine, RiTimeLine, RiGroupLine, RiPlayCircleLine } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const Meetings = () => {
  const meetings = [
    { id: 1, title: 'Weekly Product Sync', time: '10:00 AM - 11:30 AM', date: 'Today', attendees: 5, active: true },
    { id: 2, title: 'UX Review: Dashboard UI', time: '02:00 PM - 03:00 PM', date: 'Today', attendees: 3, active: false },
    { id: 3, title: '投资者汇报 (Investor Pitch)', time: '09:00 AM - 10:00 AM', date: 'Tomorrow', attendees: 8, active: false },
    { id: 4, title: 'Sprint Retrospective', time: '04:00 PM - 05:00 PM', date: 'Tomorrow', attendees: 12, active: false },
  ];

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            Virtual <span className="text-gradient from-purple-400 to-pink-500">Meetings</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Conferencing and schedule management.</p>
        </div>
        <Button variant="primary" size="lg" className="!bg-gradient-to-r from-purple-500 to-pink-500 border-none shadow-purple-500/20">
          <RiVidiconLine size={18} /> Schedule Meeting
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">Upcoming Schedule</h3>
          
          {meetings.map((meeting, idx) => (
            <Card
              key={meeting.id}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden transition-all ${
                meeting.active 
                ? 'border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.15)] bg-gradient-to-br from-purple-500/5 to-pink-500/5' 
                : 'hover:border-purple-500/30'
              }`}
            >
              {meeting.active && (
                <div className="absolute top-0 right-0 p-4">
                  <Badge variant="dot" color="online" className="font-bold px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5">
                    HAPPENING NOW
                  </Badge>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)] font-bold mb-2">
                    <span className="text-purple-500 uppercase tracking-wider">{meeting.date}</span>
                    <span className="w-1 h-1 rounded-full bg-[var(--glass-border)]" />
                    <span className="flex items-center gap-1"><RiTimeLine /> {meeting.time}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{meeting.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <RiGroupLine /> {meeting.attendees} Participants Expected
                  </div>
                </div>

                <Button 
                  variant={meeting.active ? "primary" : "glass"}
                  size="xl"
                  className={`gap-2 w-full md:w-auto ${meeting.active ? '!bg-purple-500 border-none shadow-purple-500/20' : ''}`}
                >
                  <RiPlayCircleLine size={20} /> Join Call
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <Card
          transition={{ delay: 0.4 }}
          className="p-8 bg-gradient-to-b from-[var(--glass-bg)] to-purple-500/5 h-fit"
        >
          <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-500 flex items-center justify-center mb-6 shadow-inner">
            <RiVidiconLine size={32} />
          </div>
          <h3 className="text-xl font-bold mb-2">Quick Meet</h3>
          <p className="text-[var(--text-secondary)] text-sm mb-8 leading-relaxed">
            Start an instant meeting with a shareable link. Perfect for quick ad-hoc syncing.
          </p>
          <Button variant="white" size="xl" className="w-full !bg-[var(--text-primary)] !text-[var(--bg-primary)] hover:opacity-90">
            Start Instant Meeting
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default Meetings;
