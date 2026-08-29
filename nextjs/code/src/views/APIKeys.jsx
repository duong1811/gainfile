import React from 'react';
import { motion } from 'framer-motion';
import { RiKey2Line, RiFileCopyLine, RiAddLine } from 'react-icons/ri';
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

const APIKeys = () => {
  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Developer <span className="text-gradient from-gray-400 to-slate-300">Tokens</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Manage OAuth tokens and programmatic access.</p>
        </div>
        <Button variant="glass" size="xl" className="font-bold">
          <RiAddLine /> Generate Token
        </Button>
      </motion.div>

      <Card padding="none" className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Token Prefix</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Expires</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {['Production App', 'Staging Sync', 'Internal Scripts'].map((key, i) => (
              <TableRow key={key}>
                <TableCell className="flex items-center gap-3 border-none">
                  <div className="w-8 h-8 rounded-lg bg-[var(--text-primary)]/5 flex items-center justify-center text-[var(--text-secondary)]">
                    <RiKey2Line />
                  </div>
                  <span className="font-bold">{key}</span>
                </TableCell>
                <TableCell className="font-mono text-sm text-[var(--text-secondary)]">track_xyz_{100 + i}...</TableCell>
                <TableCell className="text-sm text-[var(--text-secondary)]">Mar 1{i}, 2024</TableCell>
                <TableCell className="text-sm text-[var(--text-secondary)]">Never</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon-xs" className="bg-[var(--text-primary)]/5 hover:bg-[var(--text-primary)]/10">
                      <RiFileCopyLine />
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

export default APIKeys;
