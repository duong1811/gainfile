import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RiAddLine,
  RiCheckLine,
  RiCloseLine,
  RiFireLine,
  RiCalendarLine
} from 'react-icons/ri';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Label } from '../components/ui/Label';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { cn } from '../lib/utils';

import { Modal, ModalBody, ModalFooter } from '../components/ui/Modal';

const HabitTracker = () => {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Morning Meditation', streak: 12, completed: true, category: 'Wellness' },
    { id: 2, name: 'Read 30 minutes', streak: 8, completed: false, category: 'Learning' },
    { id: 3, name: 'Exercise', streak: 15, completed: true, category: 'Fitness' },
    { id: 4, name: 'Write Journal', streak: 5, completed: false, category: 'Personal' },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newHabit, setNewHabit] = useState({ name: '', category: 'Wellness' });

  const toggleHabit = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id
        ? {
          ...habit,
          completed: !habit.completed,
          streak: habit.completed ? Math.max(0, habit.streak - 1) : habit.streak + 1
        }
        : habit
    ));
  };

  const addHabit = () => {
    if (newHabit.name.trim()) {
      setHabits([
        ...habits,
        {
          id: Date.now(),
          name: newHabit.name,
          streak: 0,
          completed: false,
          category: newHabit.category
        }
      ]);
      setNewHabit({ name: '', category: 'Wellness' });
      setShowAddForm(false);
    }
  };

  const getCategoryTheme = (category) => {
    const themes = {
      'Wellness': { textPrimary: 'text-emerald-500', textLight: 'text-emerald-400', bgBorder: 'bg-emerald-500/10 border-emerald-500/20', gradient: 'from-emerald-400 to-teal-500' },
      'Learning': { textPrimary: 'text-[var(--aurora-1)]', textLight: 'text-[var(--aurora-1)]', bgBorder: 'bg-[var(--aurora-1)]/10 border-[var(--aurora-1)]/20', gradient: 'from-[var(--aurora-1)] to-[var(--aurora-2)]' },
      'Fitness': { textPrimary: 'text-orange-500', textLight: 'text-orange-400', bgBorder: 'bg-orange-500/10 border-orange-500/20', gradient: 'from-orange-400 to-rose-500' },
      'Personal': { textPrimary: 'text-purple-500', textLight: 'text-purple-400', bgBorder: 'bg-purple-500/10 border-purple-500/20', gradient: 'from-purple-400 to-pink-500' }
    };
    return themes[category] || themes['Wellness'];
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <RiCalendarLine className="text-[var(--aurora-1)]" />
            <Badge color="aurora-1" size="xs" rounded="full" className="font-bold uppercase tracking-widest">
              Growth Engine
            </Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-2">
            Habit <span className="text-gradient from-[var(--aurora-1)] to-[var(--aurora-2)]">Tracker</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Build consistency, one micro-step at a time.</p>
        </div>

        <Button
          onClick={() => setShowAddForm(true)}
          variant="glass"
          size="xl"
          className="font-bold gap-2"
        >
          <div className="w-6 h-6 rounded-lg bg-[var(--aurora-1)] flex items-center justify-center text-white">
            <RiAddLine size={18} />
          </div>
          Create New Habit
        </Button>
      </motion.div>

      <Modal 
        isOpen={showAddForm} 
        onClose={() => setShowAddForm(false)}
        title="New Habit"
      >
        <ModalBody>
          <div>
            <Label>Habit Name</Label>
            <Input
              placeholder="e.g. Daily Meditation"
              value={newHabit.name}
              onChange={(e) => setNewHabit({ ...newHabit, name: e.target.value })}
              autoFocus
            />
          </div>

          <div>
            <Label>Category</Label>
            <Select
              value={newHabit.category}
              onChange={(e) => setNewHabit({ ...newHabit, category: e.target.value })}
            >
              <option value="Wellness" className="bg-[var(--bg-primary)]">Wellness</option>
              <option value="Learning" className="bg-[var(--bg-primary)]">Learning</option>
              <option value="Fitness" className="bg-[var(--bg-primary)]">Fitness</option>
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
            Cancel
          </Button>
          <Button
            onClick={addHabit}
            variant="primary"
            className="flex-1 rounded-2xl font-bold py-4"
          >
            Confirm
          </Button>
        </ModalFooter>
      </Modal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {habits.map((habit, index) => {
          const t = getCategoryTheme(habit.category);
          return (
            <Card
              key={habit.id}
              transition={{ delay: index * 0.1 }}
              className="relative group hover:border-[var(--aurora-1)]"
            >
              <div className="flex justify-between items-start mb-6">
                <Badge
                  rounded="full"
                  size="xs"
                  className={cn("font-bold border", t.bgBorder, t.textPrimary)}
                >
                  {habit.category}
                </Badge>
                <Button
                  onClick={() => toggleHabit(habit.id)}
                  variant={habit.completed ? "primary" : "glass"}
                  size="icon"
                  className={cn(
                    "rounded-xl",
                    habit.completed && "shadow-lg shadow-[var(--aurora-1)]/40 border border-[var(--aurora-1)]"
                  )}
                >
                  <RiCheckLine size={20} />
                </Button>
              </div>

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-6 group-hover:text-[var(--aurora-1)] transition-colors">{habit.name}</h3>

              <div className="flex items-center gap-3 bg-[var(--glass-border)] rounded-2xl p-4 border border-[var(--glass-border)]">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 flex items-center justify-center shadow-inner">
                  <RiFireLine className="text-orange-500 text-xl" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest">Active Streak</p>
                  <p className="text-lg font-bold text-[var(--text-primary)]">{habit.streak} Days</p>
                </div>
              </div>

              <div className={`absolute -right-2 -bottom-2 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-gradient-to-br ${t.gradient}`} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default HabitTracker;