import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  RiSettings4Line,
  RiUser3Line,
  RiBuilding4Line,
  RiSecurePaymentLine,
  RiKey2Line,
  RiSave3Line
} from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';
import { Label } from '../components/ui/Label';
import { Switch } from '../components/ui/Switch';
import { Card } from '../components/ui/Card';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '../components/ui/Tabs';

const Settings = () => {
  const [reminders, setReminders] = useState(true);

  return (
    <div className="p-6 min-h-[calc(100vh-200px)] text-[var(--text-primary)]">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <RiSettings4Line className="text-[var(--text-secondary)]" />
            <span className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-widest text-[var(--aurora-1)]">Configuration</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            System <span className="text-gradient from-gray-500 to-gray-300">Settings</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Fine-tune your environment.</p>
        </div>
        <Button variant="primary" className="gap-2 shadow-lg shadow-[var(--aurora-1)]/20">
          <RiSave3Line size={20} /> Save Changes
        </Button>
      </motion.div>

      <Tabs defaultValue="profile" orientation="vertical">
        <TabsList>
          <TabsTrigger value="profile" icon={RiUser3Line}>Profile</TabsTrigger>
          <TabsTrigger value="company" icon={RiBuilding4Line}>Company</TabsTrigger>
          <TabsTrigger value="billing" icon={RiSecurePaymentLine}>Subscription</TabsTrigger>
          <TabsTrigger value="api" icon={RiKey2Line}>API Keys</TabsTrigger>
        </TabsList>

        <AnimatePresence mode="wait">
          <TabsContent value="profile">
            <Card padding="lg" className="rounded-[2.5rem] border border-[var(--glass-border)] bg-[var(--glass-bg)]">
              <h3 className="text-2xl font-bold mb-6 font-outfit">Personal Profile</h3>
              <div className="flex items-center gap-6 mb-8 border-b border-[var(--glass-border)] pb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] flex items-center justify-center text-4xl font-bold text-white shadow-xl shadow-[var(--aurora-1)]/20">
                  A
                </div>
                <div>
                  <Button variant="glass" size="sm" className="font-bold mb-2">Upload Avatar</Button>
                  <p className="text-xs text-[var(--text-secondary)]">JPG, GIF or PNG. 1MB max.</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label>First Name</Label>
                  <Input defaultValue="Alexander" variant="aurora1" />
                </div>
                <div>
                  <Label>Last Name</Label>
                  <Input defaultValue="Pierce" variant="aurora1" />
                </div>
                <div className="col-span-2">
                  <Label>Email Address</Label>
                  <Input type="email" defaultValue="alexander@trackify.app" variant="aurora1" />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="company">
            <Card padding="lg" className="rounded-[2.5rem] border border-[var(--glass-border)] bg-[var(--glass-bg)]">
              <h3 className="text-2xl font-bold mb-6 font-outfit">Company Details</h3>
              <div className="space-y-6">
                <div>
                  <Label>Tenant ID</Label>
                  <Input disabled defaultValue="tnt_x98f23nkd" className="text-[var(--text-secondary)] cursor-not-allowed opacity-50 font-mono text-sm" />
                </div>
                <div>
                  <Label>Company Name</Label>
                  <Input defaultValue="Acme Corporation" variant="aurora2" />
                </div>
                <div>
                  <Label>Timezone</Label>
                  <Select variant="aurora2">
                    <option value="pt" className="bg-[var(--bg-primary)]">Pacific Time (PT) - Los Angeles</option>
                    <option value="et" className="bg-[var(--bg-primary)]">Eastern Time (ET) - New York</option>
                    <option value="gmt" className="bg-[var(--bg-primary)]">Greenwich Mean Time (GMT) - London</option>
                  </Select>
                </div>
              </div>

              <h3 className="text-xl font-bold mt-12 mb-6 font-outfit border-t border-[var(--glass-border)] pt-8">Global Preferences</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold">Daily Reminders</p>
                    <p className="text-[var(--text-secondary)] text-sm mt-1">Receive digest notifications for all team members.</p>
                  </div>
                  <Switch checked={reminders} onChange={setReminders} variant="aurora" />
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="billing">
            <Card padding="lg" className="rounded-[2.5rem] border border-[var(--glass-border)] bg-[var(--glass-bg)]">
              <h3 className="text-2xl font-bold mb-6 font-outfit">Subscription & Billing</h3>

              <div className="relative overflow-hidden rounded-2xl border border-[var(--aurora-1)] p-6 bg-gradient-to-br from-[var(--aurora-1)]/10 to-transparent mb-8">
                <p className="text-[var(--aurora-1)] font-bold uppercase tracking-widest text-xs mb-2">Current Plan</p>
                <p className="text-4xl font-bold font-outfit mb-2">Professional Tier</p>
                <p className="text-[var(--text-secondary)] mb-6">Up to 50 users. Renews on Oct 24, {new Date().getFullYear()}.</p>
                <Button variant="primary" size="sm">Manage on Stripe</Button>
              </div>

              <h4 className="font-bold mb-4 font-outfit">Payment Methods</h4>
              <div className="flex items-center justify-between p-4 border border-[var(--glass-border)] rounded-xl bg-[var(--bg-primary)] mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-8 rounded bg-[var(--glass-border)] flex items-center justify-center font-bold text-xs">VISA</div>
                  <div>
                    <p className="font-bold">•••• •••• •••• 4242</p>
                    <p className="text-xs text-[var(--text-secondary)]">Expires 12/28</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-[var(--text-secondary)] bg-[var(--glass-border)] px-3 py-1 rounded-full text-[var(--text-primary)]">Default</span>
              </div>
              <Button variant="ghost" size="sm" className="!text-[var(--aurora-1)] hover:underline px-0">+ Add Payment Method</Button>
            </Card>
          </TabsContent>

          <TabsContent value="api">
            <Card padding="lg" className="rounded-[2.5rem] border border-[var(--glass-border)] bg-[var(--glass-bg)]">
              <h3 className="text-2xl font-bold mb-6 font-outfit">API Access</h3>
              <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">Use these keys to authenticate API requests from your backend services. Do not share your secret key in frontend code.</p>

              <div className="space-y-6">
                <div>
                  <Label className="flex justify-between">
                    Public Key
                  </Label>
                  <Input readOnly value="pk_live_51M..." className="font-mono text-sm text-[var(--text-secondary)]" />
                </div>
                <div>
                  <Label className="flex justify-between items-center">
                    Secret Key
                    <Button variant="ghost" size="xs" className="!text-[var(--aurora-1)] hover:underline normal-case px-0 h-auto">Reveal Key</Button>
                  </Label>
                  <Input type="password" readOnly value="sk_live_51Mxxxxxxxxxxxxxxxxxx" className="font-mono text-sm text-[var(--text-secondary)]" />
                </div>

                <div className="pt-6 border-t border-[var(--glass-border)]">
                  <Button variant="danger" size="sm" className="bg-rose-500/10 !text-rose-500 border border-rose-500/20 hover:!bg-rose-500 hover:!text-white">
                    Roll API Keys
                  </Button>
                </div>
              </div>
            </Card>
          </TabsContent>
        </AnimatePresence>
      </Tabs>
    </div>
  );
};

export default Settings;
