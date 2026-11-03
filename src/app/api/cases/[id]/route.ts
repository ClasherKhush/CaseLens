import { NextResponse } from "next/server";
import { DEMO_CASES } from "@/data/cases";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const legalCase = DEMO_CASES.find(
    (c) => c.id.toLowerCase() === id.toLowerCase()
  );

  if (!legalCase) {
    return NextResponse.json(
      { success: false, error: "Case not found" },
      { status: 404 }
    );
  }

  // Find related precedents in the same category
  const relatedPrecedents = DEMO_CASES.filter(
    (c) => c.category === legalCase.category && c.id !== legalCase.id
  ).slice(0, 4);

  return NextResponse.json({
    success: true,
    case: legalCase,
    relatedPrecedents,
  });
}

