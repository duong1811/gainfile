import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiInformationLine, RiCheckboxCircleLine, RiErrorWarningLine, RiCloseCircleLine, RiCloseLine, RiWifiOffLine, RiBatteryLowLine } from 'react-icons/ri';
import { Alert, AlertIcon, AlertTitle, AlertDescription } from '../../components/ui/Alert';
import { Button } from '../../components/ui/Button';

const Alerts = () => {
  const [visibleAlerts, setVisibleAlerts] = useState([1, 2, 3, 4]);

  const dismissAlert = (id) => {
    setVisibleAlerts(visibleAlerts.filter(alertId => alertId !== id));
  };

  const alertTypes = [
    { id: 1, color: 'info', icon: RiInformationLine, title: 'Information', message: 'This is an informational alert to share something important.' },
    { id: 2, color: 'success', icon: RiCheckboxCircleLine, title: 'Success', message: 'Your changes have been successfully saved to the database.' },
    { id: 3, color: 'warning', icon: RiErrorWarningLine, title: 'Warning', message: 'Please update your billing information to prevent service interruption.' },
    { id: 4, color: 'error', icon: RiCloseCircleLine, title: 'Error', message: 'Failed to connect to the server. Please check your internet connection.' }
  ];

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Alerts & Notifications</h1>
        <p className="text-[var(--text-secondary)]">Feedback messages for user actions with beautiful glassmorphism.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Soft Alerts */}
        <motion.div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)]">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Soft Dismissible Alerts</h2>
          <div className="space-y-4">
            <AnimatePresence>
              {alertTypes.filter(a => visibleAlerts.includes(a.id)).map((alert) => (
                <Alert
                  key={alert.id}
                  color={alert.color}
                  onDismiss={() => dismissAlert(alert.id)}
                >
                  <AlertIcon as={alert.icon}>
                    <alert.icon className="text-xl" />
                  </AlertIcon>
                  <div className="flex-1">
                    <AlertTitle>{alert.title}</AlertTitle>
                    <AlertDescription>{alert.message}</AlertDescription>
                  </div>
                  <button onClick={() => dismissAlert(alert.id)} className="p-1 hover:bg-black/10 rounded-lg transition-colors">
                    <RiCloseLine />
                  </button>
                </Alert>
              ))}
            </AnimatePresence>
            {visibleAlerts.length === 0 && (
              <button onClick={() => setVisibleAlerts([1, 2, 3, 4])} className="text-sm px-4 py-2 bg-[var(--aurora-1)] text-white rounded-lg hover:opacity-90 transition-opacity">
                Restore Alerts
              </button>
            )}
          </div>
        </motion.div>

        {/* Solid Alerts */}
        <motion.div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)]">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Solid Colored Alerts</h2>
          <div className="space-y-4">
            <Alert variant="solid" color="info" className="items-center">
              <AlertIcon><RiInformationLine /></AlertIcon>
              <AlertDescription className="text-sm font-medium">New software update is available to download.</AlertDescription>
            </Alert>
            <Alert variant="solid" color="success" className="items-center">
              <AlertIcon><RiCheckboxCircleLine /></AlertIcon>
              <AlertDescription className="text-sm font-medium">Profile successfully synced to the cloud.</AlertDescription>
            </Alert>
            <Alert variant="solid" color="warning" className="items-center">
              <AlertIcon><RiErrorWarningLine /></AlertIcon>
              <AlertDescription className="text-sm font-medium">Approaching your monthly storage limit (90%).</AlertDescription>
            </Alert>
            <Alert variant="solid" color="error" className="items-center">
              <AlertIcon><RiCloseCircleLine /></AlertIcon>
              <AlertDescription className="text-sm font-medium">Payment authentication failed. Try again.</AlertDescription>
            </Alert>
          </div>
        </motion.div>

        {/* Actionable Alerts */}
        <motion.div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] lg:col-span-2">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Actionable System Warnings</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Alert color="warning" className="p-5 rounded-2xl border-amber-500/30 flex-col">
              <div className="flex items-center gap-3">
                <AlertIcon><RiWifiOffLine size={24} /></AlertIcon>
                <AlertTitle className="font-bold">Connection Lost</AlertTitle>
              </div>
              <AlertDescription className="text-sm opacity-90 mb-2">We cannot reach the server. Some features may be unavailable until your connection is restored.</AlertDescription>
              <div className="flex gap-3">
                <Button variant="white" size="sm" className="bg-amber-500 !text-white hover:bg-amber-600 font-bold border-none">Retry Connection</Button>
                <Button variant="outline" size="sm" className="border-amber-500/50 hover:bg-amber-500/10 font-bold">Go Offline</Button>
              </div>
            </Alert>

            <Alert color="error" className="p-5 rounded-2xl border-rose-500/30 flex-col">
              <div className="flex items-center gap-3">
                <AlertIcon><RiBatteryLowLine size={24} /></AlertIcon>
                <AlertTitle className="font-bold">Battery Critically Low</AlertTitle>
              </div>
              <AlertDescription className="text-sm opacity-90 mb-2">Your device battery is under 5%. Save your work immediately to prevent data loss.</AlertDescription>
              <div className="flex gap-3">
                <Button variant="white" size="sm" className="bg-rose-500 !text-white hover:bg-rose-600 font-bold border-none">Save & Exit</Button>
                <Button variant="outline" size="sm" className="border-rose-500/50 hover:bg-rose-500/10 font-bold">Ignore</Button>
              </div>
            </Alert>
          </div>
        </motion.div>

        {/* Aurora Alerts */}
        <motion.div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] lg:col-span-2">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Aurora Gradient Banners</h2>
          <Alert variant="aurora" className="p-5 rounded-2xl flex-col sm:flex-row items-center gap-4">
            <div className="p-2 bg-white/20 rounded-xl backdrop-blur-md hidden sm:block">
              <AlertIcon><RiInformationLine size={24} /></AlertIcon>
            </div>
            <AlertDescription className="flex-1 text-center sm:text-left text-sm sm:text-base">
              <span className="font-bold">Trackify Premium Upgrade: </span>
              Unlock all features with our latest premium bundle. Limited time offer!
            </AlertDescription>
            <Button variant="white" size="sm" className="w-full sm:w-auto !text-[var(--aurora-1)] font-bold shadow-lg shadow-white/10 shrink-0">
              Upgrade Now
            </Button>
            <Button variant="ghost" size="icon-xs" className="hidden sm:flex hover:bg-white/20 shrink-0">
              <RiCloseLine size={20} />
            </Button>
          </Alert>
        </motion.div>
      </div>
    </div>
  );
};

export default Alerts;
