import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  RiArrowLeftLine,
  RiBankCardLine,
  RiBitCoinLine,
  RiCheckLine,
  RiCoinLine,
  RiLock2Line,
  RiPaypalLine,
  RiSecurePaymentLine,
} from 'react-icons/ri';

const paymentMethods = [
  { id: 'usdt', name: 'Tether (USDT)', detail: 'USDT network payment', icon: RiCoinLine, color: 'text-emerald-500 bg-emerald-500/10' },
  { id: 'bitcoin', name: 'Bitcoin', detail: 'Pay with BTC', icon: RiBitCoinLine, color: 'text-amber-500 bg-amber-500/10' },
  { id: 'ethereum', name: 'Ethereum', detail: 'Pay with ETH', icon: RiCoinLine, color: 'text-indigo-500 bg-indigo-500/10' },
  { id: 'card', name: 'Visa / Mastercard', detail: 'Credit or debit card', icon: RiBankCardLine, color: 'text-blue-500 bg-blue-500/10' },
  { id: 'paypal', name: 'PayPal', detail: 'PayPal secure checkout', icon: RiPaypalLine, color: 'text-sky-500 bg-sky-500/10' },
];

const defaultOrder = { duration: '30', tier: 'Pro', bandwidth: '1TB', storage: '1TB', price: '20' };

const getInitialOrder = () => {
  if (typeof window === 'undefined') return defaultOrder;

  const params = new URLSearchParams(window.location.search);
  return {
    duration: params.get('duration') || defaultOrder.duration,
    tier: params.get('tier') === 'max' ? 'Max' : 'Pro',
    bandwidth: params.get('bandwidth') || defaultOrder.bandwidth,
    storage: params.get('storage') || defaultOrder.storage,
    price: params.get('price') || defaultOrder.price,
  };
};

const Payment = () => {
  const [order] = useState(getInitialOrder);
  const [selectedMethod, setSelectedMethod] = useState('usdt');

  const selectedPayment = paymentMethods.find((method) => method.id === selectedMethod);

  return (
    <div className="min-h-[calc(100vh-100px)] p-5 text-[var(--text-primary)] md:p-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/upgrade-plan" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><RiArrowLeftLine /> Back to plans</Link>

        <div className="mb-8">
          <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--aurora-1)]"><RiSecurePaymentLine /> Secure checkout</p>
          <h1 className="text-3xl font-bold md:text-4xl">Complete your payment</h1>
          <p className="mt-2 text-[var(--text-secondary)]">Choose your preferred payment method below.</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.45fr_0.8fr]">
          <section className="glass-card rounded-3xl border border-[var(--glass-border)] p-5 md:p-7">
            <h2 className="mb-5 text-lg font-bold">Payment method</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {paymentMethods.map((method) => {
                const Icon = method.icon;
                const isSelected = selectedMethod === method.id;
                return (
                  <button key={method.id} type="button" onClick={() => setSelectedMethod(method.id)} className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${isSelected ? 'border-[var(--aurora-1)] bg-[var(--aurora-1)]/10' : 'border-[var(--glass-border)] hover:border-[var(--aurora-1)]/40'}`}>
                    <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ${method.color}`}><Icon /></span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-bold">{method.name}</span>
                      <span className="block truncate text-xs text-[var(--text-secondary)]">{method.detail}</span>
                    </span>
                    {isSelected && <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--aurora-1)] text-white"><RiCheckLine /></span>}
                  </button>
                );
              })}
            </div>

            <motion.div key={selectedMethod} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5">
              <h3 className="font-bold">Pay with {selectedPayment.name}</h3>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">You will be securely redirected to the {selectedPayment.name} payment gateway to complete this order.</p>
              <button type="button" className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] py-3.5 text-sm font-bold text-white hover:opacity-90"><RiLock2Line /> Continue to payment</button>
            </motion.div>
          </section>

          <aside className="h-fit rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-6">
            <p className="text-xs font-bold uppercase tracking-widest text-[var(--text-secondary)]">Order summary</p>
            <h2 className="mt-2 text-2xl font-bold">{order.duration} days · {order.tier}</h2>
            <div className="my-6 space-y-3 border-y border-[var(--glass-border)] py-5 text-sm">
              <div className="flex justify-between"><span className="text-[var(--text-secondary)]">Bandwidth</span><strong>{order.bandwidth}</strong></div>
              <div className="flex justify-between"><span className="text-[var(--text-secondary)]">Storage</span><strong>{order.storage}</strong></div>
              <div className="flex justify-between"><span className="text-[var(--text-secondary)]">Billing</span><strong>One-time</strong></div>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-sm font-semibold text-[var(--text-secondary)]">Total</span>
              <span className="text-3xl font-black text-[var(--aurora-1)]">${Number(order.price).toFixed(2)}</span>
            </div>
            <p className="mt-5 flex items-center gap-2 text-xs text-[var(--text-secondary)]"><RiLock2Line /> SSL encrypted and safely processed.</p>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Payment;
