import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiCalendarEventLine, RiArrowLeftSLine, RiArrowRightSLine, RiAddLine } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Modal, ModalBody, ModalFooter } from '../components/ui/Modal';
import { Label } from '../components/ui/Label';
import { Input } from '../components/ui/Input';
import { Select } from '../components/ui/Select';

const CalendarView = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showEventModal, setShowEventModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', color: 'bg-indigo-500' });

  // Dummy events state
  const [events, setEvents] = useState({
    5: [{ title: 'Design Review', color: 'bg-[var(--aurora-1)]' }],
    12: [{ title: 'Client Meeting', color: 'bg-[var(--aurora-3)]' }, { title: 'Lunch', color: 'bg-emerald-500' }],
    25: [{ title: 'Product Launch', color: 'bg-rose-500' }]
  });

  const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleAddEvent = () => {
    if (newEvent.title && newEvent.date) {
      const selectedDay = new Date(newEvent.date).getDate();
      setEvents(prev => ({
        ...prev,
        [selectedDay]: [...(prev[selectedDay] || []), { title: newEvent.title, color: newEvent.color }]
      }));
      setShowEventModal(false);
      setNewEvent({ title: '', date: '', color: 'bg-indigo-500' });
    }
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <RiCalendarEventLine className="text-[var(--aurora-2)]" />
            <span className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-widest text-[var(--aurora-2)]">Temporal Map</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Master <span className="text-[var(--aurora-2)] text-gradient from-[var(--aurora-2)] to-[var(--aurora-3)]">Schedule</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Orchestrate your timeline.</p>
        </div>
        <Button
          onClick={() => setShowEventModal(true)}
          variant="primary"
          size="xl"
          className="font-bold gap-2 !bg-gradient-to-r from-[var(--aurora-2)] to-[var(--aurora-3)] border-none shadow-[var(--aurora-2)]/20"
        >
          <RiAddLine size={20} /> Create Event
        </Button>
      </motion.div>

      <Card
        transition={{ delay: 0.2 }}
        className="p-8 shadow-none hover:shadow-2xl transition-shadow"
      >
        {/* Calendar Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">{monthNames[month]} {year}</h2>
          <div className="flex gap-2">
            <Button onClick={prevMonth} variant="ghost" size="icon" className="bg-[var(--glass-border)] hover:text-[var(--aurora-2)]"><RiArrowLeftSLine size={24} /></Button>
            <Button onClick={() => setCurrentDate(new Date())} variant="ghost" className="bg-[var(--glass-border)] font-bold text-sm hover:text-[var(--aurora-2)] px-4">Today</Button>
            <Button onClick={nextMonth} variant="ghost" size="icon" className="bg-[var(--glass-border)] hover:text-[var(--aurora-2)]"><RiArrowRightSLine size={24} /></Button>
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-2 md:gap-4 mb-4">
          {dayNames.map(day => (
            <div key={day} className="text-center font-bold text-[var(--text-secondary)] uppercase tracking-wider text-xs py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 md:gap-4">
          {Array.from({ length: firstDay }).map((_, i) => (
            <div key={`empty-${i}`} className="aspect-square rounded-2xl bg-[var(--glass-border)]/50 opacity-30"></div>
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const dayNum = i + 1;
            const isToday = dayNum === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
            const dayEvents = events[dayNum] || [];

            return (
              <div
                key={dayNum}
                className={`aspect-square rounded-2xl p-2 flex flex-col relative transition-colors cursor-pointer border ${isToday ? 'border-[var(--aurora-2)] bg-[var(--aurora-2)]/10 text-[var(--aurora-2)] font-bold shadow-inner' : 'border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-[var(--aurora-2)]'}`}
              >
                <span className={`text-sm md:text-lg mb-1 ${isToday ? '' : 'text-[var(--text-secondary)]'}`}>{dayNum}</span>
                <div className="flex-1 overflow-y-auto space-y-1 no-scrollbar hidden md:block mt-1">
                  {dayEvents.map((evt, idx) => (
                    <div key={idx} className={`text-xs px-2 py-1 rounded-md text-white truncate shadow-sm font-medium ${evt.color}`}>
                      {evt.title}
                    </div>
                  ))}
                </div>
                {/* Mobile indicators */}
                <div className="flex md:hidden gap-1 absolute bottom-2 left-2">
                  {dayEvents.map((evt, idx) => (
                    <div key={idx} className={`w-2 h-2 rounded-full shadow-sm ${evt.color}`}></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Modal
        isOpen={showEventModal}
        onClose={() => setShowEventModal(false)}
        title="New Calendar Event"
        variant="aurora"
      >
        <ModalBody>
          <div>
            <Label>Event Title</Label>
            <Input
              placeholder="e.g., Marketing Sync"
              value={newEvent.title}
              onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
              variant="aurora2"
              autoFocus
            />
          </div>

          <div>
            <Label>Date</Label>
            <Input
              type="date"
              value={newEvent.date}
              onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
              variant="aurora2"
            />
          </div>

          <div>
            <Label>Label Color</Label>
            <Select
              value={newEvent.color}
              onChange={(e) => setNewEvent({ ...newEvent, color: e.target.value })}
              variant="aurora2"
            >
              <option value="bg-[var(--aurora-1)]" className="bg-[var(--bg-primary)] text-[var(--aurora-1)]">Blue Ribbon</option>
              <option value="bg-[var(--aurora-2)]" className="bg-[var(--bg-primary)] text-[var(--aurora-2)]">Purple Haze</option>
              <option value="bg-[var(--aurora-3)]" className="bg-[var(--bg-primary)] text-[var(--aurora-3)]">Electric Indigo</option>
              <option value="bg-emerald-500" className="bg-[var(--bg-primary)] text-emerald-500">Emerald Green</option>
              <option value="bg-rose-500" className="bg-[var(--bg-primary)] text-rose-500">Rose Red</option>
            </Select>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button onClick={() => setShowEventModal(false)} variant="ghost" className="flex-1 font-bold">Cancel</Button>
          <Button
            onClick={handleAddEvent}
            variant="primary"
            className="flex-1 font-bold py-4 !bg-gradient-to-r from-[var(--aurora-2)] to-[var(--aurora-3)] border-none shadow-[var(--aurora-2)]/20"
          >
            Add Event
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CalendarView;
