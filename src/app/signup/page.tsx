"use client";

import React from "react";
import { CaseLensProvider } from "@/context/CaseLensContext";
import { AuthLayout } from "@/components/auth/AuthLayout";
import { SignupForm } from "@/components/auth/SignupForm";
import { ToastContainer } from "@/components/ToastContainer";

export default function SignupPage() {
  return (
    <CaseLensProvider>
      <AuthLayout>
        <SignupForm />
      </AuthLayout>
      <ToastContainer />
    </CaseLensProvider>
  );
}

