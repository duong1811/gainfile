import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { RiUser3Line, RiMailLine, RiLockPasswordLine, RiBuilding4Line } from 'react-icons/ri';

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
    <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <motion.div
        className="glass-card w-full max-w-xl p-10 rounded-[2.5rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] z-10"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2 font-outfit">Create your Gainfile account</h1>
          <p className="text-[var(--text-secondary)]">Create an account to manage files and premium plans.</p>
        </div>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative">
              <RiUser3Line className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input type="text" placeholder="First Name" className="w-full bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[var(--aurora-1)] text-[var(--text-primary)]" />
            </div>
            <div className="relative">
              <RiUser3Line className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input type="text" placeholder="Last Name" className="w-full bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[var(--aurora-1)] text-[var(--text-primary)]" />
            </div>
          </div>

          <div className="relative">
            <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input type="email" placeholder="Email" className="w-full bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[var(--aurora-1)] text-[var(--text-primary)]" />
          </div>

          <div className="relative">
            <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
            <input type="password" placeholder="Secure Password" className="w-full bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-2xl py-4 pl-12 pr-4 focus:outline-none focus:border-[var(--aurora-1)] text-[var(--text-primary)]" />
          </div>

          <button type="submit" className="block w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] text-white font-bold text-center hover:opacity-90 transition-opacity">
            Create Account
          </button>
        </form>

        <p className="text-center mt-10 text-[var(--text-secondary)] text-sm">
          Already have an account? <Link href="/login" className="text-[var(--text-primary)] font-bold hover:underline">Log In</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Register;
