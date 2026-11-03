import { DurationStats, LegalCase } from "@/types";

export function calculateDaysBetween(startDateStr: string, endDateStr: string): number {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  const diffTime = end.getTime() - start.getTime();
  return Math.max(0, Math.round(diffTime / (1000 * 60 * 60 * 24)));
}

export function formatDurationFromDays(days: number | null): string {
  if (days === null || days === undefined) {
    return "Pending (Ongoing)";
  }

  if (days < 30) {
    return `${days} Days`;
  }

  const years = Math.floor(days / 365.25);
  const remainingDays = days % 365.25;
  const months = Math.round(remainingDays / 30.4375);

  if (years === 0) {
    return `${months} Month${months === 1 ? "" : "s"}`;
  }

  if (months === 0) {
    return `${years} Year${years === 1 ? "" : "s"}`;
  }

  return `${years} Year${years === 1 ? "" : "s"} ${months} Month${months === 1 ? "" : "s"}`;
}

export function formatDurationInYears(days: number | null): string {
  if (days === null) return "N/A";
  const years = (days / 365.25).toFixed(1);
  return `${years} yrs`;
}

export function formatDateIndian(dateStr: string | null): string {
  if (!dateStr) return "N/A";
  try {
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return dateStr;
    return d.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function computeDurationStats(cases: LegalCase[]): DurationStats {
  const validCases = cases
    .filter((c) => c.status !== "Pending" && c.durationDays !== null && c.durationDays > 0)
    .map((c) => c.durationDays as number)
    .sort((a, b) => a - b);

  if (validCases.length === 0) {
    return {
      shortestDays: 0,
      shortestFormatted: "N/A",
      medianDays: 0,
      medianFormatted: "N/A",
      averageDays: 0,
      averageFormatted: "N/A",
      longestDays: 0,
      longestFormatted: "N/A",
      totalWithDates: 0,
    };
  }

  const shortestDays = validCases[0];
  const longestDays = validCases[validCases.length - 1];
  const sum = validCases.reduce((acc, val) => acc + val, 0);
  const averageDays = Math.round(sum / validCases.length);

  const mid = Math.floor(validCases.length / 2);
  const medianDays =
    validCases.length % 2 !== 0
      ? validCases[mid]
      : Math.round((validCases[mid - 1] + validCases[mid]) / 2);

  return {
    shortestDays,
    shortestFormatted: formatDurationFromDays(shortestDays),
    medianDays,
    medianFormatted: formatDurationFromDays(medianDays),
    averageDays,
    averageFormatted: formatDurationFromDays(averageDays),
    longestDays,
    longestFormatted: formatDurationFromDays(longestDays),
    totalWithDates: validCases.length,
  };
}

