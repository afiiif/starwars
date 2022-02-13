import React from 'react';

export default function Shimmer() {
  return [...Array(5).keys()].map((key) => (
    <div key={key} className="card">
      <div className="animate-pulse">
        <div className="rounded-full bg-slate-400 h-2 w-20" />
      </div>
    </div>
  ));
}
