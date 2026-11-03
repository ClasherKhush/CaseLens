import { NextResponse } from "next/server";
import { DEMO_CASES } from "@/data/cases";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const caseIds: string[] = body.caseIds || [];

    if (!Array.isArray(caseIds) || caseIds.length < 2 || caseIds.length > 4) {
      return NextResponse.json(
        { success: false, error: "Please provide between 2 and 4 case IDs for comparison." },
        { status: 400 }
      );
    }

    const matchedCases = caseIds
      .map((id) => DEMO_CASES.find((c) => c.id.toLowerCase() === id.toLowerCase()))
      .filter(Boolean);

    if (matchedCases.length < 2) {
      return NextResponse.json(
        { success: false, error: "At least two valid cases must be found to compare." },
        { status: 404 }
      );
    }

    // Find the shortest case among them
    const withDuration = matchedCases.filter(
      (c) => c!.durationDays !== null && (c!.durationDays || 0) > 0
    );
    const shortest =
      withDuration.length > 0
        ? withDuration.reduce((min, cur) =>
            (cur!.durationDays || 0) < (min!.durationDays || 0) ? cur : min
          )
        : null;

    return NextResponse.json({
      success: true,
      comparison: {
        cases: matchedCases,
        shortestHistoricalCase: shortest,
        comparisonDate: new Date().toISOString(),
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to compare cases" },
      { status: 500 }
    );
  }
}

