import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  RiMailLine, 
  RiLockPasswordLine, 
  RiEyeOffLine, 
  RiEyeLine, 
  RiUserLine, 
  RiCalendarLine 
} from 'react-icons/ri';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Select } from '../../components/ui/Select';
import { Label } from '../../components/ui/Label';
import { Switch } from '../../components/ui/Switch';
import { Textarea } from '../../components/ui/Textarea';
import { Card } from '../../components/ui/Card';
import { Checkbox } from '../../components/ui/Checkbox';
import { RadioGroup, RadioGroupItem } from '../../components/ui/RadioGroup';

const Forms = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [toggle1, setToggle1] = useState(true);
  const [toggle2, setToggle2] = useState(false);
  const [check1, setCheck1] = useState(true);
  const [radioVal, setRadioVal] = useState('premium');

  return (
    <div className="py-6 md:py-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Form Elements</h1>
        <p className="text-[var(--text-secondary)]">A comprehensive suite of standardized inputs, switches, and advanced controls.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Standard Inputs */}
        <Card padding="lg" className="space-y-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Standard Inputs</h2>
          <div className="space-y-4">
            <div>
              <Label>Full Name</Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--text-secondary)] group-focus-within:text-[var(--aurora-1)] transition-colors z-10">
                  <RiUserLine />
                </div>
                <Input className="pl-11" placeholder="John Doe" variant="aurora1" />
              </div>
            </div>
            <div>
              <Label>Email Address</Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--text-secondary)] group-focus-within:text-[var(--aurora-1)] transition-colors z-10">
                  <RiMailLine />
                </div>
                <Input type="email" className="pl-11" placeholder="name@company.com" variant="aurora1" />
              </div>
            </div>
            <div>
              <Label>Password</Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--text-secondary)] group-focus-within:text-[var(--aurora-1)] transition-colors z-10">
                  <RiLockPasswordLine />
                </div>
                <Input 
                  type={showPassword ? "text" : "password"} 
                  className="pl-11 pr-12" 
                  placeholder="••••••••" 
                  variant="aurora1" 
                />
                <Button 
                  type="button" 
                  variant="ghost" 
                  size="icon-xs"
                  onClick={() => setShowPassword(!showPassword)} 
                  className="absolute inset-y-0 right-2 my-auto text-[var(--text-secondary)] hover:!text-white z-10"
                >
                  {showPassword ? <RiEyeOffLine /> : <RiEyeLine />}
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Variants */}
        <Card padding="lg" className="space-y-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Theme Variants</h2>
          <div className="space-y-4">
            <div>
              <Label>Aurora Blue (1)</Label>
              <Input variant="aurora1" placeholder="Focused on Blue..." />
            </div>
            <div>
              <Label>Aurora Purple (2)</Label>
              <Input variant="aurora2" placeholder="Focused on Purple..." />
            </div>
            <div>
              <Label>Aurora Indigo (3)</Label>
              <Input variant="aurora3" placeholder="Focused on Indigo..." />
            </div>
          </div>
        </Card>

        {/* Validation States */}
        <Card padding="lg" className="space-y-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Validation States</h2>
          <div className="space-y-5">
            <div>
               <Label>Success State</Label>
               <Input variant="emerald" defaultValue="ValidUser_99" className="bg-emerald-500/5" />
               <p className="text-emerald-500 text-xs mt-1.5 font-bold">Username available!</p>
            </div>
             <div>
               <Label>Error State</Label>
               <Input variant="rose" defaultValue="bad@email.." className="bg-rose-500/5" />
               <p className="text-rose-500 text-xs mt-1.5 font-bold">Invalid formatting structure detected.</p>
            </div>
          </div>
        </Card>

        {/* Textarea */}
        <Card padding="lg" className="space-y-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Multi-line Input</h2>
          <div>
            <Label>Message / Description</Label>
            <Textarea rows={5} placeholder="Describe your experience..." variant="aurora1" />
          </div>
        </Card>

        {/* Select & Advanced */}
        <Card padding="lg" className="space-y-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Advanced Controls</h2>
          <div className="space-y-6">
            <div>
              <Label>Select Component</Label>
              <Select variant="aurora1">
                <option value="us" className="bg-[var(--bg-primary)]">United States</option>
                <option value="uk" className="bg-[var(--bg-primary)]">United Kingdom</option>
                <option value="ca" className="bg-[var(--bg-primary)]">Canada</option>
                <option value="au" className="bg-[var(--bg-primary)]">Australia</option>
              </Select>
            </div>
            <div>
              <Label>Date Selector</Label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[var(--text-secondary)] group-focus-within:text-[var(--aurora-1)] transition-colors z-10">
                  <RiCalendarLine />
                </div>
                <Input type="date" className="pl-11" variant="aurora1" />
              </div>
            </div>
          </div>
        </Card>

        {/* Selection Rules */}
        <Card padding="lg" className="space-y-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Selection Rules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label className="border-b border-[var(--glass-border)] pb-2 uppercase tracking-widest text-[10px]">System Toggles</Label>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Auto-save</span>
                <Switch checked={toggle1} onChange={setToggle1} variant="aurora" />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Notifications</span>
                <Switch checked={toggle2} onChange={setToggle2} variant="emerald" />
              </div>
            </div>
            <div className="space-y-4">
              <Label className="border-b border-[var(--glass-border)] pb-2 uppercase tracking-widest text-[10px]">Custom Controls</Label>
              <div className="flex flex-col gap-3">
                <div 
                  className="flex items-center gap-3 cursor-pointer group"
                  onClick={() => setCheck1(!check1)}
                >
                  <Checkbox checked={check1} onCheckedChange={setCheck1} />
                  <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--aurora-1)] transition-colors">Public Profile</span>
                </div>
                
                <RadioGroup value={radioVal} onValueChange={setRadioVal} className="mt-2">
                  <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setRadioVal('standard')}>
                    <RadioGroupItem value="standard" />
                    <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--aurora-1)] transition-colors">Standard Plan</span>
                  </div>
                  <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setRadioVal('premium')}>
                    <RadioGroupItem value="premium" />
                    <span className="text-sm font-medium text-[var(--text-primary)] group-hover:text-[var(--aurora-1)] transition-colors">Premium Mode</span>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Forms;
