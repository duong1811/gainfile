import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiMore2Fill, RiEdit2Line, RiDeleteBin7Line, RiSearchLine, RiFilter3Line, RiDownloadCloud2Line, RiFileTextLine } from 'react-icons/ri';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '../../components/ui/Table';
import { Badge } from '../../components/ui/Badge';

const Tables = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const users = [
    { id: 1, name: 'Alex Doe', role: 'Administrator', email: 'alex@trackify.app', status: 'Active', amount: '$4,200.00' },
    { id: 2, name: 'Sarah Connor', role: 'Editor', email: 'sarah.c@trackify.app', status: 'Offline', amount: '$1,350.50' },
    { id: 3, name: 'James Smith', role: 'Viewer', email: 'j.smith@trackify.app', status: 'Pending', amount: '$850.00' },
    { id: 4, name: 'Emma Wilson', role: 'Manager', email: 'emma.w@trackify.app', status: 'Active', amount: '$6,900.25' },
    { id: 5, name: 'Michael Chen', role: 'Contributor', email: 'm.chen@trackify.app', status: 'Offline', amount: '$300.00' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active': return 'success';
      case 'Offline': return 'glass';
      case 'Pending': return 'warning';
      default: return 'primary';
    }
  };

  const toggleAll = () => {
    if (selectedRows.length === users.length) setSelectedRows([]);
    else setSelectedRows(users.map(u => u.id));
  };

  const toggleRow = (id) => {
    if (selectedRows.includes(id)) setSelectedRows(selectedRows.filter(r => r !== id));
    else setSelectedRows([...selectedRows, id]);
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Data Tables</h1>
        <p className="text-[var(--text-secondary)]">Complex grids with selection, pagination, search bars, and empty states.</p>
      </div>

      {/* Complex Interactive Table */}
      <Card padding="none" className="bg-[#111] overflow-hidden shadow-2xl">
        {/* Toolbar Header */}
        <div className="p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between border-b border-[var(--glass-border)] gap-4 bg-black/40">
          <div className="flex-1 w-full max-w-sm relative">
            <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input type="text" placeholder="Search users by name or email..." className="w-full bg-white/5 border border-[var(--glass-border)] rounded-xl py-2 pl-10 pr-4 text-sm text-[var(--text-primary)] outline-none focus:border-[var(--aurora-1)] focus:bg-white/10 transition-all" />
          </div>
          <div className="flex items-center gap-3 self-end sm:self-auto">
            <Button variant="outline" size="sm" className="gap-2">
              <RiFilter3Line /> Filters
            </Button>
            <Button variant="primary" size="sm" className="gap-2">
              <RiDownloadCloud2Line /> Export
            </Button>
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12 text-center">
                <input type="checkbox" onChange={toggleAll} checked={selectedRows.length === users.length && users.length > 0} className="w-4 h-4 rounded bg-transparent border-gray-600 accent-[var(--aurora-1)] cursor-pointer" />
              </TableHead>
              <TableHead>User Profile</TableHead>
              <TableHead>Role / Dept</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Revenue</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => {
              const isSelected = selectedRows.includes(user.id);
              return (
                <TableRow key={user.id} className={isSelected ? 'bg-[var(--aurora-1)]/10' : ''}>
                  <TableCell className="text-center">
                    <input type="checkbox" onChange={() => toggleRow(user.id)} checked={isSelected} className="w-4 h-4 rounded bg-transparent border-gray-600 accent-[var(--aurora-1)] cursor-pointer" />
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-4">
                      <img src={`/images/user/user-${user.id}.jpg`} alt={user.name} className="w-10 h-10 rounded-full border-2 border-transparent group-hover:border-[var(--aurora-1)] transition-all" />
                      <div>
                        <div className={`font-bold transition-colors ${isSelected ? 'text-[var(--aurora-1)]' : 'text-[var(--text-primary)]'}`}>{user.name}</div>
                        <div className="text-xs text-[var(--text-secondary)] tracking-wide">{user.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <span className="text-[var(--text-primary)] font-medium text-sm">{user.role}</span>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-widest mt-0.5">IT Operations</div>
                  </TableCell>
                  <TableCell>
                    <Badge color={getStatusColor(user.status)} variant="subtle" className="font-bold">
                      {user.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right font-mono font-bold text-[var(--text-primary)] tracking-tight">
                    {user.amount}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button variant="ghost" size="icon-xs" className="!text-blue-400 hover:bg-blue-400/20"><RiEdit2Line /></Button>
                      <Button variant="ghost" size="icon-xs" className="!text-rose-400 hover:bg-rose-400/20"><RiDeleteBin7Line /></Button>
                      <Button variant="ghost" size="icon-xs" className="!text-[var(--text-secondary)] hover:bg-white/10"><RiMore2Fill /></Button>
                    </div>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>
        </Table>

        {/* Selected State & Pagination Footer */}
        <div className="p-4 border-t border-[var(--glass-border)] bg-black/40 flex flex-col md:flex-row items-center justify-between text-sm text-[var(--text-secondary)] gap-4">
          <div>
            {selectedRows.length > 0 ? (
              <span className="text-[var(--aurora-1)] font-bold">{selectedRows.length} rows selected</span>
            ) : (
              <span>Showing 1 to 5 of 24 entries</span>
            )}
          </div>
          <div className="flex gap-1 items-center bg-black/50 border border-[var(--glass-border)] p-1 rounded-xl">
            <Button variant="ghost" size="xs" className="px-3 font-bold uppercase tracking-wider">Prev</Button>
            <Button variant="primary" size="icon-xs" className="w-7 h-7 font-bold shadow-md">1</Button>
            <Button variant="ghost" size="icon-xs" className="w-7 h-7 font-medium">2</Button>
            <Button variant="ghost" size="icon-xs" className="w-7 h-7 font-medium">3</Button>
            <Button variant="ghost" size="xs" className="px-3 font-bold uppercase tracking-wider">Next</Button>
          </div>
        </div>
      </Card>

      {/* Empty State Table Wrapper */}
      <h2 className="text-xl font-semibold text-[var(--text-primary)] mt-12 mb-4">Empty States & Minimal Grids</h2>
      <Card padding="none" className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice ID</TableHead>
              <TableHead>Client Name</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell colSpan={3} className="py-16 text-center">
                <div className="flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-[var(--glass-border)] rounded-full flex items-center justify-center mb-4 text-3xl text-[var(--text-secondary)]">
                    <RiFileTextLine />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-1">No Invoices Found</h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-6 max-w-sm">You haven't generated any invoices for this billing period yet. Create one to get started.</p>
                  <Button variant="primary" className="rounded-xl">
                    Create First Invoice
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Tables;
