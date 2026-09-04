import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  RiAddLine,
  RiCustomerService2Line,
  RiSearchLine,
  RiTicket2Line,
  RiTimeLine,
} from 'react-icons/ri';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import { Modal, ModalBody, ModalFooter } from '../components/ui/Modal';
import { Select } from '../components/ui/Select';
import { Textarea } from '../components/ui/Textarea';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/Table';
import { mockSupportTickets } from '../data/mockData';

const statusColors = {
  Open: 'primary',
  'In Progress': 'warning',
  Waiting: 'info',
  Resolved: 'success',
  Closed: 'neutral',
};

const priorityClasses = {
  Urgent: 'text-rose-500 bg-rose-500/10',
  High: 'text-orange-500 bg-orange-500/10',
  Normal: 'text-blue-500 bg-blue-500/10',
  Low: 'text-[var(--text-secondary)] bg-[var(--glass-border)]',
};

const SupportTickets = () => {
  const router = useRouter();
  const [tickets, setTickets] = useState(mockSupportTickets);
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('all');
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [form, setForm] = useState({ subject: '', category: 'Upload', priority: 'Normal', message: '' });

  const filteredTickets = useMemo(() => tickets.filter((ticket) => {
    const matchesSearch = `${ticket.id} ${ticket.subject} ${ticket.category}`.toLowerCase().includes(search.toLowerCase());
    return matchesSearch && (status === 'all' || ticket.status === status);
  }), [search, status, tickets]);

  const createTicket = (event) => {
    event.preventDefault();
    const id = `GF-${1050 + tickets.length}`;
    setTickets((current) => [{ id, subject: form.subject, category: form.category, status: 'Open', priority: form.priority, updated: 'Just now' }, ...current]);
    setForm({ subject: '', category: 'Upload', priority: 'Normal', message: '' });
    setIsCreateOpen(false);
    router.push(`/tickets/${id}`);
  };

  return (
    <div className="min-h-[calc(100vh-100px)] p-6 text-[var(--text-primary)] md:p-12">
      <motion.div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between" initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--aurora-1)]"><RiCustomerService2Line /> Help center</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Support <span className="text-gradient from-[var(--aurora-1)] to-[var(--aurora-2)]">Tickets</span></h1>
          <p className="mt-2 text-lg text-[var(--text-secondary)]">Create, track, and reply to your support requests.</p>
        </div>
        <Button variant="primary" size="lg" onClick={() => setIsCreateOpen(true)}><RiAddLine size={20} /> New Ticket</Button>
      </motion.div>

      <motion.div className="mb-6 grid gap-4 sm:grid-cols-3" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        {[
          { label: 'Open Tickets', value: tickets.filter((ticket) => ticket.status === 'Open').length, icon: RiTicket2Line, color: 'text-blue-500 bg-blue-500/10' },
          { label: 'In Progress', value: tickets.filter((ticket) => ticket.status === 'In Progress').length, icon: RiTimeLine, color: 'text-amber-500 bg-amber-500/10' },
          { label: 'Resolved', value: tickets.filter((ticket) => ticket.status === 'Resolved' || ticket.status === 'Closed').length, icon: RiCustomerService2Line, color: 'text-emerald-500 bg-emerald-500/10' },
        ].map(({ label, value, icon: Icon, color }) => (
          <Card key={label} padding="sm" className="flex items-center gap-4">
            <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${color}`}><Icon /></span>
            <div><p className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">{label}</p><p className="mt-1 text-2xl font-black">{value}</p></div>
          </Card>
        ))}
      </motion.div>

      <Card padding="none" className="overflow-hidden">
        <div className="flex flex-col gap-3 border-b border-[var(--glass-border)] p-5 sm:flex-row">
          <div className="relative flex-1">
            <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <Input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search tickets..." size="sm" className="pl-11" />
          </div>
          <Select value={status} onChange={(event) => setStatus(event.target.value)} size="sm" className="sm:w-48">
            <option value="all">All statuses</option>
            <option value="Open">Open</option>
            <option value="In Progress">In Progress</option>
            <option value="Waiting">Waiting</option>
            <option value="Resolved">Resolved</option>
            <option value="Closed">Closed</option>
          </Select>
        </div>

        <Table>
          <TableHeader><TableRow><TableHead>Ticket</TableHead><TableHead>Category</TableHead><TableHead>Status</TableHead><TableHead>Priority</TableHead><TableHead>Last update</TableHead></TableRow></TableHeader>
          <TableBody>
            {filteredTickets.map((ticket) => (
              <TableRow key={ticket.id} onClick={() => router.push(`/tickets/${ticket.id}`)} className="cursor-pointer">
                <TableCell><p className="font-bold text-[var(--text-primary)]">{ticket.subject}</p><p className="mt-1 font-mono text-xs text-[var(--text-secondary)]">#{ticket.id}</p></TableCell>
                <TableCell className="text-[var(--text-secondary)]">{ticket.category}</TableCell>
                <TableCell><Badge color={statusColors[ticket.status]} rounded="full" size="xs">{ticket.status}</Badge></TableCell>
                <TableCell><span className={`rounded-lg px-2 py-1 text-xs font-bold ${priorityClasses[ticket.priority]}`}>{ticket.priority}</span></TableCell>
                <TableCell className="text-[var(--text-secondary)]">{ticket.updated}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {filteredTickets.length === 0 && <div className="p-12 text-center"><RiTicket2Line className="mx-auto text-4xl text-[var(--text-secondary)]" /><p className="mt-3 font-bold">No tickets found</p><p className="mt-1 text-sm text-[var(--text-secondary)]">Try another search or create a new ticket.</p></div>}
      </Card>

      <Modal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} title="Create Support Ticket" size="lg" variant="aurora">
        <form onSubmit={createTicket}>
          <ModalBody>
            <div><Label htmlFor="ticket-subject">Subject</Label><Input id="ticket-subject" required value={form.subject} onChange={(event) => setForm({ ...form, subject: event.target.value })} placeholder="Briefly describe your issue" /></div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div><Label htmlFor="ticket-category">Category</Label><Select id="ticket-category" value={form.category} onChange={(event) => setForm({ ...form, category: event.target.value })}><option>Upload</option><option>Video Processing</option><option>Playback</option><option>Billing</option><option>Account</option><option>Other</option></Select></div>
              <div><Label htmlFor="ticket-priority">Priority</Label><Select id="ticket-priority" value={form.priority} onChange={(event) => setForm({ ...form, priority: event.target.value })}><option>Low</option><option>Normal</option><option>High</option><option>Urgent</option></Select></div>
            </div>
            <div><Label htmlFor="ticket-message">Message</Label><Textarea id="ticket-message" required rows={6} value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="Include steps, error messages, or other useful details..." /></div>
          </ModalBody>
          <ModalFooter className="justify-end"><Button type="button" variant="ghost" onClick={() => setIsCreateOpen(false)}>Cancel</Button><Button type="submit" variant="primary"><RiTicket2Line /> Submit Ticket</Button></ModalFooter>
        </form>
      </Modal>
    </div>
  );
};

export default SupportTickets;
