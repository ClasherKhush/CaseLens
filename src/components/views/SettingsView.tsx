"use client";

import React, { useState } from "react";
import {
  Settings,
  User,
  Sliders,
  Database,
  ShieldCheck,
  Check,
  Bell,
  Scale,
} from "lucide-react";
import { useCaseLens } from "@/context/CaseLensContext";
import { DEMO_CASES } from "@/data/cases";

export function SettingsView() {
  const { showToast } = useCaseLens();

  const [advocateName, setAdvocateName] = useState("Rahul Kumar");
  const [barNumber, setBarNumber] = useState("D/1482/2012 (Bar Council of Delhi)");
  const [primaryCourt, setPrimaryCourt] = useState("Supreme Court of India & Delhi High Court");
  const [defaultSort, setDefaultSort] = useState("duration_asc");
  const [enableSemantic, setEnableSemantic] = useState(true);
  const [enableAlerts, setEnableAlerts] = useState(true);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    showToast("Preferences saved successfully", "success");
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs">
        <div className="flex items-center gap-2 mb-1">
          <Settings className="w-5 h-5 text-[#C9A45C]" />
          <h1 className="text-xl font-bold text-[#101C2C]">Settings & Research Workspace</h1>
        </div>
        <p className="text-xs text-[#778397]">
          Configure your legal intelligence preferences, default jurisdiction filters and user profile.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* User Advocate Profile */}
        <div className="bg-white p-6 rounded-xl border border-[#E5E9EF] shadow-2xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#E5E9EF]">
            <User className="w-4 h-4 text-[#1D3046]" />
            <h2 className="text-sm font-bold text-[#101C2C]">Advocate & Practice Profile</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-semibold text-[#263445] mb-1">Full Legal Name</label>
              <input
                type="text"
                value={advocateName}
                onChange={(e) => setAdvocateName(e.target.value)}
                className="w-full px-3 py-2 bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#101C2C] font-medium"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#263445] mb-1">Bar Council Registration No.</label>
              <input
                type="text"
                value={barNumber}
                onChange={(e) => setBarNumber(e.target.value)}
                className="w-full px-3 py-2 bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#101C2C] font-medium"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block font-semibold text-[#263445] mb-1">Primary Practicing Court</label>
              <input
                type="text"
                value={primaryCourt}
                onChange={(e) => setPrimaryCourt(e.target.value)}
                className="w-full px-3 py-2 bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#101C2C] font-medium"
              />
            </div>
          </div>
        </div>

        {/* Search & Intelligence Defaults */}
        <div className="bg-white p-6 rounded-xl border border-[#E5E9EF] shadow-2xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#E5E9EF]">
            <Sliders className="w-4 h-4 text-[#1D3046]" />
            <h2 className="text-sm font-bold text-[#101C2C]">Search & Ranking Preferences</h2>
          </div>

          <div className="space-y-4 text-xs">
            <div>
              <label className="block font-semibold text-[#263445] mb-1">
                Default Precedent Sorting Strategy
              </label>
              <select
                value={defaultSort}
                onChange={(e) => setDefaultSort(e.target.value)}
                className="w-full max-w-md px-3 py-2 bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#101C2C] font-medium"
              >
                <option value="duration_asc">Shortest Historical Duration First</option>
                <option value="relevance">Highest Relevance & Fact Similarity</option>
                <option value="newest">Newest Pronouncements First</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-[#F5F7FA] border border-[#E5E9EF]">
              <div>
                <span className="font-bold text-[#101C2C] block">Enable Semantic Hybrid Retrieval</span>
                <span className="text-[11px] text-[#778397]">
                  Scores similarity across factual summaries and statutory legal issues.
                </span>
              </div>
              <input
                type="checkbox"
                checked={enableSemantic}
                onChange={(e) => setEnableSemantic(e.target.checked)}
                className="w-4 h-4 text-[#C9A45C] rounded"
              />
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg bg-[#F5F7FA] border border-[#E5E9EF]">
              <div>
                <span className="font-bold text-[#101C2C] block">Duration Benchmark Alerts</span>
                <span className="text-[11px] text-[#778397]">
                  Receive notifications when updated disposal duration averages are computed.
                </span>
              </div>
              <input
                type="checkbox"
                checked={enableAlerts}
                onChange={(e) => setEnableAlerts(e.target.checked)}
                className="w-4 h-4 text-[#C9A45C] rounded"
              />
            </div>
          </div>
        </div>

        {/* Database & Environment Status */}
        <div className="bg-white p-6 rounded-xl border border-[#E5E9EF] shadow-2xs space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-[#E5E9EF]">
            <Database className="w-4 h-4 text-[#1D3046]" />
            <h2 className="text-sm font-bold text-[#101C2C]">Repository & Environment Status</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
              <span className="text-[#778397] block">Active Dataset</span>
              <span className="font-bold text-[#101C2C] text-sm">{DEMO_CASES.length} Precedents</span>
            </div>
            <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
              <span className="text-[#778397] block">Environment</span>
              <span className="font-bold text-[#16856B] text-sm">Demo / Production Ready</span>
            </div>
            <div className="p-3 bg-[#F8FAFC] border border-[#E2E8F0] rounded-lg">
              <span className="text-[#778397] block">Duration Engine</span>
              <span className="font-bold text-[#101C2C] text-sm">Strict Date Delta Mode</span>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#C9A45C] hover:bg-[#B8934B] text-[#101C2C] font-bold text-xs rounded-lg shadow-sm transition-all"
          >
            Save All Preferences
          </button>
        </div>
      </form>
    </div>
  );
}

