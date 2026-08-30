import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  RiArrowRightLine,
  RiCheckLine,
  RiGift2Fill,
  RiLock2Line,
  RiSparkling2Line,
  RiVipCrown2Line,
} from 'react-icons/ri';
import { Modal } from '../components/ui/Modal';

const planGroups = [
  { 
    duration: 30, 
    options: [
      { tier: 'Pro', bandwidth: '1TB', storage: '1TB', originalPrice: 20, price: 14 },
      { tier: 'Max', bandwidth: '2TB', storage: '1TB', originalPrice: 30, price: 21 },
    ] 
  },
  { 
    duration: 90, 
    options: [
      { tier: 'Pro', bandwidth: '3TB', storage: '3TB', originalPrice: 50, price: 35 },
      { tier: 'Max', bandwidth: '6TB', storage: '3TB', originalPrice: 80, price: 56 },
    ] 
  },
  { 
    duration: 180, 
    options: [
      { tier: 'Pro', bandwidth: '6TB', storage: '6TB', originalPrice: 90, price: 63 },
      { tier: 'Max', bandwidth: '10TB', storage: '6TB', originalPrice: 130, price: 91 },
    ] 
  },
  { 
    duration: 365, 
    options: [
      { tier: 'Pro', bandwidth: '12TB', storage: '12TB', originalPrice: 160, price: 112 },
      { tier: 'Max', bandwidth: '30TB', storage: '12TB', originalPrice: 400, price: 210 },
    ] 
  },
];

