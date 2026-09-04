import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  RiArrowLeftLine,
  RiAttachment2,
  RiCalendarLine,
  RiCustomerService2Line,
  RiFileCopyLine,
  RiSendPlaneLine,
  RiShieldCheckLine,
  RiTicket2Line,
  RiUser3Line,
} from 'react-icons/ri';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Select } from '../components/ui/Select';
import { Textarea } from '../components/ui/Textarea';
import {
  mockSupportTickets,
  mockTicketConversation,
  mockUser,
} from '../data/mockData';

const Messages = () => {
  const params = useParams();
  const ticketId = params?.id || mockTicketConversation.ticketId;
  const ticket = mockSupportTickets.find((item) => item.id === ticketId) || mockSupportTickets[0];
  const [messages, setMessages] = useState(mockTicketConversation.messages);
  const [reply, setReply] = useState('');
  const [status, setStatus] = useState(ticket.status);

  const sendReply = (event) => {
    event.preventDefault();
    const message = reply.trim();
    if (!message) return;

    setMessages((current) => [...current, {
      id: Date.now(),
      sender: mockUser.name,
      role: 'You',
      message,
      time: 'Just now',
      customer: true,
    }]);
    setReply('');
  };

  return (
    <div className="min-h-[calc(100vh-100px)] p-6 text-[var(--text-primary)] md:p-12">
      <motion.div className="mb-7" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <Link href="/dashboard" className="mb-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"><RiArrowLeftLine /> Back to dashboard</Link>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap items-center gap-2"><Badge color="primary" rounded="full" size="xs">{status}</Badge><span className="font-mono text-xs text-[var(--text-secondary)]">#{ticketId}</span></div>
            <h1 className="text-3xl font-bold tracking-tight md:text-4xl">{ticket.subject}</h1>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">Opened {mockTicketConversation.opened} · Last response {mockTicketConversation.lastResponse}</p>
          </div>
          <div className="w-full md:w-44"><Select value={status} onChange={(event) => setStatus(event.target.value)} size="sm"><option>Open</option><option>Waiting</option><option>Resolved</option><option>Closed</option></Select></div>
        </div>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_300px]">
        <Card padding="none" className="flex min-h-[680px] flex-col overflow-hidden">
          <div className="flex items-center justify-between border-b border-[var(--glass-border)] bg-[var(--glass-bg)]/50 p-5">
            <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--aurora-1)]/10 text-xl text-[var(--aurora-1)]"><RiCustomerService2Line /></span><div><p className="font-bold">Support conversation</p><p className="text-xs text-[var(--text-secondary)]">Replies are sent to your account email</p></div></div>
            <Badge color="success" rounded="full" size="xs"><span className="me-1 h-1.5 w-1.5 rounded-full bg-emerald-500" /> Support online</Badge>
          </div>

          <div className="custom-scrollbar flex flex-1 flex-col gap-6 overflow-y-auto p-5 md:p-7">
            {messages.map((item) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className={`flex max-w-[85%] gap-3 ${item.customer ? 'self-end flex-row-reverse' : 'self-start'}`}>
                <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${item.customer ? 'bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)]' : 'bg-emerald-500'}`}>{item.customer ? <RiUser3Line /> : <RiCustomerService2Line />}</span>
                <div className={item.customer ? 'text-right' : ''}>
                  <div className="mb-1 flex items-center gap-2 text-xs"><span className="font-bold">{item.sender}</span><span className="text-[var(--text-secondary)]">{item.role}</span></div>
                  <div className={`rounded-2xl px-4 py-3 text-left text-sm leading-6 ${item.customer ? 'rounded-tr-sm bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] text-white shadow-lg shadow-[var(--aurora-1)]/10' : 'rounded-tl-sm border border-[var(--glass-border)] bg-[var(--glass-border)]'}`}>{item.message}</div>
                  <p className="mt-1 text-[10px] text-[var(--text-secondary)]">{item.time}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <form onSubmit={sendReply} className="border-t border-[var(--glass-border)] bg-[var(--glass-bg)]/50 p-5">
            <Textarea value={reply} onChange={(event) => setReply(event.target.value)} rows={3} placeholder="Write a reply..." className="mb-3" />
            <div className="flex items-center justify-between gap-3">
              <Button type="button" variant="ghost" size="sm"><RiAttachment2 /> Attach file</Button>
              <Button type="submit" variant="primary"><RiSendPlaneLine /> Send Reply</Button>
            </div>
          </form>
        </Card>

        <aside className="space-y-5">
          <Card padding="md">
            <p className="mb-5 text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Ticket details</p>
            <dl className="space-y-4 text-sm">
              <div className="flex justify-between gap-4"><dt className="text-[var(--text-secondary)]">Ticket ID</dt><dd className="font-mono font-bold">#{ticketId}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-[var(--text-secondary)]">Category</dt><dd className="font-bold">{ticket.category}</dd></div>
              <div className="flex justify-between gap-4"><dt className="text-[var(--text-secondary)]">Priority</dt><dd><Badge color="danger" rounded="full" size="xs">{ticket.priority}</Badge></dd></div>
              <div className="flex justify-between gap-4"><dt className="text-[var(--text-secondary)]">Created</dt><dd className="font-bold">{mockTicketConversation.created}</dd></div>
            </dl>
          </Card>

          <Card padding="md">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Related file</p>
            <div className="flex items-center gap-3 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/60 p-3"><RiFileCopyLine className="shrink-0 text-2xl text-[var(--aurora-2)]" /><div className="min-w-0"><p className="truncate text-sm font-bold">{mockTicketConversation.relatedFile.name}</p><p className="mt-1 text-xs text-[var(--text-secondary)]">{mockTicketConversation.relatedFile.size} · {mockTicketConversation.relatedFile.status}</p></div></div>
          </Card>

          <Card padding="md">
            <div className="flex items-center gap-2"><RiShieldCheckLine className="text-xl text-emerald-500" /><p className="font-bold">Response target</p></div>
            <p className="mt-3 text-sm text-[var(--text-secondary)]">Within 24 hours</p>
            <p className="mt-2 flex items-center gap-2 text-xs text-emerald-500"><RiCalendarLine /> On track</p>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default Messages;
