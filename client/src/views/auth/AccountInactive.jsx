import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  RiCheckboxCircleLine,
  RiErrorWarningLine,
  RiMailCheckLine,
  RiRefreshLine,
} from 'react-icons/ri';
import AuthPageLayout from '../../components/auth/AuthPageLayout';

const AccountInactive = () => {
  const [emailSent, setEmailSent] = useState(false);

  const resendActivation = () => {
    setEmailSent(true);
  };

  return (
    <AuthPageLayout>
      <motion.div
        className="glass-card relative z-10 w-full max-w-md rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 text-center sm:p-8"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 text-3xl text-amber-500">
          <RiMailCheckLine />
        </div>

        <p className="mt-5 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-amber-500">
          <RiErrorWarningLine /> Activation required
        </p>
        <h1 className="mt-3 text-3xl font-bold tracking-tight">Verify your email</h1>
        <p className="mx-auto mt-3 max-w-md leading-7 text-[var(--text-secondary)]">
          Your account has been created, but it is not active yet. Open the activation email we sent you and confirm your address to continue.
        </p>

        {emailSent && (
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 p-4 text-left text-sm text-emerald-500" role="status">
            <RiCheckboxCircleLine className="mt-0.5 shrink-0 text-lg" />
            <span>A new activation email has been sent. Check your inbox and spam folder.</span>
          </div>
        )}

        <div className="mt-6 space-y-3">
          <button
            type="button"
            onClick={resendActivation}
            disabled={emailSent}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] px-5 py-3 font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {emailSent ? <RiCheckboxCircleLine /> : <RiRefreshLine />}
            {emailSent ? 'Activation email sent' : 'Resend activation email'}
          </button>
          <Link
            href="/login"
            className="block w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-border)] px-5 py-3 font-bold transition-opacity hover:opacity-80"
          >
            Back to sign in
          </Link>
        </div>

        <p className="mt-5 text-xs leading-5 text-[var(--text-secondary)]">
          The activation link may take a few minutes to arrive. If you entered the wrong email address, create a new account with the correct address.
        </p>
      </motion.div>
    </AuthPageLayout>
  );
};

export default AccountInactive;
