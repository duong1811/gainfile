import { motion } from 'framer-motion';
import Link from 'next/link';
import { RiGoogleFill, RiMicrosoftFill, RiMailLine, RiLockPasswordLine } from 'react-icons/ri';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <motion.div 
        className="glass-card w-full max-w-md p-10 rounded-[2.5rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] z-10"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
      >
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Welcome Back</h1>
          <p className="text-[var(--text-secondary)]">Sign in to your Trackify workspace.</p>
        </div>

        <form className="space-y-6">
          <div>
            <div className="relative">
              <RiMailLine className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-2xl py-4 pl-12 pr-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--aurora-1)] transition-colors"
              />
            </div>
          </div>
          <div>
            <div className="relative">
              <RiLockPasswordLine className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-2xl py-4 pl-12 pr-4 text-[var(--text-primary)] focus:outline-none focus:border-[var(--aurora-1)] transition-colors"
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

          <Link href="/dashboard" className="block w-full py-4 rounded-2xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] text-white font-bold text-center hover:opacity-90 transition-opacity">
            Sign In
          </Link>
        </form>

        <div className="my-8 flex items-center gap-4">
          <div className="h-px bg-[var(--glass-border)] flex-1"></div>
          <span className="text-[var(--text-secondary)] text-sm">Or continue with</span>
          <div className="h-px bg-[var(--glass-border)] flex-1"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-border)] hover:opacity-80 transition-opacity">
            <RiGoogleFill className="text-red-500" size={20} />
            <span className="text-sm font-bold">Google</span>
          </button>
          <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-border)] hover:opacity-80 transition-opacity">
            <RiMicrosoftFill className="text-blue-500" size={20} />
            <span className="text-sm font-bold">Microsoft</span>
          </button>
        </div>

        <p className="text-center mt-10 text-[var(--text-secondary)] text-sm">
          Don't have an account? <Link href="/register" className="text-[var(--text-primary)] font-bold hover:underline">Sign Up</Link>
        </p>
      </motion.div>
    </div>
  );
};

export default Login;
