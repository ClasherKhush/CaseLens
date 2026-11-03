"use client";

import React from "react";
import { History, Search, ArrowRight, Trash2, RotateCcw } from "lucide-react";
import { useCaseLens } from "@/context/CaseLensContext";

export function RecentSearchesView() {
  const { recentSearches, executeRecentSearch, clearRecentSearches, navigateTo } =
    useCaseLens();

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <History className="w-5 h-5 text-[#C9A45C]" />
            <h1 className="text-xl font-bold text-[#101C2C]">Recent Searches</h1>
          </div>
          <p className="text-xs text-[#778397]">
            Audit log of previous precedent searches and filtered queries.
          </p>
        </div>

        {recentSearches.length > 0 && (
          <button
            onClick={clearRecentSearches}
            className="text-xs text-[#D9534F] hover:underline font-semibold flex items-center gap-1"
          >
            <Trash2 className="w-3.5 h-3.5" />
            Clear History
          </button>
        )}
      </div>

      {recentSearches.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-xl border border-[#E5E9EF] shadow-2xs">
          <History className="w-10 h-10 text-[#778397] mx-auto mb-3" />
          <h2 className="text-base font-bold text-[#101C2C] mb-1">No Search History Yet</h2>
          <p className="text-xs text-[#778397] max-w-sm mx-auto mb-4">
            Perform a natural language query or filter case categories to build your research log.
          </p>
          <button
            onClick={() => navigateTo("search")}
            className="px-4 py-2 bg-[#101C2C] text-white text-xs font-semibold rounded-lg hover:bg-[#1D3046]"
          >
            Start Legal Search
          </button>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-[#E5E9EF] divide-y divide-[#E5E9EF] overflow-hidden shadow-2xs">
          {recentSearches.map((item) => (
            <div
              key={item.id}
              onClick={() => executeRecentSearch(item.query)}
              className="p-4 hover:bg-[#F5F7FA] transition-colors cursor-pointer flex items-center justify-between gap-4 group"
            >
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] group-hover:bg-[#FDF8EE] text-[#778397] group-hover:text-[#C9A45C] flex items-center justify-center transition-colors shrink-0">
                  <Search className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-[#101C2C] group-hover:text-[#C9A45C] transition-colors truncate">
                    {item.query}
                  </p>
                  <div className="flex items-center gap-2 text-xs text-[#778397] mt-0.5">
                    {item.category && (
                      <span className="font-medium text-[#1D3046]">{item.category}</span>
                    )}
                    {item.category && <span>•</span>}
                    <span>{item.timestamp}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs font-semibold text-[#16856B] bg-[#E7F3EF] px-2.5 py-1 rounded-md">
                  {item.resultCount} Precedents
                </span>
                <ArrowRight className="w-4 h-4 text-[#778397] group-hover:text-[#C9A45C] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

