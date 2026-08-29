import React from 'react';
import { motion } from 'framer-motion';
import { RiCustomerService2Line, RiSendPlaneLine } from 'react-icons/ri';
import { Select } from '../components/ui/Select';
import { Textarea } from '../components/ui/Textarea';
import { Label } from '../components/ui/Label';
import { Button } from '../components/ui/Button';

const Support = () => {
  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Help<span className="text-gradient from-blue-400 to-cyan-500">Desk</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Create a ticket or chat with an expert.</p>
        </div>
      </motion.div>

      <div className="glass-card p-8 md:p-12 rounded-[3rem] border-[var(--glass-border)] bg-[var(--glass-bg)] max-w-3xl mx-auto">
        <div className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 text-4xl mb-6 mx-auto"><RiCustomerService2Line /></div>
        <h2 className="text-2xl font-bold text-center mb-8">How can we help you solve it?</h2>

        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Topic</Label>
              <Select variant="blue">
                <option value="billing" className="bg-[var(--bg-primary)]">Billing Issue</option>
                <option value="tech" className="bg-[var(--bg-primary)]">Technical Support</option>
                <option value="general" className="bg-[var(--bg-primary)]">General Inquiry</option>
              </Select>
            </div>
            <div>
              <Label>Priority</Label>
              <Select variant="blue">
                <option value="low" className="bg-[var(--bg-primary)] flex">Normal</option>
                <option value="high" className="bg-[var(--bg-primary)]">High</option>
                <option value="urgent" className="bg-[var(--bg-primary)]">Critical</option>
              </Select>
            </div>
          </div>
          <div>
            <Label>Message Detail</Label>
            <Textarea
              rows="6"
              variant="blue"
              placeholder="Describe what happened..."
              className="font-medium"
            />
          </div>

          <Button 
            type="button" 
            variant="primary" 
            size="xl" 
            className="w-full !bg-gradient-to-r from-blue-500 to-cyan-500 !border-none shadow-lg shadow-blue-500/20"
          >
            <RiSendPlaneLine /> Submit Ticket
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Support;
