import { motion } from 'framer-motion';
import Link from 'next/link';
import { RiGoogleFill, RiMailLine, RiLockPasswordLine } from 'react-icons/ri';
import AuthPageLayout from '../../components/auth/AuthPageLayout';

const GAINFILE_LOGIN_URL = 'https://app.gainfile.com/api/auth/login';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    window.location.href = GAINFILE_LOGIN_URL;
  };

  return (
    <AuthPageLayout>
      <motion.div 
        className="glass-card z-10 w-full max-w-sm rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 sm:p-8"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="mb-7 text-center">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome Back</h1>
          <p className="text-[var(--text-secondary)]">Sign in to your Gainfile account.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <div className="relative">
              <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-border)] py-3 pl-12 pr-4 text-[var(--text-primary)] transition-colors focus:border-[var(--aurora-1)] focus:outline-none"
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-border)] py-3 pl-12 pr-4 text-[var(--text-primary)] transition-colors focus:border-[var(--aurora-1)] focus:outline-none"
              />
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded bg-[var(--glass-border)] border-none" />
              <span className="text-[var(--text-secondary)]">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-[var(--aurora-1)] hover:underline font-medium">Forgot Password?</Link>
          </div>

          <button type="submit" className="block w-full rounded-2xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] py-3 text-center font-bold text-white transition-opacity hover:opacity-90">
            Sign In
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px bg-[var(--glass-border)] flex-1"></div>
          <span className="text-[var(--text-secondary)] text-sm">Or continue with</span>
          <div className="h-px bg-[var(--glass-border)] flex-1"></div>
        </div>

        <div>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-border)] py-2.5 transition-opacity hover:opacity-80">
            <RiGoogleFill className="text-red-500" size={20} />
            <span className="text-sm font-bold">Google</span>
          </button>
        </div>

        <p className="mt-7 text-center text-sm text-[var(--text-secondary)]">
          Don&apos;t have an account? <Link href="/register" className="text-[var(--text-primary)] font-bold hover:underline">Sign Up</Link>
        </p>
      </motion.div>
    </AuthPageLayout>
  );
};

export default Login;
