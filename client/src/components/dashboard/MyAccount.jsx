import { useState } from 'react';
import {
  RiAddLine,
  RiArrowRightSLine,
  RiCalendarCheckLine,
  RiCheckboxCircleLine,
  RiComputerLine,
  RiCustomerService2Line,
  RiHistoryLine,
  RiLockPasswordLine,
  RiMailLine,
  RiMapPinLine,
  RiShieldCheckLine,
  RiShieldKeyholeLine,
  RiShoppingBag3Line,
  RiSmartphoneLine,
  RiTicket2Line,
  RiUser3Line,
  RiVipCrown2Line,
} from 'react-icons/ri';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card, CardDescription, CardTitle } from '../ui/Card';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Modal, ModalBody, ModalFooter } from '../ui/Modal';
import { Select } from '../ui/Select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/Tabs';
import { Textarea } from '../ui/Textarea';

const initialProfile = {
  name: 'Alexander Pierce',
  email: 'alexander@gainfile.com',
};

const accountActivity = [
  {
    title: 'Signed in successfully',
    detail: 'Chrome on macOS · Ho Chi Minh City, Vietnam',
    date: 'Today, 09:42 AM',
    icon: RiComputerLine,
  },
  {
    title: 'Signed in successfully',
    detail: 'Safari on iPhone · Ho Chi Minh City, Vietnam',
    date: 'Yesterday, 06:15 PM',
    icon: RiSmartphoneLine,
  },
  {
    title: 'Account password updated',
    detail: 'Security information changed',
    date: 'August 12, 2026',
    icon: RiShieldCheckLine,
  },
];

const initialTickets = [
  { id: 'GF-1048', subject: 'Video processing is taking too long', category: 'Video Processing', status: 'Open', updated: '10 minutes ago' },
  { id: 'GF-1041', subject: 'Payment completed but Premium is inactive', category: 'Billing', status: 'In Progress', updated: '2 hours ago' },
  { id: 'GF-1017', subject: 'How can I update my account email?', category: 'Account', status: 'Resolved', updated: 'August 26, 2026' },
];

const ticketStatusColors = {
  Open: 'primary',
  'In Progress': 'warning',
  Resolved: 'success',
};

const Field = ({ label, children }) => (
  <label className="block">
    <span className="mb-2 block text-xs font-bold text-[var(--text-secondary)]">{label}</span>
    {children}
  </label>
);

