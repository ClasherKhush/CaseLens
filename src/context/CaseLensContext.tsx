"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { AuthUser, FilterState, LegalCase, NotificationItem, RecentSearchItem } from "@/types";
import { DEMO_CASES } from "@/data/cases";
import { executePrecedentSearch, SearchResponse } from "@/lib/searchEngine";

export type ActiveView =
  | "dashboard"
  | "search"
  | "explorer"
  | "duration-analysis"
  | "comparison"
  | "judgment-detail"
  | "library"
  | "analytics"
  | "saved"
  | "recent"
  | "settings"
  | "help"
  | "login"
  | "signup"
  | "forgot-password";

interface ToastInfo {
  id: string;
  message: string;
  type: "success" | "info" | "warning";
}

interface CaseLensContextType {
  currentUser: AuthUser | null;
  login: (userData?: Partial<AuthUser>) => void;
  logout: () => void;
  signupUser: (userData: Partial<AuthUser>) => void;
  currentView: ActiveView;
  setCurrentView: (view: ActiveView) => void;
  navigateTo: (view: ActiveView, caseId?: string) => void;
  selectedCaseId: string | null;
  selectedCase: LegalCase | null;
  setSelectedCaseId: (id: string | null) => void;
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  updateFilter: <K extends keyof FilterState>(key: K, value: FilterState[K]) => void;
  resetFilters: () => void;
  applySearch: (customQuery?: string) => void;
  searchResponse: SearchResponse;
  savedCaseIds: string[];
  toggleSaveCase: (caseId: string) => void;
  isCaseSaved: (caseId: string) => boolean;
  comparisonCaseIds: string[];
  toggleCompareCase: (caseId: string) => void;
  isCaseInComparison: (caseId: string) => boolean;
  removeFromComparison: (caseId: string) => void;
  clearComparison: () => void;
  recentSearches: RecentSearchItem[];
  executeRecentSearch: (query: string) => void;
  clearRecentSearches: () => void;
  notifications: NotificationItem[];
  markNotificationRead: (id: string) => void;
  sidebarCollapsed: boolean;
  setSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
  toasts: ToastInfo[];
  showToast: (message: string, type?: "success" | "info" | "warning") => void;
}

const defaultFilters: FilterState = {
  query: "property dispute",
  category: "Property Dispute",
  court: "All Courts",
  status: "All Status",
  yearMin: 2015,
  yearMax: 2024,
  durationRange: "Any Duration",
  outcome: "Any Outcome",
  sortBy: "duration_asc",
};

const initialRecentSearches: RecentSearchItem[] = [
  { id: "rs-1", query: "Property ownership dispute", category: "Property Dispute", timestamp: "10 mins ago", resultCount: 24 },
  { id: "rs-2", query: "Contract breach and compensation", category: "Contract Dispute", timestamp: "2 hours ago", resultCount: 18 },
  { id: "rs-3", query: "Land acquisition compensation", category: "Land Acquisition", timestamp: "Yesterday", resultCount: 12 },
  { id: "rs-4", query: "Criminal bail application under NDPS", category: "Criminal Law", timestamp: "2 days ago", resultCount: 15 },
  { id: "rs-5", query: "Employment termination dispute", category: "Employment Law", timestamp: "3 days ago", resultCount: 9 },
];

const initialNotifications: NotificationItem[] = [
  {
    id: "notif-1",
    title: "New Precedent Indexed",
    message: "Rajasthan High Court judgment added in Property Law with 1.8 year resolution duration.",
    timestamp: "15m ago",
    read: false,
    category: "precedent",
  },
  {
    id: "notif-2",
    title: "Duration Benchmark Updated",
    message: "Average disposal time in Delhi High Court commercial disputes revised to 2.4 years.",
    timestamp: "1h ago",
    read: false,
    category: "duration",
  },
  {
    id: "notif-3",
    title: "Demo Dataset Loaded",
    message: "120+ fictional Indian legal precedent records available for search & comparison.",
    timestamp: "3h ago",
    read: true,
    category: "system",
  },
];

