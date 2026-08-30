import React from 'react';
import { RiAlertLine } from 'react-icons/ri';
import { Modal, ModalFooter } from './Modal';
import { Button } from './Button';

export const ConfirmDialog = ({
  isOpen,
  onClose,
  onConfirm,
  title = 'Are you sure?',
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'danger',
}) => (
  <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm" variant="aurora">
    <div className="flex items-start gap-4">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-500/10 text-xl text-rose-500">
        <RiAlertLine />
      </span>
      <p className="mt-1 text-sm text-[var(--text-secondary)]">{description}</p>
    </div>
    <ModalFooter className="justify-end">
      <Button type="button" variant="ghost" onClick={onClose}>{cancelLabel}</Button>
      <Button
        type="button"
        variant={variant === 'danger' ? 'danger' : 'primary'}
        onClick={() => {
          onConfirm();
          onClose();
        }}
      >
        {confirmLabel}
      </Button>
    </ModalFooter>
  </Modal>
);

export default ConfirmDialog;
