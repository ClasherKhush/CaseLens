"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Briefcase,
  Loader2,
  ArrowRight,
  AlertCircle,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { useCaseLens } from "@/context/CaseLensContext";
import { GoogleAuthButton } from "./GoogleAuthButton";
import { PasswordInput } from "./PasswordInput";

export function SignupForm() {
  const { signupUser, navigateTo } = useCaseLens();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("Advocate / Lawyer");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Compute password strength
  const getPasswordStrength = (pass: string) => {
    if (!pass) return { score: 0, label: "None", color: "bg-[#E5E9EF]" };
    let score = 0;
    if (pass.length >= 8) score++;
    if (/[A-Z]/.test(pass)) score++;
    if (/[0-9]/.test(pass)) score++;
    if (/[^A-Za-z0-9]/.test(pass)) score++;

    if (score <= 1) return { score: 1, label: "Weak", color: "bg-[#D9534F]" };
    if (score === 2) return { score: 2, label: "Fair", color: "bg-[#D99A38]" };
    if (score === 3) return { score: 3, label: "Good", color: "bg-[#3B82F6]" };
    return { score: 4, label: "Strong", color: "bg-[#16856B]" };
  };

  const strength = getPasswordStrength(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!name.trim()) {
      setError("Please enter your full legal name.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please provide a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match. Please verify.");
      return;
    }

    if (!agreeTerms) {
      setError("You must agree to the Terms of Service and Privacy Policy.");
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      signupUser({
        name: name.trim(),
        email: email.trim(),
        role,
        provider: "email",
      });
    }, 600);
  };

  const handleGoogleSuccess = (user: { name: string; email: string; avatar?: string }) => {
    signupUser({
      name: user.name,
      email: user.email,
      role,
      provider: "google",
      avatar: user.avatar,
    });
  };

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#101C2C] tracking-tight mb-1">
          Create Your Account
        </h2>
        <p className="text-xs sm:text-sm text-[#778397]">
          Join CaseLens and simplify your legal research.
        </p>
      </div>

      {/* Google Signup Button */}
      <div>
        <GoogleAuthButton
          label="Sign up with Google"
          onSuccess={handleGoogleSuccess}
        />
      </div>

      {/* Divider */}
      <div className="relative flex items-center justify-center my-3">
        <div className="border-t border-[#E5E9EF] w-full" />
        <span className="bg-white px-3 text-[10px] sm:text-[11px] font-bold text-[#778397] uppercase tracking-wider shrink-0">
          OR REGISTER WITH EMAIL
        </span>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="p-3 rounded-xl bg-[#FEF2F2] border border-[#FECACA] text-[#DC2626] text-xs flex items-start gap-2 animate-in fade-in">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Signup Form */}
      <form onSubmit={handleSubmit} className="space-y-3.5">
        {/* Full Name */}
        <div>
          <label className="block text-xs font-bold text-[#263445] mb-1">
            Full Name
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-[#778397] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Adv. Rahul Kumar"
              className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F7FA] border border-[#E5E9EF] rounded-xl text-[#101C2C] placeholder:text-[#778397]/70 outline-hidden transition-all duration-200 focus:bg-white focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/20"
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label className="block text-xs font-bold text-[#263445] mb-1">
            Email Address
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

        {/* Professional Role Selection */}
        <div>
          <label className="block text-xs font-bold text-[#263445] mb-1">
            Professional Role
          </label>
          <div className="relative">
            <Briefcase className="w-4 h-4 text-[#778397] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm bg-[#F5F7FA] border border-[#E5E9EF] rounded-xl text-[#101C2C] font-medium outline-hidden transition-all duration-200 focus:bg-white focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/20"
            >
              <option value="Advocate / Lawyer">Advocate / Lawyer</option>
              <option value="Legal Researcher">Legal Researcher</option>
              <option value="Law Student">Law Student</option>
              <option value="Judicial Clerk / Academic">Judicial Clerk / Academic</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Password */}
        <div>
          <label className="block text-xs font-bold text-[#263445] mb-1">
            Password
          </label>
          <PasswordInput
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a strong password (min 8 chars)"
          />

          {/* Password Strength Meter */}
          {password && (
            <div className="mt-1.5 space-y-1">
              <div className="flex items-center justify-between text-[10px]">
                <span className="text-[#778397]">Strength:</span>
                <span className="font-bold text-[#101C2C]">{strength.label}</span>
              </div>
              <div className="grid grid-cols-4 gap-1 h-1.5 w-full bg-[#E5E9EF] rounded-full overflow-hidden">
                <div className={`h-full ${strength.score >= 1 ? strength.color : "bg-transparent"}`} />
                <div className={`h-full ${strength.score >= 2 ? strength.color : "bg-transparent"}`} />
                <div className={`h-full ${strength.score >= 3 ? strength.color : "bg-transparent"}`} />
                <div className={`h-full ${strength.score >= 4 ? strength.color : "bg-transparent"}`} />
              </div>
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-xs font-bold text-[#263445] mb-1">
            Confirm Password
          </label>
          <PasswordInput
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter your password"
          />
          {confirmPassword && password !== confirmPassword && (
            <p className="text-[11px] text-[#D9534F] mt-1 font-medium">
              Passwords do not match
            </p>
          )}
        </div>

        {/* Terms and Conditions Checkbox */}
        <div className="pt-1">
          <label className="flex items-start gap-2.5 cursor-pointer select-none">
            <input
              type="checkbox"
              required
              checked={agreeTerms}
              onChange={(e) => setAgreeTerms(e.target.checked)}
              className="w-4 h-4 mt-0.5 text-[#C9A45C] accent-[#C9A45C] rounded border-[#E5E9EF] shrink-0"
            />
            <span className="text-[11px] text-[#778397] leading-snug">
              I agree to the{" "}
              <button
                type="button"
                onClick={() => navigateTo("help")}
                className="text-[#C9A45C] font-semibold hover:underline"
              >
                Terms of Service
              </button>{" "}
              and acknowledge the{" "}
              <button
                type="button"
                onClick={() => navigateTo("help")}
                className="text-[#C9A45C] font-semibold hover:underline"
              >
                Legal Research Disclaimer
              </button>
              .
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex items-center justify-center gap-2 bg-[#101C2C] hover:bg-[#1D3046] active:bg-[#0C1521] text-white font-bold text-sm py-3 rounded-xl shadow-md transition-all duration-200 cursor-pointer disabled:opacity-70 mt-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-[#C9A45C]" />
              <span>Creating your account...</span>
            </>
          ) : (
            <>
              <span>Create Account</span>
              <ArrowRight className="w-4 h-4 text-[#C9A45C]" />
            </>
          )}
        </button>
      </form>

      {/* Switch to Login */}
      <div className="pt-2 text-center text-xs text-[#778397]">
        <span>Already have an account? </span>
        <button
          type="button"
          onClick={() => navigateTo("login")}
          className="font-bold text-[#C9A45C] hover:text-[#B8934B] hover:underline"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

