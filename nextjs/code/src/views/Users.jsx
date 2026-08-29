import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiAddLine, RiSearchLine, RiDeleteBinLine, RiKey2Line } from 'react-icons/ri';
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

const Users = () => {
  const [showModal, setShowModal] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', role: 'Editor', status: 'Pending' });

  const [users, setUsers] = useState([
    { id: 1, name: 'Alice Smith', role: 'Super Admin', email: 'alice@trackify.app', status: 'Active' },
    { id: 2, name: 'Bob Jones', role: 'Editor', email: 'bob@trackify.app', status: 'Active' },
    { id: 3, name: 'Charlie Day', role: 'Viewer', email: 'charlie@trackify.app', status: 'Pending' }
  ]);

  const handleAddUser = () => {
    if (newUser.name && newUser.email) {
      setUsers([...users, { id: Date.now(), ...newUser }]);
      setShowModal(false);
      setNewUser({ name: '', email: '', role: 'Editor', status: 'Pending' });
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
            User <span className="text-gradient from-[var(--aurora-1)] to-[var(--aurora-2)]">Roles</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Provision accounts and configure access tiers.</p>
        </div>
        <Button
          onClick={() => setShowModal(true)}
          variant="glass"
          size="xl"
          className="font-bold"
        >
          <RiAddLine /> Provision User
        </Button>
      </motion.div>

      <Card padding="none" className="overflow-hidden">
        <div className="p-6 pb-0">
          <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)] max-w-sm mb-6">
            <RiSearchLine className="text-[var(--text-secondary)]" />
            <input type="text" placeholder="Search accounts..." className="bg-transparent border-none outline-none text-sm w-full" />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((u) => (
              <TableRow key={u.id}>
                <TableCell className="flex flex-col border-none">
                  <span className="font-bold text-[var(--text-primary)]">{u.name}</span>
                  <span className="text-xs text-[var(--text-secondary)]">{u.email}</span>
                </TableCell>
                <TableCell>
                  <Badge 
                    color={u.role === 'Super Admin' ? 'aurora-2' : u.role === 'Editor' ? 'aurora-1' : 'glass'} 
                    rounded="md"
                    className="font-bold"
                  >
                    {u.role}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge 
                    color={u.status === 'Active' ? 'success' : 'orange'} 
                    rounded="md"
                    className="font-bold"
                  >
                    {u.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon-xs" className="bg-[var(--text-primary)]/5 hover:bg-[var(--text-primary)]/10">
                      <RiKey2Line />
                    </Button>
                    <Button variant="ghost" size="icon-xs" className="bg-rose-500/10 !text-rose-500 hover:!bg-rose-500 hover:!text-white">
                      <RiDeleteBinLine />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      {/* New User Modal */}
      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)}
        title="Configure User"
      >
        <ModalBody>
          <div>
            <Label>Full Name</Label>
            <Input
              placeholder="e.g., Jane Doe"
              value={newUser.name}
              onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
              autoFocus
            />
          </div>

          <div>
            <Label>Email Address</Label>
            <Input
              type="email"
              placeholder="jane@trackify.app"
              value={newUser.email}
              onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
            />
          </div>

          <div>
            <Label>Access Tier (Role)</Label>
            <Select
              value={newUser.role}
              onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
            >
              <option value="Super Admin" className="bg-[var(--bg-primary)]">Super Admin</option>
              <option value="Editor" className="bg-[var(--bg-primary)]">Editor</option>
              <option value="Viewer" className="bg-[var(--bg-primary)]">Viewer</option>
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
            onClick={handleAddUser}
            variant="primary"
            className="flex-1 rounded-2xl font-bold py-4"
          >
            <RiAddLine /> Provision
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Users;
