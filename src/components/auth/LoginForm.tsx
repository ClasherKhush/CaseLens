"use client";

import React, { useState } from "react";
import { Mail, Loader2, ArrowRight, AlertCircle, CheckCircle2 } from "lucide-react";
import { useCaseLens } from "@/context/CaseLensContext";
import { GoogleAuthButton } from "./GoogleAuthButton";
import { PasswordInput } from "./PasswordInput";

export function LoginForm() {
  const { login, navigateTo, showToast } = useCaseLens();

  const [email, setEmail] = useState("rahul.kumar@advocate.in");
  const [password, setPassword] = useState("Advocate@2026");
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid legal or corporate email address.");
      return;
    }

    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters in length.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      login({
        name: email.includes("rahul") ? "Rahul Kumar" : email.split("@")[0].replace(".", " "),
        email,
        role: "Advocate / Lawyer",
        provider: "email",
      });
    }, 600);
  };

  const handleGoogleSuccess = (user: { name: string; email: string; avatar?: string }) => {
    login({
      name: user.name,
      email: user.email,
      role: "Advocate / Lawyer",
      provider: "google",
      avatar: user.avatar,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101C2C] tracking-tight mb-1.5">
          Welcome Back
        </h2>
        <p className="text-xs sm:text-sm text-[#778397]">
          Sign in to continue your legal research.
        </p>
      </div>

      {/* Google Authentication Button */}
      <div>
        <GoogleAuthButton
          label="Continue with Google"
          onSuccess={handleGoogleSuccess}
        />
      </div>

      {/* Divider matching prompt & reference image */}
      <div className="relative flex items-center justify-center my-4">
        <div className="border-t border-[#E5E9EF] w-full" />
        <span className="bg-white px-3 text-[10px] sm:text-[11px] font-bold text-[#778397] uppercase tracking-wider shrink-0">
          OR CONTINUE WITH EMAIL
        </span>
      </div>

      {/* Error Message Alert */}
      {error && (
        <div className="p-3 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-[#DC2626] text-xs flex items-start gap-2 animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Credentials Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold text-[#263445] mb-1.5">
            Email Address
          </label>
          <div className="relative">
            <Mail className="w-4 h-4 text-[#778397] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. counsel@advocate.in"
              className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F7FA] border border-[#E5E9EF] rounded-xl text-[#101C2C] placeholder:text-[#778397]/70 outline-hidden transition-all duration-200 focus:bg-white focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/20"
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label className="text-xs font-bold text-[#263445]">
              Password
            </label>
            <button
              type="button"
              onClick={() => navigateTo("forgot-password")}
              className="text-xs font-semibold text-[#C9A45C] hover:text-[#B8934B] hover:underline"
            >
              Forgot Password?
            </button>
          </div>
          <PasswordInput
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your account password"
          />
        </div>

        {/* Remember Me */}
        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-[#C9A45C] accent-[#C9A45C] rounded border-[#E5E9EF]"
            />
            <span className="text-xs font-medium text-[#263445]">
              Remember me on this workstation
            </span>
          </label>
        </div>

        {/* Sign In Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-[#101C2C] hover:bg-[#1D3046] active:bg-[#0C1521] text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all duration-200 cursor-pointer disabled:opacity-70 mt-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#C9A45C]" />
              <span>Verifying credentials...</span>
            </>
          ) : (
            <>
              <span>Sign In</span>
              <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
            </>
          )}
        </button>
      </form>

      {/* Switch to Signup */}
      <div className="pt-2 text-center text-xs text-[#778397]">
        <span>Don&apos;t have an account? </span>
        <button
          type="button"
          onClick={() => navigateTo("signup")}
          className="font-bold text-[#C9A45C] hover:text-[#B8934B] hover:underline"
        >
          Create Account
        </button>
      </div>
    </div>
  );
}

