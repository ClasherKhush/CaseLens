"use client";

import React, { useState } from "react";
import {
  Search,
  Scale,
  RotateCcw,
  SlidersHorizontal,
  ArrowRight,
  HelpCircle,
  CheckCircle,
  FileCheck,
} from "lucide-react";
import { useCaseLens } from "@/context/CaseLensContext";

const categories = [
  "All Categories",
  "Property Dispute",
  "Civil Litigation",
  "Criminal Law",
  "Family Law",
  "Contract Dispute",
  "Consumer Protection",
  "Employment Law",
  "Constitutional Law",
  "Taxation",
  "Intellectual Property",
  "Land Acquisition",
  "Banking and Finance",
];

const courts = [
  "All Courts",
  "Supreme Court of India",
  "Delhi High Court",
  "Bombay High Court",
  "Rajasthan High Court",
  "Allahabad High Court",
  "Madras High Court",
  "Karnataka High Court",
  "Calcutta High Court",
  "Punjab & Haryana High Court",
  "District Court, New Delhi",
  "City Civil Court, Mumbai",
  "District Court, Jaipur",
];

const statuses = [
  "All Status",
  "Disposed",
  "Pending",
  "Resolved",
  "Dismissed",
  "Allowed",
  "Partially Allowed",
];

const outcomes = [
  "Any Outcome",
  "Petitioner Successful",
  "Respondent Successful",
  "Partially Successful",
  "Dismissed",
  "Other / Unclear",
];

const durationRanges = [
  "Any Duration",
  "Under 1 Year",
  "1–3 Years",
  "3–5 Years",
  "5–10 Years",
  "Above 10 Years",
];

const popularSearches = [
  { label: "Property Disputes", query: "Property ownership dispute involving ancestral land and possession rights", category: "Property Dispute" },
  { label: "Civil Disputes", query: "Summary suit recovery of dues under Order XXXVII CPC promissory note", category: "Civil Litigation" },
  { label: "Criminal Cases", query: "Regular bail commercial quantity NDPS Act section 37 conditions", category: "Criminal Law" },
  { label: "Contract Disputes", query: "Breach of commercial contract and liquidated damages section 74", category: "Contract Dispute" },
  { label: "Family Law", query: "Maintenance enhancement section 125 CrPC disclosure of spouse income", category: "Family Law" },
  { label: "Consumer Protection", query: "Builder buyer agreement 5 year delay in apartment possession refund", category: "Consumer Protection" },
  { label: "Employment Disputes", query: "Wrongful termination without domestic inquiry standing orders", category: "Employment Law" },
  { label: "Land Acquisition", query: "Lapse of land acquisition section 24 fair compensation RFCTLARR Act", category: "Land Acquisition" },
];

