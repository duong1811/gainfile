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
  { 
    duration: 30, 
    options: [
      { tier: 'Pro', bandwidth: '1TB', storage: '1TB', originalPrice: 30, price: 20 },
      { tier: 'Max', bandwidth: '2TB', storage: '1TB', originalPrice: 50, price: 35 },
    ] 
  },
  { 
    duration: 90, 
    options: [
      { tier: 'Pro', bandwidth: '3TB', storage: '3TB', originalPrice: 70, price: 50 },
      { tier: 'Max', bandwidth: '6TB', storage: '3TB', originalPrice: 110, price: 80 },
    ] 
  },
  { 
    duration: 180, 
    options: [
      { tier: 'Pro', bandwidth: '6TB', storage: '6TB', originalPrice: 120, price: 90 },
      { tier: 'Max', bandwidth: '10TB', storage: '6TB', originalPrice: 175, price: 130 },
    ] 
  },
  { 
    duration: 365, 
    options: [
      { tier: 'Pro', bandwidth: '12TB', storage: '12TB', originalPrice: 220, price: 160 },
      { tier: 'Max', bandwidth: '30TB', storage: '12TB', originalPrice: 400, price: 300 },
    ] 
  },
];

const freeBenefits = [
  { text: '200GB storage', available: true },
  { text: 'Limited download speed', available: true },
  { text: 'Advertising included', available: false },
  { text: 'Files deleted 30 days after last download', available: false },
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
      {/* Icon checkmark xanh lá cây bên trong box */}
      <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${available ? 'bg-emerald-500/15 text-emerald-400' : 'bg-rose-500/10 text-rose-400'}`}>
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
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            Premium <span className="text-gradient from-amber-400 to-orange-500">Plan</span>
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">Select a plan that matches your storage and bandwidth needs.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 pb-6 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 items-stretch">
        {/* FREE PLAN CARD */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass-card flex min-w-0 flex-col rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5 xl:min-h-[590px]"
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

        {/* PREMIUM PLAN CARDS */}
        {planGroups.map((group, index) => {
          const selectedIndex = selectedOptions[group.duration];
          const selectedPlan = group.options[selectedIndex];
          const isBestValue = group.duration === 365;
          const savings = selectedPlan.originalPrice - selectedPlan.price;

          return (
            <motion.section
              key={group.duration}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: (index + 1) * 0.08 }}
              className={`glass-card relative flex min-w-0 flex-col overflow-hidden rounded-[2rem] border p-5 xl:min-h-[590px] transition-all duration-300 ${
                isBestValue 
                  ? 'border-emerald-400/80 bg-gradient-to-b from-emerald-500/15 via-[var(--aurora-1)]/10 to-[var(--glass-bg)] shadow-2xl shadow-emerald-500/15 ring-1 ring-emerald-400/40 xl:-translate-y-3' 
                  : 'border-[var(--glass-border)] bg-[var(--glass-bg)]'
              }`}
            >
              {/* TOP ACCENT LINE */}
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${isBestValue ? 'from-amber-400 via-emerald-400 to-teal-400' : 'from-emerald-400 to-teal-500'}`} />
              
              {/* SAVINGS BADGE */}
              <div className={`absolute right-4 top-4 flex items-center gap-1.5 rounded-full border px-3 py-1.5 shadow-sm ${
                isBestValue 
                  ? 'border-amber-400/40 bg-amber-400/20 text-amber-300 shadow-amber-500/20' 
                  : 'border-emerald-400/30 bg-emerald-500/10 text-emerald-400 shadow-emerald-500/10'
              }`}>
                {isBestValue ? <RiSparkling2Line size={14} className="text-amber-300 animate-pulse" /> : <RiDiscountPercentLine size={14} />}
                <span className="text-[10px] font-black uppercase tracking-wider">{isBestValue ? `Best Value` : 'Save'}</span>
                <span className="font-mono text-xs font-black text-white">${savings}</span>
              </div>

              {/* CARD HEADER */}
              <div className="pb-5">
                {/* Crown Icon + Text Xanh Lá */}
                <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-emerald-400">
                  <RiVipCrown2Line /> Premium
                </p>
                <h2 className="mt-1 text-2xl font-bold">{group.duration} days</h2>
                
                {/* DYNAMIC PRICE - Giá Xanh Lá */}
                <motion.div key={selectedPlan.price} initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="mt-2 flex items-baseline gap-2">
                  <span className="font-mono text-xs font-semibold text-[var(--text-secondary)] line-through decoration-rose-400/80">
                    ${selectedPlan.originalPrice.toFixed(2)}
                  </span>
                  <span className="font-mono text-2xl font-black text-emerald-400">
                    ${selectedPlan.price.toFixed(2)}
                  </span>
                </motion.div>
              </div>

              {/* OPTIONS SELECTOR - XANH LÁ CÂY TRONG BOX */}
              <div className="flex flex-col gap-2.5">
                {group.options.map((option, optionIndex) => {
                  const isSelected = selectedIndex === optionIndex;
                  return (
                    <button
                      key={option.tier}
                      type="button"
                      onClick={() => setSelectedOptions((current) => ({ ...current, [group.duration]: optionIndex }))}
                      className={`group w-full rounded-2xl border p-3 text-left transition-all duration-200 ${
                        isSelected 
                          ? 'border-emerald-500/80 bg-emerald-500/15 shadow-md shadow-emerald-500/10 ring-1 ring-emerald-500/40' 
                          : 'border-[var(--glass-border)] bg-[var(--bg-primary)] hover:border-emerald-500/40 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <div className="mb-1.5 flex items-center justify-between">
                        <span className={`text-sm font-bold ${isSelected ? 'text-emerald-400' : ''}`}>{option.tier}</span>
                        <RiArrowRightLine className={`transition-transform duration-200 ${isSelected ? 'text-emerald-400 translate-x-1' : 'text-[var(--text-secondary)] group-hover:translate-x-1'}`} />
                      </div>
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">Bandwidth</p>
                          <p className="font-mono text-xs font-bold">{option.bandwidth}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)]">Storage</p>
                          <p className="font-mono text-xs font-bold">{option.storage}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* BENEFITS LIST */}
              <div className="flex-1 py-5">
                <ul className="space-y-2.5">
                  {premiumBenefits.map((benefit) => <Benefit key={benefit}>{benefit}</Benefit>)}
                </ul>
              </div>

              {/* ACTION BUTTON */}
              <button
                type="button"
                onClick={() => handleBuy(group.duration, selectedPlan)}
                className={`group mt-auto flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:brightness-110 active:scale-[0.98] ${
                  isBestValue
                    ? 'bg-gradient-to-r from-emerald-500 via-[var(--aurora-1)] to-[var(--aurora-2)] shadow-lg shadow-emerald-500/25'
                    : 'bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] shadow-md shadow-[var(--aurora-1)]/20'
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