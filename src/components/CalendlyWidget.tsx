"use client";

import { InlineWidget } from "react-calendly";

export default function CalendlyWidget() {
  return (
    <div className="w-full bg-white rounded-2xl overflow-hidden shadow-sm h-[650px]">
      <InlineWidget 
        url="https://calendly.com/anumindfulnessyoga/30min" 
        styles={{ height: '100%' }}
      />
    </div>
  );
}