export function CaseSearchView() {
  const { filters, setFilters, updateFilter, resetFilters, applySearch } = useCaseLens();

  const [queryInput, setQueryInput] = useState(filters.query);
  const [activeTabMode, setActiveTabMode] = useState<"natural" | "structured">("natural");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateFilter("query", queryInput);
    applySearch(queryInput);
  };

  const handleSelectPopular = (item: { label: string; query: string; category: string }) => {
    setQueryInput(item.query);
    updateFilter("query", item.query);
    updateFilter("category", item.category);
    applySearch(item.query);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Search Header Banner matching Image 5 Panel 2 */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#101C2C] via-[#1D3046] to-[#101C2C] text-white p-6 sm:p-9 shadow-md border border-[#2D4563]">
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            Find Relevant Legal Precedents
          </h1>
          <p className="text-sm sm:text-base text-[#E5E9EF]/90 leading-relaxed font-normal mb-6">
            Describe your case facts, disputed rights or statutory provisions to discover Indian court judgments with similar legal issues and compare historical resolution durations.
          </p>

          {/* Large Natural Language Search Input */}
          <form onSubmit={handleSearchSubmit} className="space-y-3">
            <div className="relative bg-white rounded-xl shadow-lg p-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 border border-white/20">
              <div className="relative flex-1 flex items-center">
                <Search className="w-5 h-5 text-[#778397] absolute left-3 pointer-events-none" />
                <input
                  type="text"
                  value={queryInput}
                  onChange={(e) => setQueryInput(e.target.value)}
                  placeholder="Describe your legal dispute, facts, issues or case circumstances..."
                  className="w-full pl-10 pr-4 py-2.5 text-sm sm:text-base text-[#101C2C] placeholder:text-[#778397]/70 bg-transparent outline-hidden font-normal"
                />
              </div>

              <div className="flex items-center gap-2">
                {queryInput && (
                  <button
                    type="button"
                    onClick={() => {
                      setQueryInput("");
                      updateFilter("query", "");
                    }}
                    className="p-2 text-xs text-[#778397] hover:text-[#101C2C] transition-colors"
                  >
                    Clear
                  </button>
                )}
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C9A45C] hover:bg-[#B8934B] text-[#101C2C] font-bold text-sm px-5 py-2.5 rounded-lg transition-all shadow-md shadow-[#C9A45C]/20 shrink-0"
                >
                  <span>Search Precedents</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="text-[11px] text-[#E5E9EF]/80 flex items-center gap-2">
              <span className="font-semibold text-[#C9A45C]">Example query:</span>
              <span className="truncate italic">
                &quot;A property ownership dispute involving ancestral land, possession rights and disputed registration documents.&quot;
              </span>
            </div>
          </form>

          {/* Popular Searches Pills */}
          <div className="mt-6 pt-5 border-t border-white/10">
            <span className="text-xs font-semibold text-[#E5E9EF]/90 block mb-2.5">
              Popular Legal Searches:
            </span>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((item) => (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleSelectPopular(item)}
                  className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-[#C9A45C] hover:text-[#101C2C] text-xs text-white border border-white/15 transition-all"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative Scales Watermark */}
        <div className="absolute -right-8 -bottom-10 pointer-events-none opacity-15">
          <Scale className="w-80 h-80 text-[#C9A45C]" />
        </div>
      </div>

      {/* Advanced Case Filters Panel matching Image 5 Panel 2 */}
      <div className="bg-white rounded-xl border border-[#E5E9EF] p-6 shadow-2xs">
        <div className="flex items-center justify-between pb-4 border-b border-[#E5E9EF] mb-5">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="w-4 h-4 text-[#1D3046]" />
            <h2 className="text-sm font-bold text-[#101C2C]">Advanced Case Filters</h2>
          </div>
          <button
            type="button"
            onClick={resetFilters}
            className="text-xs text-[#778397] hover:text-[#D9534F] font-semibold flex items-center gap-1 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reset Filters
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Case Category */}
          <div>
            <label className="block text-xs font-semibold text-[#263445] mb-1.5">
              Case Category
            </label>
            <select
              value={filters.category}
              onChange={(e) => updateFilter("category", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#263445] focus:outline-hidden focus:border-[#C9A45C] focus:bg-white transition-all font-medium"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          {/* Court */}
          <div>
            <label className="block text-xs font-semibold text-[#263445] mb-1.5">
              Court Jurisdiction
            </label>
            <select
              value={filters.court}
              onChange={(e) => updateFilter("court", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#263445] focus:outline-hidden focus:border-[#C9A45C] focus:bg-white transition-all font-medium"
            >
              {courts.map((court) => (
                <option key={court} value={court}>
                  {court}
                </option>
              ))}
            </select>
          </div>

          {/* Case Status */}
          <div>
            <label className="block text-xs font-semibold text-[#263445] mb-1.5">
              Case Status
            </label>
            <select
              value={filters.status}
              onChange={(e) => updateFilter("status", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#263445] focus:outline-hidden focus:border-[#C9A45C] focus:bg-white transition-all font-medium"
            >
              {statuses.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Year Range */}
          <div>
            <label className="block text-xs font-semibold text-[#263445] mb-1.5">
              Judgment / Filing Year Range
            </label>
            <div className="flex items-center gap-2">
              <input
                type="number"
                min="2010"
                max="2025"
                value={filters.yearMin}
                onChange={(e) => updateFilter("yearMin", parseInt(e.target.value, 10))}
                className="w-1/2 px-2.5 py-1.5 text-xs bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#263445] font-medium"
                placeholder="From"
              />
              <span className="text-xs text-[#778397]">—</span>
              <input
                type="number"
                min="2010"
                max="2025"
                value={filters.yearMax}
                onChange={(e) => updateFilter("yearMax", parseInt(e.target.value, 10))}
                className="w-1/2 px-2.5 py-1.5 text-xs bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#263445] font-medium"
                placeholder="To"
              />
            </div>
          </div>

          {/* Case Duration */}
          <div>
            <label className="block text-xs font-semibold text-[#263445] mb-1.5">
              Historical Case Duration
            </label>
            <select
              value={filters.durationRange}
              onChange={(e) => updateFilter("durationRange", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#263445] focus:outline-hidden focus:border-[#C9A45C] focus:bg-white transition-all font-medium"
            >
              {durationRanges.map((dur) => (
                <option key={dur} value={dur}>
                  {dur}
                </option>
              ))}
            </select>
          </div>

          {/* Case Outcome */}
          <div>
            <label className="block text-xs font-semibold text-[#263445] mb-1.5">
              Judicial Outcome
            </label>
            <select
              value={filters.outcome}
              onChange={(e) => updateFilter("outcome", e.target.value)}
              className="w-full px-3 py-2 text-xs bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#263445] focus:outline-hidden focus:border-[#C9A45C] focus:bg-white transition-all font-medium"
            >
              {outcomes.map((outcome) => (
                <option key={outcome} value={outcome}>
                  {outcome}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Apply Filters Action Button */}
        <div className="pt-6 mt-6 border-t border-[#E5E9EF] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-[#778397] flex items-center gap-1.5">
            <FileCheck className="w-4 h-4 text-[#16856B]" />
            <span>Search algorithm prioritizes legally similar precedents with validated disposal durations.</span>
          </div>

          <button
            type="button"
            onClick={() => {
              updateFilter("query", queryInput);
              applySearch(queryInput);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C9A45C] hover:bg-[#B8934B] text-[#101C2C] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-lg shadow-sm shadow-[#C9A45C]/20 transition-all"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Apply Filters & Search
          </button>
        </div>
      </div>

      {/* Transparent Search Methodology Notice (Requirement 5 & 16) */}
      <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4 text-xs text-[#64748B] flex items-start gap-3">
        <HelpCircle className="w-4 h-4 text-[#778397] shrink-0 mt-0.5" />
        <div className="leading-relaxed">
          <strong className="text-[#334155] font-semibold">Search Algorithm Transparency:</strong> Our engine executes hybrid retrieval combining exact phrase matching, tokenized lexical weighting across statutory sections and legal issues, and vector similarity simulation. Cases are scored transparently on substantive issue alignment and historical resolution duration.
        </div>
      </div>
    </div>
  );
}

