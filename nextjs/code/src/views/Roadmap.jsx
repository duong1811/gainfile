import React from 'react';
import { motion } from 'framer-motion';
import { RiMapPinLine, RiFlag2Line, RiRocketLine, RiCheckDoubleLine } from 'react-icons/ri';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const Roadmap = () => {
  const quarters = [
    {
      id: 'q1',
      title: 'Q1 Launch',
      status: 'Completed',
      icon: RiCheckDoubleLine,
      color: 'emerald',
      items: ['Core Platform Architecture', 'User Authentication System', 'Initial Beta Release']
    },
    {
      id: 'q2',
      title: 'Q2 Expansion',
      status: 'In Progress',
      icon: RiRocketLine,
      color: 'blue',
      items: ['Advanced Analytics Integration', 'Mobile App Beta (iOS)', 'Third-Party Webhooks']
    },
    {
      id: 'q3',
      title: 'Q3 Enterprise',
      status: 'Planned',
      icon: RiMapPinLine,
      color: 'indigo',
      items: ['SSO Implementation', 'Custom Workflows', 'Audit Logging System']
    },
    {
      id: 'q4',
      title: 'Q4 Global',
      status: 'Idea',
      icon: RiFlag2Line,
      color: 'purple',
      items: ['Multi-currency Support', 'Localization (10+ Languages)', 'AI Predictions Beta']
    }
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
            Product <span className="text-gradient from-[var(--aurora-3)] to-[var(--aurora-1)]">Roadmap</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Strategic goals and feature timeline.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {quarters.map((q, idx) => (
          <Card
            key={q.id}
            transition={{ delay: idx * 0.1 }}
            className="h-full p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center bg-${q.color}-500/10 text-${q.color}-500`}>
                <q.icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{q.title}</h3>
                <Badge 
                  variant="subtle"
                  color={q.status === 'Completed' ? 'online' : q.status === 'In Progress' ? 'indigo' : 'glass'}
                  className="mt-1"
                >
                  {q.status}
                </Badge>
              </div>
            </div>
            
            <div className="space-y-4">
              {q.items.map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)] text-sm font-medium flex gap-3 items-start">
                  <Badge 
                    variant="dot" 
                    color={q.status === 'Completed' ? 'online' : q.status === 'In Progress' ? 'indigo' : 'glass'}
                    className="mt-1.5"
                  />
                  <span className="text-[var(--text-primary)]">{item}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
