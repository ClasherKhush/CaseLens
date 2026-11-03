"use client";

import React from "react";
import {
  LayoutDashboard,
  Search,
  Compass,
  Hourglass,
  GitCompare,
  BookOpen,
  BarChart3,
  Bookmark,
  History,
  Settings,
  HelpCircle,
  LogOut,
  Scale,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import { useCaseLens, ActiveView } from "@/context/CaseLensContext";

interface NavItem {
  id: ActiveView;
  label: string;
  icon: React.ElementType;
  badge?: number;
}

export function Sidebar() {
  const {
    currentUser,
    logout,
    currentView,
    navigateTo,
    sidebarCollapsed,
    setSidebarCollapsed,
    savedCaseIds,
    comparisonCaseIds,
    showToast,
  } = useCaseLens();

  const primaryNavItems: NavItem[] = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "search", label: "Search Cases", icon: Search },
    { id: "explorer", label: "Precedent Explorer", icon: Compass },
    { id: "duration-analysis", label: "Duration Analysis", icon: Hourglass },
    {
      id: "comparison",
      label: "Case Comparison",
      icon: GitCompare,
      badge: comparisonCaseIds.length > 0 ? comparisonCaseIds.length : undefined,
    },
    { id: "library", label: "Judgment Library", icon: BookOpen },
    { id: "analytics", label: "Legal Analytics", icon: BarChart3 },
    {
      id: "saved",
      label: "Saved Cases",
      icon: Bookmark,
      badge: savedCaseIds.length > 0 ? savedCaseIds.length : undefined,
    },
    { id: "recent", label: "Recent Searches", icon: History },
  ];

  const secondaryNavItems: NavItem[] = [
    { id: "settings", label: "Settings", icon: Settings },
    { id: "help", label: "Help & Support", icon: HelpCircle },
  ];

  const handleLogout = () => {
    logout();
  };

  return (
    <aside
      className={`fixed top-0 left-0 bottom-0 z-40 bg-[#101C2C] text-[#E5E9EF] border-r border-[#1D3046] flex flex-col transition-all duration-300 ${
        sidebarCollapsed ? "w-18" : "w-64"
      } no-print`}
    >
      {/* Brand Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-[#1D3046]">
        <div
          onClick={() => navigateTo("dashboard")}
          className="flex items-center gap-3 cursor-pointer select-none group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#C9A45C] to-[#997732] flex items-center justify-center text-[#101C2C] shadow-md shadow-[#C9A45C]/20 group-hover:scale-105 transition-transform">
            <Scale className="w-5 h-5 stroke-[2.2] text-[#101C2C]" />
          </div>
          {!sidebarCollapsed && (
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg text-white tracking-tight">CaseLens</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#C9A45C] bg-[#1D3046] px-1.5 py-0.5 rounded">
                  IN
                </span>
              </div>
              <span className="text-[11px] text-[#778397] font-medium leading-none">
                Legal Intelligence
              </span>
            </div>
          )}
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-1.5 rounded-lg text-[#778397] hover:text-white hover:bg-[#1D3046] transition-colors"
          title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {sidebarCollapsed ? (
            <ChevronRight className="w-4 h-4" />
          ) : (
            <ChevronLeft className="w-4 h-4" />
          )}
        </button>
      </div>

      {/* Navigation List */}
      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
        <div className="text-[10px] uppercase font-bold tracking-wider text-[#778397] px-3 mb-2">
          {!sidebarCollapsed && "Workspace"}
        </div>
        {primaryNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              title={sidebarCollapsed ? item.label : undefined}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all relative group ${
                isActive
                  ? "bg-[#1D3046] text-[#C9A45C] font-semibold shadow-xs"
                  : "text-[#E5E9EF]/80 hover:bg-[#1D3046]/50 hover:text-white"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-2 bottom-2 w-1 bg-[#C9A45C] rounded-r-md" />
              )}
              <Icon
                className={`w-4 h-4 shrink-0 transition-colors ${
                  isActive
                    ? "text-[#C9A45C]"
                    : "text-[#778397] group-hover:text-white"
                }`}
              />
              {!sidebarCollapsed && (
                <span className="truncate flex-1 text-left">{item.label}</span>
              )}
              {!sidebarCollapsed && item.badge !== undefined && (
                <span
                  className={`text-[11px] font-bold px-2 py-0.5 rounded-full ${
                    isActive
                      ? "bg-[#C9A45C] text-[#101C2C]"
                      : "bg-[#1D3046] text-[#C9A45C] border border-[#C9A45C]/30"
                  }`}
                >
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}

        <div className="pt-4 text-[10px] uppercase font-bold tracking-wider text-[#778397] px-3 mb-2">
          {!sidebarCollapsed && "Preferences"}
        </div>
        {secondaryNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => navigateTo(item.id)}
              title={sidebarCollapsed ? item.label : undefined}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl font-medium text-sm transition-all relative group ${
                isActive
                  ? "bg-[#1D3046] text-[#C9A45C] font-semibold"
                  : "text-[#E5E9EF]/80 hover:bg-[#1D3046]/50 hover:text-white"
              }`}
            >
              <Icon
                className={`w-4 h-4 shrink-0 ${
                  isActive
                    ? "text-[#C9A45C]"
                    : "text-[#778397] group-hover:text-white"
                }`}
              />
              {!sidebarCollapsed && (
                <span className="truncate flex-1 text-left">{item.label}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* User Card & Logout at bottom */}
      <div className="p-3 border-t border-[#1D3046] bg-[#0C1521]">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1D3046] to-[#263D59] border border-[#C9A45C]/30 flex items-center justify-center text-white font-semibold text-xs shrink-0 shadow-xs">
              {currentUser?.name
                ? currentUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .substring(0, 2)
                    .toUpperCase()
                : "RK"}
            </div>
            {!sidebarCollapsed && (
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-semibold text-white truncate">
                    {currentUser?.name || "Rahul Kumar"}
                  </p>
                  <ShieldCheck className="w-3.5 h-3.5 text-[#16856B]" />
                </div>
                <p className="text-[11px] text-[#C9A45C] truncate">
                  {currentUser?.role || "Advocate, High Court"}
                </p>
              </div>
            )}
          </div>
          {!sidebarCollapsed && (
            <button
              onClick={handleLogout}
              className="p-1.5 rounded-lg text-[#778397] hover:text-[#D9534F] hover:bg-[#1D3046] transition-colors"
              title="Logout"
            >
              <LogOut className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}

