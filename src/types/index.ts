export type LegalCategory =
  | "Property Dispute"
  | "Civil Litigation"
  | "Criminal Law"
  | "Family Law"
  | "Contract Dispute"
  | "Consumer Protection"
  | "Employment Law"
  | "Constitutional Law"
  | "Taxation"
  | "Intellectual Property"
  | "Land Acquisition"
  | "Banking and Finance";

export type CourtName =
  | "Supreme Court of India"
  | "Delhi High Court"
  | "Bombay High Court"
  | "Rajasthan High Court"
  | "Allahabad High Court"
  | "Madras High Court"
  | "Karnataka High Court"
  | "Calcutta High Court"
  | "Punjab & Haryana High Court"
  | "District Court, New Delhi"
  | "City Civil Court, Mumbai"
  | "District Court, Jaipur";

export type CaseStatus =
  | "Disposed"
  | "Pending"
  | "Resolved"
  | "Dismissed"
  | "Allowed"
  | "Partially Allowed";

export type CaseOutcome =
  | "Petitioner Successful"
  | "Respondent Successful"
  | "Partially Successful"
  | "Dismissed"
  | "Allowed"
  | "Partially Allowed"
  | "Other / Unclear"
  | "Under Adjudication";

export interface LegalCase {
  id: string;
  caseTitle: string;
  caseNumber: string;
  court: CourtName;
  category: LegalCategory;
  keywords: string[];
  facts: string;
  legalIssues: string[];
  filingDate: string; // YYYY-MM-DD
  judgmentDate: string | null; // YYYY-MM-DD, null if pending
  disposalDate: string | null; // YYYY-MM-DD, null if pending
  status: CaseStatus;
  outcome: CaseOutcome;
  judgeNames: string[];
  legalSections: string[];
  summary: string;
  background: string;
  argumentsPetitioner: string;
  argumentsRespondent: string;
  courtObservations: string;
  finalJudgment: string;
  legalPrinciples: string[];
  referencedPrecedents: string[];
  durationDays: number | null;
  durationFormatted: string; // e.g. "1 Year 8 Months"
  sourceType: "Demo Data" | "Verified Source" | "Imported Unverified";
  isDemo: boolean;
  similarityScore?: number; // 0 to 100
  matchReason?: string;
}

export interface AuthUser {
  name: string;
  email: string;
  role: string;
  avatar?: string;
  provider: "email" | "google";
  isAuthenticated: boolean;
}

export interface FilterState {
  query: string;
  category: string;
  court: string;
  status: string;
  yearMin: number;
  yearMax: number;
  durationRange: string;
  outcome: string;
  sortBy: "relevance" | "newest" | "oldest" | "duration_asc" | "duration_desc";
}

export interface RecentSearchItem {
  id: string;
  query: string;
  category?: string;
  timestamp: string;
  resultCount: number;
}

export interface NotificationItem {
  id: string;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  category: "precedent" | "duration" | "system";
}

export interface DurationStats {
  shortestDays: number;
  shortestFormatted: string;
  medianDays: number;
  medianFormatted: string;
  averageDays: number;
  averageFormatted: string;
  longestDays: number;
  longestFormatted: string;
  totalWithDates: number;
}
