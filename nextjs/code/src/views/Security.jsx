import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiShieldCheckLine, RiSmartphoneLine } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Switch } from '../components/ui/Switch';
import { Card } from '../components/ui/Card';

const Security = () => {
  const [mfa, setMfa] = useState(true);

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Account <span className="text-gradient from-rose-400 to-orange-500">Security</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Protect your data and verify sessions.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card padding="lg" className="rounded-3xl border-[var(--glass-border)] bg-[var(--glass-bg)]">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center text-xl"><RiSmartphoneLine /></div>
              <div>
                <h3 className="font-bold text-lg">Two-Factor Auth</h3>
                <p className="text-sm text-[var(--text-secondary)]">Add an extra layer of defense.</p>
              </div>
            </div>
            <Switch checked={mfa} onChange={setMfa} variant="default" />
          </div>
          <Button variant="outline" className="w-full font-bold !text-[var(--text-secondary)] hover:!text-[var(--text-primary)]">Configure MFA App</Button>
        </Card>

        <Card padding="lg" className="rounded-3xl border-[var(--glass-border)] bg-[var(--glass-bg)]">
          <div className="flex justify-between items-start mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-slate-500/10 text-[var(--text-secondary)] flex items-center justify-center text-xl"><RiShieldCheckLine /></div>
              <div>
                <h3 className="font-bold text-lg">Change Password</h3>
                <p className="text-sm text-[var(--text-secondary)]">Update your access credentials.</p>
              </div>
            </div>
          </div>
          <Button variant="white" className="w-full font-bold !bg-[var(--text-primary)] !text-[var(--bg-primary)]">Reset Password</Button>
        </Card>
      </div>

      <h3 className="text-xl font-bold mb-6">Active Sessions</h3>
      <div className="space-y-4">
        {[1, 2].map(i => (
          <Card key={i} padding="md" className="flex items-center justify-between rounded-2xl border-[var(--glass-border)] bg-[var(--glass-bg)]">
            <div className="flex flex-col">
              <p className="font-bold">Mac OS • Chrome</p>
              <p className="text-xs text-[var(--text-secondary)]">New York, US • IP 192.168.1.{i} • {i === 1 ? 'Current Session' : '2 hours ago'}</p>
            </div>
            <Button variant="ghost" size="sm" className="!text-rose-400 hover:!text-rose-500 font-bold px-0">Revoke</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Security;
