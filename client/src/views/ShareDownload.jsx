import React, { useEffect, useMemo, useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  RiAlarmWarningLine,
  RiCheckLine,
  RiCloseLine,
  RiDownloadCloud2Line,
  RiFileCopyLine,
  RiFlashlightFill,
  RiLockLine,
  RiShieldCheckLine,
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
import { mockDownloadData } from '../data/mockData';

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

const {
  countdownSeconds: COUNTDOWN_SECONDS,
  extensions: EXT_BY_TYPE,
  fileTypes: FILE_TYPES,
  files: DEMO_FILES,
  freeFeatures: FREE_FEATURES,
  links: DEMO_LINKS,
  namePool: NAME_POOL,
  premiumFeatures: PREMIUM_FEATURES,
} = mockDownloadData;

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
  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);
  const [startedToken, setStartedToken] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [unlockedToken, setUnlockedToken] = useState(null);
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const isUnlocked = !file.password || unlockedToken === token;
  const isExpired = file.status === 'expired';
  const slowDownloadStarted = startedToken === token;
  const captchaVerified = captchaToken === token;

  useEffect(() => {
    if (isExpired || file.premium || !isUnlocked || !slowDownloadStarted || secondsLeft <= 0) return undefined;
    const timer = setTimeout(() => setSecondsLeft((current) => current - 1), 1000);
    return () => clearTimeout(timer);
  }, [secondsLeft, file.premium, isExpired, isUnlocked, slowDownloadStarted]);

  const isReady = slowDownloadStarted && secondsLeft <= 0 && captchaVerified;
  const progress = Math.round(((COUNTDOWN_SECONDS - secondsLeft) / COUNTDOWN_SECONDS) * 100);

  const startSlowDownload = () => {
    setStartedToken(token);
    setCaptchaToken(null);
    setSecondsLeft(COUNTDOWN_SECONDS);
  };

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

        <div className="mx-auto flex w-full max-w-3xl flex-col gap-4 px-4 pt-8 md:px-10">
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

        <div className="grid w-full flex-1 grid-cols-1 xl:grid-cols-[minmax(160px,1fr)_minmax(0,900px)_minmax(160px,1fr)]">
          <aside aria-label="Left advertising space" className="hidden xl:block" />

          <div className="flex w-full flex-col justify-center px-4 py-12 md:px-8">
            <Card padding="md" className="mb-6 w-full">
              <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:text-left">
                <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-primary)]">
                  <FileTypeIcon type={file.type} size={34} />
                  <Badge variant="solid" color="glass" size="xs" className="absolute -bottom-2 left-1/2 -translate-x-1/2 uppercase">
                    {EXT_BY_TYPE[file.type]}
                  </Badge>
                </div>
                <div className="min-w-0 flex-1">
                  <h1 className="truncate text-xl font-bold text-[var(--text-primary)] sm:text-2xl">{file.name}</h1>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {file.size} · {file.downloads} downloads · {file.public ? 'Public' : 'Private'} link
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyId}
                  className="flex shrink-0 items-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-3 py-2 text-xs font-bold text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
                >
                  <RiFileCopyLine size={14} /> Copy file ID
                </button>
              </div>
            </Card>

            {isExpired ? (
              <Card variant="aurora" padding="lg" className="w-full text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-rose-500/30 bg-rose-500/10 text-rose-500">
                  <RiAlarmWarningLine size={32} />
                </div>
                <h2 className="mt-5 text-xl font-bold">This file is no longer available</h2>
                <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[var(--text-secondary)]">
                  The file expired on {formatExpirationDate(file.expiresAt)}. Ask the uploader to create a new share link.
                </p>
                <Button as={Link} href="/" variant="glass" className="mt-6 font-bold">Back to Gainfile</Button>
              </Card>
            ) : !isUnlocked ? (
              <Card variant="aurora" padding="lg" className="w-full text-center">
                <Badge variant="outline" color="info" size="sm" className="mx-auto gap-1.5">
                  <RiLockLine size={14} /> Password protected
                </Badge>
                <p className="mt-4 text-sm text-[var(--text-secondary)]">Enter the password shared with you to view the download options.</p>
                <form onSubmit={handleUnlock} className="mx-auto mt-5 flex max-w-sm flex-col gap-3 text-left">
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
              </Card>
            ) : (
              <>
                <div className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-2">
                  <Card padding="lg" className={`flex h-full flex-col ${file.premium ? 'opacity-60' : ''}`}>
                    <div className="mb-6 text-center">
                      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-500/10 text-2xl text-slate-500">
                        <RiTimeLine />
                      </span>
                      <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-secondary)]">Free</p>
                      <h2 className="mt-1 text-2xl font-bold">Slow Download</h2>
                    </div>
                    <ul className="flex-1 space-y-3">
                      {FREE_FEATURES.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                          <RiCloseLine className="mt-0.5 shrink-0 text-rose-500" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <Button
                      type="button"
                      variant="glass"
                      size="lg"
                      className="mt-7 w-full"
                      onClick={startSlowDownload}
                      disabled={file.premium}
                    >
                      <RiDownloadCloud2Line /> {file.premium ? 'Premium Only File' : 'Slow Download'}
                    </Button>
                  </Card>

                  <Card variant="aurora" padding="lg" className="flex h-full flex-col border-[var(--aurora-1)]/40">
                    <div className="mb-6 text-center">
                      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] text-2xl text-white shadow-lg shadow-[var(--aurora-1)]/20">
                        <RiVipCrownLine />
                      </span>
                      <p className="mt-4 text-xs font-bold uppercase tracking-[0.2em] text-[var(--aurora-1)]">Only Premium</p>
                      <h2 className="mt-1 text-2xl font-bold">Fast Download</h2>
                    </div>
                    <ul className="flex-1 space-y-3">
                      {PREMIUM_FEATURES.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm">
                          <RiCheckLine className="mt-0.5 shrink-0 text-emerald-500" /> {feature}
                        </li>
                      ))}
                    </ul>
                    <Button as={Link} href="/upgrade-plan" variant="primary" size="lg" className="mt-7 w-full">
                      <RiFlashlightFill /> Get Premium Download
                    </Button>
                    {!isAuthenticated && (
                      <Link href="/login" className="mt-3 text-center text-xs font-bold text-[var(--text-secondary)] hover:text-[var(--aurora-1)]">
                        Already Premium? Log in
                      </Link>
                    )}
                  </Card>
                </div>

                {slowDownloadStarted && !file.premium && (
                  <Card padding="lg" className="mt-6 w-full text-center">
                    {isReady ? (
                      <div>
                        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/10 text-3xl text-emerald-500">
                          <RiCheckLine />
                        </span>
                        <h2 className="mt-4 text-xl font-bold">The file is ready to download</h2>
                        <Button type="button" variant="success" size="lg" className="mt-5">
                          <RiDownloadCloud2Line size={20} /> Download Now
                        </Button>
                      </div>
                    ) : (
                      <div className="mx-auto max-w-md">
                        <h2 className="text-lg font-bold">Preparing your free download</h2>
                        <div className="relative mt-4 h-12 overflow-hidden rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)]">
                          <div
                            className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--aurora-1)]/30 to-[var(--aurora-2)]/30 transition-all duration-1000"
                            style={{ width: `${progress}%` }}
                          />
                          <span className="relative z-10 flex h-full items-center justify-center gap-2 text-sm font-bold">
                            <RiTimeLine /> {secondsLeft > 0 ? `Please wait ${secondsLeft}s` : 'Waiting for verification'}
                          </span>
                        </div>
                        <label className="mx-auto mt-4 flex max-w-xs cursor-pointer items-center gap-3 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/60 p-4 text-left">
                          <input
                            type="checkbox"
                            checked={captchaVerified}
                            onChange={(event) => setCaptchaToken(event.target.checked ? token : null)}
                            className="h-5 w-5 accent-[var(--aurora-1)]"
                          />
                          <span>
                            <span className="block text-sm font-bold">I&apos;m not a robot</span>
                            <span className="text-xs text-[var(--text-secondary)]">Captcha verification</span>
                          </span>
                          <RiShieldCheckLine className="ml-auto text-xl text-emerald-500" />
                        </label>
                      </div>
                    )}
                  </Card>
                )}
              </>
            )}
          </div>

          <aside aria-label="Right advertising space" className="hidden xl:block" />
        </div>

        <Footer />
      </motion.main>
    </div>
  );
};

export default ShareDownload;
