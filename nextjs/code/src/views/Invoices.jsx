import React from 'react';
import { motion } from 'framer-motion';
import { RiReceiptLine, RiDownloadCloud2Line, RiMore2Fill } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '../components/ui/Table';

const Invoices = () => {
  const invoices = [
    { id: 'INV-2026-001', client: 'Acme Corporation', date: 'Mar 25, 2026', amount: '$4,500.00', status: 'Paid' },
    { id: 'INV-2026-002', client: 'Global Dynamics', date: 'Mar 22, 2026', amount: '$1,250.00', status: 'Pending' },
    { id: 'INV-2026-003', client: 'Nexus Technologies', date: 'Mar 18, 2026', amount: '$8,900.00', status: 'Overdue' },
    { id: 'INV-2026-004', client: 'Stark Industries', date: 'Mar 15, 2026', amount: '$12,400.00', status: 'Paid' },
    { id: 'INV-2026-005', client: 'Wayne Enterprises', date: 'Mar 10, 2026', amount: '$3,200.00', status: 'Paid' }
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
            Financial <span className="text-gradient from-emerald-400 to-teal-500">Invoices</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Manage billing and payment collections.</p>
        </div>
        <Button variant="primary" className="rounded-2xl font-bold gap-2">
          <RiReceiptLine size={18} /> Generate Invoice
        </Button>
      </motion.div>

      <Card
        padding="none"
        transition={{ delay: 0.1 }}
        className="overflow-hidden"
      >
        <Table>
          <TableHeader>
            <TableRow className="bg-[var(--glass-border)]/50 border-none">
              <TableHead>Invoice ID</TableHead>
              <TableHead>Client</TableHead>
              <TableHead>Date Issued</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv, idx) => (
              <TableRow 
                key={inv.id}
                as={motion.tr}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 + (idx * 0.05) }}
              >
                <TableCell className="font-mono font-bold text-teal-500">{inv.id}</TableCell>
                <TableCell className="font-bold">{inv.client}</TableCell>
                <TableCell className="text-[var(--text-secondary)]">{inv.date}</TableCell>
                <TableCell className="font-mono font-bold">{inv.amount}</TableCell>
                <TableCell>
                  <Badge 
                    variant="subtle" 
                    color={inv.status === 'Paid' ? 'online' : inv.status === 'Pending' ? 'amber' : 'offline'}
                    className="font-bold uppercase tracking-wider"
                  >
                    {inv.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon-xs" className="hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)]">
                      <RiDownloadCloud2Line size={16} />
                    </Button>
                    <Button variant="ghost" size="icon-xs" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
                      <RiMore2Fill size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Invoices;
