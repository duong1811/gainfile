import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { RiDashboardLine, RiSettings4Line, RiUserStarLine, RiLockPasswordLine } from 'react-icons/ri';
import { Card } from '../../components/ui/Card';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from '../../components/ui/Tabs';

const TabsDemo = () => {
  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Tabs Navigation</h1>
        <p className="text-[var(--text-secondary)]">Navigate between different views with beautiful fluid transitions.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Basic Underline Tabs */}
        <Card padding="lg">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Line Indicators</h2>
          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
              <TabsTrigger value="api">API Config</TabsTrigger>
            </TabsList>
            <div className="py-6 min-h-[160px] relative">
              <AnimatePresence mode="wait">
                <TabsContent value="overview">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Content for Overview</h3>
                  This layout pattern uses framer motions layoutId to effortlessly slide the bottom border to the active element. Its fluid, continuous, and provides immense spatial awareness.
                </TabsContent>
                <TabsContent value="analytics">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Content for Analytics</h3>
                  Deep dive into your metrics with real-time data streaming and advanced visualization tools.
                </TabsContent>
                <TabsContent value="settings">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Content for Settings</h3>
                  Configure your workspace preferences and global environment variables here.
                </TabsContent>
                <TabsContent value="api">
                  <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">Content for API</h3>
                  Manage your programmatic access tokens and webhook integrations.
                </TabsContent>
              </AnimatePresence>
            </div>
          </Tabs>
        </Card>

        {/* Segmented Pill Tabs */}
        <Card padding="lg">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Segmented Controls (iOS Style)</h2>
          <Tabs defaultValue="design" variant="pill">
            <TabsList className="w-full">
              <TabsTrigger value="design" className="flex-1">Design</TabsTrigger>
              <TabsTrigger value="dev" className="flex-1">Development</TabsTrigger>
              <TabsTrigger value="marketing" className="flex-1">Marketing</TabsTrigger>
            </TabsList>
            <div className="py-6 min-h-[160px]">
              <AnimatePresence mode="wait">
                <TabsContent value="design">
                  <div className="p-6 bg-black/10 rounded-xl border border-[var(--glass-border)] text-[var(--text-secondary)] font-medium h-full flex flex-col justify-center text-sm shadow-inner">
                    Segmented controllers are great for filtering lists instantly or switching between tightly coupled views logically. Currently viewing: <strong className="text-white ml-1">Design</strong>.
                  </div>
                </TabsContent>
                <TabsContent value="dev">
                  <div className="p-6 bg-black/10 rounded-xl border border-[var(--glass-border)] text-[var(--text-secondary)] font-medium h-full flex flex-col justify-center text-sm shadow-inner">
                    Switching to development mode. All technical specifications and repository links are now active. Currently viewing: <strong className="text-white ml-1">Development</strong>.
                  </div>
                </TabsContent>
                <TabsContent value="marketing">
                  <div className="p-6 bg-black/10 rounded-xl border border-[var(--glass-border)] text-[var(--text-secondary)] font-medium h-full flex flex-col justify-center text-sm shadow-inner">
                    Marketing dashboard active. Campaign performance and user acquisition metrics are visible. Currently viewing: <strong className="text-white ml-1">Marketing</strong>.
                  </div>
                </TabsContent>
              </AnimatePresence>
            </div>
          </Tabs>
        </Card>

        {/* Vertical Sidebar Tabs */}
        <Card padding="lg" className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Vertical / Orientation Tabs</h2>
          <Tabs defaultValue="profile" orientation="vertical">
            <TabsList>
              <TabsTrigger value="profile" icon={RiUserStarLine}>Profile</TabsTrigger>
              <TabsTrigger value="dashboard" icon={RiDashboardLine}>Dashboard layout</TabsTrigger>
              <TabsTrigger value="security" icon={RiLockPasswordLine}>Security</TabsTrigger>
              <TabsTrigger value="advanced" icon={RiSettings4Line}>Advanced Config</TabsTrigger>
            </TabsList>
            <div className="p-4 flex-1">
              <AnimatePresence mode="wait">
                <TabsContent value="profile">
                  <div className="bg-black/10 h-full rounded-2xl border border-[var(--glass-border)] p-8 flex flex-col">
                    <div className="w-16 h-16 bg-[var(--text-primary)] text-black rounded-2xl flex items-center justify-center mb-6 shadow-xl text-3xl">
                      <RiUserStarLine />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Profile Layout</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-md flex-1">
                      Vertical tabs are exceptionally useful for Settings pages, configuration panels, or dense dashboard structures where top-level space is constrained. 
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="dashboard">
                  <div className="bg-black/10 h-full rounded-2xl border border-[var(--glass-border)] p-8 flex flex-col">
                    <div className="w-16 h-16 bg-[var(--text-primary)] text-black rounded-2xl flex items-center justify-center mb-6 shadow-xl text-3xl">
                      <RiDashboardLine />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Dashboard Configuration</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-md flex-1">
                      Customize your grid layout, widget placement, and data refresh intervals for the main terminal.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="security">
                  <div className="bg-black/10 h-full rounded-2xl border border-[var(--glass-border)] p-8 flex flex-col">
                    <div className="w-16 h-16 bg-[var(--text-primary)] text-black rounded-2xl flex items-center justify-center mb-6 shadow-xl text-3xl">
                      <RiLockPasswordLine />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Security Settings</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-md flex-1">
                      Manage two-factor authentication, active sessions, and access logs for your account.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="advanced">
                  <div className="bg-black/10 h-full rounded-2xl border border-[var(--glass-border)] p-8 flex flex-col">
                    <div className="w-16 h-16 bg-[var(--text-primary)] text-black rounded-2xl flex items-center justify-center mb-6 shadow-xl text-3xl">
                      <RiSettings4Line />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">Advanced Systems</h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-md flex-1">
                      Access low-level configuration, experimental features, and developer environment overrides.
                    </p>
                  </div>
                </TabsContent>
              </AnimatePresence>
            </div>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default TabsDemo;
