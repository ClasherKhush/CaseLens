"use client";

import React from "react";
import {
  GitCompare,
  X,
  Plus,
  Clock,
  Gavel,
  CheckCircle2,
  AlertCircle,
  Scale,
  ArrowRight,
  TrendingDown,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  CartesianGrid,
} from "recharts";
import { useCaseLens } from "@/context/CaseLensContext";
import { DEMO_CASES } from "@/data/cases";
import { formatDurationInYears } from "@/lib/durationUtils";

export function CaseComparisonView() {
  const {
    comparisonCaseIds,
    removeFromComparison,
    clearComparison,
    navigateTo,
    showToast,
  } = useCaseLens();

  const comparisonCases = comparisonCaseIds
    .map((id) => DEMO_CASES.find((c) => c.id === id))
    .filter(Boolean) as (typeof DEMO_CASES)[0][];

  // If no cases selected, show guidance & fast-populate button
  if (comparisonCases.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-[#E5E9EF] p-12 text-center max-w-xl mx-auto shadow-2xs">
        <div className="w-12 h-12 rounded-xl bg-[#F5F7FA] text-[#C9A45C] flex items-center justify-center mx-auto mb-4">
          <GitCompare className="w-6 h-6" />
        </div>
        <h2 className="text-base font-bold text-[#101C2C] mb-2">No Cases Selected for Comparison</h2>
        <p className="text-xs text-[#778397] mb-6 leading-relaxed">
          Select between 2 and 4 Indian court judgments from the Precedent Explorer to compare their case facts, legal issues, outcome distinctions, and historical durations side by side.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={() => navigateTo("explorer")}
            className="w-full sm:w-auto px-4 py-2 bg-[#101C2C] text-white font-semibold text-xs rounded-lg hover:bg-[#1D3046] transition-colors"
          >
            Go to Precedent Explorer
          </button>
          <button
            onClick={() => {
              // Load default 3 cases from Image 5
              localStorage.setItem("caselens_compare", JSON.stringify(["CL-1001", "CL-1002", "CL-1003"]));
              window.location.reload();
            }}
            className="w-full sm:w-auto px-4 py-2 bg-[#C9A45C] text-[#101C2C] font-bold text-xs rounded-lg hover:bg-[#B8934B] transition-colors"
          >
            Load Sample Comparison (3 Cases)
          </button>
        </div>
      </div>
    );
  }

  // Identify the shortest case
  const casesWithDuration = comparisonCases.filter(
    (c) => c.durationDays !== null && c.durationDays > 0
  );
  const shortestCase =
    casesWithDuration.length > 0
      ? casesWithDuration.reduce((min, cur) =>
          (cur.durationDays || 0) < (min.durationDays || 0) ? cur : min
        )
      : null;

  // Mini Chart data for comparing durations side by side
  const durationComparisonMiniChart = comparisonCases.map((c) => ({
    name: c.caseTitle.split(" vs ")[0] || c.caseTitle,
    years: c.durationDays ? parseFloat((c.durationDays / 365.25).toFixed(1)) : 0,
    formatted: c.durationFormatted,
    isShortest: shortestCase ? c.id === shortestCase.id : false,
  }));

  return (
    <div className="space-y-6">
      {/* Top Header matching Image 5 Panel 6 */}
      <div className="bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <GitCompare className="w-5 h-5 text-[#C9A45C]" />
            <h1 className="text-xl font-bold text-[#101C2C]">Compare Legal Cases</h1>
          </div>
          <p className="text-xs text-[#778397]">
            Side-by-side comparative analysis of {comparisonCases.length} judgments.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigateTo("explorer")}
            className="text-xs font-semibold text-[#1D3046] hover:text-[#C9A45C] flex items-center gap-1"
          >
            <Plus className="w-3.5 h-3.5" />
            Add More Cases ({4 - comparisonCases.length} remaining)
          </button>
          <button
            onClick={clearComparison}
            className="text-xs font-semibold text-[#D9534F] hover:underline"
          >
            Clear All
          </button>
        </div>
      </div>

      {/* Key Insight Highlight Banner matching Image 5 Panel 6 */}
      {shortestCase && (
        <div className="bg-[#FFFDF7] border-l-4 border-[#C9A45C] border-y border-r border-[#F3E5AB] p-4 rounded-xl flex items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#FDF8EE] text-[#C9A45C] flex items-center justify-center shrink-0">
              <Scale className="w-4 h-4 text-[#C9A45C]" />
            </div>
            <div>
              <p className="text-xs font-bold text-[#101C2C]">
                Key Insight: {shortestCase.caseTitle} was resolved in the shortest period ({shortestCase.durationFormatted}).
              </p>
              <p className="text-[11px] text-[#778397] mt-0.5">
                Adjudicated in {shortestCase.court} across {shortestCase.durationDays} calendar days.
              </p>
            </div>
          </div>
          <button
            onClick={() => navigateTo("judgment-detail", shortestCase.id)}
            className="text-xs text-[#C9A45C] font-bold hover:underline shrink-0 hidden sm:inline-block"
          >
            View Ruling &rarr;
          </button>
        </div>
      )}

      {/* Mini Visual Chart for Duration Comparison */}
      <div className="bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs">
        <h2 className="text-xs font-bold uppercase tracking-wider text-[#778397] mb-3">
          Comparative Historical Resolution Timeline (Years)
        </h2>
        <div className="h-44">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={durationComparisonMiniChart} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F3F6" />
              <XAxis dataKey="name" tickLine={false} axisLine={{ stroke: "#E5E9EF" }} tick={{ fill: "#101C2C", fontSize: 11, fontWeight: 600 }} />
              <YAxis tickLine={false} axisLine={{ stroke: "#E5E9EF" }} tick={{ fill: "#778397", fontSize: 11 }} unit="y" />
              <Tooltip
                formatter={(val: any, name: any, item: any) => [
                  `${item.payload.formatted} (${val} years)`,
                  "Duration",
                ]}
                contentStyle={{
                  backgroundColor: "#101C2C",
                  color: "#FFFFFF",
                  borderRadius: "8px",
                  border: "none",
                  fontSize: "12px",
                }}
              />
              <Bar dataKey="years" radius={[6, 6, 0, 0]}>
                {durationComparisonMiniChart.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.isShortest ? "#16856B" : "#1D3046"}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Side-by-Side Comparison Table matching Image 5 Panel 6 */}
      <div className="bg-white rounded-xl border border-[#E5E9EF] overflow-hidden shadow-2xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-[#E5E9EF] bg-[#F8FAFC]">
                <th className="py-4 px-4 font-bold text-[#778397] uppercase tracking-wider text-[11px] w-48 shrink-0">
                  Parameter
                </th>
                {comparisonCases.map((c) => {
                  const isShortest = shortestCase && c.id === shortestCase.id;
                  const year = c.judgmentDate
                    ? c.judgmentDate.substring(0, 4)
                    : c.filingDate.substring(0, 4);

                  return (
                    <th key={c.id} className="py-4 px-4 min-w-[260px] align-top">
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <span
                          onClick={() => navigateTo("judgment-detail", c.id)}
                          className="font-bold text-sm text-[#101C2C] hover:text-[#C9A45C] cursor-pointer"
                        >
                          {c.caseTitle}
                        </span>
                        <button
                          onClick={() => removeFromComparison(c.id)}
                          className="p-1 text-[#778397] hover:text-[#D9534F] rounded transition-colors"
                          title="Remove case"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-[#778397] font-medium mb-1">
                        {c.court} • {year}
                      </div>

                      <div className="inline-flex items-center gap-1 font-bold text-xs text-[#16856B] bg-[#E7F3EF] px-2 py-0.5 rounded">
                        <Clock className="w-3 h-3" />
                        {c.durationFormatted}
                        {isShortest && " (Shortest)"}
                      </div>
                    </th>
                  );
                })}
              </tr>
            </thead>

            <tbody className="divide-y divide-[#E5E9EF]">
              {/* Row 1: Case Facts */}
              <tr className="hover:bg-[#FCFDFE]">
                <td className="py-3.5 px-4 font-bold text-[#101C2C] bg-[#FBFCFD] align-top">
                  Case Facts
                </td>
                {comparisonCases.map((c) => (
                  <td key={c.id} className="py-3.5 px-4 text-[#263445] leading-relaxed align-top">
                    {c.facts}
                  </td>
                ))}
              </tr>

              {/* Row 2: Legal Issues */}
              <tr className="hover:bg-[#FCFDFE]">
                <td className="py-3.5 px-4 font-bold text-[#101C2C] bg-[#FBFCFD] align-top">
                  Legal Issues
                </td>
                {comparisonCases.map((c) => (
                  <td key={c.id} className="py-3.5 px-4 align-top">
                    <ul className="space-y-1">
                      {c.legalIssues.map((issue, idx) => (
                        <li key={idx} className="flex items-center gap-1.5 text-[#263445]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Row 3: Final Outcome */}
              <tr className="hover:bg-[#FCFDFE]">
                <td className="py-3.5 px-4 font-bold text-[#101C2C] bg-[#FBFCFD] align-top">
                  Final Outcome
                </td>
                {comparisonCases.map((c) => (
                  <td key={c.id} className="py-3.5 px-4 align-top">
                    <span
                      className={`inline-block font-semibold px-2.5 py-1 rounded-md text-xs ${
                        c.outcome.includes("Successful") || c.outcome === "Allowed"
                          ? "bg-[#E7F3EF] text-[#16856B]"
                          : c.outcome === "Partially Allowed" || c.outcome === "Partially Successful"
                          ? "bg-[#FEF6EC] text-[#D99A38]"
                          : "bg-[#FDF2F2] text-[#D9534F]"
                      }`}
                    >
                      {c.outcome}
                    </span>
                  </td>
                ))}
              </tr>

              {/* Row 4: Historical Duration */}
              <tr className="hover:bg-[#FCFDFE]">
                <td className="py-3.5 px-4 font-bold text-[#101C2C] bg-[#FBFCFD] align-top">
                  Duration Elapsed
                </td>
                {comparisonCases.map((c) => (
                  <td key={c.id} className="py-3.5 px-4 align-top font-medium text-[#101C2C]">
                    <div className="font-bold text-[#16856B]">{c.durationFormatted}</div>
                    <div className="text-[11px] text-[#778397] mt-0.5">
                      {c.durationDays ? `${c.durationDays} days total` : "Ongoing"}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Row 5: Relevant Legal Sections */}
              <tr className="hover:bg-[#FCFDFE]">
                <td className="py-3.5 px-4 font-bold text-[#101C2C] bg-[#FBFCFD] align-top">
                  Legal Sections
                </td>
                {comparisonCases.map((c) => (
                  <td key={c.id} className="py-3.5 px-4 align-top">
                    <div className="flex flex-wrap gap-1">
                      {c.legalSections.map((sec, idx) => (
                        <span
                          key={idx}
                          className="bg-[#F5F7FA] text-[#101C2C] px-2 py-0.5 rounded text-[11px] border border-[#E5E9EF]"
                        >
                          {sec}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* Row 6: Legal Principles */}
              <tr className="hover:bg-[#FCFDFE]">
                <td className="py-3.5 px-4 font-bold text-[#101C2C] bg-[#FBFCFD] align-top">
                  Established Principles
                </td>
                {comparisonCases.map((c) => (
                  <td key={c.id} className="py-3.5 px-4 text-[#263445] text-xs leading-relaxed align-top">
                    {c.legalPrinciples[0]}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

