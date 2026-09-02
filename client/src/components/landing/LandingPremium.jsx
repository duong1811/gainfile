import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  RiArrowRightLine,
  RiCheckLine,
  RiCloseLine,
  RiVipCrown2Line,
} from 'react-icons/ri';
import { premiumBenefits } from '../premium/premiumPlanData';

const freeFeatures = [
  { label: '200GB storage', included: true },
  { label: 'Limited download speed', included: true },
  { label: 'Advertising included', included: false },
  { label: 'Files deleted 30 days after last download', included: false },
  { label: 'Waiting time before downloads', included: false },
  { label: 'Standard support', included: true },
];

const FeatureList = ({ features, premium = false }) => (
  <ul className="mt-5 space-y-3">
    {features.map((feature) => {
      const label = typeof feature === 'string' ? feature : feature.label;
      const included = typeof feature === 'string' || feature.included;

      return (
        <li key={label} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
          <span
            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
              included
                ? premium
                  ? 'bg-emerald-500/15 text-emerald-400'
                  : 'bg-[var(--aurora-1)]/15 text-[var(--aurora-1)]'
                : 'bg-rose-500/15 text-rose-400'
            }`}
          >
            {included ? <RiCheckLine size={14} /> : <RiCloseLine size={14} />}
          </span>
          <span>{label}</span>
        </li>
      );
    })}
  </ul>
);

const LandingPremium = () => (
  <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="order-2 flex flex-col rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6 md:order-1 md:p-7"
    >
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-secondary)]">Current plan</p>
      <h3 className="mt-2 text-2xl font-black text-[var(--text-primary)]">Free Account</h3>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        Everything you need to upload and share files for free.
      </p>

      <FeatureList features={freeFeatures} />
    </motion.section>

    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.08 }}
      className="relative order-1 flex flex-col overflow-hidden rounded-3xl border-2 border-emerald-400/50 bg-[var(--glass-bg)] p-6 shadow-xl shadow-emerald-500/10 md:order-2 md:p-7"
    >
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-emerald-400">
        <RiVipCrown2Line size={16} /> Recommended
      </p>
      <h3 className="mt-2 text-2xl font-black text-[var(--text-primary)]">Premium Account</h3>
      <p className="mt-2 text-sm text-[var(--text-secondary)]">
        Faster downloads, more storage, and no interruptions.
      </p>

      <FeatureList features={premiumBenefits} premium />

      <Link
        href="/upgrade-plan"
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[var(--aurora-1)]/20 hover:brightness-110"
      >
        Upgrade Now
        <RiArrowRightLine className="transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.section>
  </div>
);

export default LandingPremium;
