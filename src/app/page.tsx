"use client";

import React from "react";
import { CaseLensProvider, useCaseLens } from "@/context/CaseLensContext";
import { Sidebar } from "@/components/Sidebar";
import { TopNav } from "@/components/TopNav";
import { LegalDisclaimerBanner } from "@/components/LegalDisclaimerBanner";
import { ToastContainer } from "@/components/ToastContainer";

// Auth Views
import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { SignupForm } from "@/components/auth/SignupForm";
import { ForgotPasswordForm } from "@/components/auth/ForgotPasswordForm";

// Dashboard Views
import { DashboardView } from "@/components/views/DashboardView";
import { CaseSearchView } from "@/components/views/CaseSearchView";
import { PrecedentResultsView } from "@/components/views/PrecedentResultsView";
import { CaseDurationAnalysisView } from "@/components/views/CaseDurationAnalysisView";
import { JudgmentDetailView } from "@/components/views/JudgmentDetailView";
import { CaseComparisonView } from "@/components/views/CaseComparisonView";
import { LegalAnalyticsView } from "@/components/views/LegalAnalyticsView";
import { JudgmentLibraryView } from "@/components/views/JudgmentLibraryView";
import { SavedCasesView } from "@/components/views/SavedCasesView";
import { RecentSearchesView } from "@/components/views/RecentSearchesView";
import { SettingsView } from "@/components/views/SettingsView";
import { HelpView } from "@/components/views/HelpView";
import { Scale } from "lucide-react";

function AppRenderer() {
  const { currentView, sidebarCollapsed, navigateTo } = useCaseLens();

  // Handle Standalone Authentication Pages (2-column layout matching reference image)
  if (currentView === "login") {
    return (
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    );
  }

  if (currentView === "signup") {
    return (
      <AuthLayout>
        <SignupForm />
      </AuthLayout>
    );
  }

  if (currentView === "forgot-password") {
    return (
      <AuthLayout>
        <ForgotPasswordForm />
      </AuthLayout>
    );
  }

  // Dashboard & Authenticated Platform Workspace
  return (
    <div className="min-h-screen bg-[#F5F7FA] text-[#263445]">
      <Sidebar />
      <div
        className={`min-h-screen flex flex-col transition-all duration-300 ${
          sidebarCollapsed ? "lg:pl-18" : "lg:pl-64"
        }`}
      >
        {/* Top Banner and Navigation */}
        <LegalDisclaimerBanner />
        <TopNav />

        {/* Main Page Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {currentView === "dashboard" && <DashboardView />}
          {currentView === "search" && <CaseSearchView />}
          {currentView === "explorer" && <PrecedentResultsView />}
          {currentView === "duration-analysis" && <CaseDurationAnalysisView />}
          {currentView === "comparison" && <CaseComparisonView />}
          {currentView === "judgment-detail" && <JudgmentDetailView />}
          {currentView === "library" && <JudgmentLibraryView />}
          {currentView === "analytics" && <LegalAnalyticsView />}
          {currentView === "saved" && <SavedCasesView />}
          {currentView === "recent" && <RecentSearchesView />}
          {currentView === "settings" && <SettingsView />}
          {currentView === "help" && <HelpView />}
        </main>

        {/* Footer */}
        <footer className="mt-auto py-6 px-4 border-t border-[#E5E9EF] bg-white text-xs text-[#778397] no-print">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-[#101C2C] text-[#C9A45C] flex items-center justify-center">
                <Scale className="w-3 h-3 text-[#C9A45C]" />
              </div>
              <span className="font-bold text-[#101C2C]">CaseLens India</span>
              <span>—</span>
              <span>AI-Powered Indian Legal Precedent Search & Duration Intelligence</span>
            </div>

            <div className="flex items-center gap-4">
              <button onClick={() => navigateTo("help")} className="hover:text-[#101C2C]">
                Methodology
              </button>
              <button onClick={() => navigateTo("help")} className="hover:text-[#101C2C]">
                Legal Disclaimer
              </button>
              <button onClick={() => navigateTo("settings")} className="hover:text-[#101C2C]">
                Preferences
              </button>
              <span className="text-[10px] bg-[#F5F7FA] border border-[#E5E9EF] px-2 py-0.5 rounded font-mono">
                v1.0 Demo
              </span>
            </div>
          </div>
        </footer>

        {/* Floating Interactive Toast Container */}
        <ToastContainer />
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <CaseLensProvider>
      <AppRenderer />
    </CaseLensProvider>
  );
}
