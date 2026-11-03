"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  GitCompare,
  Copy,
  Printer,
  ExternalLink,
  Clock,
  Scale,
  CheckCircle2,
  Calendar,
  Gavel,
  BookOpen,
  Share2,
  AlertCircle,
  FileText,
  ShieldAlert,
} from "lucide-react";
import { useCaseLens } from "@/context/CaseLensContext";
import { formatDateIndian } from "@/lib/durationUtils";
import { DEMO_CASES } from "@/data/cases";

export function JudgmentDetailView() {
  const {
    selectedCase,
    navigateTo,
    toggleSaveCase,
    isCaseSaved,
    toggleCompareCase,
    isCaseInComparison,
    showToast,
  } = useCaseLens();

  const [activeTab, setActiveTab] = useState<
    "summary" | "issues" | "highlights" | "related"
  >("summary");

  if (!selectedCase) {
    return (
      <div className="bg-white p-12 text-center rounded-xl border border-[#E5E9EF]">
        <p className="text-sm font-semibold text-[#101C2C]">No judgment selected.</p>
        <button
          onClick={() => navigateTo("explorer")}
          className="mt-3 text-xs bg-[#C9A45C] text-[#101C2C] px-3.5 py-1.5 rounded-lg font-bold"
        >
          Return to Precedent Explorer
        </button>
      </div>
    );
  }

  const isSaved = isCaseSaved(selectedCase.id);
  const inComparison = isCaseInComparison(selectedCase.id);
  const year = selectedCase.judgmentDate
    ? selectedCase.judgmentDate.substring(0, 4)
    : selectedCase.filingDate.substring(0, 4);

  // Find 3 similar related cases
  const relatedCases = DEMO_CASES.filter(
    (c) => c.category === selectedCase.category && c.id !== selectedCase.id
  ).slice(0, 3);

  const handleCopySummary = () => {
    const textToCopy = `CaseLens Judgment Summary: ${selectedCase.caseTitle} (${selectedCase.court}, ${year})\n\nCategory: ${selectedCase.category}\nCase No: ${selectedCase.caseNumber}\nDuration: ${selectedCase.durationFormatted}\n\nFacts:\n${selectedCase.facts}\n\nKey Principles:\n${selectedCase.legalPrinciples.join("\n")}\n\n(Generated via CaseLens Demonstration Platform)`;
    navigator.clipboard.writeText(textToCopy);
    showToast("Case summary copied to clipboard", "success");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Navigation & Action Controls matching Image 5 Panel 5 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 no-print">
        <button
          onClick={() => navigateTo("explorer")}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1D3046] hover:text-[#C9A45C] transition-colors self-start"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Results</span>
        </button>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => toggleSaveCase(selectedCase.id)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              isSaved
                ? "bg-[#FDF8EE] text-[#C9A45C] border-[#C9A45C]/40"
                : "bg-white text-[#263445] border-[#E5E9EF] hover:bg-[#F5F7FA]"
            }`}
          >
            {isSaved ? (
              <BookmarkCheck className="w-3.5 h-3.5 fill-[#C9A45C]" />
            ) : (
              <Bookmark className="w-3.5 h-3.5" />
            )}
            <span>{isSaved ? "Saved" : "Save Case"}</span>
          </button>

          <button
            onClick={() => toggleCompareCase(selectedCase.id)}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
              inComparison
                ? "bg-[#E7F3EF] text-[#16856B] border-[#16856B]/40"
                : "bg-white text-[#263445] border-[#E5E9EF] hover:bg-[#F5F7FA]"
            }`}
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span>{inComparison ? "In Comparison" : "Compare"}</span>
          </button>

          <button
            onClick={handleCopySummary}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-[#263445] border border-[#E5E9EF] hover:bg-[#F5F7FA] transition-all"
          >
            <Copy className="w-3.5 h-3.5 text-[#778397]" />
            <span>Copy Summary</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white text-[#263445] border border-[#E5E9EF] hover:bg-[#F5F7FA] transition-all"
          >
            <Printer className="w-3.5 h-3.5 text-[#778397]" />
            <span>Print Judgment</span>
          </button>

          <button
            onClick={() =>
              showToast("Simulated link: Original High Court registry record", "info")
            }
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-[#101C2C] text-white hover:bg-[#1D3046] transition-all"
          >
            <ExternalLink className="w-3.5 h-3.5 text-[#C9A45C]" />
            <span>Official Record</span>
          </button>
        </div>
      </div>

      {/* Main Judgment Header Card matching Image 5 Panel 5 */}
      <div className="bg-white rounded-xl border border-[#E5E9EF] p-5 sm:p-6 shadow-2xs">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#C9A45C] bg-[#FDF8EE] px-2 py-0.5 rounded border border-[#C9A45C]/30">
            {selectedCase.sourceType}
          </span>
          <span
            className={`text-[10px] font-bold px-2 py-0.5 rounded ${
              selectedCase.status === "Disposed" || selectedCase.status === "Resolved"
                ? "bg-[#E7F3EF] text-[#16856B]"
                : "bg-[#FEF6EC] text-[#D99A38]"
            }`}
          >
            {selectedCase.status}
          </span>
          <span className="text-[10px] font-semibold text-[#778397] bg-[#F5F7FA] px-2 py-0.5 rounded border border-[#E5E9EF]">
            Outcome: {selectedCase.outcome}
          </span>
        </div>

        <h1 className="text-xl sm:text-2xl font-extrabold text-[#101C2C] mb-2 tracking-tight">
          {selectedCase.caseTitle}
        </h1>

        {/* Meta Bar matching Image 5: Court | Year | Case No. | Category */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-[#778397] font-medium pt-2 border-t border-[#E5E9EF]">
          <span className="text-[#1D3046] font-semibold flex items-center gap-1">
            <Gavel className="w-3.5 h-3.5 text-[#C9A45C]" />
            {selectedCase.court}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" />
            {year}
          </span>
          <span>•</span>
          <span className="text-[#263445] font-mono">{selectedCase.caseNumber}</span>
          <span>•</span>
          <span className="text-[#C9A45C] font-semibold bg-[#FDF8EE] px-2 py-0.5 rounded">
            {selectedCase.category}
          </span>
        </div>
      </div>

      {/* Main Grid: Tabs & Content on Left, Sticky Sidebar on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Tabbed Content */}
        <div className="lg:col-span-8 space-y-5">
          {/* Tabs Bar */}
          <div className="bg-white rounded-xl border border-[#E5E9EF] p-1.5 flex gap-1 text-xs font-semibold overflow-x-auto no-print">
            <button
              onClick={() => setActiveTab("summary")}
              className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeTab === "summary"
                  ? "bg-[#101C2C] text-white shadow-xs"
                  : "text-[#778397] hover:text-[#101C2C] hover:bg-[#F5F7FA]"
              }`}
            >
              Case Summary & Facts
            </button>
            <button
              onClick={() => setActiveTab("issues")}
              className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeTab === "issues"
                  ? "bg-[#101C2C] text-white shadow-xs"
                  : "text-[#778397] hover:text-[#101C2C] hover:bg-[#F5F7FA]"
              }`}
            >
              Legal Issues & Sections
            </button>
            <button
              onClick={() => setActiveTab("highlights")}
              className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeTab === "highlights"
                  ? "bg-[#101C2C] text-white shadow-xs"
                  : "text-[#778397] hover:text-[#101C2C] hover:bg-[#F5F7FA]"
              }`}
            >
              Judgment Highlights
            </button>
            <button
              onClick={() => setActiveTab("related")}
              className={`px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                activeTab === "related"
                  ? "bg-[#101C2C] text-white shadow-xs"
                  : "text-[#778397] hover:text-[#101C2C] hover:bg-[#F5F7FA]"
              }`}
            >
              Related Precedents ({relatedCases.length})
            </button>
          </div>

          {/* Tab 1: Case Summary */}
          {activeTab === "summary" && (
            <div className="bg-white rounded-xl border border-[#E5E9EF] p-6 space-y-6 text-sm text-[#263445]">
              {/* Background */}
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#778397] mb-2 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5 text-[#C9A45C]" />
                  Background
                </h2>
                <p className="leading-relaxed text-[#263445]/90">
                  {selectedCase.background}
                </p>
              </div>

              {/* Facts of the Case */}
              <div className="pt-4 border-t border-[#E5E9EF]">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#778397] mb-2 flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-[#1D3046]" />
                  Facts of the Case
                </h2>
                <p className="leading-relaxed text-[#263445]/90">
                  {selectedCase.facts}
                </p>
              </div>

              {/* Arguments of Petitioner */}
              <div className="pt-4 border-t border-[#E5E9EF] grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <h3 className="text-xs font-bold text-[#1E3A8A] uppercase tracking-wider mb-1.5">
                    Arguments of Petitioner
                  </h3>
                  <p className="text-xs leading-relaxed text-[#334155]">
                    {selectedCase.argumentsPetitioner}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0]">
                  <h3 className="text-xs font-bold text-[#831843] uppercase tracking-wider mb-1.5">
                    Arguments of Respondent
                  </h3>
                  <p className="text-xs leading-relaxed text-[#334155]">
                    {selectedCase.argumentsRespondent}
                  </p>
                </div>
              </div>

              {/* Court Observations */}
              <div className="pt-4 border-t border-[#E5E9EF]">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#778397] mb-2 flex items-center gap-1.5">
                  <Gavel className="w-3.5 h-3.5 text-[#16856B]" />
                  Court Observations
                </h2>
                <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] text-xs sm:text-sm leading-relaxed text-[#14532D]">
                  &quot;{selectedCase.courtObservations}&quot;
                </div>
              </div>

              {/* Final Judgment */}
              <div className="pt-4 border-t border-[#E5E9EF]">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#778397] mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#16856B]" />
                  Final Judgment & Operative Directions
                </h2>
                <p className="leading-relaxed font-medium text-[#101C2C]">
                  {selectedCase.finalJudgment}
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Legal Issues & Sections */}
          {activeTab === "issues" && (
            <div className="bg-white rounded-xl border border-[#E5E9EF] p-6 space-y-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#778397] mb-3">
                  Formulated Legal Issues
                </h2>
                <div className="space-y-2.5">
                  {selectedCase.legalIssues.map((issue, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-3 rounded-lg bg-[#F5F7FA] border border-[#E5E9EF]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#101C2C] text-[#C9A45C] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-[#101C2C]">
                        {issue}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E9EF]">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#778397] mb-3">
                  Relevant Legal Provisions & Statutory Sections
                </h2>
                <div className="flex flex-wrap gap-2">
                  {selectedCase.legalSections.map((sec, idx) => (
                    <div
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-[#FDF8EE] border border-[#C9A45C]/40 text-[#101C2C] text-xs font-semibold"
                    >
                      {sec}
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E5E9EF]">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#778397] mb-3">
                  Referenced Case Law Precedents
                </h2>
                <div className="space-y-2">
                  {selectedCase.referencedPrecedents.map((prec, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-[#E5E9EF] text-xs font-mono text-[#1D3046] flex items-center justify-between"
                    >
                      <span>{prec}</span>
                      <span className="text-[10px] text-[#778397] font-sans">Cited Precedent</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Judgment Highlights */}
          {activeTab === "highlights" && (
            <div className="bg-white rounded-xl border border-[#E5E9EF] p-6 space-y-6">
              <div>
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#778397] mb-3">
                  Key Legal Principles Established
                </h2>
                <div className="space-y-3">
                  {selectedCase.legalPrinciples.map((prin, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-[#FDFBF7] border-l-4 border-[#C9A45C] border-y border-r border-[#E5E9EF] text-xs sm:text-sm font-medium text-[#263445]"
                    >
                      {prin}
                    </div>
                  ))}
                </div>
              </div>

              {/* Procedural Chronology */}
              <div className="pt-4 border-t border-[#E5E9EF]">
                <h2 className="text-xs font-bold uppercase tracking-wider text-[#778397] mb-3">
                  Procedural Chronology
                </h2>
                <div className="relative border-l-2 border-[#E5E9EF] ml-3 pl-4 space-y-4 text-xs">
                  <div>
                    <span className="font-bold text-[#101C2C] block">Filing of Petition / Suit</span>
                    <span className="text-[11px] text-[#778397]">
                      {formatDateIndian(selectedCase.filingDate)}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#101C2C] block">Adjudication & Final Arguments</span>
                    <span className="text-[11px] text-[#778397]">
                      Argued before {selectedCase.judgeNames.join(", ")}
                    </span>
                  </div>
                  <div>
                    <span className="font-bold text-[#16856B] block">Final Judgment Pronounced</span>
                    <span className="text-[11px] text-[#778397]">
                      {formatDateIndian(selectedCase.judgmentDate)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 4: Related Precedents */}
          {activeTab === "related" && (
            <div className="space-y-3">
              {relatedCases.map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => navigateTo("judgment-detail", rel.id)}
                  className="bg-white p-4 rounded-xl border border-[#E5E9EF] hover:border-[#C9A45C] hover:shadow-xs transition-all cursor-pointer flex items-center justify-between gap-4 group"
                >
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-[#101C2C] group-hover:text-[#C9A45C] transition-colors mb-1">
                      {rel.caseTitle}
                    </h3>
                    <p className="text-xs text-[#778397]">
                      {rel.court} • {rel.caseNumber}
                    </p>
                    <p className="text-xs text-[#263445]/80 line-clamp-1 mt-1">
                      {rel.summary}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-bold text-[#16856B] block">
                      {rel.durationFormatted}
                    </span>
                    <span className="text-[11px] text-[#C9A45C] font-semibold group-hover:translate-x-1 inline-block transition-transform">
                      Inspect &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Case Duration Card & Key Legal Principle matching Image 5 Panel 5 */}
        <div className="lg:col-span-4 space-y-4">
          {/* Case Duration Card matching Image 5 Panel 5 */}
          <div className="bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#778397] mb-3">
              Case Duration Intelligence
            </h2>

            <div className="p-4 rounded-xl bg-[#F0FDF4] border border-[#BBF7D0] mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#DCFCE7] flex items-center justify-center text-[#16856B]">
                  <Clock className="w-5 h-5 text-[#16856B]" />
                </div>
                <div>
                  <span className="text-base font-extrabold text-[#14532D] block">
                    {selectedCase.durationFormatted}
                  </span>
                  <span className="text-[11px] font-semibold text-[#166534]">
                    ({selectedCase.durationDays ? `${selectedCase.durationDays} Days` : "Pending"})
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex justify-between py-1.5 border-b border-[#E5E9EF]">
                <span className="text-[#778397]">Filing Date:</span>
                <span className="font-semibold text-[#101C2C]">
                  {formatDateIndian(selectedCase.filingDate)}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-[#E5E9EF]">
                <span className="text-[#778397]">Disposal Date:</span>
                <span className="font-semibold text-[#101C2C]">
                  {formatDateIndian(selectedCase.disposalDate)}
                </span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-[#778397]">Bench Category:</span>
                <span className="font-semibold text-[#101C2C]">
                  {selectedCase.category}
                </span>
              </div>
            </div>
          </div>

          {/* Key Legal Principle Card matching Image 5 Panel 5 (Golden callout box) */}
          <div className="bg-[#FFFDF7] p-5 rounded-xl border border-[#F3E5AB] shadow-2xs">
            <div className="flex items-center gap-2 text-[#997732] font-bold text-xs uppercase tracking-wider mb-2">
              <Scale className="w-4 h-4 text-[#C9A45C]" />
              <span>Key Legal Principle</span>
            </div>
            <p className="text-xs sm:text-sm font-semibold text-[#101C2C] leading-relaxed">
              {selectedCase.legalPrinciples[0] ||
                "Ownership rights and continuous settled possession under Indian jurisprudence."}
            </p>
          </div>

          {/* Judicial Bench Information */}
          <div className="bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs">
            <h2 className="text-xs font-bold uppercase tracking-wider text-[#778397] mb-3">
              Coram / Bench
            </h2>
            <div className="space-y-2 text-xs">
              {selectedCase.judgeNames.map((judge, idx) => (
                <div key={idx} className="flex items-center gap-2 text-[#101C2C] font-medium">
                  <Gavel className="w-3.5 h-3.5 text-[#C9A45C] shrink-0" />
                  <span>{judge}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

