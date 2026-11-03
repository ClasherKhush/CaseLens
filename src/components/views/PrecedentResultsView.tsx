"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  ArrowUpDown,
  Bookmark,
  BookmarkCheck,
  GitCompare,
  CheckSquare,
  Square,
  Clock,
  ArrowRight,
  ExternalLink,
  SlidersHorizontal,
  X,
  ChevronLeft,
  ChevronRight,
  Info,
} from "lucide-react";
import { useCaseLens } from "@/context/CaseLensContext";
import { formatDurationInYears } from "@/lib/durationUtils";

export function PrecedentResultsView() {
  const {
    searchResponse,
    filters,
    updateFilter,
    applySearch,
    navigateTo,
    toggleSaveCase,
    isCaseSaved,
    toggleCompareCase,
    isCaseInComparison,
    comparisonCaseIds,
  } = useCaseLens();

  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 8;

  const totalMatches = searchResponse.totalMatches;
  const totalPages = Math.ceil(totalMatches / pageSize) || 1;
  const startIndex = (currentPage - 1) * pageSize;
  const displayedCases = searchResponse.results.slice(startIndex, startIndex + pageSize);

  const handleSortChange = (newSort: any) => {
    updateFilter("sortBy", newSort);
    // Re-run search with new sort
    setTimeout(() => {
      applySearch();
    }, 50);
  };

  const removeFilter = (filterKey: keyof typeof filters, defaultValue: any) => {
    updateFilter(filterKey, defaultValue);
    setTimeout(() => {
      applySearch();
    }, 50);
  };

  return (
    <div className="space-y-5">
      {/* Top Banner: Results count & Query & Sort by */}
      <div className="bg-white p-4 sm:p-5 rounded-xl border border-[#E5E9EF] shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm sm:text-base font-bold text-[#101C2C]">
              Found {totalMatches} similar cases for:
            </span>
            <span className="text-sm sm:text-base font-bold text-[#C9A45C] bg-[#FDF8EE] px-2.5 py-0.5 rounded-lg border border-[#C9A45C]/30 truncate max-w-xs">
              &quot;{filters.query || "All Indian Judgments"}&quot;
            </span>
          </div>
          <p className="text-xs text-[#778397]">
            Showing precedent matches ranked by legal issue similarity & duration efficiency.
          </p>
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2 self-start md:self-auto shrink-0">
          <span className="text-xs font-semibold text-[#778397] whitespace-nowrap">
            Sort by:
          </span>
          <select
            value={filters.sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
            className="px-3 py-1.5 text-xs font-semibold bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#101C2C] focus:outline-hidden focus:border-[#C9A45C]"
          >
            <option value="duration_asc">Shortest Duration</option>
            <option value="relevance">Highest Relevance</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="duration_desc">Longest Duration</option>
          </select>
        </div>
      </div>

      {/* Active Filter Chips */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <span className="text-[#778397] font-medium mr-1 flex items-center gap-1">
          <Filter className="w-3.5 h-3.5" /> Active Filters:
        </span>

        {filters.category && filters.category !== "All Categories" && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#E5E9EF] text-[#263445] font-medium shadow-2xs">
            {filters.category}
            <button
              onClick={() => removeFilter("category", "All Categories")}
              className="hover:text-[#D9534F] ml-0.5"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        )}

        {filters.court && filters.court !== "All Courts" && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#E5E9EF] text-[#263445] font-medium shadow-2xs">
            {filters.court}
            <button
              onClick={() => removeFilter("court", "All Courts")}
              className="hover:text-[#D9534F] ml-0.5"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        )}

        {filters.status && filters.status !== "All Status" && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#E5E9EF] text-[#263445] font-medium shadow-2xs">
            Status: {filters.status}
            <button
              onClick={() => removeFilter("status", "All Status")}
              className="hover:text-[#D9534F] ml-0.5"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        )}

        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white border border-[#E5E9EF] text-[#263445] font-medium shadow-2xs">
          {filters.yearMin}–{filters.yearMax}
        </span>

        {filters.sortBy === "duration_asc" && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#E7F3EF] border border-[#16856B]/30 text-[#16856B] font-semibold shadow-2xs">
            Shorter Duration Prioritized
          </span>
        )}

        <button
          onClick={() => navigateTo("search")}
          className="text-xs text-[#C9A45C] font-semibold hover:underline ml-auto flex items-center gap-1"
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          Edit Search & Filters
        </button>
      </div>

      {/* Case Comparison Dock Bar (Floating if cases are selected) */}
      {comparisonCaseIds.length > 0 && (
        <div className="bg-[#101C2C] text-white p-3.5 rounded-xl flex items-center justify-between gap-3 shadow-lg border border-[#C9A45C]/30">
          <div className="flex items-center gap-2.5 text-xs">
            <div className="w-6 h-6 rounded-full bg-[#C9A45C] text-[#101C2C] font-bold flex items-center justify-center text-xs">
              {comparisonCaseIds.length}
            </div>
            <span className="font-semibold text-sm">
              {comparisonCaseIds.length} of 4 Cases Selected for Side-by-Side Comparison
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateTo("comparison")}
              className="bg-[#C9A45C] hover:bg-[#B8934B] text-[#101C2C] font-bold text-xs px-3.5 py-1.5 rounded-lg transition-all shadow-xs"
            >
              Open Comparison Matrix &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Case Result Cards List matching Image 5 Panel 3 */}
      {displayedCases.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-xl border border-[#E5E9EF]">
          <Search className="w-10 h-10 text-[#778397] mx-auto mb-3" />
          <h3 className="text-base font-bold text-[#101C2C] mb-1">No Matching Precedents Found</h3>
          <p className="text-xs text-[#778397] max-w-md mx-auto mb-4">
            Try adjusting your search terms, broadening the court selection, or clearing filter constraints.
          </p>
          <button
            onClick={() => navigateTo("search")}
            className="px-4 py-2 bg-[#C9A45C] text-[#101C2C] font-bold text-xs rounded-lg"
          >
            Modify Search Criteria
          </button>
        </div>
      ) : (
        <div className="space-y-3.5">
          {displayedCases.map((caseItem) => {
            const isSaved = isCaseSaved(caseItem.id);
            const inComparison = isCaseInComparison(caseItem.id);
            const year = caseItem.judgmentDate
              ? caseItem.judgmentDate.substring(0, 4)
              : caseItem.filingDate.substring(0, 4);

            return (
              <div
                key={caseItem.id}
                className="bg-white rounded-xl border border-[#E5E9EF] hover:border-[#C9A45C]/60 hover:shadow-md transition-all p-4 sm:p-5 flex flex-col md:flex-row items-start justify-between gap-4 group"
              >
                {/* Left Area: Similarity badge + Details */}
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  {/* Similarity Pill Badge matching Image 5 Panel 3 */}
                  <div className="hidden sm:flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-[#E7F3EF] border border-[#16856B]/30 text-[#16856B] shrink-0 p-1 text-center">
                    <span className="text-base font-extrabold leading-none">
                      {caseItem.similarityScore}%
                    </span>
                    <span className="text-[9px] font-semibold uppercase tracking-wider mt-0.5">
                      Similarity
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    {/* Title + Save bookmark + Status */}
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <div className="sm:hidden inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-[#E7F3EF] text-[#16856B]">
                        {caseItem.similarityScore}% Similarity
                      </div>
                      <h3
                        onClick={() => navigateTo("judgment-detail", caseItem.id)}
                        className="text-sm sm:text-base font-bold text-[#101C2C] hover:text-[#C9A45C] transition-colors cursor-pointer truncate max-w-lg"
                      >
                        {caseItem.caseTitle}
                      </h3>
                      <button
                        onClick={() => toggleSaveCase(caseItem.id)}
                        className={`p-1 rounded transition-colors ${
                          isSaved ? "text-[#C9A45C]" : "text-[#778397] hover:text-[#101C2C]"
                        }`}
                        title={isSaved ? "Remove from saved" : "Save case"}
                      >
                        {isSaved ? (
                          <BookmarkCheck className="w-4 h-4 fill-[#C9A45C]" />
                        ) : (
                          <Bookmark className="w-4 h-4" />
                        )}
                      </button>
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                          caseItem.status === "Disposed" || caseItem.status === "Resolved"
                            ? "bg-[#E7F3EF] text-[#16856B]"
                            : "bg-[#FEF6EC] text-[#D99A38]"
                        }`}
                      >
                        {caseItem.status}
                      </span>
                      <span className="text-[10px] font-medium text-[#778397] bg-[#F5F7FA] px-1.5 py-0.5 rounded border border-[#E5E9EF]">
                        {caseItem.sourceType}
                      </span>
                    </div>

                    {/* Metadata line matching Image 5 Panel 3: Court | Year | Duration */}
                    <div className="flex flex-wrap items-center gap-3 text-xs text-[#778397] font-medium mb-2.5">
                      <span className="text-[#1D3046] font-semibold">{caseItem.court}</span>
                      <span>•</span>
                      <span>{year}</span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-[#16856B] font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        {caseItem.durationFormatted}
                      </span>
                      <span>•</span>
                      <span className="text-[#778397]">{caseItem.caseNumber}</span>
                    </div>

                    {/* Case Summary */}
                    <p className="text-xs text-[#263445]/90 line-clamp-2 leading-relaxed mb-3">
                      {caseItem.summary}
                    </p>

                    {/* Important Legal Issues Chips */}
                    <div className="flex flex-wrap items-center gap-1.5 mb-3">
                      {caseItem.legalIssues.slice(0, 4).map((issue) => (
                        <span
                          key={issue}
                          className="text-[11px] bg-[#F5F7FA] text-[#263445] px-2 py-0.5 rounded-md border border-[#E5E9EF]"
                        >
                          {issue}
                        </span>
                      ))}
                    </div>

                    {/* Action Links: View Details & Compare */}
                    <div className="flex items-center gap-4 text-xs font-semibold">
                      <button
                        onClick={() => navigateTo("judgment-detail", caseItem.id)}
                        className="text-[#C9A45C] hover:text-[#B8934B] flex items-center gap-1 transition-colors"
                      >
                        <span>View Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => toggleCompareCase(caseItem.id)}
                        className={`flex items-center gap-1.5 transition-colors ${
                          inComparison ? "text-[#16856B]" : "text-[#778397] hover:text-[#101C2C]"
                        }`}
                      >
                        {inComparison ? (
                          <CheckSquare className="w-3.5 h-3.5 text-[#16856B]" />
                        ) : (
                          <Square className="w-3.5 h-3.5 text-[#778397]" />
                        )}
                        <span>{inComparison ? "In Comparison" : "Compare"}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Area: Key Benefit Box matching Image 5 Panel 3 */}
                {caseItem.durationDays !== null && (
                  <div className="w-full md:w-48 bg-[#F0FDF4] border border-[#BBF7D0] rounded-xl p-3 flex flex-col justify-between shrink-0">
                    <span className="text-[10px] font-bold text-[#166534] uppercase tracking-wider">
                      Key Duration Benefit
                    </span>
                    <div className="mt-1.5 flex items-center gap-2 text-[#15803D]">
                      <Clock className="w-4 h-4 text-[#16856B] shrink-0" />
                      <span className="text-xs font-bold">
                        Resolved in {formatDurationInYears(caseItem.durationDays)}
                      </span>
                    </div>
                    <p className="text-[10px] text-[#166534]/80 mt-1 leading-tight">
                      Total elapsed adjudication time: {caseItem.durationDays} days.
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* Pagination Bar */}
      {totalPages > 1 && (
        <div className="bg-white p-4 rounded-xl border border-[#E5E9EF] flex items-center justify-between text-xs text-[#778397]">
          <span>
            Showing {startIndex + 1} to {Math.min(startIndex + pageSize, totalMatches)} of{" "}
            {totalMatches} cases
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-2.5 py-1.5 rounded-lg border border-[#E5E9EF] hover:bg-[#F5F7FA] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 font-medium"
            >
              <ChevronLeft className="w-3.5 h-3.5" /> Previous
            </button>
            <span className="px-2 font-bold text-[#101C2C]">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-2.5 py-1.5 rounded-lg border border-[#E5E9EF] hover:bg-[#F5F7FA] disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1 font-medium"
            >
              Next <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