const MyAccount = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [profileDraft, setProfileDraft] = useState(initialProfile);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [passwordModalOpen, setPasswordModalOpen] = useState(false);
  const [passwords, setPasswords] = useState({ current: '', next: '', confirm: '' });
  const [passwordError, setPasswordError] = useState('');
  const [notice, setNotice] = useState('');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [tickets, setTickets] = useState(initialTickets);
  const [showTickets, setShowTickets] = useState(false);
  const [ticketModalOpen, setTicketModalOpen] = useState(false);
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: 'Upload',
    priority: 'Normal',
    message: '',
  });

  const openProfileModal = () => {
    setProfileDraft(profile);
    setProfileModalOpen(true);
  };

  const saveProfile = (event) => {
    event.preventDefault();
    setProfile({
      name: profileDraft.name.trim(),
      email: profileDraft.email.trim(),
    });
    setProfileModalOpen(false);
    setNotice('Profile updated successfully.');
  };

  const changePassword = (event) => {
    event.preventDefault();
    if (passwords.next.length < 8) {
      setPasswordError('New password must contain at least 8 characters.');
      return;
    }
    if (passwords.next !== passwords.confirm) {
      setPasswordError('New passwords do not match.');
      return;
    }

    setPasswords({ current: '', next: '', confirm: '' });
    setPasswordError('');
    setPasswordModalOpen(false);
    setNotice('Password changed successfully.');
  };

  const toggleTwoFactor = () => {
    setTwoFactorEnabled((current) => !current);
    setNotice(twoFactorEnabled
      ? 'Two-factor authentication disabled.'
      : 'Two-factor authentication enabled.');
  };

  const createTicket = (event) => {
    event.preventDefault();
    const id = `GF-${1050 + tickets.length}`;
    setTickets((current) => [{
      id,
      subject: ticketForm.subject.trim(),
      category: ticketForm.category,
      status: 'Open',
      updated: 'Just now',
    }, ...current]);
    setTicketForm({ subject: '', category: 'Upload', priority: 'Normal', message: '' });
    setTicketModalOpen(false);
    setShowTickets(true);
    setNotice(`Support ticket #${id} created successfully.`);
  };

  return (
    <>
      {notice && (
        <div className="mb-5 flex items-center justify-between gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-500" role="status">
          <span className="flex items-center gap-2 font-semibold"><RiCheckboxCircleLine /> {notice}</span>
          <button type="button" onClick={() => setNotice('')} className="text-xs font-bold hover:underline">Dismiss</button>
        </div>
      )}

      <Tabs defaultValue="profile" orientation="vertical" className="items-stretch">
        <TabsList className="md:self-stretch md:justify-between">
          <TabsTrigger value="profile" icon={RiUser3Line}>Profile</TabsTrigger>
          <TabsTrigger value="premium" icon={RiVipCrown2Line}>Plan & Usage</TabsTrigger>
          <TabsTrigger value="security" icon={RiShieldKeyholeLine}>Security</TabsTrigger>
          <TabsTrigger value="activity" icon={RiHistoryLine}>Login Activity</TabsTrigger>
          <TabsTrigger value="purchases" icon={RiShoppingBag3Line}>Billing</TabsTrigger>
          <TabsTrigger value="support" icon={RiCustomerService2Line}>Support</TabsTrigger>
        </TabsList>

        <TabsContent value="profile" className="self-stretch [&>div]:h-full">
          <Card padding="lg">
            <div className="mb-7 flex flex-col gap-5 border-b border-[var(--glass-border)] pb-7 sm:flex-row sm:items-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] text-3xl font-bold text-white">
                {profile.name.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0">
                <CardTitle>{profile.name}</CardTitle>
                <CardDescription className="mt-2 flex items-center gap-2 truncate"><RiMailLine /> {profile.email}</CardDescription>
                <Badge variant="soft" color="success" size="xs" className="mt-3">Email verified</Badge>
              </div>
              <Button type="button" variant="glass" size="sm" className="sm:ms-auto" onClick={openProfileModal}>Edit Profile</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[var(--glass-border)] p-4">
                <p className="text-xs text-[var(--text-secondary)]">Account ID</p>
                <p className="mt-1 font-mono text-sm font-bold">GF-2026-1048</p>
              </div>
              <div className="rounded-xl border border-[var(--glass-border)] p-4">
                <p className="text-xs text-[var(--text-secondary)]">Member since</p>
                <p className="mt-1 text-sm font-bold">August 30, 2026</p>
              </div>
              <div className="rounded-xl border border-[var(--glass-border)] p-4">
                <p className="text-xs text-[var(--text-secondary)]">Language</p>
                <p className="mt-1 text-sm font-bold">English</p>
              </div>
              <div className="rounded-xl border border-[var(--glass-border)] p-4">
                <p className="text-xs text-[var(--text-secondary)]">Time zone</p>
                <p className="mt-1 text-sm font-bold">UTC+07:00</p>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="premium" className="self-stretch [&>div]:h-full">
          <Card padding="lg">
            <div className="flex flex-col gap-6 border-b border-[var(--glass-border)] pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <Badge variant="soft" color="neutral" size="sm">Free account</Badge>
                <CardTitle className="mt-3">Free Plan</CardTitle>
                <CardDescription className="mt-2">200GB storage with unlimited bandwidth at 100kbps.</CardDescription>
              </div>
              <Button variant="primary" size="lg" as="a" href="/upgrade-plan"><RiVipCrown2Line /> Upgrade Plan</Button>
            </div>
            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between text-sm">
                <span className="font-bold">Storage used</span>
                <span className="text-[var(--text-secondary)]">72.4GB of 200GB</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-[var(--glass-border)]">
                <div className="h-full w-[36.2%] rounded-full bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)]" />
              </div>
              <p className="mt-3 text-xs text-[var(--text-secondary)]">127.6GB storage available. Free accounts do not expire.</p>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="self-stretch [&>div]:h-full">
          <Card padding="lg">
            <CardTitle>Security</CardTitle>
            <CardDescription className="mt-2">Manage your password and account protection.</CardDescription>
            <div className="mt-7 space-y-3">
              <div className="flex flex-col gap-3 rounded-xl border border-[var(--glass-border)] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="flex items-center gap-2 font-bold"><RiLockPasswordLine /> Password</p>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">Last changed August 12, 2026</p>
                </div>
                <Button type="button" variant="glass" size="sm" onClick={() => setPasswordModalOpen(true)}>Change Password</Button>
              </div>
              <div className="flex flex-col gap-3 rounded-xl border border-[var(--glass-border)] p-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="flex items-center gap-2 font-bold"><RiShieldKeyholeLine /> Two-factor authentication</p>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">
                    {twoFactorEnabled ? 'Authenticator protection is active.' : 'Protect sign-ins with an authenticator app.'}
                  </p>
                </div>
                <Button type="button" variant={twoFactorEnabled ? 'glass' : 'success'} size="sm" onClick={toggleTwoFactor}>
                  {twoFactorEnabled ? 'Disable' : 'Enable 2FA'}
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="self-stretch [&>div]:h-full">
          <Card padding="lg">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardTitle>Login Activity</CardTitle>
                <CardDescription className="mt-2">Recent security events from your account.</CardDescription>
              </div>
              <Badge variant="soft" color="success" size="sm">No suspicious activity</Badge>
            </div>
            <div className="mt-6 space-y-3">
              {accountActivity.map(({ title, detail, date, icon: Icon }) => (
                <div key={`${title}-${date}`} className="flex items-start gap-3 rounded-xl border border-[var(--glass-border)] p-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--aurora-1)]/10 text-[var(--aurora-1)]"><Icon /></span>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold">{title}</p>
                    <p className="mt-1 flex items-center gap-1 text-xs text-[var(--text-secondary)]"><RiMapPinLine /> {detail}</p>
                  </div>
                  <span className="shrink-0 text-right text-xs text-[var(--text-secondary)]">{date}</span>
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="purchases" className="self-stretch [&>div]:h-full">
          <Card padding="lg">
            <CardTitle>Billing & Purchases</CardTitle>
            <CardDescription className="mt-2">Premium orders, payment status, and invoices will appear here.</CardDescription>
            <div className="mt-7 rounded-2xl border border-dashed border-[var(--glass-border)] p-10 text-center">
              <RiShoppingBag3Line className="mx-auto text-3xl text-[var(--text-secondary)]" />
              <p className="mt-3 font-bold">No purchases yet</p>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">Your account is currently on the Free Plan.</p>
              <Button variant="primary" size="sm" as="a" href="/upgrade-plan" className="mt-5">View Premium Plans</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="support" className="self-stretch [&>div]:h-full">
          <Card padding="lg">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <CardTitle>Support Center</CardTitle>
                <CardDescription className="mt-2">Create and track requests sent to the Gainfile support team.</CardDescription>
              </div>
              <Button type="button" variant="primary" size="sm" onClick={() => setTicketModalOpen(true)}>
                <RiAddLine /> Create Ticket
              </Button>
            </div>

            {!showTickets ? (
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={() => setTicketModalOpen(true)}
                  className="rounded-2xl border border-[var(--glass-border)] p-5 text-left transition-colors hover:border-[var(--aurora-1)] hover:bg-[var(--aurora-1)]/5"
                >
                  <RiTicket2Line className="text-2xl text-[var(--aurora-1)]" />
                  <p className="mt-3 font-bold">Create a ticket</p>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">Describe your issue and receive a reply within 24 hours.</p>
                  <span className="mt-5 flex items-center gap-1 text-sm font-bold text-[var(--aurora-1)]">Get support <RiArrowRightSLine /></span>
                </button>
                <button
                  type="button"
                  onClick={() => setShowTickets(true)}
                  className="rounded-2xl border border-[var(--glass-border)] p-5 text-left transition-colors hover:border-[var(--aurora-2)] hover:bg-[var(--aurora-2)]/5"
                >
                  <RiHistoryLine className="text-2xl text-[var(--aurora-2)]" />
                  <p className="mt-3 font-bold">View my tickets</p>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">{tickets.length} requests in your support history.</p>
                  <span className="mt-5 flex items-center gap-1 text-sm font-bold text-[var(--aurora-2)]">View tickets <RiArrowRightSLine /></span>
                </button>
              </div>
            ) : (
              <div className="mt-7 overflow-hidden rounded-2xl border border-[var(--glass-border)]">
                <div className="flex items-center justify-between gap-3 border-b border-[var(--glass-border)] bg-[var(--bg-primary)]/50 px-4 py-3">
                  <div>
                    <p className="text-sm font-bold">My tickets</p>
                    <p className="mt-0.5 text-xs text-[var(--text-secondary)]">{tickets.length} support requests</p>
                  </div>
                  <Button type="button" variant="ghost" size="sm" onClick={() => setShowTickets(false)}>Hide List</Button>
                </div>
                <div className="divide-y divide-[var(--glass-border)]">
                  {tickets.map((ticket) => (
                    <a
                      key={ticket.id}
                      href={`/tickets/${ticket.id}`}
                      className="flex flex-col gap-3 p-4 transition-colors hover:bg-[var(--glass-border)]/40 sm:flex-row sm:items-center"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--aurora-1)]/10 text-[var(--aurora-1)]"><RiTicket2Line /></span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold">{ticket.subject}</p>
                        <p className="mt-1 text-xs text-[var(--text-secondary)]">#{ticket.id} · {ticket.category} · {ticket.updated}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="soft" color={ticketStatusColors[ticket.status]} size="xs">{ticket.status}</Badge>
                        <RiArrowRightSLine className="text-[var(--text-secondary)]" />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </Card>
        </TabsContent>
      </Tabs>

      <Modal isOpen={profileModalOpen} onClose={() => setProfileModalOpen(false)} title="Edit profile" size="md">
        <form onSubmit={saveProfile}>
          <ModalBody>
            <Field label="Display name">
              <Input required value={profileDraft.name} onChange={(event) => setProfileDraft((current) => ({ ...current, name: event.target.value }))} />
            </Field>
            <Field label="Email address">
              <Input required type="email" value={profileDraft.email} onChange={(event) => setProfileDraft((current) => ({ ...current, email: event.target.value }))} />
            </Field>
          </ModalBody>
          <ModalFooter>
            <Button type="button" variant="glass" className="flex-1" onClick={() => setProfileModalOpen(false)}>Cancel</Button>
            <Button type="submit" className="flex-1">Save Changes</Button>
          </ModalFooter>
        </form>
      </Modal>

      <Modal isOpen={passwordModalOpen} onClose={() => setPasswordModalOpen(false)} title="Change password" size="md">
        <form onSubmit={changePassword}>
          <ModalBody>
            <Field label="Current password">
              <Input required type="password" autoComplete="current-password" value={passwords.current} onChange={(event) => setPasswords((current) => ({ ...current, current: event.target.value }))} />
            </Field>
            <Field label="New password">
              <Input required type="password" autoComplete="new-password" value={passwords.next} onChange={(event) => setPasswords((current) => ({ ...current, next: event.target.value }))} />
            </Field>
            <Field label="Confirm new password">
              <Input required type="password" autoComplete="new-password" value={passwords.confirm} onChange={(event) => setPasswords((current) => ({ ...current, confirm: event.target.value }))} />
            </Field>
            {passwordError && <p className="text-sm font-semibold text-rose-500" role="alert">{passwordError}</p>}
          </ModalBody>
          <ModalFooter>
            <Button type="button" variant="glass" className="flex-1" onClick={() => setPasswordModalOpen(false)}>Cancel</Button>
            <Button type="submit" className="flex-1">Update Password</Button>
          </ModalFooter>
        </form>
      </Modal>

      <Modal isOpen={ticketModalOpen} onClose={() => setTicketModalOpen(false)} title="Create Support Ticket" size="lg" variant="aurora">
        <form onSubmit={createTicket}>
          <ModalBody>
            <div>
              <Label htmlFor="account-ticket-subject">Subject</Label>
              <Input
                id="account-ticket-subject"
                required
                value={ticketForm.subject}
                onChange={(event) => setTicketForm((current) => ({ ...current, subject: event.target.value }))}
                placeholder="Briefly describe your issue"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="account-ticket-category">Category</Label>
                <Select id="account-ticket-category" value={ticketForm.category} onChange={(event) => setTicketForm((current) => ({ ...current, category: event.target.value }))}>
                  <option>Upload</option>
                  <option>Video Processing</option>
                  <option>Playback</option>
                  <option>Billing</option>
                  <option>Account</option>
                  <option>Other</option>
                </Select>
              </div>
              <div>
                <Label htmlFor="account-ticket-priority">Priority</Label>
                <Select id="account-ticket-priority" value={ticketForm.priority} onChange={(event) => setTicketForm((current) => ({ ...current, priority: event.target.value }))}>
                  <option>Low</option>
                  <option>Normal</option>
                  <option>High</option>
                  <option>Urgent</option>
                </Select>
              </div>
            </div>
            <div>
              <Label htmlFor="account-ticket-message">Message</Label>
              <Textarea
                id="account-ticket-message"
                required
                rows={6}
                value={ticketForm.message}
                onChange={(event) => setTicketForm((current) => ({ ...current, message: event.target.value }))}
                placeholder="Include steps, error messages, or other useful details..."
              />
            </div>
          </ModalBody>
          <ModalFooter className="justify-end">
            <Button type="button" variant="ghost" onClick={() => setTicketModalOpen(false)}>Cancel</Button>
            <Button type="submit" variant="primary"><RiTicket2Line /> Submit Ticket</Button>
          </ModalFooter>
        </form>
      </Modal>
    </>
  );
};

export default MyAccount;
