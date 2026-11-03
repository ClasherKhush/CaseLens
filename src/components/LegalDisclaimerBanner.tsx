"use client";

import React, { useState } from "react";
import { AlertCircle, X, ShieldAlert } from "lucide-react";

export function LegalDisclaimerBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-[#FFFBEB] border-b border-[#FDE68A] text-[#92400E] px-4 py-2.5 text-xs flex items-center justify-between no-print shadow-xs">
      <div className="flex items-center gap-2.5 max-w-6xl mx-auto">
        <ShieldAlert className="w-4 h-4 text-[#D99A38] shrink-0" />
        <p className="leading-relaxed">
          <span className="font-semibold text-[#78350F] uppercase tracking-wider mr-1.5 px-1.5 py-0.5 bg-[#FEF3C7] rounded border border-[#FCD34D]">
            Demo Environment & Legal Disclaimer
          </span>
          CaseLens is a legal research and precedent discovery platform. Search results, summaries and duration analytics are intended for academic and demonstration purposes and are <strong>not a substitute for professional legal advice</strong>. Historical case resolution durations do not guarantee or predict future case timelines. All demonstration cases are simulated records.
        </p>
      </div>
      <button
        onClick={() => setDismissed(true)}
        className="p-1 hover:bg-[#FEF3C7] rounded text-[#B45309] transition-colors shrink-0 ml-3"
        title="Dismiss notice"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}

