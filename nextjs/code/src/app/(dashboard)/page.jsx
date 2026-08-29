"use client";

import React from 'react';

export default function BlankPage() {
  return (
    <div className="p-6">
      <div className="card h-[calc(100vh-12rem)] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">Blank Page</h2>
          <p className="text-[var(--text-secondary)]">This is a blank page ready for content.</p>
        </div>
      </div>
    </div>
  );
}
