import { NextResponse } from "next/server";
import { DEMO_CASES } from "@/data/cases";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const court = searchParams.get("court");
  const status = searchParams.get("status");
  const page = parseInt(searchParams.get("page") || "1", 10);
  const limit = parseInt(searchParams.get("limit") || "20", 10);

  let filtered = [...DEMO_CASES];

  if (category && category !== "all" && category !== "All Categories") {
    filtered = filtered.filter(
      (c) => c.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (court && court !== "all" && court !== "All Courts") {
    filtered = filtered.filter(
      (c) => c.court.toLowerCase() === court.toLowerCase()
    );
  }

  if (status && status !== "all" && status !== "All Status") {
    filtered = filtered.filter(
      (c) => c.status.toLowerCase() === status.toLowerCase()
    );
  }

  const total = filtered.length;
  const start = (page - 1) * limit;
  const paginated = filtered.slice(start, start + limit);

  return NextResponse.json({
    success: true,
    total,
    page,
    limit,
    totalPages: Math.ceil(total / limit),
    cases: paginated,
  });
}

