"use client";

import React from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { useCaseLens } from "@/context/CaseLensContext";

export function ToastContainer() {
  const { toasts } = useCaseLens();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map((toast) => {
        let bg = "bg-[#101C2C] text-white border-[#1D3046]";
        let icon = <Info className="w-4 h-4 text-[#C9A45C] shrink-0" />;

        if (toast.type === "success") {
          bg = "bg-[#101C2C] text-white border-[#16856B]/40";
          icon = <CheckCircle2 className="w-4 h-4 text-[#16856B] shrink-0" />;
        } else if (toast.type === "warning") {
          bg = "bg-[#101C2C] text-white border-[#D99A38]/40";
          icon = <AlertCircle className="w-4 h-4 text-[#D99A38] shrink-0" />;
        }

        return (
          <div
            key={toast.id}
            className={`pointer-events-auto flex items-center justify-between gap-3 px-4 py-3 rounded-xl border shadow-xl text-xs font-medium backdrop-blur-xs transition-all animate-in slide-in-from-bottom-2 ${bg}`}
          >
            <div className="flex items-center gap-2.5">
              {icon}
              <span>{toast.message}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

