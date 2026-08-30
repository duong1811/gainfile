import React from 'react';
import {
  RiDeleteBinLine,
  RiDownloadLine,
  RiEyeOffLine,
  RiFileCopyLine,
  RiFolderTransferLine,
  RiGlobalLine,
  RiLinkM,
  RiMore2Fill,
  RiVipCrownLine,
} from 'react-icons/ri';
import { Button } from '../ui/Button';
import { Dropdown, DropdownContent, DropdownItem, DropdownSeparator, DropdownTrigger } from '../ui/Dropdown';

const FileItemActionsMenu = ({ item, onMove, onCopy, onGetLink, onDelete, onTogglePublish, onSetAccess }) => {
  const isFile = item.kind === 'file';

  return (
    <div onClick={(event) => event.stopPropagation()}>
      <Dropdown>
        <DropdownTrigger asChild showChevron={false}>
          <Button variant="ghost" size="icon-xs">
            <RiMore2Fill size={20} />
          </Button>
        </DropdownTrigger>
        <DropdownContent align="right" width="w-52">
          <DropdownItem onClick={() => onGetLink(item)}>
            <RiLinkM className="mr-2" /> Get Link
          </DropdownItem>
          <DropdownItem
            onClick={() => isFile && onMove(item)}
            className={!isFile ? 'opacity-40 cursor-not-allowed' : ''}
          >
            <RiFolderTransferLine className="mr-2" /> Move
          </DropdownItem>
          <DropdownItem
            onClick={() => isFile && onCopy(item)}
            className={!isFile ? 'opacity-40 cursor-not-allowed' : ''}
          >
            <RiFileCopyLine className="mr-2" /> Copy
          </DropdownItem>

          {isFile && (
            <>
              <DropdownSeparator />
              {item.published ? (
                <DropdownItem onClick={() => onTogglePublish(item)}>
                  <RiEyeOffLine className="mr-2" /> Unpublish
                </DropdownItem>
              ) : (
                <DropdownItem onClick={() => onTogglePublish(item)}>
                  <RiGlobalLine className="mr-2" /> Publish
                </DropdownItem>
              )}
              {item.access === 'premium' ? (
                <DropdownItem onClick={() => onSetAccess(item, 'free')}>
                  <RiDownloadLine className="mr-2" /> Free Download
                </DropdownItem>
              ) : (
                <DropdownItem onClick={() => onSetAccess(item, 'premium')}>
                  <RiVipCrownLine className="mr-2" /> Only Premium
                </DropdownItem>
              )}
            </>
          )}

          <DropdownSeparator />
          <DropdownItem variant="danger" onClick={() => onDelete(item)}>
            <RiDeleteBinLine className="mr-2" /> Delete
          </DropdownItem>
        </DropdownContent>
      </Dropdown>
    </div>
  );
};

export default FileItemActionsMenu;
