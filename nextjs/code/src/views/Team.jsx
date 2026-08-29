import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiUserAddLine, RiSendPlaneLine } from 'react-icons/ri';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Modal, ModalBody, ModalFooter } from '../components/ui/Modal';
import { Label } from '../components/ui/Label';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '../components/ui/Table';

const Team = () => {
  const [showInviteModal, setShowInviteModal] = useState(false);
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteRole, setInviteRole] = useState('Editor');

  const handleInvite = () => {
    // Add invite logic here
    setShowInviteModal(false);
    setInviteEmail('');
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            Organization <span className="text-gradient from-[var(--aurora-3)] to-[var(--aurora-1)]">Roster</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Manage members and permission roles.</p>
        </div>
        <Button
          onClick={() => setShowInviteModal(true)}
          variant="aurora3"
          size="xl"
          className="rounded-2xl"
        >
          <RiUserAddLine size={18} /> Invite Member
        </Button>
      </motion.div>

      <Card
        padding="none"
        transition={{ delay: 0.2 }}
        className="overflow-hidden"
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-[var(--glass-border)]/50 border-none">
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-bold flex flex-col border-none">
                Alexander Pierce
                <span className="text-xs text-[var(--text-secondary)] font-normal mt-1">alexander@trackify.app</span>
              </TableCell>
              <TableCell><Badge color="aurora-3">Owner</Badge></TableCell>
              <TableCell><Badge color="success">Active</Badge></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-bold flex flex-col border-none">
                Sarah Jenkins
                <span className="text-xs text-[var(--text-secondary)] font-normal mt-1">sarah@trackify.app</span>
              </TableCell>
              <TableCell><Badge color="glass" className="font-bold">Editor</Badge></TableCell>
              <TableCell><Badge color="success">Active</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      <Modal
        isOpen={showInviteModal}
        onClose={() => setShowInviteModal(false)}
        title="Invite Team Member"
      >
        <ModalBody>
          <div>
            <Label>Email Address</Label>
            <Input
              type="email"
              placeholder="colleague@company.com"
              value={inviteEmail}
              onChange={(e) => setInviteEmail(e.target.value)}
              variant="aurora3"
              autoFocus
            />
          </div>

          <div>
            <Label>Assign Role</Label>
            <Select
              value={inviteRole}
              onChange={(e) => setInviteRole(e.target.value)}
              variant="aurora3"
            >
              <option value="Editor" className="bg-[var(--bg-primary)]">Editor (Full Access)</option>
              <option value="Viewer" className="bg-[var(--bg-primary)]">Viewer (Read Only)</option>
              <option value="Admin" className="bg-[var(--bg-primary)]">Admin (Billing & Roles)</option>
            </Select>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => setShowInviteModal(false)}
            variant="ghost"
            className="flex-1 font-bold"
          >
            Cancel
          </Button>
          <Button
            onClick={handleInvite}
            variant="aurora3"
            className="flex-1 rounded-2xl font-bold py-4"
          >
            <RiSendPlaneLine /> Send Invite
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Team;
