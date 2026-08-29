import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  RiArrowRightLine,
  RiCheckLine,
  RiCloseLine,
  RiDiscountPercentLine,
  RiLock2Line,
  RiSparkling2Line,
  RiVipCrown2Line,
} from 'react-icons/ri';
import { Modal } from '../components/ui/Modal';

const planGroups = [
  { duration: 30, options: [
    { tier: 'Pro', bandwidth: '1TB', storage: '1TB', originalPrice: 30, price: 20 },
    { tier: 'Max', bandwidth: '2TB', storage: '1TB', originalPrice: 50, price: 35 },
  ] },
  { duration: 90, options: [
    { tier: 'Pro', bandwidth: '3TB', storage: '3TB', originalPrice: 70, price: 50 },
    { tier: 'Max', bandwidth: '6TB', storage: '3TB', originalPrice: 110, price: 80 },
  ] },
  { duration: 180, options: [
    { tier: 'Pro', bandwidth: '6TB', storage: '6TB', originalPrice: 120, price: 90 },
    { tier: 'Max', bandwidth: '10TB', storage: '6TB', originalPrice: 175, price: 130 },
  ] },
  { duration: 365, options: [
    { tier: 'Pro', bandwidth: '12TB', storage: '12TB', originalPrice: 220, price: 160 },
    { tier: 'Max', bandwidth: '30TB', storage: '12TB', originalPrice: 400, price: 300 },
  ] },
];

const freeBenefits = [
  { text: '200GB storage', available: true },
  { text: 'Limited download speed', available: true },
  { text: 'Advertising included', available: false },
  { text: 'Files deleted 30 days after the last download', available: false },
];

const premiumBenefits = [
  'Maximum download speed',
  'Secure downloads',
  'Simultaneous downloads',
  'Unlimited file inactivity',
  'No advertising',
  'Priority support',
];

const Benefit = ({ children, available = true }) => {
  const Icon = available ? RiCheckLine : RiCloseLine;
  return (
    <li className={`flex items-start gap-2.5 text-sm ${available ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${available ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-400'}`}>
        <Icon size={14} />
      </span>
      <span className="leading-5">{children}</span>
    </li>
  );
};

