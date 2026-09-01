import React, { useEffect, useState } from 'react';
import {
  RiCalendarLine,
  RiCheckLine,
  RiFileCopyLine,
  RiGlobalLine,
  RiLockLine,
  RiPencilLine,
  RiRefreshLine,
} from 'react-icons/ri';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Modal, ModalBody } from '../ui/Modal';

const createToken = () => Array.from({ length: 24 }, () => Math.floor(Math.random() * 16).toString(16)).join('');

const createSeedLinks = () => [
  { id: createToken(), alive: true, public: false, premiumOnly: false, downloads: 0, expiresAt: '2026-08-31', password: '' },
  { id: createToken(), alive: true, public: true, premiumOnly: false, downloads: 0, expiresAt: '', password: '' },
];

const emptyForm = { password: '', expires: '', downloadCap: '', limitIp: '', isPublic: true, premiumOnly: false };

const ShareLinkModal = ({ item, isOpen, onClose }) => {
  const [form, setForm] = useState(emptyForm);
  const [links, setLinks] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [openedItemId, setOpenedItemId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [refreshingId, setRefreshingId] = useState(null);

  if (isOpen && item?.id !== openedItemId) {
    setOpenedItemId(item?.id ?? null);
    setForm(emptyForm);
    setEditingId(null);
    setLinks(createSeedLinks());
  }

  useEffect(() => {
    if (!copiedId) return undefined;
    const timer = setTimeout(() => setCopiedId(null), 1500);
    return () => clearTimeout(timer);
  }, [copiedId]);

  useEffect(() => {
    if (!refreshingId) return undefined;
    const timer = setTimeout(() => setRefreshingId(null), 600);
    return () => clearTimeout(timer);
  }, [refreshingId]);

  const updateForm = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const handleCreateOrUpdate = () => {
    if (editingId) {
      setLinks((current) => current.map((link) => (
        link.id === editingId
          ? { ...link, password: form.password, expiresAt: form.expires, downloadCap: form.downloadCap, limitIp: form.limitIp, public: form.isPublic, premiumOnly: form.premiumOnly }
          : link
      )));
    } else {
      setLinks((current) => [
        {
          id: createToken(),
          alive: true,
          public: form.isPublic,
          premiumOnly: form.premiumOnly,
          downloads: 0,
          expiresAt: form.expires,
          downloadCap: form.downloadCap,
          limitIp: form.limitIp,
          password: form.password,
        },
        ...current,
      ]);
    }
    setForm(emptyForm);
    setEditingId(null);
  };

  const handleCopy = (link) => {
    const url = `https://gainfile.com/s/${link.id}`;
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(url).catch(() => {});
    }
    setCopiedId(link.id);
  };

  const handleRegenerate = (linkId) => {
    const newId = createToken();
    setRefreshingId(newId);
    setLinks((current) => current.map((link) => (link.id === linkId ? { ...link, id: newId, downloads: 0 } : link)));
  };

  const handleEdit = (link) => {
    setEditingId(link.id);
    setForm({
      password: link.password || '',
      expires: link.expiresAt || '',
      downloadCap: link.downloadCap || '',
      limitIp: link.limitIp || '',
      isPublic: link.public,
      premiumOnly: link.premiumOnly,
    });
  };

  const handleRevoke = (linkId) => {
    setLinks((current) => current.map((link) => (link.id === linkId ? { ...link, alive: false } : link)));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Share Links" variant="aurora" size="xl">
      <ModalBody className="space-y-6">
        <h4 className="truncate text-lg font-bold">{item?.name}</h4>
        <span className="text-sm text-[var(--text-secondary)]">{item?.id}</span>
        <div className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5 space-y-4">
          {editingId && (
            <div className="flex items-center justify-between gap-2 bg-[var(--aurora-1)]/10 py-2 text-xs font-semibold text-[var(--text-primary)]">
              <span className="truncate">
                Editing token: <span className="font-mono text-emerald-500">{editingId}</span>
              </span>
              <button
                type="button"
                onClick={() => { setEditingId(null); setForm(emptyForm); }}
                className="shrink-0 text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              >
                Cancel
              </button>
            </div>
          )}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="password-video">Password</Label>
              <Input id="password-video" type="password" name="password-video" autoComplete="new-password" size="sm" placeholder="Password" value={form.password} onChange={updateForm('password')} />
            </div>
            <div>
              <Label>Expires</Label>
              <div className="relative group">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-4 text-[var(--text-secondary)] transition-colors group-focus-within:text-[var(--aurora-1)]">
                  <RiCalendarLine />
                </div>
                <Input type="datetime-local" size="sm" className="pl-11 [color-scheme:dark]" value={form.expires} onChange={updateForm('expires')} />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div>
              <Label>Download cap</Label>
              <Input type="number" size="sm" min="0" placeholder="Unlimited" value={form.downloadCap} onChange={updateForm('downloadCap')} />
            </div>
            <div>
              <Label>Limit to IP</Label>
              <Input size="sm" placeholder="Optional · any IP" value={form.limitIp} onChange={updateForm('limitIp')} />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <label className="flex items-center gap-2 cursor-pointer" onClick={() => setForm((current) => ({ ...current, isPublic: !current.isPublic }))}>
              <Checkbox checked={form.isPublic} onCheckedChange={() => {}} />
              <span className="text-sm font-semibold text-[var(--text-primary)]">Public</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer" onClick={() => setForm((current) => ({ ...current, premiumOnly: !current.premiumOnly }))}>
              <Checkbox checked={form.premiumOnly} onCheckedChange={() => {}} />
              <span className="text-sm font-semibold text-[var(--text-primary)]">Premium only</span>
            </label>
          </div>

          <Button variant="blue" className="font-bold" onClick={handleCreateOrUpdate}>
            {editingId ? 'Save link' : 'Create link'}
          </Button>
        </div>

        <div className="max-h-[220px] space-y-3 overflow-y-auto pr-1">
          {links.map((link) => (
            <div key={link.id} className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4">
              <div className="flex flex-wrap items-center gap-2 text-xs text-[var(--text-secondary)]">
                <Badge variant="soft" color={link.alive ? 'success' : 'danger'} size="xs" rounded="full">
                  {link.alive ? 'Alive' : 'Revoked'}
                </Badge>
                <span className="font-mono">{link.id.slice(0, 10)}...</span>
                <span className="flex items-center gap-1">
                  {link.public ? <RiGlobalLine size={14} /> : <RiLockLine size={14} />}
                  {link.public ? 'public' : 'private'}
                </span>
                <span>· {link.downloads} downloads</span>
                {link.expiresAt && <span>· expires {link.expiresAt}</span>}
                {link.premiumOnly && <Badge variant="outline" color="warning" size="xs">Premium</Badge>}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Button
                  variant="glass"
                  size="icon-xs"
                  onClick={() => handleCopy(link)}
                  title={copiedId === link.id ? 'Copied!' : 'Copy link'}
                  className={copiedId === link.id ? 'text-emerald-500' : ''}
                >
                  {copiedId === link.id ? <RiCheckLine size={16} /> : <RiFileCopyLine size={16} />}
                </Button>
                <Button variant="glass" size="icon-xs" onClick={() => handleRegenerate(link.id)} title="Regenerate link" disabled={!link.alive}>
                  <RiRefreshLine size={16} className={refreshingId === link.id ? 'animate-spin' : ''} />
                </Button>
                <Button variant="glass" size="icon-xs" onClick={() => handleEdit(link)} title="Edit link" disabled={!link.alive}>
                  <RiPencilLine size={16} />
                </Button>
                <Button variant="outline" size="sm" className="font-bold" onClick={() => handleRevoke(link.id)} disabled={!link.alive}>
                  Revoke
                </Button>
              </div>
            </div>
          ))}
          {links.length === 0 && (
            <p className="text-sm text-[var(--text-secondary)]">No share links yet.</p>
          )}
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ShareLinkModal;
