"use client";

import React, { useState } from "react";
import {
  BookOpen,
  Search,
  Filter,
  Download,
  Clock,
  ArrowRight,
  Bookmark,
  BookmarkCheck,
  GitCompare,
  FileSpreadsheet,
} from "lucide-react";
import { useCaseLens } from "@/context/CaseLensContext";
import { DEMO_CASES } from "@/data/cases";
import { formatDateIndian } from "@/lib/durationUtils";

export function JudgmentLibraryView() {
  const {
    navigateTo,
    toggleSaveCase,
    isCaseSaved,
    toggleCompareCase,
    isCaseInComparison,
    showToast,
  } = useCaseLens();

  const [searchFilter, setSearchFilter] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCourt, setSelectedCourt] = useState("All");

  const categories = [
    "All",
    "Property Dispute",
    "Civil Litigation",
    "Criminal Law",
    "Family Law",
    "Contract Dispute",
    "Consumer Protection",
    "Employment Law",
    "Land Acquisition",
    "Constitutional Law",
  ];

  const filteredCases = DEMO_CASES.filter((c) => {
    if (selectedCategory !== "All" && c.category !== selectedCategory) return false;
    if (selectedCourt !== "All" && c.court !== selectedCourt) return false;
    if (searchFilter.trim()) {
      const q = searchFilter.toLowerCase();
      const match =
        c.caseTitle.toLowerCase().includes(q) ||
        c.caseNumber.toLowerCase().includes(q) ||
        c.court.toLowerCase().includes(q) ||
        c.facts.toLowerCase().includes(q) ||
        c.keywords.some((k) => k.toLowerCase().includes(q));
      if (!match) return false;
    }
    return true;
  });

  const exportToCSV = () => {
    const headers = [
      "Case ID",
      "Case Title",
      "Case Number",
      "Court",
      "Category",
      "Filing Date",
      "Disposal Date",
      "Duration Days",
      "Duration Formatted",
      "Status",
      "Outcome",
    ];
    const rows = filteredCases.map((c) => [
      c.id,
      `"${c.caseTitle}"`,
      `"${c.caseNumber}"`,
      `"${c.court}"`,
      `"${c.category}"`,
      c.filingDate,
      c.disposalDate || "N/A",
      c.durationDays || "N/A",
      `"${c.durationFormatted}"`,
      c.status,
      `"${c.outcome}"`,
    ]);

    const csvContent =
      "data:text/csv;charset=utf-8," +
      [headers.join(","), ...rows.map((e) => e.join(","))].join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `caselens_judgments_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    showToast(`Exported ${filteredCases.length} cases to CSV`, "success");
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-5 h-5 text-[#C9A45C]" />
            <h1 className="text-xl font-bold text-[#101C2C]">Judgment Library</h1>
          </div>
          <p className="text-xs text-[#778397]">
            Complete searchable repository of {DEMO_CASES.length} indexed Indian court precedents.
          </p>
        </div>

        <button
          onClick={exportToCSV}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-white text-[#101C2C] border border-[#E5E9EF] hover:bg-[#F5F7FA] text-xs font-semibold rounded-lg shadow-2xs transition-all self-start sm:self-auto"
        >
          <FileSpreadsheet className="w-4 h-4 text-[#16856B]" />
          <span>Export Repository (.CSV)</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-xl border border-[#E5E9EF] shadow-2xs flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-[#778397] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            placeholder="Filter library by title, section or keyword..."
            className="w-full pl-9 pr-3 py-1.5 text-xs bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#263445] outline-hidden focus:border-[#C9A45C]"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto py-1">
          {categories.slice(0, 6).map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-[#101C2C] text-[#C9A45C]"
                  : "bg-[#F5F7FA] text-[#778397] hover:bg-[#EEF2F6]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Table of Judgments */}
      <div className="bg-white rounded-xl border border-[#E5E9EF] overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-[#E5E9EF] bg-[#F8FAFC] text-[#778397] font-semibold uppercase text-[10px]">
                <th className="py-3 px-4">Case Details</th>
                <th className="py-3 px-4">Court</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Disposal Date</th>
                <th className="py-3 px-4">Historical Duration</th>
                <th className="py-3 px-4">Status / Outcome</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E5E9EF]">
              {filteredCases.slice(0, 20).map((c) => {
                const isSaved = isCaseSaved(c.id);
                const inComparison = isCaseInComparison(c.id);

                return (
                  <tr key={c.id} className="hover:bg-[#F5F7FA] transition-colors group">
                    <td className="py-3 px-4 max-w-xs">
                      <span
                        onClick={() => navigateTo("judgment-detail", c.id)}
                        className="font-bold text-[#101C2C] hover:text-[#C9A45C] cursor-pointer block truncate"
                      >
                        {c.caseTitle}
                      </span>
                      <span className="text-[10px] text-[#778397] font-mono">
                        {c.caseNumber}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[#263445] font-medium whitespace-nowrap">
                      {c.court}
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-[#F5F7FA] text-[#263445] px-2 py-0.5 rounded text-[11px] border border-[#E5E9EF] whitespace-nowrap">
                        {c.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-[#778397] whitespace-nowrap">
                      {formatDateIndian(c.disposalDate)}
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span className="font-semibold text-[#16856B] flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {c.durationFormatted}
                      </span>
                    </td>
                    <td className="py-3 px-4 whitespace-nowrap">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          c.status === "Disposed" || c.status === "Resolved"
                            ? "bg-[#E7F3EF] text-[#16856B]"
                            : "bg-[#FEF6EC] text-[#D99A38]"
                        }`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5">
                        <button
                          onClick={() => toggleSaveCase(c.id)}
                          className={`p-1 rounded ${
                            isSaved ? "text-[#C9A45C]" : "text-[#778397] hover:text-[#101C2C]"
                          }`}
                          title="Save case"
                        >
                          {isSaved ? (
                            <BookmarkCheck className="w-4 h-4 fill-[#C9A45C]" />
                          ) : (
                            <Bookmark className="w-4 h-4" />
                          )}
                        </button>
                        <button
                          onClick={() => toggleCompareCase(c.id)}
                          className={`p-1 rounded ${
                            inComparison ? "text-[#16856B]" : "text-[#778397] hover:text-[#101C2C]"
                          }`}
                          title="Add to comparison"
                        >
                          <GitCompare className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => navigateTo("judgment-detail", c.id)}
                          className="text-[#C9A45C] hover:text-[#B8934B] font-semibold text-xs ml-1"
                        >
                          View &rarr;
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

