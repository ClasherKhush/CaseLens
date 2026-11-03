"use client";

import React, { useState } from "react";
import {
  BarChart3,
  PieChart as PieIcon,
  TrendingUp,
  Clock,
  Scale,
  Gavel,
  Filter,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";
import { DEMO_CASES } from "@/data/cases";

const categoryDistributionData = [
  { name: "Property Dispute", count: 24, fill: "#101C2C" },
  { name: "Civil Litigation", count: 18, fill: "#1D3046" },
  { name: "Criminal Law", count: 18, fill: "#C9A45C" },
  { name: "Family Law", count: 12, fill: "#16856B" },
  { name: "Contract Dispute", count: 12, fill: "#2563EB" },
  { name: "Consumer Protection", count: 12, fill: "#D99A38" },
  { name: "Employment Law", count: 12, fill: "#8B5CF6" },
  { name: "Land Acquisition", count: 7, fill: "#EC4899" },
  { name: "Constitutional Law", count: 7, fill: "#06B6D4" },
];

const yearlyAdjudicationData = [
  { year: "2018", cases: 14, disposed: 14, avgDurationYears: 3.8 },
  { year: "2019", cases: 21, disposed: 20, avgDurationYears: 3.4 },
  { year: "2020", cases: 26, disposed: 24, avgDurationYears: 3.1 },
  { year: "2021", cases: 29, disposed: 26, avgDurationYears: 2.7 },
  { year: "2022", cases: 22, disposed: 19, avgDurationYears: 2.1 },
  { year: "2023", cases: 10, disposed: 7, avgDurationYears: 1.6 },
];

const courtWiseData = [
  { court: "Supreme Court", count: 18, color: "#C9A45C" },
  { court: "Delhi High Court", count: 28, color: "#1D3046" },
  { court: "Bombay High Court", count: 22, color: "#2563EB" },
  { court: "Rajasthan High Court", count: 19, color: "#16856B" },
  { court: "Allahabad High Court", count: 15, color: "#D99A38" },
  { court: "Other High Courts", count: 20, color: "#778397" },
];

const avgDurationByCategory = [
  { category: "Consumer Protection", avgYears: 1.4, fill: "#16856B" },
  { category: "Employment Law", avgYears: 1.9, fill: "#16856B" },
  { category: "Contract Dispute", avgYears: 2.2, fill: "#3B82F6" },
  { category: "Family Law", avgYears: 2.5, fill: "#3B82F6" },
  { category: "Property Dispute", avgYears: 2.8, fill: "#D99A38" },
  { category: "Civil Litigation", avgYears: 3.3, fill: "#D99A38" },
  { category: "Criminal Law", avgYears: 3.6, fill: "#1D3046" },
  { category: "Land Acquisition", avgYears: 4.1, fill: "#101C2C" },
];

const outcomeDistributionData = [
  { name: "Petitioner Successful", value: 44, color: "#16856B" },
  { name: "Respondent Successful", value: 31, color: "#1D3046" },
  { name: "Partially Successful", value: 25, color: "#C9A45C" },
  { name: "Dismissed", value: 16, color: "#D9534F" },
  { name: "Under Adjudication", value: 6, color: "#778397" },
];

export function LegalAnalyticsView() {
  const [selectedTimeRange, setSelectedTimeRange] = useState("all");

  return (
    <div className="space-y-6">
      {/* Analytics Header */}
      <div className="bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BarChart3 className="w-5 h-5 text-[#C9A45C]" />
            <h1 className="text-xl font-bold text-[#101C2C]">Legal System Analytics</h1>
          </div>
          <p className="text-xs text-[#778397]">
            Empirical insights into case volumes, court timelines and judicial outcomes across Indian jurisdictions.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#778397]" />
          <select
            value={selectedTimeRange}
            onChange={(e) => setSelectedTimeRange(e.target.value)}
            className="px-3 py-1.5 text-xs font-semibold bg-[#F5F7FA] border border-[#E5E9EF] rounded-lg text-[#101C2C] focus:outline-hidden"
          >
            <option value="all">All Available Years (2018–2024)</option>
            <option value="recent">Recent Judgments (2021–2024)</option>
            <option value="historical">Pre-2021 Judgments</option>
          </select>
        </div>
      </div>

      {/* Row 1: Category Distribution & Yearly Trend */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Category Distribution Bar Chart */}
        <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-bold text-[#101C2C]">Cases by Legal Category</h2>
            <span className="text-xs font-semibold text-[#778397]">122 Indexed Cases</span>
          </div>
          <p className="text-xs text-[#778397] mb-4">
            Precedent volume distributed across major substantive law domains.
          </p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={categoryDistributionData}
                margin={{ top: 10, right: 10, left: -20, bottom: 25 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F3F6" />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={{ stroke: "#E5E9EF" }}
                  tick={{ fill: "#778397", fontSize: 10 }}
                  interval={0}
                  angle={-30}
                  textAnchor="end"
                />
                <YAxis tickLine={false} axisLine={{ stroke: "#E5E9EF" }} tick={{ fill: "#778397", fontSize: 11 }} />
                <Tooltip
                  formatter={(val: any) => [`${val} Cases`, "Indexed Count"]}
                  contentStyle={{
                    backgroundColor: "#101C2C",
                    color: "#FFFFFF",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="count" radius={[6, 6, 0, 0]}>
                  {categoryDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Yearly Adjudication Volume & Duration */}
        <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-bold text-[#101C2C]">Judgments by Year & Trend</h2>
            <span className="text-xs font-semibold text-[#16856B] bg-[#E7F3EF] px-2 py-0.5 rounded">
              Trend: Shorter Span
            </span>
          </div>
          <p className="text-xs text-[#778397] mb-4">
            Annual judgment output and average resolution span (years).
          </p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={yearlyAdjudicationData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#F0F3F6" />
                <XAxis dataKey="year" tickLine={false} axisLine={{ stroke: "#E5E9EF" }} tick={{ fill: "#778397", fontSize: 11 }} />
                <YAxis tickLine={false} axisLine={{ stroke: "#E5E9EF" }} tick={{ fill: "#778397", fontSize: 11 }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#101C2C",
                    color: "#FFFFFF",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "12px",
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="cases"
                  name="Cases Indexed"
                  stroke="#1D3046"
                  strokeWidth={2.5}
                  dot={{ fill: "#1D3046", r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="avgDurationYears"
                  name="Avg Duration (Years)"
                  stroke="#C9A45C"
                  strokeWidth={2.5}
                  dot={{ fill: "#C9A45C", r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Row 2: Average Duration by Category & Outcome Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Horizontal Bar: Average Resolution Duration by Category */}
        <div className="lg:col-span-7 bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-sm font-bold text-[#101C2C]">Average Resolution Duration by Category</h2>
            <span className="text-xs text-[#778397] font-medium">Years to Disposal</span>
          </div>
          <p className="text-xs text-[#778397] mb-4">
            Comparison of mean resolution duration across substantive categories.
          </p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                layout="vertical"
                data={avgDurationByCategory}
                margin={{ top: 5, right: 20, left: 60, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#F0F3F6" />
                <XAxis type="number" tickLine={false} axisLine={{ stroke: "#E5E9EF" }} tick={{ fill: "#778397", fontSize: 11 }} unit="y" />
                <YAxis
                  type="category"
                  dataKey="category"
                  tickLine={false}
                  axisLine={{ stroke: "#E5E9EF" }}
                  tick={{ fill: "#101C2C", fontSize: 11, fontWeight: 500 }}
                />
                <Tooltip
                  formatter={(val: any) => [`${val} Years`, "Avg Duration"]}
                  contentStyle={{
                    backgroundColor: "#101C2C",
                    color: "#FFFFFF",
                    borderRadius: "8px",
                    border: "none",
                    fontSize: "12px",
                  }}
                />
                <Bar dataKey="avgYears" radius={[0, 6, 6, 0]}>
                  {avgDurationByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Outcome Distribution Pie */}
        <div className="lg:col-span-5 bg-white p-5 rounded-xl border border-[#E5E9EF] shadow-2xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-sm font-bold text-[#101C2C]">Outcome Distribution</h2>
              <span className="text-xs font-semibold text-[#778397]">Disposed Cases</span>
            </div>
            <p className="text-xs text-[#778397] mb-3">
              Distribution of judicial rulings among recorded petitions.
            </p>
            <div className="h-52">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={outcomeDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={75}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {outcomeDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    formatter={(val: any, name: any, item: any) => [
                      `${val} cases`,
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
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#E5E9EF] text-xs">
            {outcomeDistributionData.map((item) => (
              <div key={item.name} className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-[#778397] truncate">{item.name}:</span>
                <span className="font-bold text-[#101C2C]">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

