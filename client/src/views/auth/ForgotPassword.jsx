import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  RiArrowLeftLine,
  RiCheckboxCircleLine,
  RiLockPasswordLine,
  RiMailLine,
} from 'react-icons/ri';
import AuthPageLayout from '../../components/auth/AuthPageLayout';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submittedEmail, setSubmittedEmail] = useState('');

  const submitResetRequest = (event) => {
    event.preventDefault();
    setSubmittedEmail(email.trim());
  };

  if (submittedEmail) {
    return (
      <AuthPageLayout>
        <motion.div
          className="glass-card relative z-10 w-full max-w-sm rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 text-center sm:p-8"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 text-3xl text-emerald-500">
            <RiCheckboxCircleLine />
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight">Check your email</h1>
          <p className="mt-3 leading-7 text-[var(--text-secondary)]">
            If an account exists for <strong className="text-[var(--text-primary)]">{submittedEmail}</strong>, we sent it a password reset link.
          </p>
          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={() => setSubmittedEmail('')}
              className="w-full rounded-2xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] px-5 py-3 font-bold text-white transition-opacity hover:opacity-90"
            >
              Try another email
            </button>
            <Link href="/login" className="flex items-center justify-center gap-2 py-3 text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
              <RiArrowLeftLine /> Back to sign in
            </Link>
          </div>
          <p className="mt-5 text-xs leading-5 text-[var(--text-secondary)]">The link expires for your security. Check your spam folder if it does not arrive.</p>
        </motion.div>
      </AuthPageLayout>
    );
  }

  return (
    <AuthPageLayout>
      <motion.div
        className="glass-card relative z-10 w-full max-w-sm rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 sm:p-8"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[var(--aurora-1)]/10 text-3xl text-[var(--aurora-1)]">
          <RiLockPasswordLine />
        </div>
        <div className="mb-6 mt-5 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Forgot your password?</h1>
          <p className="mt-3 text-[var(--text-secondary)]">Enter your account email and we will send you a secure reset link.</p>
        </div>

        <form className="space-y-5" onSubmit={submitResetRequest}>
          <label className="block">
            <span className="mb-2 block text-sm font-bold">Email address</span>
            <span className="relative block">
              <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                required
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-border)] py-3 pl-12 pr-4 text-[var(--text-primary)] outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--aurora-1)] focus:ring-2 focus:ring-[var(--aurora-1)]/20"
              />
            </span>
          </label>
          <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] px-5 py-3 font-bold text-white transition-opacity hover:opacity-90">
            Send reset link
          </button>
        </form>

        <Link href="/login" className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
          <RiArrowLeftLine /> Back to sign in
        </Link>
      </motion.div>
    </AuthPageLayout>
  );
};

export default ForgotPassword;
