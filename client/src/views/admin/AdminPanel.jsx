import React from 'react';
import { motion } from 'framer-motion';
import { RiBuilding4Line, RiGroupLine, RiMoneyDollarCircleLine, RiDatabase2Line } from 'react-icons/ri';
import { Badge } from '../../components/ui/Badge';
import { Card } from '../../components/ui/Card';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '../../components/ui/Table';

const AdminPanel = () => {
  return (
    <div className="py-6 md:py-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)]">
      <motion.div
        className="mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <RiDatabase2Line className="text-[var(--aurora-3)]" />
          <span className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-widest text-[var(--aurora-3)]">Super Admin</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
          Tenant <span className="text-[var(--aurora-3)] text-gradient">Console</span>
        </h1>
        <p className="text-[var(--text-secondary)] text-lg font-medium">Manage Multi-Tenant Architecture & Subscriptions.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <Card variant="interactive" padding="lg">
          <RiBuilding4Line size={32} className="text-[var(--aurora-3)] mb-4" />
          <p className="text-[var(--text-secondary)] font-bold uppercase tracking-widest text-xs mb-1">Active Tenants</p>
          <p className="text-4xl font-bold font-mono">124</p>
        </Card>
        <Card variant="interactive" padding="lg">
          <RiGroupLine size={32} className="text-[var(--aurora-1)] mb-4" />
          <p className="text-[var(--text-secondary)] font-bold uppercase tracking-widest text-xs mb-1">Total Users</p>
          <p className="text-4xl font-bold font-mono">4,892</p>
        </Card>
        <Card variant="interactive" padding="lg">
          <RiMoneyDollarCircleLine size={32} className="text-[var(--aurora-4)] mb-4" />
          <p className="text-[var(--text-secondary)] font-bold uppercase tracking-widest text-xs mb-1">MRR (Stripe API)</p>
          <p className="text-4xl font-bold font-mono">$45.2k</p>
        </Card>
      </div>

      <Card padding="none" className="overflow-hidden">
        <div className="p-8 pb-0">
          <h3 className="text-xl font-bold mb-6">Recent Tenants</h3>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Tenant Name</TableHead>
              <TableHead>Plan</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[
              { name: 'Acme Corp', plan: 'Enterprise', status: 'Active', date: '2026-03-27' },
              { name: 'Globex Inc', plan: 'Professional', status: 'Active', date: '2026-03-25' },
              { name: 'Initech', plan: 'Startup', status: 'Suspended', date: '2026-03-20' },
            ].map((row, i) => (
              <TableRow key={i}>
                <TableCell className="font-medium">{row.name}</TableCell>
                <TableCell>
                  <Badge variant="subtle" color="primary" className="font-bold">
                    {row.plan}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge 
                    variant="subtle" 
                    color={row.status === 'Active' ? 'success' : 'danger'} 
                    className="font-bold"
                  >
                    {row.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-[var(--text-secondary)] text-sm font-mono">{row.date}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default AdminPanel;
