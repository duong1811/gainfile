import React from 'react';
import { motion } from 'framer-motion';
import { RiLightbulbFlashLine, RiArrowUpSLine, RiArrowDownSLine, RiMessage3Line } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const IdeaBank = () => {
  const ideas = [
    { id: 1, title: 'Implement Dark Mode Auto-Switch', desc: 'Sync system theme automatically based on sunset/sunrise API data.', author: 'Alex', upvotes: 245, comments: 12, tags: ['UI/UX', 'Feature'] },
    { id: 2, name: 'AI-driven Analytics Insights', desc: 'Use GPT to generate weekly human-readable summaries of our growth charts.', author: 'Sarah', upvotes: 189, comments: 34, tags: ['AI', 'Analytics'] },
    { id: 3, title: 'Mobile App Offline Mode', desc: 'Allow users to log habits without internet and sync later payload reduction.', author: 'DevTeam', upvotes: 156, comments: 8, tags: ['Mobile', 'Engineering'] },
    { id: 4, title: 'Gamified Referral System', desc: 'Give users custom badges and unlocking features when they invite 3 friends.', author: 'Marketing', upvotes: 82, comments: 4, tags: ['Growth'] },
  ];

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            Idea <span className="text-gradient from-amber-400 to-orange-500">Bank</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Brainstorming, feature requests, and crowdsourced feedback.</p>
        </div>
        <Button variant="glass" size="lg" className="font-bold gap-2 text-amber-500 hover:text-white hover:bg-amber-500">
          <RiLightbulbFlashLine size={18} /> Submit Idea
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {ideas.map((idea, idx) => (
          <Card
            key={idea.id}
            variant="interactive"
            transition={{ delay: idx * 0.1 }}
            className="flex gap-6 p-6 md:p-8"
          >
            <div className="flex flex-col items-center gap-1">
              <Button 
                variant="glass" 
                size="icon" 
                className="w-10 h-10 rounded-xl text-amber-500 hover:text-white hover:bg-amber-500"
              >
                <RiArrowUpSLine size={24} />
              </Button>
              <span className="font-bold text-lg">{idea.upvotes}</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-10 h-10 rounded-xl"
              >
                <RiArrowDownSLine size={24} />
              </Button>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {idea.tags.map(tag => (
                  <Badge 
                    key={tag} 
                    variant="subtle" 
                    color="glass" 
                    className="text-[10px] font-bold uppercase tracking-wider"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-2 leading-tight">{idea.title || idea.name}</h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6 leading-relaxed">
                {idea.desc}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-[var(--glass-border)]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] text-[10px] text-white font-bold flex items-center justify-center">
                    {idea.author.charAt(0)}
                  </div>
                  <span className="text-xs font-bold text-[var(--text-secondary)]">{idea.author}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] cursor-pointer tracking-wider">
                  <RiMessage3Line size={16} /> {idea.comments} Comments
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default IdeaBank;
