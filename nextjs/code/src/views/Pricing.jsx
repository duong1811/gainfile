import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { RiCheckLine } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const Pricing = () => {
  return (
    <div className="min-h-screen py-24 px-6 relative z-10 text-[var(--text-primary)] flex flex-col items-center">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-4">Pricing for <span className="bg-clip-text text-transparent bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)]">Scale</span></h1>
        <p className="text-[var(--text-secondary)] text-lg">Multi-tenant, flexible, enterprise-ready plans.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {/* Basic */}
        <Card
          className="p-10 opacity-90 hover:opacity-100 transition-opacity"
          transition={{ delay: 0 }}
        >
           <h3 className="text-xl font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-2">Startup</h3>
           <p className="text-5xl font-bold font-outfit mb-6">$19<span className="text-xl text-[var(--text-secondary)]">/mo</span></p>
           <ul className="space-y-4 mb-10 text-[var(--text-secondary)]">
              <li className="flex items-center gap-3"><RiCheckLine className="text-[var(--aurora-1)]" /> Up to 5 users</li>
              <li className="flex items-center gap-3"><RiCheckLine className="text-[var(--aurora-1)]" /> Basic Analytics</li>
              <li className="flex items-center gap-3"><RiCheckLine className="text-[var(--aurora-1)]" /> CSV Export</li>
           </ul>
           <Button as={Link} href="/register" variant="glass" className="w-full py-6 font-bold">Select Plan</Button>
        </Card>

        {/* Pro */}
        <Card
          variant="interactive"
          className="p-10 border-[var(--aurora-1)] relative overflow-hidden"
          transition={{ delay: 0.1 }}
        >
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)]"></div>
           <h3 className="text-xl font-bold text-[var(--aurora-1)] uppercase tracking-widest mb-2">Professional</h3>
           <p className="text-5xl font-bold font-outfit mb-6">$49<span className="text-xl text-[var(--text-secondary)]">/mo</span></p>
           <ul className="space-y-4 mb-10 font-medium">
              <li className="flex items-center gap-3"><RiCheckLine className="text-[var(--aurora-1)]" /> Up to 50 users</li>
              <li className="flex items-center gap-3"><RiCheckLine className="text-[var(--aurora-1)]" /> PDF/Excel Exports</li>
              <li className="flex items-center gap-3"><RiCheckLine className="text-[var(--aurora-1)]" /> Real-time Notifications</li>
              <li className="flex items-center gap-3"><RiCheckLine className="text-[var(--aurora-1)]" /> Custom Roles (Tenant Admin)</li>
           </ul>
           <Button as={Link} href="/register" variant="primary" className="w-full py-6 font-bold">Select Plan</Button>
        </Card>

        {/* Enterprise */}
        <Card
          className="p-10 opacity-90 hover:opacity-100 transition-opacity"
          transition={{ delay: 0.2 }}
        >
           <h3 className="text-xl font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-2">Enterprise</h3>
           <p className="text-5xl font-bold font-outfit mb-6">Custom</p>
           <ul className="space-y-4 mb-10 text-[var(--text-secondary)]">
              <li className="flex items-center gap-3"><RiCheckLine className="text-[var(--aurora-1)]" /> Unlimited users</li>
              <li className="flex items-center gap-3"><RiCheckLine className="text-[var(--aurora-1)]" /> Multi-Tenant API Auth</li>
              <li className="flex items-center gap-3"><RiCheckLine className="text-[var(--aurora-1)]" /> Dedicated Cloud Instance</li>
              <li className="flex items-center gap-3"><RiCheckLine className="text-[var(--aurora-1)]" /> SSO / SAML Integration</li>
           </ul>
           <Button as={Link} href="/register" variant="glass" className="w-full py-6 font-bold">Contact Sales</Button>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors underline">Return to Homepage</Link>
      </div>
    </div>
  );
};

export default Pricing;
