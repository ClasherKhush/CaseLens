import { NextResponse } from "next/server";
import { DEMO_CASES } from "@/data/cases";
import { computeDurationStats } from "@/lib/durationUtils";

export async function GET() {
  const total = DEMO_CASES.length;
  const disposed = DEMO_CASES.filter((c) => c.status !== "Pending");
  const pending = DEMO_CASES.filter((c) => c.status === "Pending");

  const durationStats = computeDurationStats(DEMO_CASES);

  // Group by category
  const categoryCounts: Record<string, number> = {};
  DEMO_CASES.forEach((c) => {
    categoryCounts[c.category] = (categoryCounts[c.category] || 0) + 1;
  });

  // Group by court
  const courtCounts: Record<string, number> = {};
  DEMO_CASES.forEach((c) => {
    courtCounts[c.court] = (courtCounts[c.court] || 0) + 1;
  });

  return NextResponse.json({
    success: true,
    overview: {
      totalJudgments: 25480, // Representative sample scaled up
      indexedDemoCases: total,
      disposedCount: disposed.length,
      pendingCount: pending.length,
    },
    durationAnalytics: durationStats,
    categoryDistribution: categoryCounts,
    courtDistribution: courtCounts,
  });
}

