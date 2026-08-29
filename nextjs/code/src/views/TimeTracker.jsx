import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  RiPlayLine, 
  RiPauseLine,
  RiStopLine,
  RiAddLine,
  RiTimeLine,
  RiDeleteBinLine
} from 'react-icons/ri';
import { useTheme } from '../context/ThemeContext';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Modal, ModalBody, ModalFooter } from '../components/ui/Modal';
import { Label } from '../components/ui/Label';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';

const TimeTracker = () => {
  const { isDarkMode } = useTheme();
  
  const [sessions, setSessions] = useState([
    { id: 1, task: 'React Development', duration: 7200, date: '2026-01-15', category: 'Work' },
    { id: 2, task: 'Learning TypeScript', duration: 3600, date: '2026-01-14', category: 'Learning' },
    { id: 3, task: 'Morning Workout', duration: 2700, date: '2026-01-14', category: 'Fitness' },
  ]);

  const [currentSession, setCurrentSession] = useState(null);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newTask, setNewTask] = useState({ name: '', category: 'Work' });

  const categories = [
    { name: 'Work', color: 'from-[var(--aurora-3)] to-[var(--aurora-1)] text-[var(--aurora-3)] bg-[var(--aurora-3)]/10 border-[var(--aurora-3)]/20' },
    { name: 'Learning', color: 'from-emerald-400 to-teal-500 text-emerald-500 bg-emerald-500/10 border-emerald-500/20' },
    { name: 'Fitness', color: 'from-orange-400 to-rose-500 text-orange-500 bg-orange-500/10 border-orange-500/20' },
    { name: 'Personal', color: 'from-purple-400 to-pink-500 text-purple-500 bg-purple-500/10 border-purple-500/20' },
  ];

  useEffect(() => {
    let interval = null;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startTimer = (task) => {
    setCurrentSession(task);
    setTime(0);
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resumeTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    if (currentSession && time > 0) {
      const newSession = {
        id: Date.now(),
        task: currentSession.name,
        duration: time,
        date: new Date().toISOString().split('T')[0],
        category: currentSession.category
      };
      setSessions([newSession, ...sessions]);
    }
    setCurrentSession(null);
    setTime(0);
    setIsRunning(false);
  };

  const addTask = () => {
    if (newTask.name.trim()) {
      const task = {
        id: Date.now(),
        name: newTask.name,
        category: newTask.category
      };
      startTimer(task);
      setNewTask({ name: '', category: 'Work' });
      setShowAddForm(false);
    }
  };

  const deleteSession = (id) => {
    setSessions(sessions.filter(session => session.id !== id));
  };

  const getCategoryStyles = (categoryName) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : 'from-gray-400 to-gray-500 text-gray-400 bg-gray-500/10 border-gray-500/20';
  };

  const getTotalTime = () => {
    return sessions.reduce((total, session) => total + session.duration, 0);
  };

  const getTodayTime = () => {
    const today = new Date().toISOString().split('T')[0];
    return sessions
      .filter(session => session.date === today)
      .reduce((total, session) => total + session.duration, 0);
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <RiTimeLine className="text-[var(--aurora-3)]" />
            <span className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-widest text-[var(--aurora-3)]">Temporal Quantizer</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Time <span className="text-gradient from-[var(--aurora-3)] to-[var(--aurora-1)]">Flux</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Measure your existence in units of productivity.</p>
        </div>

        <div className="flex gap-4">
           <Card className="px-6 py-4 border-[var(--glass-border)] bg-[var(--glass-bg)]">
            <p className="text-[var(--text-secondary)] text-[9px] font-bold uppercase tracking-widest mb-1">Today Active</p>
            <p className="text-xl font-bold text-[var(--text-primary)] font-mono">{formatTime(getTodayTime())}</p>
          </Card>
          <Card className="px-6 py-4 border-[var(--glass-border)] bg-[var(--glass-bg)]">
            <p className="text-[var(--text-secondary)] text-[9px] font-bold uppercase tracking-widest mb-1">All-Time Yield</p>
            <p className="text-xl font-bold text-[var(--text-primary)] font-mono">{formatTime(getTotalTime())}</p>
          </Card>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        <Card
          transition={{ delay: 0.2 }}
          className="lg:col-span-12 p-12 relative overflow-hidden text-center shadow-none hover:shadow-2xl transition-shadow duration-500"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--aurora-3)] via-[var(--aurora-1)] to-[var(--aurora-2)] animate-aurora opacity-50" />
          
          <div className="mb-10 relative z-10">
            {currentSession ? (
              <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[var(--aurora-3)]/20 bg-[var(--aurora-3)]/5 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-[var(--aurora-3)] animate-pulse" />
                <span className="text-xs font-bold text-[var(--aurora-3)] uppercase tracking-widest">{currentSession.category} • {currentSession.name}</span>
              </div>
            ) : (
              <span className="text-[var(--text-secondary)] text-xs font-bold uppercase tracking-[0.4em]">Standby Mode</span>
            )}
          </div>

          <div className="text-7xl md:text-[10rem] font-bold tracking-tighter font-mono mb-12 select-none relative z-10 text-[var(--text-primary)] text-shadow-sm">
            {formatTime(time)}
          </div>

          <div className="flex justify-center gap-6 relative z-10">
            {!currentSession ? (
              <Button
                variant="white"
                size="xl"
                className="group !bg-[var(--text-primary)] !text-[var(--bg-primary)] px-10 hover:!bg-[var(--aurora-3)] hover:!text-white"
                onClick={() => setShowAddForm(true)}
              >
                Start New Session
                <RiAddLine className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : (
              <div className="flex gap-4">
                <Button
                  size="xl"
                  className={`w-20 h-20 rounded-[1.5rem] p-0 shadow-lg ${isRunning ? 'bg-orange-500 text-white shadow-orange-500/20' : 'bg-emerald-500 text-white shadow-emerald-500/20'}`}
                  onClick={isRunning ? pauseTimer : resumeTimer}
                >
                  {isRunning ? <RiPauseLine size={32} /> : <RiPlayLine size={32} />}
                </Button>
                
                <Button
                  size="xl"
                  className="w-20 h-20 rounded-[1.5rem] p-0 bg-rose-500 text-white shadow-lg shadow-rose-500/20"
                  onClick={stopTimer}
                >
                  <RiStopLine size={32} />
                </Button>
              </div>
            )}
          </div>

          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[var(--aurora-3)]/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[var(--aurora-1)]/10 rounded-full blur-[100px] pointer-events-none" />
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-full flex items-center justify-between px-2 mb-2">
           <h3 className="text-xl font-bold">History Stream</h3>
           <span className="text-[10px] font-bold text-[var(--text-secondary)] uppercase tracking-widest">{sessions.length} Snapshots</span>
        </div>

        {sessions.map((session, index) => {
          const catStyles = getCategoryStyles(session.category);
          return (
            <Card
              key={session.id}
              transition={{ delay: 0.1 * index }}
              className="p-6 group hover:border-[var(--aurora-3)] transition-all"
            >
              <div className="flex justify-between items-start mb-6">
                <span className={`text-[9px] font-bold px-3 py-1 rounded-full border ${catStyles.split(' ').slice(2).join(' ')}`}>
                  {session.category}
                </span>
                <span className="text-[var(--text-secondary)] text-[10px] font-bold">{new Date(session.date).toLocaleDateString()}</span>
              </div>
              
              <h4 className="text-lg font-bold text-[var(--text-primary)] mb-6 group-hover:text-[var(--aurora-3)] transition-colors uppercase tracking-tight">{session.task}</h4>
              
              <div className="flex items-center justify-between pt-6 border-t border-[var(--glass-border)]">
                <div className="flex items-center gap-2 text-[var(--text-secondary)]">
                  <RiTimeLine size={14} />
                  <span className="text-sm font-mono font-bold text-[var(--text-primary)]">{formatTime(session.duration)}</span>
                </div>
                
                <Button
                  onClick={() => deleteSession(session.id)}
                  variant="ghost"
                  size="icon-xs"
                  className="hover:!text-rose-500 hover:bg-rose-500/10 opacity-0 group-hover:opacity-100"
                >
                  <RiDeleteBinLine size={16} />
                </Button>
              </div>
            </Card>
          );
        })}

        {sessions.length === 0 && (
          <Card variant="glass" className="col-span-full py-20 border-dashed flex flex-col items-center justify-center opacity-70 text-[var(--text-secondary)]">
            <RiTimeLine size={40} className="mb-4" />
            <p className="font-bold uppercase tracking-[0.2em] text-xs">No temporal records</p>
          </Card>
        )}
      </div>

      <Modal
        isOpen={showAddForm}
        onClose={() => setShowAddForm(false)}
        title="Initialize Task"
      >
        <ModalBody className="space-y-4">
          <div>
            <Label>Task Designation</Label>
            <Input
              placeholder="e.g. Frontend Architecture"
              value={newTask.name}
              onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
              variant="aurora3"
              autoFocus
            />
          </div>
          <div>
            <Label>Category</Label>
            <Select
              value={newTask.category}
              onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
              variant="aurora3"
            >
              {categories.map(category => (
                <option key={category.name} value={category.name} className="bg-[var(--bg-primary)]">
                  {category.name}
                </option>
              ))}
            </Select>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button onClick={() => setShowAddForm(false)} variant="ghost" className="flex-1 font-bold">Abort</Button>
          <Button onClick={addTask} variant="primary" className="flex-1 font-bold py-4 shadow-lg shadow-[var(--aurora-3)]/20">Engage</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default TimeTracker;