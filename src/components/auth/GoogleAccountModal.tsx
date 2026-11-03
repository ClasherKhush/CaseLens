"use client";

import React, { useState } from "react";
import { X, User, Plus, Loader2, ShieldCheck } from "lucide-react";

interface GoogleAccountModalProps {
  onClose: () => void;
  onSelect: (user: { name: string; email: string; avatar?: string }) => void;
  isLoading: boolean;
}

export function GoogleAccountModal({
  onClose,
  onSelect,
  isLoading,
}: GoogleAccountModalProps) {
  const [showCustom, setShowCustom] = useState(false);
  const [customName, setCustomName] = useState("");
  const [customEmail, setCustomEmail] = useState("");

  const accounts = [
    {
      name: "Rahul Kumar",
      email: "rahul.kumar@advocate.in",
      avatar: "RK",
      color: "bg-[#101C2C] text-[#C9A45C]",
      role: "Advocate, Supreme Court",
    },
    {
      name: "Priya Verma",
      email: "priya.verma@legal.org",
      avatar: "PV",
      color: "bg-[#1D3046] text-white",
      role: "Senior Legal Researcher",
    },
  ];

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (customName && customEmail) {
      onSelect({
        name: customName,
        email: customEmail,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-2xs animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full border border-[#E5E9EF] overflow-hidden">
        {/* Google Header */}
        <div className="p-6 border-b border-[#E5E9EF] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span className="font-semibold text-sm text-[#101C2C]">
              Sign in with Google
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-[#778397] hover:bg-[#F5F7FA] hover:text-[#101C2C] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          <p className="text-xs text-[#778397] mb-4">
            Choose an account to continue to <strong className="text-[#101C2C]">CaseLens</strong>
          </p>

          {!showCustom ? (
            <div className="space-y-2">
              {accounts.map((acc) => (
                <button
                  key={acc.email}
                  disabled={isLoading}
                  onClick={() => onSelect(acc)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl border border-[#E5E9EF] hover:border-[#C9A45C] hover:bg-[#FDFBF7] text-left transition-all group disabled:opacity-60"
                >
                  <div
                    className={`w-9 h-9 rounded-full ${acc.color} font-bold text-xs flex items-center justify-center shrink-0 shadow-2xs`}
                  >
                    {acc.avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold text-[#101C2C] group-hover:text-[#C9A45C] transition-colors truncate">
                      {acc.name}
                    </p>
                    <p className="text-[11px] text-[#778397] truncate">
                      {acc.email}
                    </p>
                  </div>
                </button>
              ))}

              <button
                type="button"
                onClick={() => setShowCustom(true)}
                className="w-full flex items-center gap-3 p-3 rounded-xl border border-dashed border-[#E5E9EF] hover:border-[#778397] hover:bg-[#F5F7FA] text-left transition-all text-xs font-semibold text-[#1D3046]"
              >
                <div className="w-9 h-9 rounded-full bg-[#F5F7FA] text-[#778397] flex items-center justify-center shrink-0">
                  <Plus className="w-4 h-4" />
                </div>
                <span>Use another Google account</span>
              </button>
            </div>
          ) : (
            <form onSubmit={handleCustomSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-semibold text-[#263445] mb-1">
                  Google Account Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vikram Singhal"
                  value={customName}
                  onChange={(e) => setCustomName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg focus:border-[#C9A45C] outline-hidden"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#263445] mb-1">
                  Gmail / Google Workspace Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@gmail.com"
                  value={customEmail}
                  onChange={(e) => setCustomEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg focus:border-[#C9A45C] outline-hidden"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  onClick={() => setShowCustom(false)}
                  className="text-xs text-[#778397] hover:underline"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-4 py-2 bg-[#101C2C] text-white text-xs font-bold rounded-lg hover:bg-[#1D3046]"
                >
                  Continue
                </button>
              </div>
            </form>
          )}

          {isLoading && (
            <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-[#16856B]">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Authenticating Google session...</span>
            </div>
          )}

          <div className="mt-5 pt-4 border-t border-[#E5E9EF] text-[10px] text-[#778397] leading-relaxed">
            To continue, Google will share your name, email address, language preference, and profile picture with CaseLens.
          </div>
        </div>
      </div>
    </div>
  );
}

