"use client";

import React from "react";
import {
  Bookmark,
  Trash2,
  GitCompare,
  ArrowRight,
  Clock,
  FileText,
  Download,
  Share2,
} from "lucide-react";
import { useCaseLens } from "@/context/CaseLensContext";
import { DEMO_CASES } from "@/data/cases";
import { formatDateIndian } from "@/lib/durationUtils";

export function SavedCasesView() {
  const {
    savedCaseIds,
    toggleSaveCase,
    navigateTo,
    comparisonCaseIds,
    toggleCompareCase,
    isCaseInComparison,
    showToast,
  } = useCaseLens();

  const savedCases = savedCaseIds
    .map((id) => DEMO_CASES.find((c) => c.id === id))
    .filter(Boolean) as (typeof DEMO_CASES)[0][];

  const handleExportBrief = () => {
    const briefText = savedCases
      .map(
        (c, idx) =>
          `[${idx + 1}] ${c.caseTitle}\nCourt: ${c.court} | Year: ${
            c.judgmentDate?.substring(0, 4) || "N/A"
          } | Case No: ${c.caseNumber}\nDuration: ${c.durationFormatted}\nFacts:\n${
            c.facts
          }\nPrinciples:\n${c.legalPrinciples.join("\n")}\n---`
      )
      .join("\n\n");

    const blob = new Blob([briefText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `CaseLens_Precedent_Brief_${Date.now()}.txt`;
    link.click();
    showToast(`Exported ${savedCases.length} cases to legal brief`, "success");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Bookmark className="w-5 h-5 text-[#C9A45C]" />
            <h1 className="text-xl font-bold text-[#101C2C]">Saved Cases & Research Briefs</h1>
          </div>
          <p className="text-xs text-[#778397]">
            You have {savedCases.length} bookmarked judgments ready for citation, comparison or export.
          </p>
        </div>

        {savedCases.length > 0 && (
          <div className="flex items-center gap-2">
            <button
              onClick={handleExportBrief}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F5F7FA] text-[#1D3046] border border-[#E5E9EF] hover:bg-[#EEF2F6] text-xs font-semibold rounded-lg transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              Export Brief
            </button>
            <button
              onClick={() => navigateTo("comparison")}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#C9A45C] text-[#101C2C] hover:bg-[#B8934B] text-xs font-bold rounded-lg transition-all"
            >
              <GitCompare className="w-3.5 h-3.5" />
              Compare Saved Cases
            </button>
          </div>
        )}
      </div>

      {/* Cases List */}
      {savedCases.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-xl border border-[#E5E9EF] shadow-2xs">
          <Bookmark className="w-10 h-10 text-[#778397] mx-auto mb-3" />
          <h2 className="text-base font-bold text-[#101C2C] mb-1">No Saved Cases Yet</h2>
          <p className="text-xs text-[#778397] max-w-sm mx-auto mb-4">
            Click the bookmark icon on any judgment in the Precedent Explorer or Search Results to collect cases here.
          </p>
          <button
            onClick={() => navigateTo("explorer")}
            className="px-4 py-2 bg-[#101C2C] text-white text-xs font-semibold rounded-lg hover:bg-[#1D3046]"
          >
            Explore Precedents
          </button>
        </div>
      ) : (
        <div className="space-y-3.5">
          {savedCases.map((c) => {
            const inComparison = isCaseInComparison(c.id);
            const year = c.judgmentDate
              ? c.judgmentDate.substring(0, 4)
              : c.filingDate.substring(0, 4);

            return (
              <div
                key={c.id}
                className="bg-white rounded-xl border border-[#E5E9EF] p-5 hover:border-[#C9A45C]/50 hover:shadow-xs transition-all flex flex-col md:flex-row items-start justify-between gap-4 group"
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-[#C9A45C] bg-[#FDF8EE] px-2 py-0.5 rounded border border-[#C9A45C]/30">
                      {c.category}
                    </span>
                    <span className="text-[10px] text-[#778397] font-mono">{c.caseNumber}</span>
                  </div>

                  <h2
                    onClick={() => navigateTo("judgment-detail", c.id)}
                    className="text-base font-bold text-[#101C2C] hover:text-[#C9A45C] cursor-pointer mb-1 transition-colors"
                  >
                    {c.caseTitle}
                  </h2>

                  <div className="flex items-center gap-2 text-xs text-[#778397] mb-2 font-medium">
                    <span>{c.court}</span>
                    <span>•</span>
                    <span>{year}</span>
                    <span>•</span>
                    <span className="text-[#16856B] font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {c.durationFormatted}
                    </span>
                  </div>

                  <p className="text-xs text-[#263445]/90 line-clamp-2 leading-relaxed">
                    {c.summary}
                  </p>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between w-full md:w-auto gap-2 shrink-0 border-t md:border-t-0 pt-3 md:pt-0 border-[#E5E9EF]">
                  <button
                    onClick={() => toggleCompareCase(c.id)}
                    className={`text-xs font-semibold px-2.5 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                      inComparison
                        ? "bg-[#E7F3EF] text-[#16856B] border-[#16856B]/30"
                        : "bg-white text-[#263445] border-[#E5E9EF] hover:bg-[#F5F7FA]"
                    }`}
                  >
                    <GitCompare className="w-3.5 h-3.5" />
                    <span>{inComparison ? "In Comparison" : "Add to Compare"}</span>
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => navigateTo("judgment-detail", c.id)}
                      className="text-xs font-bold text-[#C9A45C] hover:underline"
                    >
                      View Details &rarr;
                    </button>
                    <button
                      onClick={() => toggleSaveCase(c.id)}
                      className="p-1.5 text-[#778397] hover:text-[#D9534F] transition-colors"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

