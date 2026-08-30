import React from 'react';
import { RiFolderAddLine } from 'react-icons/ri';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Label } from '../ui/Label';
import { Modal, ModalFooter } from '../ui/Modal';

const CreateFolderModal = ({ isOpen, onClose, value, onChange, onSubmit }) => (
  <Modal isOpen={isOpen} onClose={onClose} title="Create new folder" size="sm" variant="aurora">
    <form onSubmit={onSubmit}>
      <Label htmlFor="new-folder-name">Folder name</Label>
      <Input
        id="new-folder-name"
        autoFocus
        value={value}
        onChange={onChange}
        placeholder="e.g. Marketing Videos"
        variant="aurora1"
      />
      <ModalFooter className="justify-end">
        <Button type="button" variant="ghost" onClick={onClose}>Cancel</Button>
        <Button type="submit" variant="primary" disabled={!value.trim()}>
          <RiFolderAddLine /> Create Folder
        </Button>
      </ModalFooter>
    </form>
  </Modal>
);

export default CreateFolderModal;
