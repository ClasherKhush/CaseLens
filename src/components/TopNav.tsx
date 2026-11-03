"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  Search,
  Bell,
  HelpCircle,
  Menu,
  CheckCircle2,
  Clock,
  ChevronDown,
  User,
  Sliders,
  ExternalLink,
  LogOut,
} from "lucide-react";
import { useCaseLens } from "@/context/CaseLensContext";

export function TopNav() {
  const {
    currentUser,
    logout,
    filters,
    updateFilter,
    applySearch,
    navigateTo,
    notifications,
    markNotificationRead,
    sidebarCollapsed,
    setSidebarCollapsed,
  } = useCaseLens();

  const [searchQuery, setSearchQuery] = useState(filters.query);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const userMenuRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(event.target as Node)) {
        setShowNotifications(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setShowUserMenu(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      updateFilter("query", searchQuery.trim());
      applySearch(searchQuery.trim());
    }
  };

  return (
    <header className="h-16 bg-white border-b border-[#E5E9EF] sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 shadow-xs">
      {/* Left: Mobile Toggle & Global Search */}
      <div className="flex items-center gap-3 flex-1 max-w-2xl">
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="lg:hidden p-2 text-[#778397] hover:text-[#101C2C] hover:bg-[#F5F7FA] rounded-lg transition-colors"
          title="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <form onSubmit={handleSearchSubmit} className="relative w-full max-w-lg">
          <Search className="w-4 h-4 text-[#778397] absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search judgments by case name, citation, legal section or keywords..."
            className="w-full pl-9 pr-16 py-2 bg-[#F5F7FA] hover:bg-[#EEF2F6] focus:bg-white text-sm text-[#263445] rounded-xl border border-transparent focus:border-[#C9A45C] focus:ring-2 focus:ring-[#C9A45C]/20 transition-all outline-hidden placeholder:text-[#778397]/70"
          />
          <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-semibold text-[#778397] bg-white border border-[#E5E9EF] rounded shadow-2xs">
            Enter
          </kbd>
        </form>
      </div>

      {/* Right Actions: Notifications, Help, User Profile */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Precedent Notification Bell */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 rounded-xl text-[#778397] hover:text-[#101C2C] hover:bg-[#F5F7FA] transition-colors relative"
            title="Notifications"
          >
            <Bell className="w-4 h-4" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#D9534F] rounded-full ring-2 ring-white" />
            )}
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-xl border border-[#E5E9EF] py-2 z-50">
              <div className="px-4 py-2 border-b border-[#E5E9EF] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-[#101C2C]">Judicial Notifications</span>
                  {unreadCount > 0 && (
                    <span className="text-[10px] bg-[#C9A45C]/20 text-[#997732] font-bold px-2 py-0.5 rounded-full">
                      {unreadCount} New
                    </span>
                  )}
                </div>
                <button
                  onClick={() => notifications.forEach((n) => markNotificationRead(n.id))}
                  className="text-xs text-[#16856B] hover:underline"
                >
                  Mark all read
                </button>
              </div>

              <div className="max-h-80 overflow-y-auto divide-y divide-[#E5E9EF]">
                {notifications.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => markNotificationRead(item.id)}
                    className={`p-3.5 hover:bg-[#F5F7FA] transition-colors cursor-pointer ${
                      !item.read ? "bg-[#FDFBF7]" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <p className="text-xs font-semibold text-[#101C2C] flex items-center gap-1.5">
                        {!item.read && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A45C]" />
                        )}
                        {item.title}
                      </p>
                      <span className="text-[10px] text-[#778397] whitespace-nowrap">
                        {item.timestamp}
                      </span>
                    </div>
                    <p className="text-xs text-[#778397] mt-1 leading-relaxed">
                      {item.message}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-2 border-t border-[#E5E9EF] text-center">
                <button
                  onClick={() => {
                    setShowNotifications(false);
                    navigateTo("explorer");
                  }}
                  className="text-xs text-[#C9A45C] font-semibold hover:underline"
                >
                  View all precedent alerts
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Help icon */}
        <button
          onClick={() => navigateTo("help")}
          className="p-2 rounded-xl text-[#778397] hover:text-[#101C2C] hover:bg-[#F5F7FA] transition-colors"
          title="CaseLens Research Help & FAQ"
        >
          <HelpCircle className="w-4 h-4" />
        </button>

        {/* User Profile dropdown */}
        <div className="relative" ref={userMenuRef}>
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-xl hover:bg-[#F5F7FA] transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-[#101C2C] text-[#C9A45C] font-bold text-xs flex items-center justify-center border border-[#C9A45C]/30">
              {currentUser?.name
                ? currentUser.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .substring(0, 2)
                    .toUpperCase()
                : "RK"}
            </div>
            <div className="hidden md:flex flex-col text-left">
              <span className="text-xs font-semibold text-[#101C2C] leading-none">
                {currentUser?.name || "Rahul Kumar"}
              </span>
              <span className="text-[10px] text-[#778397]">{currentUser?.role || "Advocate"}</span>
            </div>
            <ChevronDown className="w-3.5 h-3.5 text-[#778397]" />
          </button>

          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-[#E5E9EF] py-1.5 z-50 text-sm">
              <div className="px-3.5 py-2 border-b border-[#E5E9EF]">
                <p className="text-xs font-semibold text-[#101C2C]">{currentUser?.name || "Rahul Kumar"}</p>
                <p className="text-[11px] text-[#778397]">{currentUser?.email || "rahul.kumar@advocate.in"}</p>
                <div className="mt-1.5 inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-semibold bg-[#E7F3EF] text-[#16856B]">
                  <CheckCircle2 className="w-3 h-3" />
                  Bar Council Verified
                </div>
              </div>
              <button
                onClick={() => {
                  setShowUserMenu(false);
                  navigateTo("settings");
                }}
                className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-[#263445] hover:bg-[#F5F7FA] text-left"
              >
                <Sliders className="w-3.5 h-3.5 text-[#778397]" />
                Research Preferences
              </button>
              <button
                onClick={() => {
                  setShowUserMenu(false);
                  navigateTo("saved");
                }}
                className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-[#263445] hover:bg-[#F5F7FA] text-left"
              >
                <Clock className="w-3.5 h-3.5 text-[#778397]" />
                Saved Precedent Folders
              </button>
              <button
                onClick={() => {
                  setShowUserMenu(false);
                  navigateTo("help");
                }}
                className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-[#263445] hover:bg-[#F5F7FA] text-left"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#778397]" />
                User Documentation
              </button>
              <div className="border-t border-[#E5E9EF] my-1" />
              <button
                onClick={() => {
                  setShowUserMenu(false);
                  logout();
                }}
                className="w-full flex items-center gap-2.5 px-3.5 py-2 text-xs text-[#D9534F] hover:bg-[#FDF2F2] text-left font-semibold"
              >
                <LogOut className="w-3.5 h-3.5 text-[#D9534F]" />
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