const defaultUser: AuthUser = {
  name: "Rahul Kumar",
  email: "rahul.kumar@advocate.in",
  role: "Advocate / Lawyer",
  provider: "email",
  isAuthenticated: true,
};

const CaseLensContext = createContext<CaseLensContextType | undefined>(undefined);

export function CaseLensProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<AuthUser | null>(defaultUser);
  const [currentView, setCurrentView] = useState<ActiveView>("dashboard");
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>("CL-1001");
  const [filters, setFilters] = useState<FilterState>(defaultFilters);
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [savedCaseIds, setSavedCaseIds] = useState<string[]>(["CL-1001", "CL-1004"]);
  const [comparisonCaseIds, setComparisonCaseIds] = useState<string[]>([
    "CL-1001", // Sharma vs State of Rajasthan
    "CL-1002", // Gupta vs State of Punjab
    "CL-1003", // Verma vs State of Delhi
  ]);
  const [recentSearches, setRecentSearches] = useState<RecentSearchItem[]>(initialRecentSearches);
  const [notifications, setNotifications] = useState<NotificationItem[]>(initialNotifications);
  const [toasts, setToasts] = useState<ToastInfo[]>([]);

  // Search results state computed from filters
  const [searchResponse, setSearchResponse] = useState<SearchResponse>(() =>
    executePrecedentSearch(defaultFilters)
  );

  // Load saved state from localStorage on client mount
  useEffect(() => {
    try {
      const storedUser = localStorage.getItem("caselens_user");
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
      const saved = localStorage.getItem("caselens_saved");
      if (saved) setSavedCaseIds(JSON.parse(saved));
      const comp = localStorage.getItem("caselens_compare");
      if (comp) setComparisonCaseIds(JSON.parse(comp));
    } catch {
      // LocalStorage unavailable, use defaults
    }
  }, []);

  const login = (userData?: Partial<AuthUser>) => {
    const user: AuthUser = {
      name: userData?.name || "Rahul Kumar",
      email: userData?.email || "rahul.kumar@advocate.in",
      role: userData?.role || "Advocate / Lawyer",
      provider: userData?.provider || "email",
      avatar: userData?.avatar,
      isAuthenticated: true,
    };
    setCurrentUser(user);
    try {
      localStorage.setItem("caselens_user", JSON.stringify(user));
    } catch {}
    navigateTo("dashboard");
    showToast(`Signed in successfully as ${user.name}`, "success");
  };

  const signupUser = (userData: Partial<AuthUser>) => {
    const user: AuthUser = {
      name: userData.name || "Rahul Kumar",
      email: userData.email || "rahul.kumar@advocate.in",
      role: userData.role || "Advocate / Lawyer",
      provider: userData.provider || "email",
      avatar: userData.avatar,
      isAuthenticated: true,
    };
    setCurrentUser(user);
    try {
      localStorage.setItem("caselens_user", JSON.stringify(user));
    } catch {}
    navigateTo("dashboard");
    showToast(`Account created! Welcome to CaseLens, ${user.name}`, "success");
  };

  const logout = () => {
    setCurrentUser(null);
    try {
      localStorage.removeItem("caselens_user");
    } catch {}
    navigateTo("login");
    showToast("You have been signed out", "info");
  };

  const showToast = (message: string, type: "success" | "info" | "warning" = "info") => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3800);
  };

  const navigateTo = (view: ActiveView, caseId?: string) => {
    if (caseId) {
      setSelectedCaseId(caseId);
    }
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const updateFilter = <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({
      query: "",
      category: "All Categories",
      court: "All Courts",
      status: "All Status",
      yearMin: 2015,
      yearMax: 2024,
      durationRange: "Any Duration",
      outcome: "Any Outcome",
      sortBy: "relevance",
    });
    const resp = executePrecedentSearch({
      query: "",
      category: "All Categories",
      court: "All Courts",
      status: "All Status",
      yearMin: 2015,
      yearMax: 2024,
      durationRange: "Any Duration",
      outcome: "Any Outcome",
      sortBy: "relevance",
    });
    setSearchResponse(resp);
    showToast("Filters reset to default", "info");
  };

  const applySearch = (customQuery?: string) => {
    const q = customQuery !== undefined ? customQuery : filters.query;
    const updatedFilters = { ...filters, query: q };
    setFilters(updatedFilters);
    const resp = executePrecedentSearch(updatedFilters);
    setSearchResponse(resp);

    // Record in recent searches if query is non-empty
    if (q.trim()) {
      const newSearch: RecentSearchItem = {
        id: `rs-${Date.now()}`,
        query: q.trim(),
        category: filters.category !== "All Categories" ? filters.category : undefined,
        timestamp: "Just now",
        resultCount: resp.totalMatches,
      };
      setRecentSearches((prev) => [newSearch, ...prev.filter((s) => s.query.toLowerCase() !== q.trim().toLowerCase()).slice(0, 7)]);
    }

    navigateTo("explorer");
    showToast(`Found ${resp.totalMatches} precedent results`, "success");
  };

  const executeRecentSearch = (queryText: string) => {
    updateFilter("query", queryText);
    applySearch(queryText);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    showToast("Search history cleared", "info");
  };

  const toggleSaveCase = (caseId: string) => {
    setSavedCaseIds((prev) => {
      let updated: string[];
      if (prev.includes(caseId)) {
        updated = prev.filter((id) => id !== caseId);
        showToast("Case removed from saved collection", "info");
      } else {
        updated = [...prev, caseId];
        showToast("Case saved to collection", "success");
      }
      try {
        localStorage.setItem("caselens_saved", JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const isCaseSaved = (caseId: string) => savedCaseIds.includes(caseId);

  const toggleCompareCase = (caseId: string) => {
    setComparisonCaseIds((prev) => {
      let updated: string[];
      if (prev.includes(caseId)) {
        updated = prev.filter((id) => id !== caseId);
        showToast("Case removed from comparison", "info");
      } else {
        if (prev.length >= 4) {
          showToast("Maximum 4 cases can be compared at once", "warning");
          return prev;
        }
        updated = [...prev, caseId];
        showToast("Case added to comparison matrix", "success");
      }
      try {
        localStorage.setItem("caselens_compare", JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const isCaseInComparison = (caseId: string) => comparisonCaseIds.includes(caseId);

  const removeFromComparison = (caseId: string) => {
    setComparisonCaseIds((prev) => {
      const updated = prev.filter((id) => id !== caseId);
      try {
        localStorage.setItem("caselens_compare", JSON.stringify(updated));
      } catch {}
      return updated;
    });
    showToast("Case removed from comparison", "info");
  };

  const clearComparison = () => {
    setComparisonCaseIds([]);
    try {
      localStorage.setItem("caselens_compare", JSON.stringify([]));
    } catch {}
    showToast("Comparison cleared", "info");
  };

  const markNotificationRead = (id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const selectedCase =
    DEMO_CASES.find((c) => c.id === selectedCaseId) || DEMO_CASES[0];

  return (
    <CaseLensContext.Provider
      value={{
        currentUser,
        login,
        logout,
        signupUser,
        currentView,
        setCurrentView,
        navigateTo,
        selectedCaseId,
        selectedCase,
        setSelectedCaseId,
        filters,
        setFilters,
        updateFilter,
        resetFilters,
        applySearch,
        searchResponse,
        savedCaseIds,
        toggleSaveCase,
        isCaseSaved,
        comparisonCaseIds,
        toggleCompareCase,
        isCaseInComparison,
        removeFromComparison,
        clearComparison,
        recentSearches,
        executeRecentSearch,
        clearRecentSearches,
        notifications,
        markNotificationRead,
        sidebarCollapsed,
        setSidebarCollapsed,
        toasts,
        showToast,
      }}
    >
      {children}
    </CaseLensContext.Provider>
  );
}

export function useCaseLens() {
  const context = useContext(CaseLensContext);
  if (!context) {
    throw new Error("useCaseLens must be used within a CaseLensProvider");
  }
  return context;
}

