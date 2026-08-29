import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiMessage3Line, RiSendPlaneLine, RiSearchLine, RiMore2Fill } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';

const Messages = () => {
  const [activeChat, setActiveChat] = useState(1);
  const contacts = [
    { id: 1, name: 'Alice Smith', role: 'Super Admin', unread: 2, online: true },
    { id: 2, name: 'Bob Jones', role: 'Editor', unread: 0, online: false },
    { id: 3, name: 'Charlie Day', role: 'Viewer', unread: 5, online: true },
    { id: 4, name: 'David Lee', role: 'Editor', unread: 0, online: false }
  ];

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
          Team <span className="text-gradient from-[var(--aurora-1)] to-[var(--aurora-2)]">Messages</span>
        </h1>
        <p className="text-[var(--text-secondary)] text-lg">Communicate securely with your tenant members.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[700px]">
        {/* Sidebar Contacts */}
        <Card 
          padding="none"
          className="lg:col-span-1 flex flex-col overflow-hidden"
          transition={{ delay: 0.1 }}
        >
          <div className="p-6 border-b border-[var(--glass-border)]">
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)]">
              <RiSearchLine className="text-[var(--text-secondary)]" />
              <input type="text" placeholder="Search team..." className="bg-transparent border-none outline-none text-sm w-full" />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {contacts.map(contact => (
              <div 
                key={contact.id} 
                onClick={() => setActiveChat(contact.id)}
                className={`p-4 mx-4 my-2 rounded-2xl flex items-center justify-between cursor-pointer transition-all ${activeChat === contact.id ? 'bg-gradient-to-r from-[var(--aurora-1)]/20 to-[var(--aurora-2)]/20 border border-[var(--aurora-1)]/30' : 'hover:bg-[var(--glass-border)] border border-transparent'}`}
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-[var(--text-primary)]/10 flex items-center justify-center font-bold text-lg">
                      {contact.name.charAt(0)}
                    </div>
                    {contact.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[var(--bg-primary)]"></div>}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-[var(--text-primary)] line-clamp-1">{contact.name}</h4>
                    <p className="text-xs text-[var(--text-secondary)]">{contact.role}</p>
                  </div>
                </div>
                {contact.unread > 0 && (
                  <Badge color="aurora-1" rounded="full" className="w-5 h-5 flex items-center justify-center p-0">
                    {contact.unread}
                  </Badge>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Chat Area */}
        <Card 
          padding="none"
          className="lg:col-span-3 flex flex-col overflow-hidden relative"
          transition={{ delay: 0.2 }}
        >
          <div className="absolute -right-40 -top-40 w-96 h-96 bg-[var(--aurora-2)]/5 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="p-6 border-b border-[var(--glass-border)] flex justify-between items-center bg-[var(--glass-bg)]/50 backdrop-blur-md relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--text-primary)]/10 flex items-center justify-center font-bold text-2xl">
                {contacts.find(c => c.id === activeChat)?.name.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-xl">{contacts.find(c => c.id === activeChat)?.name}</h3>
                <div className="flex items-center gap-1.5">
                  <Badge variant="dot" color={contacts.find(c => c.id === activeChat)?.online ? 'online' : 'offline'} />
                  <p className="text-sm text-[var(--text-secondary)]">{contacts.find(c => c.id === activeChat)?.online ? 'Active Now' : 'Offline'}</p>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon" className="rounded-xl"><RiMore2Fill /></Button>
          </div>

          <div className="flex-1 p-6 overflow-y-auto flex flex-col gap-6 relative z-10 custom-scrollbar">
            <div className="flex flex-col gap-1 items-start max-w-[70%]">
              <div className="px-5 py-3 rounded-2xl rounded-tl-sm bg-[var(--glass-border)] border border-[var(--glass-border)]">
                Hey! Are we still on for the architecture review today?
              </div>
              <span className="text-xs text-[var(--text-secondary)] ml-1">10:42 AM</span>
            </div>
            <div className="flex flex-col gap-1 items-end max-w-[70%] self-end">
              <div className="px-5 py-3 rounded-2xl rounded-tr-sm bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] text-white shadow-lg shadow-[var(--aurora-1)]/20">
                Yes absolutely. I'll be sharing the updated schematics in 10 mins.
              </div>
              <span className="text-xs text-[var(--text-secondary)] mr-1">10:45 AM</span>
            </div>
            <div className="flex flex-col gap-1 items-start max-w-[70%]">
              <div className="px-5 py-3 rounded-2xl rounded-tl-sm bg-[var(--glass-border)] border border-[var(--glass-border)]">
                Perfect, thanks! Let me evaluate the new DB schemas once you do.
              </div>
              <span className="text-xs text-[var(--text-secondary)] ml-1">10:46 AM</span>
            </div>
            <div className="flex flex-col gap-1 items-start max-w-[70%]">
              <div className="px-5 py-3 rounded-2xl rounded-tl-sm bg-[var(--glass-border)] border border-[var(--glass-border)]">
                Are we using Redis for caching the user sessions?
              </div>
              <span className="text-xs text-[var(--text-secondary)] ml-1">10:59 AM</span>
            </div>
          </div>

          <div className="p-6 border-t border-[var(--glass-border)] bg-[var(--glass-bg)]/50 backdrop-blur-md relative z-10">
            <div className="flex items-center gap-4">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-2xl px-6 py-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--aurora-1)] transition-colors"
              />
              <Button variant="primary" size="xl" className="!w-14 !h-14 !p-0 rounded-2xl">
                <RiSendPlaneLine size={24} />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
