import React, { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  RiAlarmWarningLine,
  RiDownloadCloud2Line,
  RiFileCopyLine,
  RiFlashlightFill,
  RiLockLine,
  RiLoginBoxLine,
  RiShieldCheckLine,
  RiSpeedUpLine,
  RiTimeLine,
  RiVipCrownLine,
} from 'react-icons/ri';
import Topbar from '../components/Topbar';
import HorizontalMenu from '../components/HorizontalMenu';
import Footer from '../components/Footer';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Input } from '../components/ui/Input';
import { Label } from '../components/ui/Label';
import FileTypeIcon from '../components/file-manager/FileTypeIcon';

const FeatureMiniCard = ({ icon: Icon, title, desc }) => (
  <div className="rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-4 text-center">
    <Icon className="mx-auto mb-2 text-[var(--aurora-1)]" size={22} />
    <p className="text-sm font-bold text-[var(--text-primary)]">{title}</p>
    <p className="text-xs text-[var(--text-secondary)]">{desc}</p>
  </div>
);

const subscribeToAuth = (callback) => {
  window.addEventListener('storage', callback);
  window.addEventListener('gainfile-auth-change', callback);
  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener('gainfile-auth-change', callback);
  };
};

const getAuthSnapshot = () => window.localStorage.getItem('gainfile-authenticated') === 'true';
const getServerAuthSnapshot = () => false;

const COUNTDOWN_SECONDS = 15;

const FILE_TYPES = ['video', 'pdf', 'image', 'zip', 'text'];
const EXT_BY_TYPE = { video: 'mp4', pdf: 'pdf', image: 'jpg', zip: 'zip', text: 'txt' };
const NAME_POOL = [
  'Quarterly-Report-Q3', 'Brand-Guidelines-2026', 'Product-Launch-Teaser', 'Season-Finale-Recap',
  'Client-Presentation-Final', 'Design-System-Assets', 'Onboarding-Walkthrough', 'Marketing-Highlights',
];

const DEMO_FILES = {
  'demo-public': {
    id: 'fil_aa11bb22cc33',
    name: 'community-meetup-highlights.mp4',
    type: 'video',
    size: '128.4 MB',
    downloads: 342,
    public: true,
    premium: false,
    password: null,
    uploader: 'gainfile user',
  },
  'demo-premium': {
    id: 'fil_dd44ee55ff66',
    name: 'interstellar-2014.mp4',
    type: 'video',
    size: '4.2 GB',
    downloads: 12,
    public: false,
    premium: true,
    password: null,
    uploader: 'gainfile user',
  },
  'demo-password': {
    id: 'fil_gg77hh88ii99',
    name: 'confidential-financials-q3.pdf',
    type: 'pdf',
    size: '3.1 MB',
    downloads: 5,
    public: false,
    premium: false,
    password: '1234',
    uploader: 'gainfile user',
  },
  'demo-expired': {
    id: 'fil_jj00kk11ll22',
    name: 'expired-project-archive.zip',
    type: 'zip',
    size: '842.6 MB',
    downloads: 28,
    public: true,
    premium: false,
    password: null,
    uploader: 'gainfile user',
    status: 'expired',
    expiresAt: '2026-08-31T23:59:59Z',
  },
};

const DEMO_LINKS = [
  { token: 'demo-public', label: 'Public file' },
  { token: 'demo-premium', label: 'Premium file' },
  { token: 'demo-password', label: 'Password protected' },
  { token: 'demo-expired', label: 'Expired file' },
];

const hashToken = (token) => {
  let hash = 0;
  for (let i = 0; i < token.length; i += 1) {
    hash = (hash * 31 + token.charCodeAt(i)) >>> 0;
  }
  return hash;
};

const formatBytes = (bytes) => {
  if (bytes < 1024) return `${bytes} B`;
  const units = ['KB', 'MB', 'GB'];
  let value = bytes;
  let unitIndex = -1;
  do {
    value /= 1024;
    unitIndex += 1;
  } while (value >= 1024 && unitIndex < units.length - 1);
  return `${value.toFixed(1)} ${units[unitIndex]}`;
};

