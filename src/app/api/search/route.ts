import { NextResponse } from "next/server";
import { executePrecedentSearch } from "@/lib/searchEngine";
import { FilterState } from "@/types";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const filters: FilterState = {
      query: body.query || "",
      category: body.category || "All Categories",
      court: body.court || "All Courts",
      status: body.status || "All Status",
      yearMin: body.yearMin || 2015,
      yearMax: body.yearMax || 2024,
      durationRange: body.durationRange || "Any Duration",
      outcome: body.outcome || "Any Outcome",
      sortBy: body.sortBy || "relevance",
    };

    const searchResult = executePrecedentSearch(filters);

    return NextResponse.json({
      success: true,
      data: searchResult,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message || "Failed to execute search" },
      { status: 500 }
    );
  }
}

