import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  RiArrowLeftLine,
  RiBankCardLine,
  RiBitCoinLine,
  RiCheckLine,
  RiCheckboxCircleLine,
  RiCoinLine,
  RiLoader4Line,
  RiLock2Line,
  RiPaypalLine,
  RiSecurePaymentLine,
} from 'react-icons/ri';
import {
  mockCheckoutData,
  mockDefaultOrder,
  mockPaymentMethods,
} from '../data/mockData';

const paymentMethodIcons = {
  usdt: RiCoinLine,
  bitcoin: RiBitCoinLine,
  ethereum: RiCoinLine,
  card: RiBankCardLine,
  paypal: RiPaypalLine,
};

const getInitialOrder = () => {
  if (typeof window === 'undefined') return mockDefaultOrder;

  const params = new URLSearchParams(window.location.search);
  return {
    duration: params.get('duration') || mockDefaultOrder.duration,
    tier: params.get('tier') === 'max' ? 'Max' : 'Pro',
    bandwidth: params.get('bandwidth') || mockDefaultOrder.bandwidth,
    storage: params.get('storage') || mockDefaultOrder.storage,
    price: params.get('price') || mockDefaultOrder.price,
  };
};

const Payment = () => {
  const [order] = useState(getInitialOrder);
  const [selectedMethod, setSelectedMethod] = useState('usdt');
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentResult, setPaymentResult] = useState(null);

  const selectedPayment = mockPaymentMethods.find((method) => method.id === selectedMethod);
  const SelectedPaymentIcon = paymentMethodIcons[selectedPayment.id];

  const completeDemoPayment = () => {
    setIsProcessing(true);
    window.setTimeout(() => {
      setPaymentResult({
        orderId: `GF-${Date.now().toString().slice(-8)}`,
        method: selectedPayment.name,
        paidAt: new Intl.DateTimeFormat('en-US', {
          dateStyle: 'medium',
          timeStyle: 'short',
        }).format(new Date()),
      });
      setIsProcessing(false);
    }, 1200);
  };

  return (
    <div className="min-h-[calc(100vh-100px)] p-5 text-[var(--text-primary)] md:p-10">
      <div className="mx-auto max-w-5xl">
        <Link href="/upgrade-plan" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)]"><RiArrowLeftLine /> Back to plans</Link>

        <div className="mb-8">
          <p className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--aurora-1)]"><RiSecurePaymentLine /> Secure checkout</p>
          <h1 className="text-3xl font-bold md:text-4xl">Complete your payment</h1>
          <p className="mt-2 text-[var(--text-secondary)]">Choose your preferred payment method below.</p>
        </div>

        {paymentResult ? (
          <motion.section
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto max-w-xl rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-6 text-center sm:p-9"
          >
            <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 text-5xl text-emerald-500">
              <RiCheckboxCircleLine />
            </span>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-emerald-500">Payment successful</p>
            <h2 className="mt-2 text-3xl font-bold">Premium activated</h2>
            <p className="mt-3 text-sm leading-6 text-[var(--text-secondary)]">
              Your {order.duration}-day {order.tier} plan is now active. This was a demo payment and no real charge was made.
            </p>
            <div className="mt-7 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/60 p-5 text-left text-sm">
              <div className="flex justify-between gap-4"><span className="text-[var(--text-secondary)]">Order ID</span><strong className="font-mono">{paymentResult.orderId}</strong></div>
              <div className="mt-3 flex justify-between gap-4"><span className="text-[var(--text-secondary)]">Payment method</span><strong>{paymentResult.method}</strong></div>
              <div className="mt-3 flex justify-between gap-4"><span className="text-[var(--text-secondary)]">Amount paid</span><strong>${Number(order.price).toFixed(2)}</strong></div>
              <div className="mt-3 flex justify-between gap-4"><span className="text-[var(--text-secondary)]">Date</span><strong>{paymentResult.paidAt}</strong></div>
            </div>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              <Link href="/dashboard" className="rounded-xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] px-5 py-3 text-sm font-bold text-white">Go to Dashboard</Link>
              <Link href="/upgrade-plan" className="rounded-xl border border-[var(--glass-border)] px-5 py-3 text-sm font-bold hover:bg-[var(--glass-border)]">Back to Plans</Link>
            </div>
          </motion.section>
        ) : (
        <div className="grid gap-6 lg:grid-cols-[1.45fr_0.8fr]">
          <section className="glass-card rounded-3xl border border-[var(--glass-border)] p-5 md:p-7">
            <div className="mb-5">
              <h2 className="text-lg font-bold">Choose a payment method</h2>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">Select one option to continue.</p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {mockPaymentMethods.map((method) => {
                const Icon = paymentMethodIcons[method.id];
                const isSelected = selectedMethod === method.id;
                return (
                  <button key={method.id} type="button" onClick={() => setSelectedMethod(method.id)} className={`relative flex min-h-32 flex-col items-center justify-center rounded-2xl border p-3 text-center transition-all ${isSelected ? 'border-[var(--aurora-1)] bg-[var(--aurora-1)]/10 shadow-lg shadow-[var(--aurora-1)]/10' : 'border-[var(--glass-border)] hover:-translate-y-0.5 hover:border-[var(--aurora-1)]/40'}`}>
                    {isSelected && <span className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--aurora-1)] text-xs text-white"><RiCheckLine /></span>}
                    <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${method.color}`}><Icon /></span>
                    <span className="mt-3 block text-sm font-bold">{method.name}</span>
                    <span className="mt-0.5 block text-[11px] text-[var(--text-secondary)]">{method.detail}</span>
                  </button>
                );
              })}
            </div>

            <motion.div key={selectedMethod} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-6 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] p-5">
              <div className="flex items-start gap-3">
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${selectedPayment.color}`}><SelectedPaymentIcon /></span>
                <div>
                  <h3 className="font-bold">Pay with {selectedPayment.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">{selectedPayment.note}</p>
                </div>
              </div>

              {mockCheckoutData.crypto[selectedMethod] && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/60 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">Network</p>
                    <p className="mt-1 text-sm font-bold">{mockCheckoutData.crypto[selectedMethod].network}</p>
                  </div>
                  <div className="rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/60 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">Demo amount</p>
                    <p className="mt-1 font-mono text-sm font-bold">{mockCheckoutData.crypto[selectedMethod].amount}</p>
                  </div>
                  <div className="rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/60 p-3 sm:col-span-2">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[var(--text-secondary)]">Demo wallet address</p>
                    <p className="mt-1 truncate font-mono text-xs">{mockCheckoutData.crypto[selectedMethod].address}</p>
                  </div>
                </div>
              )}

              {selectedMethod === 'card' && (
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <label className="sm:col-span-2">
                    <span className="mb-1.5 block text-xs font-bold text-[var(--text-secondary)]">Test card number</span>
                    <input readOnly value={mockCheckoutData.card.number} className="w-full rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/60 px-4 py-3 font-mono text-sm" />
                  </label>
                  <label>
                    <span className="mb-1.5 block text-xs font-bold text-[var(--text-secondary)]">Expiry</span>
                    <input readOnly value={mockCheckoutData.card.expiry} className="w-full rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/60 px-4 py-3 font-mono text-sm" />
                  </label>
                  <label>
                    <span className="mb-1.5 block text-xs font-bold text-[var(--text-secondary)]">CVC</span>
                    <input readOnly value={mockCheckoutData.card.cvc} className="w-full rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/60 px-4 py-3 font-mono text-sm" />
                  </label>
                </div>
              )}

              {selectedMethod === 'paypal' && (
                <div className="mt-5 rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/60 p-4">
                  <p className="text-xs font-bold text-[var(--text-secondary)]">Demo PayPal account</p>
                  <p className="mt-1 font-mono text-sm font-bold">{mockCheckoutData.paypal.email}</p>
                </div>
              )}

              <button
                type="button"
                onClick={completeDemoPayment}
                disabled={isProcessing}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] py-3.5 text-sm font-bold text-white hover:opacity-90 disabled:cursor-wait disabled:opacity-70"
              >
                {isProcessing ? <RiLoader4Line className="animate-spin" /> : <RiLock2Line />}
                {isProcessing ? 'Processing demo payment...' : `Pay $${Number(order.price).toFixed(2)} with ${selectedPayment.name}`}
              </button>
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
        )}
      </div>
    </div>
  );
};

export default Payment;
