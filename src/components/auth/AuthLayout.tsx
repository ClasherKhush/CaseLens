"use client";

import React, { ReactNode } from "react";
import { Scale, BookOpen, Gavel, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useCaseLens } from "@/context/CaseLensContext";

interface AuthLayoutProps {
  children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
  const { navigateTo } = useCaseLens();

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#F5F7FA]">
      {/* LEFT SIDE: Midnight Navy Branding Section matching reference image */}
      <div className="lg:w-1/2 bg-[#101C2C] text-white p-8 lg:p-14 flex flex-col justify-between relative overflow-hidden shrink-0 border-r border-[#1D3046]">
        {/* Subtle glowing ambient curved backdrop matching reference image */}
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-radial from-[#1D3046]/80 via-[#101C2C]/40 to-transparent blur-3xl pointer-events-none" />
        <div className="absolute -bottom-36 -right-20 w-[500px] h-[500px] rounded-full bg-radial from-[#1D3046] via-[#101C2C]/50 to-transparent blur-3xl pointer-events-none" />
        
        {/* Elegant glowing wave lines */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <svg className="w-full h-full object-cover" viewBox="0 0 800 800" fill="none">
            <path
              d="M -100 500 C 200 450, 400 700, 900 550"
              stroke="#C9A45C"
              strokeWidth="1.5"
              strokeDasharray="4 4"
            />
            <path
              d="M -50 400 C 250 350, 450 650, 950 450"
              stroke="#3B82F6"
              strokeWidth="2"
              opacity="0.4"
            />
            <path
              d="M 0 300 C 300 250, 500 600, 1000 350"
              stroke="#1D3046"
              strokeWidth="3"
            />
          </svg>
        </div>

        {/* Top Branding: Logo & Tagline */}
        <div className="relative z-10">
          <div
            onClick={() => navigateTo("dashboard")}
            className="inline-flex items-center gap-3 cursor-pointer group mb-10 select-none"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#C9A45C] to-[#997732] flex items-center justify-center text-[#101C2C] shadow-lg shadow-[#C9A45C]/20 group-hover:scale-105 transition-transform">
              <Scale className="w-6 h-6 stroke-[2.2] text-[#101C2C]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-2xl text-white tracking-tight">CaseLens</span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A45C] bg-[#1D3046] px-1.5 py-0.5 rounded border border-[#C9A45C]/20">
                  IN
                </span>
              </div>
              <span className="text-xs text-[#778397] font-medium leading-none">
                Indian Legal Intelligence
              </span>
            </div>
          </div>

          {/* Large Hero Heading matching Master Prompt */}
          <div className="max-w-xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              Your Legal Research <br />
              <span className="text-[#C9A45C]">Starts Here.</span>
            </h1>
            <p className="text-sm sm:text-base text-[#E5E9EF]/90 leading-relaxed font-normal mb-8 max-w-lg">
              Explore Indian court judgments, discover relevant precedents and understand legal decisions with CaseLens.
            </p>
          </div>
        </div>

        {/* Middle Thematic Legal Artwork Cards */}
        <div className="relative z-10 my-8 max-w-lg hidden sm:grid grid-cols-2 gap-3.5">
          <div className="p-4 rounded-2xl bg-[#1D3046]/40 border border-[#2D4563] backdrop-blur-xs flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#C9A45C]/20 text-[#C9A45C] flex items-center justify-center shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">25,480+ Judgments</p>
              <p className="text-[11px] text-[#778397] mt-0.5 leading-snug">
                Supreme Court & 25 High Court benches indexed.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#1D3046]/40 border border-[#2D4563] backdrop-blur-xs flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#16856B]/20 text-[#16856B] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Case Duration Metrics</p>
              <p className="text-[11px] text-[#778397] mt-0.5 leading-snug">
                Compare historical resolution timelines.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Copyright matching reference image */}
        <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-[#778397]">
          <span>Copyright &copy; 2026 CaseLens Technologies, Inc. All rights reserved.</span>
          <span className="text-[11px] text-[#C9A45C]/80 font-mono">v1.0 Indian Bar Edition</span>
        </div>
      </div>

      {/* RIGHT SIDE: Clean Minimal Form Column matching reference image */}
      <div className="lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 overflow-y-auto">
        <div className="w-full max-w-md bg-white rounded-2xl sm:p-10 p-6 shadow-sm border border-[#E5E9EF] animate-in fade-in duration-300">
          {children}
        </div>
      </div>
    </div>
  );
}