const premiumBenefits = [
  'Maximum download speed',
  'Secure downloads',
  'Simultaneous downloads',
  'Unlimited File Inactivity',
  'No advertising',
  'No Waiting time',
  'Priority support',
  'SAFE checkout',
];

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

    if (typeof window !== 'undefined' && window.localStorage.getItem('gainfile-authenticated') === 'true') {
      router.push(paymentUrl);
      return;
    }

    if (typeof window !== 'undefined') {
      window.sessionStorage.setItem('gainfile-return-to', paymentUrl);
    }
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
            Premium <span className="text-gradient from-amber-400 to-orange-500">Plan</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">Select a plan that matches your storage and bandwidth needs.</p>
        </div>
      </motion.div>

      {/* SHARED PREMIUM BENEFITS */}
      <div className="mb-8 flex flex-col items-center gap-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-6 py-4 sm:flex-row sm:justify-center sm:gap-x-6">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-400">Each premium plan includes</p>
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 sm:grid-cols-4 sm:gap-x-8 sm:gap-y-3">
          {premiumBenefits.map((benefit) => (
            <span key={benefit} className="flex items-center gap-1.5 text-[11px] font-medium leading-tight text-[var(--text-primary)] sm:text-sm">
              <RiCheckLine className="shrink-0 text-emerald-400" size={14} /> {benefit}
            </span>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-10 pb-6 sm:grid-cols-2 xl:grid-cols-4 items-stretch">
        {/* PREMIUM PLAN CARDS */}
        {planGroups.map((group, index) => {
          const selectedIndex = selectedOptions[group.duration];
          const selectedPlan = group.options[selectedIndex];
          const isBestValue = group.duration === 180;

          return (
            <motion.section
              key={group.duration}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index + 1) * 0.08 }}
              className={`relative flex min-w-0 flex-col overflow-hidden rounded-xl border px-5 pb-5 xl:min-h-[440px] transition-all duration-300 ${
                isBestValue 
                  ? 'border-emerald-400/80  xl:-translate-y-3 bg-[var(--glass-bg)]' 
                  : 'border-[var(--glass-border)] bg-[var(--glass-bg)]'
              }`}
            >
              {/* SPECIAL OFFER 30% OFF BADGE */}
              <div className="absolute right-0 z-10 flex items-center gap-1.5 rounded-bl-xl bg-emerald-500 px-3 py-1.5 text-white">
                <RiGift2Fill size={14} />
                <span className="text-[10px] font-black tracking-wider">Special Offer 30%</span>
              </div>

              {/* BEST VALUE BADGE */}
              {isBestValue && (
                <div className="absolute left-0 flex items-center gap-1.5 rounded-br-xl bg-amber-500 px-3 py-1 text-white shadow-sm shadow-amber-500/20">
                  <RiSparkling2Line size={13} className="animate-pulse text-white" />
                  <span className="text-[10px] font-black tracking-wider">Best Value</span>
                </div>
              )}

              {/* CARD HEADER */}
              <div className="py-5 mt-5 flex justify-between">
                <h2 className="mt-1 text-2xl font-bold">{group.duration} days</h2>
                
                {/* DYNAMIC PRICE */}
                <motion.div key={selectedPlan.price} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-2 flex items-baseline gap-2">
                  <span className="font-mono text-xs font-semibold text-[var(--text-secondary)] line-through decoration-rose-400/80">
                    ${selectedPlan.originalPrice.toFixed(2)}
                  </span>
                  <span className="font-mono text-2xl font-black text-emerald-400">
                    ${selectedPlan.price.toFixed(2)}
                  </span>
                </motion.div>
              </div>

              {/* OPTIONS SELECTOR */}
              <div className="flex flex-1 flex-col justify-center gap-2.5">
                {group.options.map((option, optionIndex) => {
                  const isSelected = selectedIndex === optionIndex;
                  return (
                    <button
                      key={option.tier}
                      type="button"
                      onClick={() => setSelectedOptions((current) => ({ ...current, [group.duration]: optionIndex }))}
                      className={`group w-full rounded-2xl border bg-[var(--bg-primary)] p-4 text-left transition-all duration-200 ${
                        isSelected 
                          ? 'border-emerald-400 ring-emerald-400 shadow-md shadow-emerald-500/10 opacity-100' 
                          : 'border-[var(--glass-border)] opacity-60 hover:opacity-100 hover:border-emerald-500/40'
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-center">
                        <span className={`text-sm font-bold transition-colors ${isSelected ? 'text-emerald-400' : 'text-[var(--text-primary)]'}`}>
                          {option.tier}
                        </span>
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">Bandwidth</p>
                          <p className={`font-mono text-lg font-black transition-colors ${isSelected ? 'text-emerald-300' : 'text-[var(--text-primary)]'}`}>
                            {option.bandwidth}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">Storage</p>
                          <p className={`font-mono text-lg font-black transition-colors ${isSelected ? 'text-emerald-300' : 'text-[var(--text-primary)]'}`}>
                            {option.storage}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* ACTION BUTTON */}
              <button
                type="button"
                onClick={() => handleBuy(group.duration, selectedPlan)}
                className={`group mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98] ${
                  isBestValue
                    ? 'bg-gradient-to-r from-emerald-500 via-[var(--aurora-1)] to-[var(--aurora-2)]'
                    : 'bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)]'
                }`}
              >
                <span>Buy {selectedPlan.tier} (${selectedPlan.price.toFixed(2)})</span>
                <RiArrowRightLine className="transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </motion.section>
          );
        })}
      </div>

      {/* LOGIN MODAL */}
      <Modal isOpen={showLogin} onClose={() => setShowLogin(false)} title="Sign in to continue" size="sm" variant="aurora">
        <div className="text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-2xl text-emerald-400">
            <RiLock2Line />
          </div>
          <p className="text-sm leading-6 text-[var(--text-secondary)]">Sign in or create a Gainfile account to purchase this Premium plan.</p>
          <div className="mt-6 grid gap-3">
            <Link href="/login" className="rounded-xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] px-5 py-3 text-sm font-bold text-white shadow-md shadow-[var(--aurora-1)]/20 hover:brightness-110">
              Sign In
            </Link>
            <Link href="/register" className="rounded-xl border border-[var(--glass-border)] px-5 py-3 text-sm font-bold hover:bg-[var(--glass-border)]">
              Create Account
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Deals;