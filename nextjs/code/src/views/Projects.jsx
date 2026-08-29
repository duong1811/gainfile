import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiFolder2Line, RiAddLine, RiMore2Fill, RiFlag2Line } from 'react-icons/ri';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent, CardTitle } from '../components/ui/Card';
import { Modal, ModalBody, ModalFooter } from '../components/ui/Modal';
import { Label } from '../components/ui/Label';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [newProject, setNewProject] = useState({ name: '', status: 'Planning', progress: 0 });

  const [projects, setProjects] = useState([
    { id: 1, name: 'Project Alpha', status: 'Active', progress: 75, members: 4 },
    { id: 2, name: 'Beta Redesign', status: 'Planning', progress: 20, members: 2 },
    { id: 3, name: 'Gamma API', status: 'Completed', progress: 100, members: 6 },
  ]);

  const handleAddProject = () => {
    if (newProject.name) {
      setProjects([...projects, { id: Date.now(), ...newProject, members: 1 }]);
      setShowModal(false);
      setNewProject({ name: '', status: 'Planning', progress: 0 });
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
          <div className="flex items-center gap-2 mb-4">
            <RiFolder2Line className="text-[var(--aurora-1)]" />
            <span className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-widest text-[var(--aurora-1)]">Productivity</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Active <span className="text-gradient from-[var(--aurora-1)] to-[var(--aurora-2)]">Projects</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Manage and deploy your high-level workstreams.</p>
        </div>
        <Button 
          onClick={() => setShowModal(true)}
          variant="glass"
          size="xl"
          className="font-bold gap-2"
        >
          <RiAddLine /> New Project
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((proj, idx) => (
          <Card 
            key={proj.id}
            variant="interactive"
            transition={{ delay: idx * 0.1 }}
            className="group"
          >
            <div className="absolute -right-20 -top-20 w-40 h-40 bg-[var(--aurora-1)]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <CardHeader className="flex-row justify-between items-start mb-6 space-y-0">
              <div className="w-12 h-12 rounded-xl bg-[var(--glass-border)] flex items-center justify-center text-[var(--aurora-1)] text-xl">
                <RiFolder2Line />
              </div>
              <Button variant="ghost" size="icon-xs" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                <RiMore2Fill />
              </Button>
            </CardHeader>
            <CardContent>
              <CardTitle className="text-xl mb-1 line-clamp-1">{proj.name}</CardTitle>
              <div className="flex items-center gap-2 mb-6">
                <Badge 
                  variant="subtle" 
                  color={proj.status === 'Completed' ? 'online' : proj.status === 'Active' ? 'aurora-1' : 'glass'}
                  className="font-bold uppercase tracking-wider"
                >
                  {proj.status}
                </Badge>
              </div>
              
              <div className="w-full h-2 bg-[var(--glass-border)] rounded-full overflow-hidden mb-2">
                <div className="h-full bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)]" style={{ width: `${proj.progress}%` }} />
              </div>
              <p className="text-xs text-[var(--text-secondary)] text-right font-medium">{proj.progress}% Complete</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Create Project"
      >
        <ModalBody className="space-y-4">
          <div>
            <Label>Project Name</Label>
            <Input
              placeholder="e.g., Marketing Q4"
              value={newProject.name}
              onChange={(e) => setNewProject({ ...newProject, name: e.target.value })}
              variant="aurora1"
              autoFocus
            />
          </div>

          <div>
            <Label>Status Phase</Label>
            <Select
              value={newProject.status}
              onChange={(e) => setNewProject({ ...newProject, status: e.target.value })}
              variant="aurora1"
            >
              <option value="Planning" className="bg-[var(--bg-primary)]">Planning (0%)</option>
              <option value="Active" className="bg-[var(--bg-primary)]">Active Execution</option>
              <option value="Review" className="bg-[var(--bg-primary)]">In Review</option>
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
            onClick={handleAddProject}
            variant="primary"
            className="flex-1 rounded-2xl font-bold py-4 gap-2"
          >
            <RiFlag2Line /> Initialize
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Projects;
