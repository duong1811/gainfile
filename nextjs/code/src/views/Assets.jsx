import React from 'react';
import { motion } from 'framer-motion';
import { RiMacbookLine, RiSmartphoneLine, RiComputerLine, RiSearchLine, RiQrCodeLine } from 'react-icons/ri';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '../components/ui/Table';

const Assets = () => {
  const assets = [
    { id: 'AST-1042', name: 'MacBook Pro 16"', type: 'Laptop', assignee: 'Alice Smith', status: 'In Use', date: 'Jan 2025' },
    { id: 'AST-1045', name: 'Dell UltraSharp 32"', type: 'Monitor', assignee: 'Bob Jones', status: 'In Use', date: 'Feb 2025' },
    { id: 'AST-1089', name: 'iPhone 15 Pro', type: 'Mobile', assignee: 'Unassigned', status: 'Available', date: 'Mar 2026' },
    { id: 'AST-1092', name: 'ThinkPad X1 Carbon', type: 'Laptop', assignee: 'Charlie Day', status: 'Repair', date: 'Nov 2024' },
    { id: 'AST-1100', name: 'iPad Pro 12.9"', type: 'Tablet', assignee: 'Unassigned', status: 'Available', date: 'Mar 2026' },
  ];

  const getBadgeProps = (status) => {
    switch(status) {
      case 'In Use': return { color: 'primary' };
      case 'Available': return { color: 'success' };
      case 'Repair': return { color: 'danger' };
      default: return { color: 'glass' };
    }
  };

  const getIcon = (type) => {
    switch(type) {
      case 'Laptop': return <RiMacbookLine size={24} />;
      case 'Mobile': case 'Tablet': return <RiSmartphoneLine size={24} />;
      default: return <RiComputerLine size={24} />;
    }
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
            IT <span className="text-gradient from-teal-400 to-blue-500">Asset Mgt</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Hardware inventory and assignment tracking.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="glass" className="gap-2">
            <RiQrCodeLine size={18} /> Scan QR
          </Button>
          <Button variant="primary" className="shadow-lg shadow-teal-500/20">
            Add Asset
          </Button>
        </div>
      </motion.div>

      <Card
        padding="none"
        transition={{ delay: 0.2 }}
        className="overflow-hidden"
      >
        <div className="p-4 border-b border-[var(--glass-border)] bg-[var(--glass-bg)]/50">
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)] max-w-sm">
            <RiSearchLine className="text-[var(--text-secondary)]" />
            <input type="text" placeholder="Search AST ID or Model..." className="bg-transparent border-none outline-none text-sm w-full focus:ring-0" />
          </div>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="bg-[var(--glass-border)]/30 border-none">
              <TableHead className="w-16">Type</TableHead>
              <TableHead>Asset ID</TableHead>
              <TableHead>Device Name</TableHead>
              <TableHead>Assignee</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {assets.map((asset, idx) => (
              <TableRow key={asset.id}>
                <TableCell>
                  <div className="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)]">
                    {getIcon(asset.type)}
                  </div>
                </TableCell>
                <TableCell className="font-mono font-bold text-[var(--text-secondary)]">{asset.id}</TableCell>
                <TableCell className="font-bold">{asset.name}</TableCell>
                <TableCell className="text-sm">{asset.assignee}</TableCell>
                <TableCell>
                  <Badge 
                    {...getBadgeProps(asset.status)}
                    className="px-3 py-1.5 font-bold tracking-wider"
                  >
                    {asset.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Assets;
