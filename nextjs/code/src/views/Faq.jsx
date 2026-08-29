import React from 'react';
import { motion } from 'framer-motion';
import { RiQuestionAnswerLine } from 'react-icons/ri';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../components/ui/Accordion';

const Faq = () => {
  const faqs = [
    { q: "How do I upgrade my billing tier?", a: "Navigate to the Billing section under Organization settings and click Manage Subscription. You can upgrade or downgrade at any time." },
    { q: "Can I self-host Trackify?", a: "Yes, our Enterprise tier offers on-premise installation scripts and Docker containers for secure internal deployments." },
    { q: "Is the API rate-limited?", a: "Standard API keys have a limit of 1,000 requests per minute per IP address. Enterprise clients can request custom rate limits." },
    { q: "How do I configure SSO?", a: "SSO is available on Enterprise plans. You can configure Okta, Google Workspace, or generic SAML 2.0 in the Security tab of the Admin dashboard." }
  ];

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Frequent<span className="text-gradient from-teal-400 to-emerald-500">ly Asked</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Quick answers to common questions.</p>
        </div>
      </motion.div>

      <Accordion type="single" collapsible={true} className="space-y-4">
        {faqs.map((faq, idx) => (
          <AccordionItem
            key={idx}
            value={idx}
            as={motion.div}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--glass-border)] transition-colors group overflow-hidden"
          >
            <AccordionTrigger 
              icon={RiQuestionAnswerLine} 
              iconClassName="text-teal-500 bg-teal-500/10 border-teal-500/20 group-hover:scale-110"
              className="p-8"
            >
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="pl-18 pr-8 pb-8">
              <p className="text-[var(--text-secondary)] leading-relaxed text-base">{faq.a}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
