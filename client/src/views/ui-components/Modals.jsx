import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiCheckDoubleLine, RiDeleteBin7Line, RiWallet3Line, RiImageLine, RiArrowRightLine, RiArrowLeftLine, RiErrorWarningLine } from 'react-icons/ri';
import { Alert, AlertIcon, AlertDescription } from '../../components/ui/Alert';
import { Button } from '../../components/ui/Button';
import { Modal, ModalBody, ModalFooter } from '../../components/ui/Modal';

const Modals = () => {
  const [activeModal, setActiveModal] = useState(null);
  const [step, setStep] = useState(1);

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Modals & Overlays</h1>
        <p className="text-[var(--text-secondary)]">Interruptive dialogs ranging from simple alerts to complex multi-step wizards.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <motion.div className="glass-card p-8 rounded-2xl border border-[var(--glass-border)] flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mb-4"><RiCheckDoubleLine className="text-2xl" /></div>
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2">Standard Dialog</h2>
          <p className="text-[var(--text-secondary)] text-sm mb-6">A basic modal with title, descriptive text, and confirmation actions.</p>
          <Button onClick={() => setActiveModal('standard')} variant="glass" className="px-5 font-bold">
            Open Modal
          </Button>
        </motion.div>

        <motion.div className="glass-card p-8 rounded-2xl border border-rose-500/30 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500 opacity-10 blur-3xl rounded-full"></div>
          <div className="w-14 h-14 bg-rose-500/10 text-rose-500 rounded-full flex items-center justify-center mb-4 z-10"><RiDeleteBin7Line className="text-2xl" /></div>
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2 z-10">Destructive Action</h2>
          <p className="text-[var(--text-secondary)] text-sm mb-6 z-10">For permanent actions requiring extreme intent validation.</p>
          <Button onClick={() => setActiveModal('danger')} variant="danger" className="px-5 bg-rose-500/10 border-rose-500/30 !text-rose-500 hover:!bg-rose-500 hover:!text-white z-10 font-bold">
            Delete Project
          </Button>
        </motion.div>

        <motion.div className="glass-card p-8 rounded-2xl border border-[var(--aurora-1)] flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[var(--aurora-1)]/5 to-transparent"></div>
          <div className="w-14 h-14 bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] text-white shadow-lg rounded-2xl flex items-center justify-center mb-4 z-10"><RiWallet3Line className="text-2xl" /></div>
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2 z-10">Form Content</h2>
          <p className="text-[var(--text-secondary)] text-sm mb-6 z-10">Allows embedding input forms smoothly in a focused view layer.</p>
          <Button onClick={() => setActiveModal('form')} variant="primary" className="px-5 font-bold z-10">
            Payment Method
          </Button>
        </motion.div>
        
        <motion.div className="glass-card p-8 rounded-2xl border border-[var(--glass-border)] flex flex-col items-center justify-center text-center">
          <div className="w-14 h-14 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mb-4"><RiImageLine className="text-2xl" /></div>
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2">Media Lightbox</h2>
          <p className="text-[var(--text-secondary)] text-sm mb-6">A frameless modal perfect for viewing enlarged images or videos.</p>
          <Button onClick={() => setActiveModal('lightbox')} variant="glass" className="px-5 font-bold">
            View Image
          </Button>
        </motion.div>

        <motion.div className="glass-card p-8 rounded-2xl border border-[var(--glass-border)] flex flex-col items-center justify-center text-center md:col-span-2">
          <div className="flex gap-2 mb-4">
             <div className="w-8 h-8 rounded-full bg-[var(--aurora-1)] text-white flex items-center justify-center font-bold text-xs shadow-lg shadow-[var(--aurora-1)]/30">1</div>
             <div className="w-8 h-8 rounded-full bg-[var(--glass-border)] text-[var(--text-primary)] flex items-center justify-center font-bold text-xs">2</div>
             <div className="w-8 h-8 rounded-full bg-[var(--glass-border)] text-[var(--text-primary)] flex items-center justify-center font-bold text-xs">3</div>
          </div>
          <h2 className="text-lg font-bold text-[var(--text-primary)] mb-2">Multi-Step Wizard</h2>
          <p className="text-[var(--text-secondary)] text-sm mb-6 max-w-sm">Break down complex user onboarding or configuration into manageable, bite-sized vertical steps within a modal.</p>
          <Button onClick={() => { setStep(1); setActiveModal('stepper'); }} variant="white" size="lg" className="px-8 !text-[var(--bg-primary)] shadow-lg">
            Start Setup Wizard
          </Button>
        </motion.div>

      </div>

      {/* Standard Modal */}
      <Modal 
        isOpen={activeModal === 'standard'} 
        onClose={() => setActiveModal(null)} 
        title="Terms of Service Update"
      >
        <ModalBody>
          <p className="text-[var(--text-secondary)] mb-4 leading-relaxed">We have updated our Terms of Service and Privacy Policy to comply with recent regulatory changes. These changes outline how we handle your data and improve transparency.</p>
          <p className="text-[var(--text-secondary)] leading-relaxed">By continuing to use our services after today, you agree to these updated terms.</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setActiveModal(null)} variant="ghost">Cancel</Button>
          <Button onClick={() => setActiveModal(null)} variant="primary" className="font-bold">Accept Terms</Button>
        </ModalFooter>
      </Modal>

      {/* Danger Modal */}
      <Modal 
        isOpen={activeModal === 'danger'} 
        onClose={() => setActiveModal(null)} 
        title="Delete Project?"
      >
        <ModalBody>
          <Alert color="error" className="mb-4">
            <AlertIcon>
              <RiErrorWarningLine className="text-xl" />
            </AlertIcon>
            <AlertDescription className="font-semibold">
              Warning: This action is completely irreversible.
            </AlertDescription>
          </Alert>
          <p className="text-[var(--text-secondary)]">Are you sure you want to delete the project <strong>"Frontend Redesign 2026"</strong>? All files, tasks, and analytics will be permanently wiped.</p>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setActiveModal(null)} variant="ghost">Cancel</Button>
          <Button onClick={() => setActiveModal(null)} variant="danger" className="font-bold">Delete Project</Button>
        </ModalFooter>
      </Modal>

      {/* Form Modal */}
      <Modal 
        isOpen={activeModal === 'form'} 
        onClose={() => setActiveModal(null)} 
        title="Add Payment Method"
        variant="aurora"
      >
        <ModalBody className="space-y-4">
          <div className="p-4 rounded-xl border-2 border-[var(--aurora-1)] bg-[var(--aurora-1)]/5 flex gap-4">
            <div className="w-12 h-8 bg-[var(--text-primary)] rounded opacity-50"></div>
            <div>
              <div className="font-bold text-[var(--text-primary)]">Credit Card</div>
              <div className="text-xs text-[var(--text-secondary)]">Standard Processing (2-3 days)</div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Card Number</label>
            <input type="text" className="w-full bg-black/20 border border-[var(--glass-border)] rounded-xl px-4 py-2.5 text-[var(--text-primary)] outline-none focus:border-[var(--aurora-1)]" placeholder="4444 4444 4444 4444" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">Expiry</label>
              <input type="text" className="w-full bg-black/20 border border-[var(--glass-border)] rounded-xl px-4 py-2.5 text-[var(--text-primary)] outline-none focus:border-[var(--aurora-1)]" placeholder="MM/YY" />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1">CVC</label>
              <input type="text" className="w-full bg-black/20 border border-[var(--glass-border)] rounded-xl px-4 py-2.5 text-[var(--text-primary)] outline-none focus:border-[var(--aurora-1)]" placeholder="123" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button onClick={() => setActiveModal(null)} variant="ghost">Cancel</Button>
          <Button onClick={() => setActiveModal(null)} variant="primary" className="font-bold">Add Card</Button>
        </ModalFooter>
      </Modal>

      {/* Lightbox Modal */}
      <Modal 
        isOpen={activeModal === 'lightbox'} 
        onClose={() => setActiveModal(null)} 
        hideHeader={true} 
        size="xl"
      >
        <ModalBody className="p-0">
          <img src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1200&auto=format&fit=crop" className="w-full h-auto max-h-[85vh] object-contain bg-black" alt="Code Matrix" />
        </ModalBody>
      </Modal>

      {/* Stepper Modal */}
      <Modal 
        isOpen={activeModal === 'stepper'} 
        onClose={() => setActiveModal(null)} 
        title="Configuration Wizard"
      >
        <ModalBody>
          <div className="min-h-[200px] flex flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div key={step} initial={{opacity: 0, x: 20}} animate={{opacity: 1, x: 0}} exit={{opacity: 0, x: -20}} className="w-full max-w-sm">
                {step === 1 && (
                  <>
                    <div className="w-16 h-16 bg-blue-500/10 text-blue-400 rounded-full mx-auto flex items-center justify-center mb-6 text-2xl font-bold">1</div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Welcome to Trackify</h3>
                    <p className="text-[var(--text-secondary)]">Let's set up your core workspace. First, give your new workspace a memorable name.</p>
                    <input type="text" className="w-full mt-6 bg-black/20 border border-[var(--glass-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] outline-none text-center" placeholder="Acme Corp." />
                  </>
                )}
                {step === 2 && (
                  <>
                    <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full mx-auto flex items-center justify-center mb-6 text-2xl font-bold">2</div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">Invite your Team</h3>
                    <p className="text-[var(--text-secondary)]">Collaboration is key. Add a few email addresses of your team members to invite them.</p>
                    <textarea rows="3" className="w-full mt-6 bg-black/20 border border-[var(--glass-border)] rounded-xl px-4 py-3 text-[var(--text-primary)] outline-none resize-none" placeholder="alex@email.com, jane@email.com..."></textarea>
                  </>
                )}
                {step === 3 && (
                  <>
                    <div className="w-16 h-16 bg-[var(--aurora-1)]/10 text-[var(--aurora-1)] rounded-full mx-auto flex items-center justify-center mb-6 text-2xl font-bold">✓</div>
                    <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2">You're All Set!</h3>
                    <p className="text-[var(--text-secondary)]">Everything is configured perfectly. Click Finish below to enter your new workspace dashboard and start tracking.</p>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </ModalBody>
        <ModalFooter className="justify-between items-center">
          <span className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-wider">Step {step} of 3</span>
          <div className="flex gap-3">
            <Button 
              onClick={() => step > 1 ? setStep(step - 1) : setActiveModal(null)} 
              variant="ghost"
              className="px-5 py-2"
            >
              {step > 1 && <RiArrowLeftLine />} {step > 1 ? 'Back' : 'Cancel'}
            </Button>
            <Button 
              onClick={() => step < 3 ? setStep(step + 1) : setActiveModal(null)} 
              variant="white"
              className="px-5 py-2.5 !text-[var(--bg-primary)] shadow-md font-bold"
            >
              {step < 3 ? 'Continue' : 'Finish'} {step < 3 && <RiArrowRightLine />}
            </Button>
          </div>
        </ModalFooter>
      </Modal>

    </div>
  );
};

export default Modals;
