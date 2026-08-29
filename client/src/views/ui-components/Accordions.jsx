import React from 'react';
import { RiQuestionAnswerLine, RiSettings2Line, RiDatabase2Line } from 'react-icons/ri';
import { Card } from '../../components/ui/Card';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../components/ui/Accordion';

const AccordionsDemo = () => {
  const basicData = [
    { title: "How does the glassmorphism theme work?", content: "It uses backdrop-filter utilities provided by Tailwind CSS to blur the background behind semi-transparent borders and backgrounds, creating a frosted glass effect layered over colorful Aurora gradients." },
    { title: "Can I customize the Aurora colors?", content: "Yes! The entire application tracks CSS variables defined in your root stylesheet. Simply modify --aurora-1, --aurora-2, and --aurora-3 hex values to apply a completely new theme palette site-wide instantly." },
    { title: "What animation library is this using?", content: "This project heavily utilizes Framer Motion to power smooth height transitions, layout animations, and stunning entrance reveals." },
  ];

  const iconData = [
    { icon: RiQuestionAnswerLine, title: "Support Channels & Tickets", content: "Learn how to establish custom Zendesk aliases directly into Trackify, allowing support agents to reply via internal portals without switching." },
    { icon: RiSettings2Line, title: "Configuration Fallbacks", content: "System defaults ensure that if a specific environment variable fails, the UI gracefully downgrades without destroying localized storage dependencies." },
    { icon: RiDatabase2Line, title: "Database Architecture", content: "PostgreSQL handles relational data mappings with Prisma as an ORM. View the `/prisma/schema.prisma` to visualize the entities natively." },
  ];

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Accordions</h1>
        <p className="text-[var(--text-secondary)]">Vertically collapsing panels with smooth Framer Motion height animations.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        
        {/* Bordered Multi-Select Accordion */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Bordered Multi-Expand</h2>
          <p className="text-sm text-[var(--text-secondary)]">Multiple items can be expanded simultaneously. Heavy styling focus.</p>
          
          <Card padding="none" className="overflow-hidden shadow-2xl">
            <Accordion type="multiple" defaultValue={[0]}>
              {basicData.map((item, idx) => (
                <AccordionItem key={idx} value={idx} className="bg-black/10 hover:bg-black/20 transition-colors">
                  <AccordionTrigger variant="plus-minus">
                    {item.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </section>

        {/* Flush Single-Select Accordion */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Flush Single-Expand (Icons)</h2>
          <p className="text-sm text-[var(--text-secondary)]">Opening one item automatically collapses the others. No outer borders.</p>
          
          <Accordion type="single" defaultValue={0} collapsible={true} className="space-y-3">
            {iconData.map((item, idx) => (
              <AccordionItem 
                key={idx} 
                value={idx} 
                className="rounded-xl border border-transparent data-[state=open]:border-[var(--aurora-1)]/30 data-[state=open]:bg-[var(--glass-border)]/50 hover:bg-white/5 transition-all"
              >
                <AccordionTrigger icon={item.icon}>
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="ml-14 whitespace-pre-wrap">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

      </div>
    </div>
  );
};

export default AccordionsDemo;