const formatExpirationDate = (value) => new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'UTC',
}).format(new Date(value));

const buildSharedFile = (token) => {
  if (DEMO_FILES[token]) return DEMO_FILES[token];

  const hash = hashToken(token || 'gainfile');
  const type = FILE_TYPES[hash % FILE_TYPES.length];
  const name = NAME_POOL[Math.floor(hash / 7) % NAME_POOL.length];
  const bytes = 2_000_000 + (hash % 900_000_000);

  return {
    id: `fil_${hash.toString(16).padStart(12, '0')}`,
    name: `${name}.${EXT_BY_TYPE[type]}`,
    type,
    size: formatBytes(bytes),
    downloads: hash % 500,
    public: hash % 2 === 0,
    premium: hash % 3 === 0,
    password: hash % 5 === 0 ? '1234' : null,
    uploader: 'gainfile user',
  };
};

const ShareDownload = () => {
  const params = useParams();
  const token = Array.isArray(params?.token) ? params.token[0] : params?.token || '';
  const isAuthenticated = useSyncExternalStore(subscribeToAuth, getAuthSnapshot, getServerAuthSnapshot);

  const file = useMemo(() => buildSharedFile(token), [token]);
  const [countdownToken, setCountdownToken] = useState(token);
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);
  const [unlockedToken, setUnlockedToken] = useState(null);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  if (token !== countdownToken) {
    setCountdownToken(token);
    setSecondsLeft(COUNTDOWN_SECONDS);
  }

  const isUnlocked = !file.password || unlockedToken === token;
  const isExpired = file.status === 'expired';

  useEffect(() => {
    if (isExpired || file.premium || !isUnlocked || secondsLeft <= 0) return undefined;
    const timer = setTimeout(() => setSecondsLeft((current) => current - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft, file.premium, isExpired, isUnlocked]);

  const isReady = secondsLeft <= 0;
  const progress = Math.round(((COUNTDOWN_SECONDS - secondsLeft) / COUNTDOWN_SECONDS) * 100);

  const handleCopyId = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(file.id).catch(() => {});
    }
  };

  const handleUnlock = (event) => {
    event.preventDefault();
    if (passwordInput === file.password) {
      setUnlockedToken(token);
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
  };

  return (
    <div className="app-container">
      <div className="aurora-bg" />
      <motion.main
        className="main-content flex flex-col"
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Topbar isHorizontalMenu>
          <HorizontalMenu />
        </Topbar>

        <div className="mx-auto flex w-full max-w-2xl flex-col gap-4 px-4 pt-8 md:px-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)]">Try examples:</span>
            {DEMO_LINKS.map((demo) => (
              <Link
                key={demo.token}
                href={`/s/${demo.token}`}
                className={`rounded-lg px-3 py-1.5 text-xs font-bold transition-colors ${token === demo.token ? 'bg-[var(--aurora-1)] text-white' : 'bg-[var(--glass-border)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'}`}
              >
                {demo.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="mx-auto flex w-full max-w-2xl flex-1 items-center px-4 py-10 md:px-10">
          <Card variant="aurora" padding="lg" className="w-full text-center">
            <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-3xl border border-[var(--glass-border)] bg-[var(--bg-primary)]">
              <FileTypeIcon type={file.type} size={40} />
              <Badge variant="solid" color="glass" size="xs" className="absolute -bottom-2 left-1/2 -translate-x-1/2 uppercase">
                {EXT_BY_TYPE[file.type]}
              </Badge>
            </div>

            <h1 className="truncate text-2xl font-bold text-[var(--text-primary)]">{file.name}</h1>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              {EXT_BY_TYPE[file.type].toUpperCase()} file · {file.downloads} downloads · {file.public ? 'Public' : 'Private'} link
            </p>

            <button
              type="button"
              onClick={handleCopyId}
              className="mx-auto mt-4 flex items-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2 text-xs font-bold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              <RiFileCopyLine size={14} /> Copy file ID <span className="font-mono text-[var(--text-primary)]">({file.id})</span>
            </button>

            <Badge variant="soft" color={isExpired ? 'danger' : 'success'} size="sm" className="mx-auto mt-5 gap-1.5">
              {isExpired ? <RiAlarmWarningLine size={14} /> : <RiShieldCheckLine size={14} />}
              {isExpired ? 'File expired' : 'Secure connection verified'}
            </Badge>

            {isExpired ? (
              <div className="mt-8 space-y-5">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-500/30 bg-rose-500/10 text-rose-500">
                  <RiAlarmWarningLine size={32} />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-[var(--text-primary)]">This file is no longer available</h2>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
                    The file expired on {formatExpirationDate(file.expiresAt)}. Downloads and access requests have
                    been disabled. Ask the uploader to create a new share link.
                  </p>
                </div>
                <Button as={Link} href="/" variant="glass" className="font-bold">
                  Back to Gainfile
                </Button>
              </div>
            ) : !isUnlocked ? (
              <div className="mt-8 space-y-4">
                <Badge variant="outline" color="info" size="sm" className="mx-auto gap-1.5">
                  <RiLockLine size={14} /> Password protected
                </Badge>
                <p className="text-sm text-[var(--text-secondary)]">
                  This file is locked. Enter the password shared with you to continue.
                </p>
                <form onSubmit={handleUnlock} className="mx-auto flex max-w-sm flex-col gap-3 text-left">
                  <div>
                    <Label htmlFor="share-password">Password</Label>
                    <Input
                      id="share-password"
                      type="password"
                      size="sm"
                      placeholder="Enter password"
                      value={passwordInput}
                      onChange={(event) => { setPasswordInput(event.target.value); setPasswordError(false); }}
                    />
                    {passwordError && <p className="mt-2 text-xs font-bold text-rose-500">Incorrect password. Please try again.</p>}
                  </div>
                  <Button type="submit" variant="primary" className="gap-2 font-bold">
                    <RiLockLine size={18} /> Unlock file
                  </Button>
                </form>
              </div>
            ) : file.premium ? (
              <div className="mt-8 space-y-4">
                <Badge variant="outline" color="warning" size="sm" className="mx-auto gap-1.5">
                  <RiVipCrownLine size={14} /> Premium file
                </Badge>
                <p className="text-sm text-[var(--text-secondary)]">
                  This file is only available to Premium members. Upgrade your plan or log in to an eligible account to download it.
                </p>
                <div className="flex flex-col justify-center gap-3 sm:flex-row">
                  <Button as={Link} href="/upgrade-plan" variant="warning" className="gap-2 font-bold">
                    <RiVipCrownLine size={18} /> Upgrade Plan
                  </Button>
                  <Button as={Link} href="/login" variant="glass" className="gap-2 font-bold">
                    <RiLoginBoxLine size={18} /> Log In
                  </Button>
                </div>
              </div>
            ) : (
              <div className="mt-8 space-y-4">
                {isReady ? (
                  <Button variant="success" size="lg" className="gap-2 font-bold">
                    <RiDownloadCloud2Line size={20} /> Download Now
                  </Button>
                ) : (
                  <div className="relative mx-auto h-11 w-full max-w-sm overflow-hidden rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)]">
                    <div
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--aurora-1)]/30 to-[var(--aurora-2)]/30 transition-all duration-1000"
                      style={{ width: `${progress}%` }}
                    />
                    <span className="relative z-10 flex h-full items-center justify-center gap-2 text-sm font-bold text-[var(--text-secondary)]">
                      <RiTimeLine /> Please wait {secondsLeft}s...
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-left text-sm text-amber-500">
                  <RiSpeedUpLine size={20} className="shrink-0" />
                  <p>
                    Free downloads are limited to <strong>50 KB/s</strong>.{' '}
                    <Link href="/upgrade-plan" className="font-bold underline hover:text-amber-400">Upgrade your plan</Link> for full, unthrottled speed and no waiting.
                  </p>
                </div>

                {!isAuthenticated && (
                  <p className="text-xs text-[var(--text-secondary)]">
                    <Link href="/login" className="font-bold text-[var(--aurora-1)] hover:underline">Log in</Link> to track your download history.
                  </p>
                )}
              </div>
            )}
          </Card>
        </div>

        <Footer />
      </motion.main>
    </div>
  );
};

export default ShareDownload;
