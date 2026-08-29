import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiAddLine, RiCalendarCheckLine } from 'react-icons/ri';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
import { Modal, ModalBody, ModalFooter } from '../components/ui/Modal';
import { Label } from '../components/ui/Label';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';

const Tasks = () => {
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', category: 'UX/UI', column: 'To Do' });
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Design New Onboarding Flow', category: 'UX/UI', column: 'To Do', date: 'May 12' },
    { id: 2, title: 'API Integration for Stripe', category: 'Backend', column: 'In Progress', date: 'May 14' }
  ]);

  const columns = ['To Do', 'In Progress', 'Done'];

  const handleAddTask = () => {
    if (newTask.title) {
      setTasks([...tasks, { id: Date.now(), ...newTask, date: 'Today' }]);
      setShowModal(false);
      setNewTask({ title: '', category: 'UX/UI', column: 'To Do' });
    }
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Task <span className="text-gradient from-blue-400 to-indigo-500">Board</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Sprint execution and granular tracking.</p>
        </div>
        <Button 
          onClick={() => setShowModal(true)}
          variant="glass"
          size="xl"
          className="font-bold gap-2"
        >
          <RiAddLine /> Create Task
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {columns.map((col, idx) => (
          <Card 
            key={col}
            transition={{ delay: idx * 0.1 }}
            className="bg-[var(--glass-bg)]/50 min-h-[500px]"
          >
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <Badge variant="dot" color={col === 'Done' ? 'online' : col === 'In Progress' ? 'amber' : 'indigo'} />
                {col}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {tasks.filter(t => t.column === col).map(task => (
                <div key={task.id} className="p-4 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)] cursor-pointer hover:border-indigo-500/50 hover:shadow-lg transition-all shadow-sm cursor-grab active:cursor-grabbing">
                  <p className="font-bold text-sm mb-3 text-[var(--text-primary)] leading-tight">{task.title}</p>
                  <div className="flex justify-between items-center text-xs">
                    <Badge color="glass" rounded="md" className="truncate max-w-[100px] font-bold">
                      {task.category}
                    </Badge>
                    <span className="text-[var(--text-secondary)] font-mono">{task.date}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* New Task Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="New Task"
      >
        <ModalBody className="space-y-4">
          <div>
            <Label>Task Title</Label>
            <Input
              placeholder="e.g., Update Navbar UI"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
              variant="blue"
              autoFocus
            />
          </div>

          <div>
            <Label>Label / Component</Label>
            <Input
              placeholder="e.g., Frontend"
              value={newTask.category}
              onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
              variant="blue"
            />
          </div>

          <div>
            <Label>Board Column</Label>
            <Select
              value={newTask.column}
              onChange={(e) => setNewTask({ ...newTask, column: e.target.value })}
              variant="blue"
            >
              <option value="To Do" className="bg-[var(--bg-primary)]">To Do</option>
              <option value="In Progress" className="bg-[var(--bg-primary)]">In Progress</option>
              <option value="Done" className="bg-[var(--bg-primary)]">Done</option>
            </Select>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => setShowModal(false)}
            variant="ghost"
            className="flex-1 font-bold"
          >
            Cancel
          </Button>
          <Button
            onClick={handleAddTask}
            variant="blue"
            className="flex-1 rounded-2xl font-bold py-4 gap-2"
          >
            <RiCalendarCheckLine /> Create Task
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Tasks;
