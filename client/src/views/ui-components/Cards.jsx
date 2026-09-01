import React from 'react';
import { motion } from 'framer-motion';
import { RiShoppingBag3Line, RiHeart3Line, RiShareLine, RiMore2Fill, RiStarFill, RiArrowRightLine, RiDoubleQuotesL } from 'react-icons/ri';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription, CardImage } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

const Cards = () => {
  return (
    <div className="py-6 md:py-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Cards</h1>
        <p className="text-[var(--text-secondary)]">A stunning collection of layout-driven informational containers.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Simple Basic Card */}
        <Card variant="interactive">
          <CardHeader className="flex-row items-center justify-between mb-4 space-y-0">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <RiShoppingBag3Line className="text-white text-xl" />
            </div>
            <Button variant="ghost" size="icon-xs" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
              <RiMore2Fill className="text-xl" />
            </Button>
          </CardHeader>
          <CardTitle className="text-xl mb-2">E-Commerce Stats</CardTitle>
          <CardDescription className="mb-4">Daily transactions and total revenue accumulated this month.</CardDescription>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-2 py-1 bg-emerald-500/10 text-emerald-500 rounded-md">+14.5%</span>
            <span className="text-xs text-[var(--text-secondary)]">Since last week</span>
          </div>
        </Card>

        {/* Profile/Social Card */}
        <Card padding="none" className="overflow-hidden">
          <div className="h-24 w-full bg-gradient-to-r from-blue-600 to-indigo-600 relative" />
          <div className="px-6 pb-6 pt-0 relative flex flex-col items-center">
            <img src="/images/user/user-1.jpg" className="w-20 h-20 rounded-full border-4 border-[var(--bg-primary)] -mt-10 mb-3 shadow-lg" alt="Profile" />
            <CardTitle className="text-lg flex items-center gap-1">Jane Martinez <span className="text-emerald-500 text-xs">●</span></CardTitle>
            <CardDescription className="text-xs uppercase tracking-widest font-bold mb-4">Lead Designer</CardDescription>
            <div className="flex w-full divide-x divide-[var(--glass-border)] border-y border-[var(--glass-border)] mb-4 bg-black/10">
              <div className="flex-1 py-3 text-center">
                <div className="text-lg font-bold text-[var(--text-primary)]">142</div>
                <div className="text-[10px] text-[var(--text-secondary)] uppercase">Posts</div>
              </div>
              <div className="flex-1 py-3 text-center">
                <div className="text-lg font-bold text-[var(--text-primary)]">12k</div>
                <div className="text-[10px] text-[var(--text-secondary)] uppercase">Followers</div>
              </div>
            </div>
            <Button variant="primary" className="w-full">
              Follow Profile
            </Button>
          </div>
        </Card>

        {/* Testimonial Card */}
        <Card className="p-8 flex flex-col justify-between overflow-hidden">
          <div className="absolute top-4 right-4 text-[var(--glass-border)] opacity-30">
            <RiDoubleQuotesL className="text-8xl" />
          </div>
          <CardContent>
            <div className="flex text-amber-500 mb-4 gap-1">
              {[1, 2, 3, 4, 5].map((star) => <RiStarFill key={star} />)}
            </div>
            <p className="text-[var(--text-primary)] text-lg font-medium leading-relaxed mb-6 italic">
              "Switching to Trackify completely revolutionized our team's workflow. The intuitive UI and lightning-fast speed saved us hours every single week."
            </p>
          </CardContent>
          <CardFooter className="border-t border-[var(--glass-border)] pt-4 mt-auto">
            <img src="/images/user/user-2.jpg" className="w-10 h-10 rounded-full mr-3" alt="User" />
            <div>
              <h4 className="text-sm font-bold text-[var(--text-primary)]">Sarah Jenkins</h4>
              <p className="text-xs text-[var(--text-secondary)]">CTO @ TechFlow</p>
            </div>
          </CardFooter>
        </Card>

        {/* Media Top Card */}
        <Card padding="none" className="overflow-hidden flex flex-col lg:col-span-1 group">
          <CardImage
            src="/images/sea.jfif"
            alt="Cyberpunk"
            containerClassName="h-48"
          />
          <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 z-10">
            <span className="text-xs text-white font-bold">Design</span>
          </div>
          <CardContent className="p-6 flex-1 flex flex-col">
            <CardTitle className="text-lg mb-2">Using Neon Abstract Shapes in Web</CardTitle>
            <CardDescription className="flex-1 mb-4">Learn how to map 3D generated meshes onto standard CSS grids to create a cyberpunk feeling.</CardDescription>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs text-[var(--text-secondary)]">May 14, 2026</span>
              <Button variant="ghost" size="sm" className="text-[var(--aurora-1)] font-bold gap-1 hover:translate-x-1 transition-transform p-0 h-auto">
                Read More <RiArrowRightLine />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Horizontal Event or Blog Card */}
        <Card padding="none" className="flex flex-col sm:flex-row overflow-hidden lg:col-span-2 group cursor-pointer hover:border-[var(--aurora-1)]/50 transition-colors">
          <div className="w-full sm:w-2/5 h-48 sm:h-auto overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 sm:hidden" />
            <CardImage
              src="/images/wallpaper.jfif"
              alt="Conference"
              className="h-full"
            />
          </div>
          <CardContent className="p-6 sm:p-8 flex-1 flex flex-col justify-center relative z-20">
            <div className="flex items-center gap-3 mb-3">
              <span className="px-3 py-1 bg-rose-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-md shadow-lg shadow-rose-500/20">Live Event</span>
              <span className="text-xs font-bold text-[var(--aurora-1)]">Oct 24 - Oct 26</span>
            </div>
            <CardTitle className="text-2xl mb-3 group-hover:text-[var(--aurora-1)] transition-colors">Global Developer Summit 2026</CardTitle>
            <CardDescription className="mb-6 leading-relaxed">Join thousands of developers worldwide for three days of intensive workshops, keynote presentations from industry leaders, and exclusive networking events regarding the future of AI.</CardDescription>
            <div className="flex items-center gap-4 mt-auto">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(num => (
                  <img key={num} src={`/images/user/user-${num}.jpg`} className="w-8 h-8 rounded-full border-2 border-[var(--bg-primary)] shadow-sm" alt="Attendee" />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-[var(--bg-primary)] bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-white z-10">+2k</div>
              </div>
              <span className="text-xs text-[var(--text-secondary)] font-medium ml-2">Attending</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Cards;

