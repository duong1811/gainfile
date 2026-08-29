import React from 'react';
import { motion } from 'framer-motion';
import { RiUserStarLine, RiLineChartLine, RiFileList3Line } from 'react-icons/ri';
import { Badge } from '../components/ui/Badge';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

const Performance = () => {
  const reviews = [
    { id: 1, name: 'Alice Smith', position: 'Lead Developer', score: 4.8, status: 'Completed', date: 'Q1 2026', metrics: { tech: 95, comm: 88, lead: 92 } },
    { id: 2, name: 'Bob Jones', position: 'UI/UX Designer', score: 4.5, status: 'Completed', date: 'Q1 2026', metrics: { tech: 90, comm: 95, lead: 80 } },
    { id: 3, name: 'Charlie Day', position: 'Marketing Spec.', score: '-', status: 'Pending', date: 'Q1 2026', metrics: { tech: 0, comm: 0, lead: 0 } },
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
            Team <span className="text-gradient from-[var(--aurora-3)] to-[var(--aurora-1)]">Performance</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Employee OKRs, evaluations, and skill matrices.</p>
        </div>
        <Button variant="primary" className="gap-2">
          <RiFileList3Line size={18} /> Start Evaluation
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {reviews.map((rev, idx) => (
          <Card
            key={rev.id}
            transition={{ delay: idx * 0.1 }}
            className={rev.status === 'Pending' ? 'opacity-80' : 'border-[var(--aurora-1)]/30 hover:shadow-lg'}
          >
            <CardHeader className="flex-row justify-between items-start mb-8 space-y-0">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[var(--text-primary)]/5 flex items-center justify-center text-xl font-bold border border-[var(--glass-border)]">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <CardTitle className="text-xl">{rev.name}</CardTitle>
                  <CardDescription className="text-sm font-medium">{rev.position}</CardDescription>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs uppercase font-bold tracking-wider text-[var(--text-secondary)] block mb-1">{rev.date}</span>
                {rev.status === 'Completed' ? (
                  <Badge variant="solid" color="aurora-solid" className="shadow-md">
                    ★ {rev.score} / 5.0
                  </Badge>
                ) : (
                  <Badge color="glass" className="text-xs font-bold uppercase">
                    Needs Action
                  </Badge>
                )}
              </div>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  <span>Technical Skills</span>
                  <span>{rev.status === 'Pending' ? '-' : `${rev.metrics.tech}%`}</span>
                </div>
                <div className="h-2 w-full bg-[var(--glass-border)] rounded-full overflow-hidden">
                  <motion.div className="h-full bg-blue-500" initial={{ width: 0 }} animate={{ width: `${rev.metrics.tech}%` }} transition={{ duration: 1 }} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  <span>Communication</span>
                  <span>{rev.status === 'Pending' ? '-' : `${rev.metrics.comm}%`}</span>
                </div>
                <div className="h-2 w-full bg-[var(--glass-border)] rounded-full overflow-hidden">
                  <motion.div className="h-full bg-emerald-500" initial={{ width: 0 }} animate={{ width: `${rev.metrics.comm}%` }} transition={{ duration: 1 }} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">
                  <span>Leadership Impact</span>
                  <span>{rev.status === 'Pending' ? '-' : `${rev.metrics.lead}%`}</span>
                </div>
                <div className="h-2 w-full bg-[var(--glass-border)] rounded-full overflow-hidden">
                  <motion.div className="h-full bg-purple-500" initial={{ width: 0 }} animate={{ width: `${rev.metrics.lead}%` }} transition={{ duration: 1 }} />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Performance;
