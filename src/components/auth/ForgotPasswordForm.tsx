"use client";

import React, { useState } from "react";
import { Mail, ArrowLeft, Loader2, CheckCircle2, AlertCircle, RefreshCw } from "lucide-react";
import { useCaseLens } from "@/context/CaseLensContext";

export function ForgotPasswordForm() {
  const { navigateTo, showToast } = useCaseLens();

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid registered email address.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      showToast("Password reset link dispatched", "success");
    }, 700);
  };

  const handleResend = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      showToast("Reset email re-sent successfully", "info");
    }, 500);
  };

  return (
    <div className="space-y-6">
      {/* Back to Login */}
      <button
        type="button"
        onClick={() => navigateTo("login")}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#778397] hover:text-[#101C2C] transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Login</span>
      </button>

      {!isSubmitted ? (
        <>
          {/* Header */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101C2C] tracking-tight mb-1.5">
              Forgot Your Password?
            </h2>
            <p className="text-xs sm:text-sm text-[#778397] leading-relaxed">
              Enter your registered email address to receive a password reset link and access your research workspace.
            </p>
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-[#DC2626] text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-[#263445] mb-1.5">
                Registered Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#778397] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="e.g. rahul.kumar@advocate.in"
                  className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F7FA] border border-[#E5E9EF] rounded-xl text-[#101C2C] placeholder:text-[#778397]/70 outline-hidden transition-all duration-200 focus:bg-white focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/20"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full flex items-center justify-center gap-2 bg-[#101C2C] hover:bg-[#1D3046] active:bg-[#0C1521] text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all duration-200 cursor-pointer disabled:opacity-70 mt-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#C9A45C]" />
                  <span>Sending reset link...</span>
                </>
              ) : (
                <span>Send Reset Link</span>
              )}
            </button>
          </form>
        </>
      ) : (
        /* Success Screen */
        <div className="text-center py-4 space-y-4 animate-in fade-in">
          <div className="w-14 h-14 rounded-2xl bg-[#E7F3EF] border border-[#16856B]/30 text-[#16856B] flex items-center justify-center mx-auto shadow-sm">
            <CheckCircle2 className="w-8 h-8 stroke-[2.2]" />
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-[#101C2C] mb-1">
              Check Your Inbox
            </h3>
            <p className="text-xs sm:text-sm text-[#778397] leading-relaxed max-w-sm mx-auto">
              We have sent password recovery instructions and a secure reset token to{" "}
              <strong className="text-[#101C2C] font-semibold">{email}</strong>.
            </p>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={handleResend}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C9A45C] hover:text-[#B8934B] hover:underline"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? "animate-spin" : ""}`} />
              <span>Didn&apos;t receive email? Click to resend</span>
            </button>
          </div>

          <div className="pt-4 border-t border-[#E5E9EF]">
            <button
              type="button"
              onClick={() => navigateTo("login")}
              className="w-full py-2.5 bg-[#101C2C] hover:bg-[#1D3046] text-white text-xs font-bold rounded-xl transition-all"
            >
              Return to Sign In
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

