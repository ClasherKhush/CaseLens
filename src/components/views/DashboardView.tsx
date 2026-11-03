"use client";

import React from "react";
import {
  FileText,
  Landmark,
  Gavel,
  Scale,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  Search,
  Compass,
  GitCompare,
  BarChart3,
  Calendar,
} from "lucide-react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";
import { useCaseLens } from "@/context/CaseLensContext";
import { DEMO_CASES } from "@/data/cases";

const courtData = [
  { name: "Supreme Court", value: 3250, percentage: "12.8%", color: "#C9A45C" },
  { name: "High Court", value: 12850, percentage: "50.5%", color: "#1D3046" },
  { name: "District Court", value: 9380, percentage: "36.7%", color: "#778397" },
];

const durationTrendData = [
  { year: "2019", avgDurationMonths: 28, volume: 2100 },
  { year: "2020", avgDurationMonths: 34, volume: 1850 },
  { year: "2021", avgDurationMonths: 29, volume: 2400 },
  { year: "2022", avgDurationMonths: 22, volume: 3100 },
  { year: "2023", avgDurationMonths: 19, volume: 3800 },
];

export function DashboardView() {
  const { navigateTo, applySearch, executeRecentSearch, recentSearches } = useCaseLens();

  const recentJudgments = DEMO_CASES.slice(0, 4);

  return (
    <div className="space-y-6">
      {/* Welcome Hero Banner with Golden Scales */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#101C2C] via-[#1D3046] to-[#101C2C] text-white p-6 sm:p-8 shadow-md border border-[#2D4563]">
        <div className="relative z-10 max-w-2xl">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            Welcome to CaseLens
          </h1>
          <p className="text-sm sm:text-base text-[#E5E9EF]/90 leading-relaxed font-normal">
            Your intelligent workspace for Indian legal precedent discovery. Uncover relevant judgments, compare resolution timelines, and analyze judicial outcomes across High Courts and Supreme Court benches.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={() => navigateTo("search")}
              className="inline-flex items-center gap-2 bg-[#C9A45C] hover:bg-[#B8934B] text-[#101C2C] font-semibold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all shadow-md shadow-[#C9A45C]/20"
            >
              <Search className="w-4 h-4" />
              Search Legal Precedents
            </button>
            <button
              onClick={() => navigateTo("duration-analysis")}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-medium text-xs sm:text-sm px-4 py-2.5 rounded-xl border border-white/20 transition-all backdrop-blur-xs"
            >
              <Clock className="w-4 h-4 text-[#C9A45C]" />
              Explore Duration Insights
            </button>
          </div>
        </div>

        {/* Decorative Golden Scale Background Artwork */}
        <div className="absolute -right-6 -bottom-8 pointer-events-none opacity-20 lg:opacity-30">
          <Scale className="w-72 h-72 text-[#C9A45C] stroke-[1]" />
        </div>
      </div>

      {/* 6 Metric Stat Cards (Realistic Sample Data) */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5">
        <div className="bg-white p-4 rounded-xl border border-[#E5E9EF] shadow-2xs hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#778397]">Total Judgments</span>
            <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] text-[#1D3046] flex items-center justify-center">
              <FileText className="w-4 h-4 text-[#1D3046]" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xl sm:text-2xl font-bold text-[#101C2C]">25,480</p>
            <p className="text-[11px] text-[#16856B] flex items-center gap-1 font-medium mt-0.5">
              <span>+1,240 this month</span>
            </p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#E5E9EF] shadow-2xs hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#778397]">Supreme Court</span>
            <div className="w-8 h-8 rounded-lg bg-[#FDF8EE] text-[#C9A45C] flex items-center justify-center">
              <Landmark className="w-4 h-4 text-[#C9A45C]" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xl sm:text-2xl font-bold text-[#101C2C]">3,250</p>
            <p className="text-[11px] text-[#778397] font-medium mt-0.5">12.8% of repository</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#E5E9EF] shadow-2xs hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#778397]">High Court Cases</span>
            <div className="w-8 h-8 rounded-lg bg-[#F0F4F8] text-[#1D3046] flex items-center justify-center">
              <Gavel className="w-4 h-4 text-[#1D3046]" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xl sm:text-2xl font-bold text-[#101C2C]">12,850</p>
            <p className="text-[11px] text-[#778397] font-medium mt-0.5">25 High Courts</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#E5E9EF] shadow-2xs hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#778397]">District Courts</span>
            <div className="w-8 h-8 rounded-lg bg-[#F5F7FA] text-[#778397] flex items-center justify-center">
              <Scale className="w-4 h-4 text-[#778397]" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xl sm:text-2xl font-bold text-[#101C2C]">9,380</p>
            <p className="text-[11px] text-[#778397] font-medium mt-0.5">Trial & Sessions</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#E5E9EF] shadow-2xs hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#778397]">Resolved Cases</span>
            <div className="w-8 h-8 rounded-lg bg-[#E7F3EF] text-[#16856B] flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-[#16856B]" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xl sm:text-2xl font-bold text-[#101C2C]">18,420</p>
            <p className="text-[11px] text-[#16856B] font-medium mt-0.5">72.3% Disposed</p>
          </div>
        </div>

        <div className="bg-white p-4 rounded-xl border border-[#E5E9EF] shadow-2xs hover:shadow-sm transition-shadow">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-[#778397]">Pending Cases</span>
            <div className="w-8 h-8 rounded-lg bg-[#FEF6EC] text-[#D99A38] flex items-center justify-center">
              <Clock className="w-4 h-4 text-[#D99A38]" />
            </div>
          </div>
          <div className="mt-2">
            <p className="text-xl sm:text-2xl font-bold text-[#101C2C]">7,060</p>
            <p className="text-[11px] text-[#D99A38] font-medium mt-0.5">Active Adjudication</p>
          </div>
        </div>
      </div>

      {/* Main Charts Row: Case Database Overview Donut & Duration Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Donut Chart: Database Overview */}
        <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-sm font-bold text-[#101C2C]">Case Database Overview</h2>
              <span className="text-[11px] font-medium text-[#778397]">Indexed Benches</span>
            </div>
            <p className="text-xs text-[#778397] mb-4">
              Breakdown of demonstration case distribution across judicial tiers.
            </p>

            <div className="h-56 relative">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={courtData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {courtData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(value: any, name: any, item: any) => [
                      `${value.toLocaleString()} cases (${item.payload.percentage})`,
                      item.payload.name,
                    ]}
                    contentStyle={{
                      backgroundColor: "#101C2C",
                      color: "#FFFFFF",
                      borderRadius: "8px",
                      border: "none",
                      fontSize: "12px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                <span className="text-xs text-[#778397] font-medium">Total</span>
                <span className="text-base font-bold text-[#101C2C]">25,480</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-4 border-t border-[#E5E9EF]">
            {courtData.map((tier) => (
              <div key={tier.name} className="flex flex-col text-center">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: tier.color }}
                  />
                  <span className="text-[11px] font-medium text-[#778397] truncate">
                    {tier.name}
                  </span>
                </div>
                <span className="text-xs font-bold text-[#101C2C]">{tier.percentage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bar Chart: Case Duration Trend */}
        <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-sm font-bold text-[#101C2C]">Case Duration Trend (2019–2023)</h2>
              <span className="text-[11px] font-medium text-[#16856B] bg-[#E7F3EF] px-2 py-0.5 rounded-md">
                -32% Disposal Time
              </span>
            </div>
            <p className="text-xs text-[#778397] mb-4">
              Historical average disposal duration (in months) of indexed judgments.
            </p>

            <div className="h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={durationTrendData} margin={{ top: 10, right: 10, left: -15, bottom: 0 }}>
                  <XAxis dataKey="year" tickLine={false} axisLine={{ stroke: "#E5E9EF" }} tick={{ fill: "#778397", fontSize: 11 }} />
                  <YAxis tickLine={false} axisLine={{ stroke: "#E5E9EF" }} tick={{ fill: "#778397", fontSize: 11 }} unit="m" />
                  <Tooltip
                    formatter={(val: any) => [`${val} Months`, "Avg Resolution Duration"]}
                    contentStyle={{
                      backgroundColor: "#101C2C",
                      color: "#FFFFFF",
                      borderRadius: "8px",
                      border: "none",
                      fontSize: "12px",
                    }}
                  />
                  <Bar
                    dataKey="avgDurationMonths"
                    fill="#1D3046"
                    radius={[6, 6, 0, 0]}
                    activeBar={{ fill: "#C9A45C" }}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="pt-3 border-t border-[#E5E9EF] flex items-center justify-between text-xs text-[#778397]">
            <span>Resolution efficiency improved with digital e-filing & commercial courts</span>
            <button
              onClick={() => navigateTo("duration-analysis")}
              className="text-[#C9A45C] font-semibold hover:underline flex items-center gap-1"
            >
              Detailed Breakdown <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Middle Grid: Recent Searches & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Recent Searches List */}
        <div className="lg:col-span-6 bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm font-bold text-[#101C2C]">Recent Searches</h2>
            <button
              onClick={() => navigateTo("recent")}
              className="text-xs font-semibold text-[#C9A45C] hover:underline"
            >
              View all
            </button>
          </div>
          <p className="text-xs text-[#778397] mb-3">
            Click any past query to instantly re-execute precedent discovery.
          </p>

          <div className="space-y-2">
            {recentSearches.slice(0, 5).map((search) => (
              <div
                key={search.id}
                onClick={() => executeRecentSearch(search.query)}
                className="flex items-center justify-between p-2.5 rounded-lg hover:bg-[#F5F7FA] border border-transparent hover:border-[#E5E9EF] cursor-pointer transition-all group"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Search className="w-3.5 h-3.5 text-[#778397] group-hover:text-[#C9A45C] shrink-0" />
                  <span className="text-xs text-[#263445] font-medium group-hover:text-[#101C2C] truncate">
                    {search.query}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {search.category && (
                    <span className="text-[10px] text-[#778397] bg-[#F5F7FA] px-2 py-0.5 rounded border border-[#E5E9EF]">
                      {search.category}
                    </span>
                  )}
                  <ArrowRight className="w-3.5 h-3.5 text-[#778397] group-hover:text-[#C9A45C] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions Panel */}
        <div className="lg:col-span-6 bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs flex flex-col justify-between">
          <div>
            <h2 className="text-sm font-bold text-[#101C2C] mb-1">Quick Actions</h2>
            <p className="text-xs text-[#778397] mb-4">
              Rapid workflows for advocates, legal researchers and judicial clerks.
            </p>

            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => navigateTo("search")}
                className="flex flex-col items-start p-3.5 rounded-xl bg-[#F5F7FA] hover:bg-[#EEF2F6] border border-[#E5E9EF] transition-all group text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E9EF] text-[#1D3046] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <Search className="w-4 h-4 text-[#C9A45C]" />
                </div>
                <span className="text-xs font-bold text-[#101C2C]">Search New Case</span>
                <span className="text-[11px] text-[#778397] mt-0.5">Natural language query</span>
              </button>

              <button
                onClick={() => navigateTo("explorer")}
                className="flex flex-col items-start p-3.5 rounded-xl bg-[#F5F7FA] hover:bg-[#EEF2F6] border border-[#E5E9EF] transition-all group text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E9EF] text-[#1D3046] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <Compass className="w-4 h-4 text-[#16856B]" />
                </div>
                <span className="text-xs font-bold text-[#101C2C]">Explore Precedents</span>
                <span className="text-[11px] text-[#778397] mt-0.5">Filter by court & year</span>
              </button>

              <button
                onClick={() => navigateTo("comparison")}
                className="flex flex-col items-start p-3.5 rounded-xl bg-[#F5F7FA] hover:bg-[#EEF2F6] border border-[#E5E9EF] transition-all group text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E9EF] text-[#1D3046] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <GitCompare className="w-4 h-4 text-[#D99A38]" />
                </div>
                <span className="text-xs font-bold text-[#101C2C]">Compare Judgments</span>
                <span className="text-[11px] text-[#778397] mt-0.5">Side-by-side matrices</span>
              </button>

              <button
                onClick={() => navigateTo("analytics")}
                className="flex flex-col items-start p-3.5 rounded-xl bg-[#F5F7FA] hover:bg-[#EEF2F6] border border-[#E5E9EF] transition-all group text-left"
              >
                <div className="w-8 h-8 rounded-lg bg-white border border-[#E5E9EF] text-[#1D3046] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
                  <BarChart3 className="w-4 h-4 text-[#1D3046]" />
                </div>
                <span className="text-xs font-bold text-[#101C2C]">View Analytics</span>
                <span className="text-[11px] text-[#778397] mt-0.5">Disposition trends</span>
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-[#E5E9EF] mt-4 flex items-center justify-between">
            <span className="text-[11px] text-[#778397]">
              Need help structuring research queries?
            </span>
            <button
              onClick={() => navigateTo("help")}
              className="text-xs text-[#1D3046] font-semibold hover:underline"
            >
              Read User Guide
            </button>
          </div>
        </div>
      </div>

      {/* Section C: Recently Viewed Judgments */}
      <div className="bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-sm font-bold text-[#101C2C]">Featured Benchmark Judgments</h2>
            <p className="text-xs text-[#778397]">
              Demonstration precedents showcasing key legal principles and calculated durations.
            </p>
          </div>
          <button
            onClick={() => navigateTo("library")}
            className="text-xs font-semibold text-[#C9A45C] hover:underline flex items-center gap-1"
          >
            Explore Library ({DEMO_CASES.length}) <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {recentJudgments.map((item) => (
            <div
              key={item.id}
              onClick={() => navigateTo("judgment-detail", item.id)}
              className="p-4 rounded-xl border border-[#E5E9EF] hover:border-[#C9A45C]/50 hover:shadow-xs transition-all cursor-pointer bg-[#FCFDFE] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[10px] font-semibold text-[#778397] bg-[#F5F7FA] px-2 py-0.5 rounded border border-[#E5E9EF]">
                    {item.caseNumber}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                      item.status === "Disposed" || item.status === "Resolved"
                        ? "bg-[#E7F3EF] text-[#16856B]"
                        : "bg-[#FEF6EC] text-[#D99A38]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 className="text-xs font-bold text-[#101C2C] group-hover:text-[#C9A45C] transition-colors line-clamp-1 mb-1">
                  {item.caseTitle}
                </h3>
                <p className="text-[11px] text-[#778397] mb-2">{item.court}</p>
                <p className="text-xs text-[#263445]/80 line-clamp-2 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-[#E5E9EF] flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-1 text-[#16856B] font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{item.durationFormatted}</span>
                </div>
                <span className="text-[#C9A45C] font-semibold group-hover:translate-x-1 transition-transform">
                  View &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

