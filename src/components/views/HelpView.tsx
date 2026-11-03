"use client";

import React from "react";
import {
  HelpCircle,
  BookOpen,
  Scale,
  ShieldAlert,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Gavel,
} from "lucide-react";

export function HelpView() {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs">
        <div className="flex items-center gap-2 mb-1">
          <HelpCircle className="w-5 h-5 text-[#C9A45C]" />
          <h1 className="text-xl font-bold text-[#101C2C]">CaseLens Help, Methodology & Disclaimers</h1>
        </div>
        <p className="text-xs text-[#778397]">
          Comprehensive guide to navigating legal research, duration analysis metrics, and statutory citation compliance.
        </p>
      </div>

      {/* Prominent Legal Disclaimer matching Requirement 16 */}
      <div className="bg-[#FFFDF7] p-6 rounded-xl border border-[#F3E5AB] shadow-2xs">
        <div className="flex items-center gap-2 text-[#997732] font-bold text-sm uppercase tracking-wider mb-2">
          <ShieldAlert className="w-5 h-5 text-[#C9A45C]" />
          <span>Statutory Research Disclaimer</span>
        </div>
        <p className="text-xs sm:text-sm text-[#263445] leading-relaxed font-medium">
          &quot;CaseLens is a legal research and precedent discovery tool. Search results, summaries and analytics are intended to support legal research and are not a substitute for professional legal advice. Historical case durations do not predict future case timelines. Users should verify all judgments, citations and legal provisions against their original official sources.&quot;
        </p>
      </div>

      {/* Case Duration Methodology Section matching Requirement 8 */}
      <div className="bg-white p-6 rounded-xl border border-[#E5E9EF] shadow-2xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-[#E5E9EF]">
          <Clock className="w-4 h-4 text-[#16856B]" />
          <h2 className="text-sm font-bold text-[#101C2C]">
            Case Duration Calculation Methodology
          </h2>
        </div>

        <div className="text-xs text-[#263445] space-y-3 leading-relaxed">
          <p>
            CaseLens computes case resolution durations mathematically using certified registry dates:
          </p>

          <div className="p-3 bg-[#F5F7FA] rounded-lg font-mono text-[11px] text-[#101C2C] border border-[#E5E9EF]">
            Resolution Duration (Days) = Date of Final Disposal / Judgment - Date of Formal Institution / Filing
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="font-bold text-[#101C2C] block mb-1">
                Disposed & Resolved Cases
              </span>
              <p className="text-[11px] text-[#778397]">
                Calculated strictly in elapsed days, then converted into human-readable years and months (e.g. 1 Year 8 Months).
              </p>
            </div>

            <div className="p-3 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]">
              <span className="font-bold text-[#101C2C] block mb-1">
                Pending Adjudications
              </span>
              <p className="text-[11px] text-[#778397]">
                Pending cases carry no fabricated disposal date and are marked as Ongoing to preserve analytical integrity.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#FEF2F2] border border-[#FECACA] text-[#991B1B] text-[11px] flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-[#DC2626] shrink-0 mt-0.5" />
            <span>
              <strong>Crucial Principle:</strong> Faster historical resolution is an operational metric reflecting court docket conditions and summary procedural posture; <strong>it is never proof of superior legal reasoning or a guarantee of future timeline</strong>.
            </span>
          </div>
        </div>
      </div>

      {/* Indian Court Hierarchy Guide */}
      <div className="bg-white p-6 rounded-xl border border-[#E5E9EF] shadow-2xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-[#E5E9EF]">
          <Gavel className="w-4 h-4 text-[#1D3046]" />
          <h2 className="text-sm font-bold text-[#101C2C]">
            Indian Judicial Hierarchy in CaseLens
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3.5 rounded-xl border border-[#E5E9EF] bg-[#FCFDFE]">
            <span className="font-bold text-[#C9A45C] block text-sm mb-1">
              Supreme Court of India
            </span>
            <p className="text-[11px] text-[#778397] leading-relaxed">
              Apex constitutional court. Rulings under Article 141 constitute binding precedent on all courts across the territory of India.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-[#E5E9EF] bg-[#FCFDFE]">
            <span className="font-bold text-[#1D3046] block text-sm mb-1">
              High Courts (25 Benches)
            </span>
            <p className="text-[11px] text-[#778397] leading-relaxed">
              Binding over subordinate courts in their state jurisdiction, with high persuasive authority in other state High Courts.
            </p>
          </div>

          <div className="p-3.5 rounded-xl border border-[#E5E9EF] bg-[#FCFDFE]">
            <span className="font-bold text-[#778397] block text-sm mb-1">
              District & Trial Courts
            </span>
            <p className="text-[11px] text-[#778397] leading-relaxed">
              First instance courts of record for civil suits, criminal trials, and commercial disputes before Principal District Judges.
            </p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white p-6 rounded-xl border border-[#E5E9EF] shadow-2xs space-y-4">
        <div className="flex items-center gap-2 pb-3 border-b border-[#E5E9EF]">
          <BookOpen className="w-4 h-4 text-[#1D3046]" />
          <h2 className="text-sm font-bold text-[#101C2C]">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-3 text-xs">
          <div>
            <h3 className="font-bold text-[#101C2C] mb-1">
              How does the Precedent Comparison matrix work?
            </h3>
            <p className="text-[#778397] leading-relaxed">
              You can select up to 4 cases across any search result or the library. CaseLens aligns facts, legal questions, and cited sections in an organized side-by-side view with instant duration diff calculation.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#101C2C] mb-1">
              Can I export research results for court filings or client briefs?
            </h3>
            <p className="text-[#778397] leading-relaxed">
              Yes. You can use &quot;Export Brief&quot; from the Saved Cases view or &quot;Print Judgment&quot; to produce clean, formatted legal notes with full citations and legal principles.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-[#101C2C] mb-1">
              Are these genuine Indian court records?
            </h3>
            <p className="text-[#778397] leading-relaxed">
              All records in this demonstration version are realistic, fictional demonstration judgments clearly labelled with <code className="bg-[#F5F7FA] px-1 py-0.5 rounded text-[#1D3046]">isDemo: true</code>. Future releases will connect with the e-Courts National Judicial Data Grid (NJDG) API and Indian Kanoon pipelines.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

