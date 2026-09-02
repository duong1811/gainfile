import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiUser3Line, RiMailLine, RiLockPasswordLine, RiBuilding4Line } from 'react-icons/ri';
import AuthPageLayout from '../../components/auth/AuthPageLayout';

const Register = () => {
  const router = useRouter();

  const handleSubmit = (event) => {
    event.preventDefault();
    window.localStorage.setItem('gainfile-authenticated', 'true');
    const returnTo = window.sessionStorage.getItem('gainfile-return-to') || '/dashboard';
    window.sessionStorage.removeItem('gainfile-return-to');
    router.push(returnTo);
  };

  return (
    <AuthPageLayout>
      <motion.div
        className="glass-card z-10 w-full max-w-lg rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 sm:p-8"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="mb-7 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2 font-outfit">Create your Gainfile account</h1>
          <p className="text-[var(--text-secondary)]">Create an account to manage files and premium plans.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <RiUser3Line className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input type="text" placeholder="First Name" className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-border)] py-3 pl-12 pr-4 text-[var(--text-primary)] focus:border-[var(--aurora-1)] focus:outline-none" />
            </div>
            <div className="relative">
              <RiUser3Line className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input type="text" placeholder="Last Name" className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-border)] py-3 pl-12 pr-4 text-[var(--text-primary)] focus:border-[var(--aurora-1)] focus:outline-none" />
            </div>
          </div>

          <div className="relative">
            <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input type="email" placeholder="Email" className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-border)] py-3 pl-12 pr-4 text-[var(--text-primary)] focus:border-[var(--aurora-1)] focus:outline-none" />
          </div>

          <div className="relative">
            <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input type="password" placeholder="Secure Password" className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-border)] py-3 pl-12 pr-4 text-[var(--text-primary)] focus:border-[var(--aurora-1)] focus:outline-none" />
          </div>

          <button type="submit" className="block w-full rounded-2xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] py-3 text-center font-bold text-white transition-opacity hover:opacity-90">
            Create Account
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-[var(--text-secondary)]">
          Already have an account? <Link href="/login" className="text-[var(--text-primary)] font-bold hover:underline">Log In</Link>
        </p>
      </motion.div>
    </AuthPageLayout>
  );
};

export default Register;
