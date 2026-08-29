import React from 'react';
import { motion } from 'framer-motion';
import { RiPlugLine, RiGoogleFill, RiMicrosoftFill, RiSlackFill, RiGithubFill } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const Integrations = () => {
  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)]">
      <motion.div
        className="mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
          App <span className="text-[var(--aurora-1)] text-gradient">Integrations</span>
        </h1>
        <p className="text-[var(--text-secondary)] text-lg">Connect Trackify to your workflow.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
         {[
           { name: "Google Workspace", icon: RiGoogleFill, status: "Connected" },
           { name: "Microsoft 365", icon: RiMicrosoftFill, status: "Connect" },
           { name: "Slack", icon: RiSlackFill, status: "Connect" },
           { name: "GitHub", icon: RiGithubFill, status: "Connected" }
         ].map((app, i) => (
            <Card 
              key={i} 
              variant="interactive"
              transition={{ delay: 0.2 + (i * 0.05) }}
              className="flex flex-col items-center text-center group"
            >
               <div className="w-16 h-16 rounded-2xl bg-[var(--text-primary)]/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <app.icon size={32} className="text-[var(--aurora-1)]" />
               </div>
               <h4 className="font-bold text-lg mb-6">{app.name}</h4>
               <Button 
                variant={app.status === 'Connected' ? "glass" : "primary"}
                className={`w-full font-bold ${app.status === 'Connected' ? 'text-emerald-500' : ''}`}
               >
                  {app.status}
               </Button>
            </Card>
         ))}
      </div>
    </div>
  );
};

export default Integrations;
