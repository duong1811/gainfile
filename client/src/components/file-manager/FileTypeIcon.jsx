import React from 'react';
import {
  RiFileImageLine,
  RiFileLine,
  RiFilePdfLine,
  RiFileTextLine,
  RiFileVideoLine,
  RiFileZipLine,
} from 'react-icons/ri';

const FileTypeIcon = ({ type, size = 24 }) => {
  switch (type) {
    case 'pdf': return <RiFilePdfLine className="text-rose-500" size={size} />;
    case 'image': return <RiFileImageLine className="text-emerald-500" size={size} />;
    case 'zip': return <RiFileZipLine className="text-amber-500" size={size} />;
    case 'video': return <RiFileVideoLine className="text-violet-500" size={size} />;
    case 'text': return <RiFileTextLine className="text-cyan-500" size={size} />;
    default: return <RiFileLine className="text-blue-500" size={size} />;
  }
};

export default FileTypeIcon;
