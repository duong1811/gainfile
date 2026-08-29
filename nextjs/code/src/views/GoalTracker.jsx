import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  RiAddLine,
  RiStarLine,
  RiTrophyLine,
  RiCalendarLine,
  RiBarChartLine
} from 'react-icons/ri';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Modal, ModalBody, ModalFooter } from '../components/ui/Modal';
import { Label } from '../components/ui/Label';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Progress } from '../components/ui/Progress';
import { cn } from '../lib/utils';

const GoalTracker = () => {
  const [goals, setGoals] = useState([
    {
      id: 1,
      title: 'Learn React Advanced Concepts',
      progress: 75,
      target: 100,
      deadline: '2026-03-15',
      category: 'Learning'
    },
    {
      id: 2,
      title: 'Run 100km This Month',
      progress: 45,
      target: 100,
      deadline: '2026-12-29',
      category: 'Fitness'
    },
    {
      id: 3,
      title: 'Save $5000 for Vacation',
      progress: 3200,
      target: 5000,
      deadline: '2027-06-01',
      category: 'Finance'
    },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    target: '',
    deadline: '',
    category: 'Learning'
  });

  const addGoal = () => {
    if (newGoal.title.trim() && newGoal.target && newGoal.deadline) {
      setGoals([
        ...goals,
        {
          id: Date.now(),
          title: newGoal.title,
          progress: 0,
          target: parseFloat(newGoal.target),
          deadline: newGoal.deadline,
          category: newGoal.category
        }
      ]);
      setNewGoal({ title: '', target: '', deadline: '', category: 'Learning' });
      setShowAddForm(false);
    }
  };

  const updateProgress = (id, newProgress) => {
    setGoals(goals.map(goal =>
      goal.id === id ? { ...goal, progress: Math.min(newProgress, goal.target) } : goal
    ));
  };

  const getCategoryTheme = (category) => {
    const themes = {
      'Learning': { textPrimary: 'text-[var(--aurora-1)]', bgBorder: 'bg-[var(--aurora-1)]/10 border-[var(--aurora-1)]/20', gradient: 'from-[var(--aurora-1)] to-[var(--aurora-2)]', variant: 'aurora' },
      'Fitness': { textPrimary: 'text-orange-500', bgBorder: 'bg-orange-500/10 border-orange-500/20', gradient: 'from-orange-400 to-rose-500', variant: 'warning' },
      'Finance': { textPrimary: 'text-emerald-500', bgBorder: 'bg-emerald-500/10 border-emerald-500/20', gradient: 'from-emerald-400 to-teal-500', variant: 'success' },
      'Personal': { textPrimary: 'text-purple-500', bgBorder: 'bg-purple-500/10 border-purple-500/20', gradient: 'from-purple-400 to-pink-500', variant: 'default' }
    };
    return themes[category] || themes['Learning'];
  };

  const getProgressPercentage = (progress, target) => {
    return Math.round((progress / target) * 100);
  };

  const getDaysLeft = (deadline) => {
    const today = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="p-6 md:p-12 min-h-screen text-[var(--text-primary)]">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <RiTrophyLine className="text-[var(--aurora-2)]" />
            <Badge color="emerald" size="xs" rounded="full" className="font-bold uppercase tracking-widest text-white">
              Milestones
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Goal <span className="text-gradient from-[var(--aurora-2)] to-[var(--aurora-3)]">Architect</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Design your future, execute your present.</p>
        </div>

        <Button
          onClick={() => setShowAddForm(true)}
          variant="glass"
          size="xl"
          className="font-bold gap-2"
        >
          <div className="w-6 h-6 rounded-lg bg-[var(--aurora-2)] flex items-center justify-center text-white">
            <RiAddLine size={18} />
          </div>
          Set New Goal
        </Button>
      </motion.div>

      <Modal
        isOpen={showAddForm}
        onClose={() => setShowAddForm(false)}
        title="New Objective"
        variant="aurora"
      >
        <ModalBody className="space-y-4">
          <div>
            <Label>Goal Definition</Label>
            <Input
              placeholder="What do you want to achieve?"
              value={newGoal.title}
              onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
              variant="aurora2"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label>Target Numeric</Label>
              <Input
                type="number"
                placeholder="e.g. 100"
                value={newGoal.target}
                onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
                variant="aurora2"
              />
            </div>
            <div>
              <Label>Deadline</Label>
              <Input
                type="date"
                value={newGoal.deadline}
                onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                variant="aurora2"
              />
            </div>
          </div>

          <div>
            <Label>Domain</Label>
            <Select
              value={newGoal.category}
              onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
              variant="aurora2"
            >
              <option value="Learning" className="bg-[var(--bg-primary)]">Learning</option>
              <option value="Fitness" className="bg-[var(--bg-primary)]">Fitness</option>
              <option value="Finance" className="bg-[var(--bg-primary)]">Finance</option>
              <option value="Personal" className="bg-[var(--bg-primary)]">Personal</option>
            </Select>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => setShowAddForm(false)}
            variant="ghost"
            className="flex-1 font-bold"
          >
            Discard
          </Button>
          <Button
            onClick={addGoal}
            variant="aurora2"
            className="flex-1 rounded-2xl font-bold py-4"
          >
            Initialize Goal
          </Button>
        </ModalFooter>
      </Modal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {goals.map((goal, index) => {
          const t = getCategoryTheme(goal.category);
          const percent = getProgressPercentage(goal.progress, goal.target);
          const daysLeft = getDaysLeft(goal.deadline);

          return (
            <Card
              key={goal.id}
              transition={{ delay: index * 0.1 }}
              className="relative overflow-hidden group hover:border-[var(--aurora-2)] transition-colors shadow-none hover:shadow-xl"
            >
              <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full blur-[80px] opacity-10 bg-gradient-to-br ${t.gradient} pointer-events-none group-hover:opacity-20 transition-opacity duration-1000`} />

              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <Badge
                    rounded="full"
                    size="xs"
                    className={cn("mb-4 font-bold border", t.bgBorder, t.textPrimary)}
                  >
                    {goal.category}
                  </Badge>
                  <h3 className="text-2xl font-bold max-w-[80%] leading-tight group-hover:text-[var(--aurora-2)] transition-colors">{goal.title}</h3>
                </div>

                <div className="flex flex-col items-end">
                  <Badge
                    variant="interactive"
                    color={daysLeft < 7 ? 'danger' : 'glass'}
                    rounded="xl"
                    className="gap-1.5"
                  >
                    <RiCalendarLine size={14} />
                    <span className="text-xs font-bold whitespace-nowrap">{daysLeft}d left</span>
                  </Badge>
                </div>
              </div>

              <div className="mb-8 relative z-10">
                <div className="flex justify-between items-end mb-3">
                  <div className="flex items-center gap-2">
                    <RiBarChartLine className="text-[var(--text-secondary)]" />
                    <span className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-widest">Progress Metrics</span>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-bold font-mono text-[var(--text-primary)]">{percent}%</span>
                  </div>
                </div>

                <Progress value={percent} variant={t.variant} size="md" className="p-0.5" indicatorClassName={`bg-gradient-to-r ${t.gradient}`} />
                
                <div className="flex justify-between mt-2">
                  <span className="text-xs text-[var(--text-secondary)] font-medium underline decoration-[var(--glass-border)] underline-offset-4">{goal.progress} achieved</span>
                  <span className="text-xs text-[var(--text-secondary)] font-medium">Target: {goal.target}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 relative z-10 border-t border-[var(--glass-border)] pt-6">
                <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest mr-2">Update</span>
                <Button
                  onClick={() => updateProgress(goal.id, goal.progress + (goal.target * 0.05))}
                  variant="glass"
                  size="sm"
                  className="px-4 font-bold"
                >
                  +5%
                </Button>
                <Button
                  onClick={() => updateProgress(goal.id, goal.progress + (goal.target * 0.1))}
                  variant="glass"
                  size="sm"
                  className="px-4 font-bold"
                >
                  +10%
                </Button>
                <Button
                  onClick={() => updateProgress(goal.id, goal.target)}
                  variant="ghost"
                  size="sm"
                  className="ml-auto px-4 font-bold border border-[var(--aurora-2)]/30 !text-[var(--aurora-2)] hover:bg-[var(--aurora-2)] hover:!text-white w-10 md:w-auto overflow-hidden flex justify-center"
                >
                  <span className="hidden md:block">Complete</span>
                  <RiStarLine className="md:hidden" size={16} />
                </Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default GoalTracker;