const Deals = () => {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState(() =>
    Object.fromEntries(planGroups.map((group) => [group.duration, 0]))
  );
  const [showLogin, setShowLogin] = useState(false);

  const handleBuy = (duration, plan) => {
    const query = new URLSearchParams({
      duration: String(duration),
      tier: plan.tier.toLowerCase(),
      bandwidth: plan.bandwidth,
      storage: plan.storage,
      price: String(plan.price),
    });
    const paymentUrl = `/payment?${query.toString()}`;

    if (window.localStorage.getItem('gainfile-authenticated') === 'true') {
      router.push(paymentUrl);
      return;
    }

    window.sessionStorage.setItem('gainfile-return-to', paymentUrl);
    setShowLogin(true);
  };

  return (
    <div className="min-h-[calc(100vh-200px)] p-6 text-[var(--text-primary)] md:px-12">
      <motion.div
        className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="mb-2 text-4xl font-bold tracking-tight md:text-5xl">
            Choose a <span className="text-gradient from-emerald-400 to-teal-500">Premium Plan</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">Select a plan that matches your storage and bandwidth needs.</p>
        </div>
      </motion.div>

      <div className="flex snap-x gap-6 overflow-x-auto pb-6 no-scrollbar">
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card flex min-h-[590px] w-72 flex-shrink-0 snap-center flex-col rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)]/50 p-5"
        >
          <div className="pb-5">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Current account</p>
            <div className="mt-2 flex items-end justify-between">
              <h2 className="text-2xl font-bold">Free</h2>
              <p className="font-mono text-2xl font-black">$0</p>
            </div>
            <p className="mt-2 text-xs text-[var(--text-secondary)]">Basic access with limited resources</p>
          </div>

          <div className="rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-primary)] p-4">
            <p className="text-xs text-[var(--text-secondary)]">Storage</p>
            <p className="mt-1 font-mono text-lg font-bold">200GB</p>
          </div>

          <div className="mt-6 flex-1">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Included benefits</p>
            <ul className="space-y-3">
              {freeBenefits.map((benefit) => (
                <Benefit key={benefit.text} available={benefit.available}>{benefit.text}</Benefit>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-2xl border border-[var(--glass-border)] px-4 py-3 text-center text-sm font-bold text-[var(--text-secondary)]">
            Current plan
          </div>
        </motion.section>

        {planGroups.map((group, index) => {
          const selectedIndex = selectedOptions[group.duration];
          const selectedPlan = group.options[selectedIndex];

          return (
            <motion.section
              key={group.duration}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index + 1) * 0.08 }}
              className="glass-card relative flex min-h-[590px] w-80 flex-shrink-0 snap-center flex-col overflow-hidden rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)]/50 p-5"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500" />
              <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1.5 text-amber-400 shadow-sm shadow-amber-500/10">
                <RiDiscountPercentLine size={14} />
                <span className="text-[10px] font-black uppercase tracking-wider">Special Sale</span>
                <span className="font-mono text-xs font-black text-[var(--text-primary)]">$30</span>
              </div>
              <div className="pb-5">
                <div>
                  <div>
                    <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-500"><RiVipCrown2Line /> Premium</p>
                    <h2 className="mt-1 text-2xl font-bold">{group.duration} days</h2>
                    <motion.div key={selectedPlan.price} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-2 flex items-baseline gap-2">
                      <span className="font-mono text-xs font-semibold text-[var(--text-secondary)] line-through decoration-rose-400/80">${selectedPlan.originalPrice.toFixed(2)}</span>
                      <span className="font-mono text-xl font-black text-emerald-500">${selectedPlan.price.toFixed(2)}</span>
                    </motion.div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                {group.options.map((option, optionIndex) => {
                  const isSelected = selectedIndex === optionIndex;
                  return (
                    <button
                      key={option.tier}
                      type="button"
                      onClick={() => setSelectedOptions((current) => ({ ...current, [group.duration]: optionIndex }))}
                      className={`group w-full rounded-2xl border p-3 text-left transition-all ${isSelected ? 'border-emerald-500 bg-emerald-500/10 shadow-lg shadow-emerald-500/10' : 'border-[var(--glass-border)] bg-[var(--bg-primary)] hover:border-emerald-500/40'}`}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="text-sm font-bold">{option.tier}</span>
                        <RiArrowRightLine className={`transition-transform ${isSelected ? 'text-emerald-500' : 'text-[var(--text-secondary)] group-hover:translate-x-1'}`} />
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">Bandwidth</p>
                          <p className="font-mono text-sm font-bold">{option.bandwidth}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">Storage</p>
                          <p className="font-mono text-sm font-bold">{option.storage}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="flex-1 py-5">
                <ul className="space-y-3">
                  {premiumBenefits.map((benefit) => <Benefit key={benefit}>{benefit}</Benefit>)}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleBuy(group.duration, selectedPlan)}
                className="mt-auto flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] px-5 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Buy {selectedPlan.tier} <RiArrowRightLine />
              </button>
            </motion.section>
          );
        })}
      </div>

      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)} title="Sign in to continue" size="sm" variant="aurora">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--aurora-1)]/10 text-2xl text-[var(--aurora-1)]"><RiLock2Line /></div>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">Sign in or create a Gainfile account to purchase this Premium plan.</p>
          <div className="mt-6 grid gap-3">
            <Link href="/login" className="rounded-2xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] px-5 py-3 text-sm font-bold text-white">Sign In</Link>
            <Link href="/register" className="rounded-2xl border border-[var(--glass-border)] px-5 py-3 text-sm font-bold hover:bg-[var(--glass-border)]">Create Account</Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Deals;
